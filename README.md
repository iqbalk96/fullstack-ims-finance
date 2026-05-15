# IMS Finance App

Aplikasi sederhana simulasi kredit mobil (Contract & Installment Management) menggunakan Express JS + Prisma (Backend) dan React + Vite (Frontend).

---

# ⚙️ Prerequisites

- Node.js (>= 18)
- npm / yarn
- MySQL / MariaDB
- Git

---

# 🧠 Backend (Express JS + Prisma)

## 1. Masuk ke folder backend
```bash
cd backend
```

## 2. Install dependencies
```bash
npm install
```

## 3. Setup environment variable

Buat file `.env`:

```env
PORT=3000
DATABASE_URL="mysql://root:password@localhost:3306/ims_finance"
```

---

## 4. Setup Database

```sql
CREATE DATABASE ims_finance;
```

---

## 5. Prisma Setup

Generate Prisma client:
```bash
npx prisma generate
```

Jika pakai migration:
```bash
npx prisma migrate dev
```

Jika pakai schema push:
```bash
npx prisma db push
```

(Optional seed)
```bash
npx prisma db seed
```

---

## 6. Run Backend

```bash
npm run dev
```

Backend running at:
```
http://localhost:3000
```

---

# 💻 Frontend (React + Vite)

## 1. Masuk folder frontend
```bash
cd frontend
```

## 2. Install dependencies
```bash
npm install
```

## 3. Setup env

Buat `.env`:

```env
VITE_API_URL=http://localhost:3000
```

---

## 4. Run Frontend

```bash
npm run dev
```

Frontend running at:
```
http://localhost:5173
```

---

# 🚀 Run Full Stack

Terminal 1:
```bash
cd src-express-be
npm run dev
```

Terminal 2:
```bash
cd contracts
npm run dev
```

---

# 📝 Notes

- Backend harus running sebelum frontend
- Pastikan MySQL aktif
- Pastikan DATABASE_URL sesuai
- Jalankan prisma generate sebelum start backend
