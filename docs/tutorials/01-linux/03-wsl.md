---
sidebar_position: 3
---

# نصب WSL

## WSL چیست؟

WSL (Windows Subsystem for Linux) یک قابلیت ارائه شده توسط مایکروسافت است که به کاربران ویندوز اجازه می‌دهد تا یک توزیع لینوکس را مستقیماً در ویندوز اجرا کنند. این ابزار بدون نیاز به استفاده از ماشین‌های مجازی یا نصب سیستم‌عامل لینوکس به صورت جداگانه، امکان اجرای ابزارها و دستورات لینوکس را در محیط ویندوز فراهم می‌کند.

WSL برای توسعه‌دهندگان و کاربران حرفه‌ای که نیاز به استفاده از ابزارهای لینوکسی در کنار ویندوز دارند بسیار مفید است. همچنین WSL عملکرد بسیار سریعی دارد و به دلیل عدم نیاز به شبیه‌سازی کامل سخت‌افزار، منابع سیستم کمتری نسبت به ماشین‌های مجازی مصرف می‌کند.

## نسخه‌های WSL

WSL شامل دو نسخه اصلی است:

### WSL 1

- نسخه اولیه WSL که سازگاری بالایی با ابزارها و دستورات لینوکس دارد.
- از لایه‌ای برای ترجمه دستورات لینوکس به دستورات ویندوز استفاده می‌کند.
- مناسب برای سیستم‌هایی با سخت‌افزار قدیمی‌تر.

### WSL 2

- نسخه جدیدتر که یک هسته کامل لینوکس را از طریق فناوری مجازی‌سازی سبک اجرا می‌کند.
- عملکرد بهتر و سازگاری بیشتری با برنامه‌های لینوکس نسبت به WSL 1 دارد.
- امکان استفاده از قابلیت‌های پیشرفته مانند Docker را فراهم می‌کند.

## نحوه نصب WSL

### مراحل نصب

1. **فعال‌سازی WSL:**

PowerShell را به صورت Administrator اجرا کنید و دستور زیر را وارد کنید:

```bash
wsl --install
```

این دستور به طور خودکار WSL 2 و یک توزیع پیش‌فرض لینوکس (مانند Ubuntu) را نصب می‌کند.

2. **انتخاب یا تغییر توزیع لینوکس:**

برای مشاهده لیست توزیع‌های موجود، دستور زیر را وارد کنید:

```bash
wsl --list --online
```

برای نصب یک توزیع خاص، مانند Debian:

```bash
wsl --install -d Debian
```

برای اطمینان از استفاده از WSL 2 به عنوان نسخه پیش‌فرض، دستور زیر را وارد کنید:

```bash
wsl --set-default-version 2
```

پس از نصب، برنامه لینوکس نصب‌شده (مثلا Ubuntu) را از منوی Start اجرا کنید سپس تنظیمات اولیه مانند نام کاربری و رمز عبور را وارد کنید.

## مزایای استفاده از WSL

- دسترسی به ابزارهای لینوکس بدون نیاز به ترک محیط ویندوز.
- مصرف کمتر منابع سیستم نسبت به ماشین‌های مجازی.
- قابلیت استفاده از Docker و سایر ابزارهای پیشرفته.
- مناسب برای توسعه‌دهندگان و علاقه‌مندان به یادگیری لینوکس.

## لینک‌های مفید

- [مستندات رسمی WSL](https://learn.microsoft.com/en-us/windows/wsl/)
- [آموزش نصب WSL 2](https://ubuntu.com/wsl)
