---
sidebar_position: 4
---

# دستورات ساده ترمینال

## دستورات در لینوکس

دستورات لینوکس ابزارهای قدرتمندی هستند که به شما امکان می‌دهند به‌طور مستقیم از طریق ترمینال با سیستم خود تعامل کنید. آشنایی با این دستورات برای مدیریت فایل‌ها، دایرکتوری‌ها و نرم‌افزارها در سیستم‌عامل لینوکس بسیار حیاتی است. در ادامه، توضیحات و مثال‌های ساده‌ای از مهم‌ترین دستورات لینوکس، مرتب‌شده بر اساس سطح مبتدی تا پیشرفته، ارائه شده است.

<div style={{ display: 'flex', justifyContent: 'center' }}>
  <div style={{ width: '600px' }}>
    ![Terminal Fire](./images/03-terminal/Terminal-Fire.jpg)
  </div>
</div>

## دستورات ابتدایی

### 1. `pwd` (نمایش مسیر فعلی)

این دستور، مسیر فعلی که در آن قرار دارید را نمایش می‌دهد و مسیر کامل از ریشه را نشان می‌دهد.

**مثال:**

```bash
pwd
```

### 2. `ls` (لیست محتویات دایرکتوری)

محتویات یک دایرکتوری، شامل فایل‌ها و زیرشاخه‌ها را نمایش می‌دهد.

**مثال:**

```bash
ls
```

### 3. `cd` (تغییر دایرکتوری)

دایرکتوری فعلی را به مسیر مشخص‌شده تغییر می‌دهد.

**مثال:**

```bash
cd /home/user/Downloads
```

<div style={{ display: 'flex', justifyContent: 'center' }}>
  <div style={{ width: '400px' }}>
    ![Alias Meme](./images/03-terminal/Alias-Ls.jpg)
  </div>
</div>

### 4. `mkdir` (ساخت دایرکتوری)

یک دایرکتوری جدید ایجاد می‌کند.

**مثال:**

```bash
mkdir new_directory
```

### 5. `rmdir` (حذف دایرکتوری)

یک دایرکتوری خالی را حذف می‌کند.

**مثال:**

```bash
rmdir old_directory
```

### 6. `nano` (ویرایشگر متن)

یک ویرایشگر متن ساده برای ویرایش فایل‌ها به‌طور مستقیم در ترمینال است.

**مثال:**

```bash
nano filename.txt
```

<div style={{ display: 'flex', justifyContent: 'center' }}>
  <div style={{ width: '400px' }}>
    ![Text Editors Meme](./images/03-terminal/Text-Editors.jpg)
  </div>
</div>

### 7. `cat` (نمایش و ترکیب فایل‌ها)

محتویات یک فایل را نمایش می‌دهد یا چند فایل را به هم می‌چسباند و روی صفحه نمایش چاپ می‌کند.

**مثال:**

```bash
cat filename.txt
```

### 8. `cp` (کپی کردن فایل‌ها و دایرکتوری‌ها)

فایل‌ها یا دایرکتوری‌ها را از یک مکان به مکان دیگر کپی می‌کند.

**مثال:**

```bash
cp file1.txt /home/user/Documents/
```

### 9. `mv` (انتقال یا تغییر نام فایل‌ها و دایرکتوری‌ها)

فایل‌ها یا دایرکتوری‌ها را به مکان جدید منتقل می‌کند یا نام آن‌ها را تغییر می‌دهد.

**مثال:**

```bash
mv oldname.txt newname.txt
```

### 10. `rm` (حذف فایل‌ها و دایرکتوری‌ها)

فایل‌ها و دایرکتوری‌ها را حذف می‌کند. (احتیاط: استفاده از این دستور می‌تواند اطلاعات را به طور دائم حذف کند.)

**مثال:**

- برای حذف فایل:

```bash
rm filename.txt
```

- برای حذف دایرکتوری و تمام محتویات آن:

```bash
rm -r directory_name
```

<div style={{ display: 'flex', justifyContent: 'center' }}>
  <div style={{ width: '400px' }}>
    ![Sudo Remove](./images/03-terminal/Sudo-Rm.webp)
  </div>
</div>

### 11. `grep` (جستجو در فایل‌ها)

الگوهای خاصی را در فایل‌ها جستجو کرده و خطوط حاوی آن‌ها را نمایش می‌دهد.

**مثال:**

```bash
grep 'search_term' filename.txt
```

### 12. `find` (جستجو در دایرکتوری‌ها)

