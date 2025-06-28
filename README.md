# سیستم احراز هویت Next.js

این پروژه یک سیستم احراز هویت ساده با استفاده از Next.js، TypeScript و SCSS Module است.

## 🚀 ویژگی‌ها

- ✅ صفحه ورود با validation شماره تلفن ایران
- ✅ صفحه داشبورد با نمایش اطلاعات کاربر
- ✅ محافظت از مسیرها (Route Protection)
- ✅ Responsive Design
- ✅ استفاده از SCSS Module با Nesting
- ✅ Context API برای مدیریت state
- ✅ LocalStorage برای ذخیره اطلاعات کاربر
- ✅ درخواست به API تصادفی کاربران

## 🛠 تکنولوژی‌های استفاده شده

- **Next.js 15** (App Router)
- **TypeScript**
- **SCSS Module**
- **React Context API**

## 📁 ساختار پروژه

```
src/
├── app/
│   ├── auth/
│   │   ├── page.tsx
│   │   └── auth.module.scss
│   ├── dashboard/
│   │   ├── page.tsx
│   │   └── dashboard.module.scss
│   ├── layout.tsx
│   ├── page.tsx
│   └── globals.css
├── components/
│   ├── Button/
│   │   ├── Button.tsx
│   │   └── Button.module.scss
│   └── Input/
│       ├── Input.tsx
│       └── Input.module.scss
├── contexts/
│   └── AuthContext.tsx
└── data/
    └── users.json
```

## 🚀 نحوه اجرا

1. **نصب وابستگی‌ها:**
   ```bash
   npm install
   ```

2. **اجرای پروژه:**
   ```bash
   npm run dev
   ```

3. **باز کردن مرورگر:**
   ```
   http://localhost:3000
   ```

## 📋 مسیرهای موجود

- `/` - ریدایرکت به `/auth`
- `/auth` - صفحه ورود
- `/dashboard` - صفحه داشبورد (نیاز به احراز هویت)

## 🎯 نحوه کارکرد

### صفحه ورود (`/auth`)
- شامل فرم ورود با فیلد شماره تلفن ایران
- Validation شماره تلفن با الگوهای مختلف (موبایل، ثابت، با کد کشور)
- **درخواست GET به API تصادفی کاربران**: `https://randomuser.me/api/?results=1&nat=us`
- ذخیره اطلاعات کاربر در localStorage
- ریدایرکت به صفحه داشبورد پس از ورود موفق

### صفحه داشبورد (`/dashboard`)
- نمایش پیام خوش‌آمدگویی
- نمایش اطلاعات کاربر (نام، ایمیل، تلفن، تصویر)
- دکمه خروج برای logout
- محافظت از دسترسی (redirect به `/auth` اگر کاربر وارد نشده باشد)

## 🎨 کامپوننت‌ها

### Input Component
- پشتیبانی از validation شماره تلفن ایران
- نمایش خطاها
- Responsive design
- Focus states

### Button Component
- انواع مختلف (primary, secondary)
- سایزهای مختلف (small, medium, large)
- Loading state
- Full width option

## 🔧 تنظیمات

### SCSS Module
- استفاده از nesting برای کلاس‌ها
- Responsive breakpoints
- متغیرهای CSS برای رنگ‌ها و اندازه‌ها

### Context API
- مدیریت state کاربر
- ذخیره در localStorage
- Loading states

### API Integration
- درخواست به `https://randomuser.me/api/?results=1&nat=us`
- دریافت اطلاعات کاربر تصادفی
- مدیریت خطاهای شبکه

## 📱 Responsive Design

پروژه کاملاً responsive است و در تمام دستگاه‌ها به خوبی نمایش داده می‌شود:
- Desktop (1200px+)
- Tablet (768px - 1199px)
- Mobile (480px - 767px)
- Small Mobile (< 480px)

## 🔒 امنیت

- محافظت از مسیرها
- Validation ورودی‌ها
- مدیریت خطاها
- Safe localStorage usage

## 📝 نکات مهم

1. **شماره تلفن ایران**: فقط برای validation استفاده می‌شود و در فرآیند ورود تاثیری ندارد
2. **API تصادفی**: از `https://randomuser.me/api/?results=1&nat=us` برای دریافت اطلاعات کاربر استفاده می‌شود
3. **LocalStorage**: اطلاعات کاربر در localStorage ذخیره می‌شود
4. **RTL Support**: پروژه از RTL برای زبان فارسی پشتیبانی می‌کند
5. **Network Required**: برای کارکرد صحیح نیاز به اتصال اینترنت دارد

## 🐛 عیب‌یابی

اگر با مشکلی مواجه شدید:

1. مطمئن شوید که Node.js نسخه 18+ نصب است
2. وابستگی‌ها را دوباره نصب کنید: `npm install`
3. کش Next.js را پاک کنید: `npm run build && npm run dev`
4. اتصال اینترنت خود را بررسی کنید

## 📄 لایسنس

این پروژه برای اهداف آموزشی ایجاد شده است.
