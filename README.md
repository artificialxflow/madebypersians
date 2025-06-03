# Next.js Todo App with Bootstrap & Prisma

یک پروژه نمونه Todo List با Next.js، Bootstrap و Prisma + MySQL

## ویژگی‌ها
- فرم افزودن و نمایش تودو
- ذخیره‌سازی در دیتابیس MySQL با Prisma
- استایل‌دهی مدرن با Bootstrap
- API route برای مدیریت تودوها

## نصب و راه‌اندازی

```bash
npm install
```

## اجرای پروژه در حالت توسعه
```bash
npm run dev
```

## ساخت نسخه production
```bash
npm run build
npm run start
```

## خروجی استاتیک (Static Export)

در نسخه‌های جدید Next.js، برای خروجی استاتیک کافیست در فایل `next.config.ts` گزینه زیر را اضافه کنید:

```js
output: 'export',
```

سپس فقط کافیست دستور زیر را اجرا کنید:

```bash
npm run build
```

پروژه به صورت استاتیک در پوشه `out/` خروجی می‌گیرد.

## تنظیمات دیتابیس
در فایل `.env`:
```
DATABASE_URL="mysql://root:پسورد@localhost:3307/firstdb"
```

## دستورات Prisma
```bash
npx prisma generate
npx prisma migrate dev --name init
npx prisma db pull
```

## ساختار پروژه
```
├── app/
│   ├── api/todo/route.ts   # API تودو
│   ├── page.tsx            # صفحه اصلی
│   ├── layout.tsx          # لایه اصلی و ایمپورت بوتسترپ
│   └── ...
├── prisma/
│   └── schema.prisma       # مدل دیتابیس
├── public/
├── .env
├── package.json
└── README.md
```

## چک‌لیست مراحل پروژه
- [x] راه‌اندازی Next.js
- [x] نصب و ایمپورت Bootstrap
- [x] ساخت مدل Prisma و اتصال به MySQL
- [x] ساخت API route برای تودو
- [x] ساخت فرم و لیست تودو
- [x] استایل‌دهی با Bootstrap
- [x] تست و رفع خطاها
- [x] بروزرسانی مستندات و README

---

### برای build گرفتن:
- `npm run build` (ساخت نسخه production و خروجی استاتیک)

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
