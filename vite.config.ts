import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';
import obfuscator from 'rollup-plugin-javascript-obfuscator';

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['logo.svg', 'masked-icon.svg'],
      manifest: {
        name: 'SUMAVIS - Asset & Spending Tracker',
        short_name: 'SUMAVIS',
        description: 'Summary of Asset, Value, Investment & Spending - Offline-first Personal Finance Manager',
        theme_color: '#0f172a',
        background_color: '#0f172a',
        display: 'standalone',
        orientation: 'portrait',
        icons: [
          {
            src: 'pwa-192x192.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: 'pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png'
          },
          {
            src: 'pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any maskable'
          }
        ]
      }
    })
  ],
  server: {
    proxy: {
      '/api/google-finance': {
        target: 'https://www.google.com',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api\/google-finance/, '/finance'),
        headers: {
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
          'Accept-Language': 'en-US,en;q=0.9'
        }
      },
      '/api/yahoo-finance': {
        target: 'https://query1.finance.yahoo.com',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api\/yahoo-finance/, ''),
        headers: {
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
        }
      }
    }
  },
  build: {
    rollupOptions: {
      plugins: [
        obfuscator({
          compact: true,
          controlFlowFlattening: false,
          numbersToExpressions: true,
          simplify: true,
          stringArray: true,
          stringArrayEncoding: ['base64'],
          stringArrayThreshold: 0.75,
          splitStrings: true,
          splitStringsChunkLength: 5,
          unicodeEscapeSequence: false
        })
      ]
    }
  },
  resolve: {
    alias: {
      '@': '/src'
    }
  }
});
