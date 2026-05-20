# react-nextjs-boilerplate

این پروژه یک بویلرپلیت آماده تولید برای فرانت اند است که با Next.js 16، TypeScript در حالت strict، Tailwind v4، next-intl، Zustand، TanStack Query و Firebase Modular SDK ساخته شده است.

## امکانات اصلی

- Next.js 16 با App Router
- TypeScript strict
- Tailwind CSS v4 با توکن های سبک shadcn
- پشتیبانی از تم روشن/تیره با `next-themes`
- چندزبانه با `next-intl` (انگلیسی و فارسی)
- پشتیبانی RTL برای فارسی
- ساختار feature-first (`auth` و `users`)
- کامپوننت های آماده UI/Form/Layout/Data Table
- کلاینت Axios با interceptor برای توکن و خطا
- مدیریت server-state با TanStack Query
- مدیریت state سمت کلاینت با Zustand
- پیکربندی Husky + lint-staged

## تکنولوژی ها

- **Framework**: Next.js 16
- **Language**: TypeScript
- **UI**: Tailwind v4 + Radix UI + کامپوننت های shadcn-style
- **State**: Zustand + TanStack Query
- **Forms**: React Hook Form + Yup
- **I18n**: next-intl
- **Integrations**: Axios + Firebase
- **Tooling**: ESLint + Prettier + Husky

## ساختار پروژه

برای جزئیات:

- `docs/folder-structure.md`
- `docs/architecture.md`

## شروع سریع

### 1) نصب وابستگی ها

```bash
npm install
```

### 2) تنظیم متغیرهای محیطی

```bash
cp .env.example .env.local
```

سپس مقادیر فایل `.env.local` را تکمیل کنید.

### 3) اجرای پروژه

```bash
npm run dev
```

سپس آدرس [http://localhost:3000](http://localhost:3000) را باز کنید.

## اسکریپت ها

- `npm run dev` اجرای نسخه توسعه
- `npm run build` بیلد production
- `npm run start` اجرای نسخه production
- `npm run lint` اجرای ESLint
- `npm run lint:fix` رفع خودکار خطاهای lint
- `npm run format` فرمت با Prettier
- `npm run format:check` بررسی فرمت
- `npm run typecheck` بررسی TypeScript

## بومی سازی (i18n)

- تنظیم زبان ها در `src/config/i18n.ts`
- تنظیم routing در `src/i18n/routing.ts`
- پیام ها در `messages/en.json` و `messages/fa.json`
- مسیرها با پیشوند زبان هستند: `/en/...` و `/fa/...`

## احراز هویت و محافظت مسیرها

- Middleware مسیرهای محافظت شده را کنترل می کند.
- اگر کاربر وارد نشده باشد، به صفحه لاگین همان زبان هدایت می شود.
- وضعیت auth در `src/stores/auth-store.ts` مدیریت می شود.

## Firebase

برای راه اندازی کامل:

- `docs/firebase-setup.md`

## استانداردهای کدنویسی

برای قوانین پروژه:

- `docs/coding-standards.md`

## روند پیشنهادی توسعه

1. فیچر جدید را در `src/features/<feature>` بسازید.
2. قرارداد API را در `src/services` اضافه کنید.
3. کلیدهای کوئری را از `src/constants/query-keys.ts` استفاده کنید.
4. متن های رابط کاربری را در هر دو فایل ترجمه به روز کنید.
5. قبل از PR، `lint` و `build` را اجرا کنید.
