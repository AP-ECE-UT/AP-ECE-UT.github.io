---
sidebar_position: 1
---

# Git

## Git چیست؟

Git یک برنامه کنترل نسخه (version control) است که به ما کمک می‌کند تا بهتر نسخه‌های مختلف را مدیریت کنیم.

## نصب و ر‌ا‌ه‌اندازی

برای نصب می‌توانید از دستورات زیر استفاده کنید:

```bash
sudo apt update
sudo apt install git
```

همچنین نیاز است که گیت را با دستورات زیر configure کنید.

```bash
git config --global user.name "<your name>"
git config --global user.email "<your email>"
```

توجه داشته باشید که نام و ایمیل شما باید با نام و ایمیل گیت‌هاب شما یکسان باشد (در قسمت بعد با گیت‌هاب آشنا خواهید شد).

## ر‌ا‌ه‌اندازی اولیه

در پوشه‌ای که می‌خواهید یک مخزن گیت ایجاد کنید، دستور زیر را وارد کنید. با این کار یک فایل پنهان با نام ".git" ایجاد می‌شود. پس از این کار، می‌توانید فایل‌های خود را به این پوشه اضافه کنید.

```bash
git init
```

<div style={{ display: 'flex', justifyContent: 'center' }}>
  ![Git](./images/01-git/Git.jpg)
</div>
