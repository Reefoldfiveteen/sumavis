const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

function loadEnvFile(filePath) {
  if (fs.existsSync(filePath)) {
    const envContent = fs.readFileSync(filePath, 'utf8');
    envContent.split('\n').forEach(line => {
      const parts = line.split('=');
      if (parts.length >= 2) {
        const key = parts[0].trim();
        const val = parts.slice(1).join('=').trim().replace(/^['"]|['"]$/g, '');
        if (key && !process.env[key]) {
          process.env[key] = val;
        }
      }
    });
  }
}

loadEnvFile('.env.local');
loadEnvFile('.env');

const PASSWORD = process.env.DECRYPTION_KEY || (process.env.NODE_ENV !== 'production' ? 'sumavis-fallback-encryption-key-32ch' : '');
if (!PASSWORD) {
  console.error("❌ ERROR: DECRYPTION_KEY environment variable is not defined in Vercel settings!");
  process.exit(1);
}
const KEY = crypto.createHash('sha256').update(PASSWORD).digest();
console.log(`🔑 Using key derived from DECRYPTION_KEY (prefix: ${PASSWORD.substring(0, 3)}...)`);
const ALGORITHM = 'aes-256-cbc';
const MAGIC_HEADER = 'SUMAVIS_ENC:';

function decryptFile(filePath) {
  const stat = fs.statSync(filePath);
  if (stat.isDirectory()) return;

  const content = fs.readFileSync(filePath, 'utf8');
  
  // Check if encrypted
  if (!content.startsWith(MAGIC_HEADER)) {
    console.log(`Skipping (already decrypted/raw): ${path.relative(process.cwd(), filePath)}`);
    return;
  }

  try {
    const rawPayload = content.slice(MAGIC_HEADER.length);
    const parts = rawPayload.split(':');
    if (parts.length !== 2) {
      throw new Error('Invalid encrypted payload format');
    }

    const iv = Buffer.from(parts[0], 'hex');
    const encryptedText = Buffer.from(parts[1], 'hex');

    const decipher = crypto.createDecipheriv(ALGORITHM, KEY, iv);
    const decrypted = Buffer.concat([decipher.update(encryptedText), decipher.final()]);
    
    fs.writeFileSync(filePath, decrypted);
    console.log(`Decrypted: ${path.relative(process.cwd(), filePath)}`);
  } catch (err) {
    console.error(`❌ Failed to decrypt ${path.relative(process.cwd(), filePath)}:`, err.message);
    process.exit(1);
  }
}

function traverseAndDecrypt(dir) {
  if (!fs.existsSync(dir)) return;
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      traverseAndDecrypt(fullPath);
    } else {
      const ext = path.extname(file).toLowerCase();
      if (['.ts', '.tsx', '.css', '.json', '.svg'].includes(ext)) {
        decryptFile(fullPath);
      }
    }
  });
}

console.log('Starting decryption process for src/ directory...');
traverseAndDecrypt(path.join(process.cwd(), 'src'));
console.log('Decryption complete!');