فایل‌ها و دایرکتوری‌ها را براساس معیارهایی مانند نام، اندازه، تاریخ و غیره جستجو می‌کند.

**مثال:**

```bash
find /home/user/ -name "file*.txt"
```

### 13. `echo` (نمایش یک خط متن)

متن یا متغیرها را روی ترمینال چاپ می‌کند.

**مثال:**

```bash
echo "Hello, World!"
```

## دستورات پیشرفته‌تر

### 14. `chmod` (تغییر مجوزهای فایل)

مجوزهای دسترسی به فایل یا دایرکتوری را تغییر می‌دهد.

**مثال:**

```bash
chmod 755 script.sh
```

### 15. `df` (فضای دیسک)

میزان فضای استفاده‌شده و موجود در دیسک را نمایش می‌دهد.

**مثال:**

```bash
df -h
```

<div style={{ display: 'flex', justifyContent: 'center' }}>
  <div style={{ width: '600px' }}>
    ![df command](./images/03-terminal/df.webp)
  </div>
</div>

### 16. `du` (کاربرد دیسک)

میزان فضای دیسک استفاده‌شده توسط فایل‌ها و دایرکتوری‌ها را تخمین می‌زند.

**مثال:**

```bash
du -sh /home/user/Documents/
```

### 17. `sudo` (اجرای دستورات با دسترسی ریشه)

به کاربر مجاز اجازه می‌دهد یک دستور را با دسترسی ریشه (superuser) یا یک کاربر دیگر اجرا کند.

**مثال:**

```bash
sudo apt-get update
```

<div style={{ display: 'flex', justifyContent: 'center' }}>
  <div style={{ width: '400px' }}>
    ![Sudo Brain](./images/03-terminal/Sudo-Brain.jpg)
  </div>
</div>

### 18. `apt-get` (مدیریت بسته‌ها)

ابزاری برای مدیریت بسته‌ها (نصب، به‌روزرسانی، حذف) در توزیع‌های مبتنی بر دبیان مانند اوبونتو است.

**مثال:**

```bash
sudo apt-get install package_name
```

### 19. `dpkg` (مدیریت بسته‌های دبیان)

ابزاری برای نصب، ساخت، حذف و مدیریت بسته‌های `.deb` در سیستم‌های مبتنی بر دبیان است.

**مثال:**

```bash
sudo dpkg -i package.deb
```

### 20. `ps` (وضعیت پروسه‌ها)

پروسه‌های در حال اجرا را نمایش می‌دهد.

**مثال:**

```bash
ps
```

### 21. `kill` (خاتمه دادن به یک پروسه)

پروسه‌ای را با استفاده از شناسه پروسه (PID) خاتمه می‌دهد.

**مثال:**

```bash
kill 1234
```

<div style={{ display: 'flex', justifyContent: 'center' }}>
  <div style={{ width: '400px' }}>
    ![Linux Power](./images/03-terminal/Linux-Power.webp)
  </div>
</div>

### 22. `top` (مدیریت وظایف)

اطلاعات لحظه‌ای درباره پروسه‌های در حال اجرا، شامل استفاده از CPU و حافظه را نمایش می‌دهد.

**مثال:**

```bash
top
```

### 23. `tar` (آرشیو کردن فایل‌ها)

برای فشرده‌سازی یا استخراج فایل‌ها از یک آرشیو tar استفاده می‌شود.

**مثال:**

```bash
tar -czvf archive.tar.gz /path/to/directory/
```

### 24. `wget` (دانلود از وب)

فایل‌ها را از وب با استفاده از HTTP، HTTPS یا FTP دانلود می‌کند.

**مثال:**

```bash
wget https://example.com/file.zip
```

### 25. `ssh` (اتصال امن به سرور)

به‌صورت امن به یک ماشین از راه دور متصل می‌شود.

**مثال:**

```bash
ssh user@remote_server
```

<div style={{ display: 'flex', justifyContent: 'center' }}>
  <div style={{ width: '600px' }}>
    ![SSH](./images/03-terminal/SSH.webp)
  </div>
</div>

## دستورهای مخرب

توجه کنید که هیچگاه دستوری را که از کارکرد آن اطمینان ندارید اجرا نکنید.

<div style={{ display: 'flex', justifyContent: 'center' }}>
  <div style={{ width: '400px' }}>
    ![Fork Bomb](./images/03-terminal/Fork-Bomb.webp)
  </div>
</div>
