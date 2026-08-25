<div align="center">
  <img src="public/logo.svg" alt="SUMAVIS Logo" width="80" />

  <h1>SUMAVIS</h1>
  <p><strong>Summary of Asset, Value, Investment & Spending</strong></p>
  <p>Aplikasi pencatat keuangan pribadi modern berbasis <em>local-first</em> dengan sinkronisasi opsional ke Google Sheets.</p>

  <p>
    <img src="https://img.shields.io/badge/React-18-61DAFB?logo=react&logoColor=white&style=flat-square" />
    <img src="https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript&logoColor=white&style=flat-square" />
    <img src="https://img.shields.io/badge/Vite-5-646CFF?logo=vite&logoColor=white&style=flat-square" />
    <img src="https://img.shields.io/badge/Dexie-IndexedDB-FF6B35?style=flat-square" />
    <img src="https://img.shields.io/badge/i18n-ID%20%7C%20EN-10B981?style=flat-square" />
    <img src="https://img.shields.io/badge/version-1.0.0-emerald?style=flat-square" />
  </p>
</div>

---

## 📋 Daftar Isi

- [Tentang SUMAVIS](#-tentang-sumavis)
- [Fitur Utama](#-fitur-utama)
- [Screenshot](#-screenshot)
- [Teknologi](#-teknologi)
- [Cara Menjalankan](#-cara-menjalankan)
- [Struktur Proyek](#-struktur-proyek)
- [Sinkronisasi Google Sheets](#-sinkronisasi-google-sheets)
- [Privasi & Keamanan](#-privasi--keamanan)
- [Lisensi](#-lisensi)

---

## 🧩 Tentang SUMAVIS

**SUMAVIS** adalah aplikasi web pencatat keuangan pribadi yang dirancang dengan filosofi **local-first** — seluruh data Anda tersimpan di perangkat sendiri menggunakan IndexedDB (via Dexie), bukan di server pihak ketiga.

Aplikasi ini didesain khusus untuk mendukung skenario keuangan modern:
- 💱 **Dukungan Multi-Kurs (Multi-Currency)**: Kelola rekening, transaksi, dan aset investasi dalam mata uang utama (**IDR**, **USD**) serta **15+ mata uang dunia & regional lainnya** (seperti SGD, EUR, GBP, JPY, AUD, CAD, CHF, CNY, HKD, KRW, MYR, THB, PHP, INR, VND). Nilai tukar (exchange rate) dikonversi secara dinamis menggunakan pembaruan kurs real-time dari Google Finance. Rekonstruksi saldo historis tetap akurat di semua mata uang.
- 🤖 **AI Vision Multimodal Intelligence**: Integrasi engine AI cerdas terpadu yang mendukung **Gemini**, **OpenAI**, **9router**, **OpenRouter**, dan model **Ollama Vision** lokal. Import kepemilikan portofolio saham/crypto, saldo rekening m-Banking & e-Wallet, serta struk belanja & bukti transfer secara otomatis melalui unggah screenshot atau paste `Ctrl+V`.
- 🗣️ **Dukungan Multi-Bahasa (Multi-Language / i18n)**: Antarmuka yang ramah pengguna dengan pilihan penuh bahasa **Indonesia** dan **English**. Seluruh label, petunjuk, dan dokumentasi in-app otomatis berubah sesuai bahasa pilihan Anda.
- 🌓 **Tema Fleksibel**: Dukungan penuh untuk mode **Gelap (Dark Mode)**, **Terang (Light Mode)**, atau mengikuti **Sistem** operasi Anda.
- ☁️ **Google Sheets Sync**: Backup aman dan sinkronisasi dua arah ke spreadsheet Google Drive pribadi Anda.

---

## ✨ Fitur Utama

| Fitur | Deskripsi |
|---|---|
| 🤖 **AI Vision Assist** | Scan otomatis screenshot portofolio saham/crypto (Stockbit, Ajaib, Bibit, Pintu, IPOT), saldo m-Banking/e-Wallet (BCA, Mandiri, GoPay, OVO), dan struk belanja/transfer via Gemini, OpenAI, 9router, OpenRouter, atau Ollama lokal dengan dukungan `Ctrl+V`. |
| 📊 **Dashboard** | Net Worth terpadu, Sankey cashflow dinamis, grafik bulanan/tahunan, ekspor laporan PDF, dan shortcut tombol cepat **Scan Struk AI**. |
| 🚀 **Equitrend AI Engine** | Grafik candlestick real-time (Yahoo Finance live data), sinyal & indikator teknikal (RSI, MA20/50/200, MACD, Support/Resistance), Market Screener live (`Scalping`, `Fast Trade`, `Swing Trade`, `Dividen`, `Semua Saham`, `Custom AI`), tracker nominal dividen kas historis per lembar saham (DPS) (`Rp 385` / `$1.04`), auto-refresh berita emiten (silent auto-refresh 90s), perintah & catatan kustom AI screening, filter & pengelompokan tanggal simpan (`Kelompokkan Per Tanggal`), badge tanggal relatif, serta hapus massal multi-pilih (`Hapus Terpilih`, `Hapus Semua`). |
| 💸 **Transaksi** | Catat pengeluaran, pemasukan, dan transfer antar rekening dengan dukungan tag, kategori, biaya admin (fee), pajak (tax), serta scanner struk AI instan. |
| 🏦 **Rekening & Akun** | Kelola akun aset, dompet tunai, kartu kredit (liabilitas), dan kas RDN broker dalam berbagai mata uang global (IDR, USD, SGD, EUR, dll.). Saldo historis direkonstruksi secara otomatis saat berganti bulan. Dilengkapi scanner AI untuk screenshot m-Banking & e-Wallet. |
| 📈 **Investasi** | Pantau kepemilikan Saham (IDR local 4-tick/USD US market) dan Crypto (IDR/USD) dengan perhitungan harga rata-rata (avg price), Floating PnL real-time, dan import tabel portofolio AI Vision. Dilengkapi dengan **Dividen & Yield Tracker** khusus untuk memantau pendapatan dividen kumulatif dan Yield on Cost (YoC). |
| 💰 **Anggaran** | Atur batas anggaran bulanan atau tahunan per kategori belanja lengkap dengan visualisasi progress bar dan notifikasi batas aman. |
| 🔔 **Tagihan Rutin** | Kelola pembayaran berulang (mingguan, bulanan, tahunan) dengan fitur pencatatan otomatis sekali klik. |
| 🎯 **Target Tabungan** | Target tabungan spesifik (liburan, dana darurat, dll.) terintegrasi langsung dengan mutasi transfer rekening tujuan dan konfeti pencapaian. |
| ☁️ **Sync Google Sheets** | Pencadangan cloud mandiri yang aman melalui Google Sheets API v4 & OAuth 2.0. |
| 💱 **Multi-Kurs Dinamis** | Konversi otomatis saldo multi-mata uang berbasis kurs terkini dengan tombol refresh instan. |
| 🌐 **Multi-Bahasa (i18n)** | Sistem terjemahan dinamis berbasis CSV untuk kemudahan penambahan bahasa baru. |
| 🔒 **100% Privat** | Tanpa pengumpulan data di server pihak ketiga, tanpa tracker iklan, data sepenuhnya milik Anda. |

---

## 📸 Screenshot

### Dashboard
> Ringkasan keuangan lengkap: Net Worth, grafik arus kas, diagram Sankey, dan laporan tahunan.

![Dashboard](docs/screenshots/ss_dashboard.png)

---

### Transaksi
> Catat, filter, dan cari semua aktivitas keuangan dengan mudah.

![Transaksi](docs/screenshots/ss_transactions.png)

---

### Rekening & Akun
> Kelola semua rekening bank, dompet tunai, kartu kredit, dan broker investasi.

![Rekening](docs/screenshots/ss_accounts.png)

---

### Investasi
> Portofolio saham IDR/USD dan crypto dengan Floating PnL, histori transaksi, dan kas RDN.

![Investasi](docs/screenshots/ss_investments.png)

---

### Anggaran
> Rencanakan dan monitor batas pengeluaran per kategori setiap bulan.

![Anggaran](docs/screenshots/ss_budgets.png)

---

### Tagihan Rutin
> Lacak semua tagihan berulang dan bayar langsung dari aplikasi.

![Tagihan](docs/screenshots/ss_bills.png)

---

### Target Tabungan
> Buat target finansial dan cicil tabungan secara terstruktur.

![Target Tabungan](docs/screenshots/ss_saving_goals.png)

---

### Pengaturan
> Kustomisasi bahasa, tema, kategori, dan kelola data (import/export/sync).

![Pengaturan](docs/screenshots/ss_settings.png)

---

### Dokumentasi
> Panduan lengkap penggunaan semua fitur langsung di dalam aplikasi.

![Dokumentasi](docs/screenshots/ss_documentation.png)

---

## 🛠 Teknologi

| Layer | Teknologi |
|---|---|
| **Framework** | [React 18](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/) |
| **Build Tool** | [Vite 5](https://vitejs.dev/) |
| **Database Lokal** | [Dexie.js](https://dexie.org/) (IndexedDB wrapper) |
| **Routing** | [React Router v6](https://reactrouter.com/) (HashRouter) |
| **Charts** | [Recharts](https://recharts.org/) |
| **Icons** | [Lucide React](https://lucide.dev/) |
| **Styling** | Vanilla CSS + Tailwind CSS utility classes |
| **Fonts** | [Outfit](https://fonts.google.com/specimen/Outfit) (Google Fonts) |
| **Cloud Sync** | Google Sheets API v4 + OAuth 2.0 |
| **i18n** | Custom CSV-based translation system (`public/translations.csv`) |

---

## 🚀 Cara Menjalankan

### Prasyarat
- [Node.js](https://nodejs.org/) v18 atau lebih baru
- [npm](https://npmjs.com/) v9 atau lebih baru

### Instalasi & Jalankan

```bash
# 1. Clone repository
git clone https://github.com/Reefoldfiveteen/sumavis.git
cd sumavis

# 2. Install dependencies
npm install

# 3. Jalankan dev server
npm run dev
```

Buka browser di `http://localhost:5173`

### Build Produksi

```bash
npm run build
npm run preview
```

---

## 📁 Struktur Proyek

```
sumavis/
├── public/
│   ├── logo.svg                  # Logo aplikasi
│   ├── translations.csv          # File terjemahan (ID/EN)
│   ├── seed-data.json            # Data dummy untuk demo
│   └── auto-seed.html            # Halaman auto-import data dummy
├── src/
│   ├── components/               # Komponen UI reusable
│   │   ├── Layout.tsx            # Layout utama + sidebar navigasi
│   │   ├── MonthSelector.tsx     # Pemilih bulan
│   │   └── Portal.tsx            # Modal portal
│   ├── context/
│   │   ├── DbContext.tsx         # Database Dexie & seeding
│   │   ├── FinanceContext.tsx    # Kalkulasi keuangan & rekonstruksi saldo
│   │   └── UIContext.tsx         # Tema, bahasa, kurs, terjemahan
│   ├── db/
│   │   └── db.ts                 # Schema Dexie + tipe data
│   ├── pages/
│   │   ├── Dashboard.tsx         # Halaman dashboard utama
│   │   ├── Transactions.tsx      # Manajemen transaksi
│   │   ├── Accounts.tsx          # Manajemen rekening
│   │   ├── Investments.tsx       # Portofolio saham & crypto
│   │   ├── Budgets.tsx           # Anggaran bulanan/tahunan
│   │   ├── Bills.tsx             # Tagihan rutin
│   │   ├── SavingGoals.tsx       # Target tabungan
│   │   ├── Settings.tsx          # Pengaturan & sync
│   │   ├── Documentation.tsx     # Dokumentasi in-app
│   │   ├── PrivacyPolicy.tsx     # Kebijakan privasi
│   │   └── TermsOfService.tsx    # Ketentuan layanan
│   ├── services/
│   │   └── googleSheets.ts       # Google Sheets API + OAuth
│   └── utils/
│       └── formatters.ts         # Format mata uang, tanggal, dll.
├── OTHER/
│   └── new_dummy_db.json         # Database dummy lengkap
├── docs/
│   └── screenshots/              # Screenshot untuk README
└── scratch/
    └── generate_dummy.js         # Script pembuat data dummy
```

---

## ☁️ Sinkronisasi Google Sheets

SUMAVIS mendukung backup dan sinkronisasi dua arah (**two-way sync**) ke Google Sheets pribadi Anda menggunakan **OAuth 2.0**.

### Cara Mengaktifkan

1. Buka **Pengaturan** → **Sinkronisasi Google Sheets**
2. Klik **"Hubungkan dengan Google"** → ikuti proses otorisasi
3. Pilih atau buat spreadsheet yang akan digunakan
4. Klik **"Sinkronkan Sekarang"**

### Data yang Disinkronkan

- ✅ Rekening (Accounts)
- ✅ Transaksi (Transactions)
- ✅ Kategori (Categories)
- ✅ Anggaran (Budgets)
- ✅ Tagihan Rutin (Bills)
- ✅ Target Tabungan (Saving Goals)
- ✅ Portofolio Saham & Crypto
- ✅ Histori Transaksi Investasi

> **Conflict Resolution:** Data dengan `updated_at` terbaru selalu menang. Aman digunakan dari beberapa perangkat.

---

## 🔒 Privasi & Keamanan

SUMAVIS dibangun dengan prinsip **privacy by design**:

- 🔐 **Tidak ada server penyimpanan** — semua data eksklusif di IndexedDB perangkat Anda
- 🚫 **Tanpa tracker / analytics** — bebas dari SDK pihak ketiga dan pixel iklan
- 🔑 **OAuth minimal** — hanya meminta akses ke spreadsheet SUMAVIS spesifik, bukan seluruh Google Drive
- 🌐 **Direct API calls** — semua request ke Google API dilakukan langsung dari browser, tanpa proxy kami

---

## 🌐 Sistem i18n (Multi-bahasa)

SUMAVIS menggunakan sistem terjemahan berbasis CSV yang mudah dikelola:

```
public/translations.csv   ←  format: key;id;en
```

Contoh:
```csv
key;id;en
dashboard;Dashboard;Dashboard
net_worth;Total Kekayaan Bersih;Total Net Worth
```

Untuk menambahkan bahasa baru, tambahkan kolom baru di CSV dan update `UIContext.tsx`.

---

## 📄 Lisensi

```
MIT License

Copyright (c) 2025–2026 SUMAVIS

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

---

<div align="center">
  <p>SUMAVIS 💵</p>
  <p>
    <a href="https://sumavis.vercel.app/#/documentation">📖 Dokumentasi</a> ·
    <a href="https://sumavis.vercel.app/#/privacy-policy">🔒 Kebijakan Privasi</a> ·
    <a href="https://sumavis.vercel.app/#/terms-of-service">📋 Ketentuan Layanan</a>
  </p>
</div>
