# سایت برنامه‌سازی پیشرفته دانشگاه تهران!

این سایت با استفاده از [Docusaurus](https://docusaurus.io/) ساخته شده است.

## ویرایش سایت

برای ویرایش این سایت کافیست این مخزن را fork کنید و سپس فایل‌های مارک داون داخل دایرکتوری‌های docs و blog را ویرایش نمایید.

```bash
git clone https://github.com/AP-ECE-UT/AP-ECE-UT.github.io.git
```

در صورتی که تغییرات شما روی شاخه `main` پذیرفته شود، مستقیما روی سایت دیپلوی می‌گردد.

## ساختار صفحات

تقریبا تمام منوها و آدرس‌ها به صورت خودکار و بر اساس ساختار فایل‌های docs ساخته می‌شوند. در این دایرکتوری بخش‌های مختلف سایت به صورت دایرکتوری‌های مجزا موجودند و هر بخش شامل تعدادی دایرکتوری و فایل مارک داون است. در نوار سمت راست سایت، دایرکتوری‌ها به صورت کتگوری و فایل‌ها به صورت صفحات رندر خواهند شد.  
از استفاده از حروف فارسی در نامگذاری دایرکتوری‌ها و فایل‌ها خودداری کنید. برای نامگذاری فارسی کتگوری‌ها به فایل `_category_.json` در آن دایرکتوری مراجعه کنید. برای نامگذاری فارسی صفحات کافیست نام مورد نظر را در یک هدینگ 1 `# Heading 1` ابتدای فایل قرار دهید.

```text
docs
├───course
|   └───materials.md
├───tutorials
|   └───intro.md
└───index.md
```

## اجرای پیش‌نمایش

برای اجرای پیش‌نمایش لوکال این سایت، باید رانتایم node و پکیج منیجر npm را روی سیستم خود داشته باشید.
([آموزش نصب](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm))

سپس وارد مخزن کلون‌شده شوید و با دستور زیر پکیج‌های مورد نیاز را نصب نمائید:

```bash
npm install
```

سپس با دستور زیر آن را روی لوکال هاست اجرا نمایید و مشاهده کنید:

```bash
npm run start
```
