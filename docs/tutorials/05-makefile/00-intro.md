---
sidebar_position: 0
---

# مقدمه

## پروژه چندفایلی چیست؟

یک پروژه چندفایلی، پروژه‌ای است که از چندین فایل تشکیل شده است. این یک روش معمول در توسعه نرم‌افزار است، زیرا امکان سازماندهی بهتر، نگهداری آسان‌تر و همکاری مؤثرتر را فراهم می‌کند. در یک پروژه چندفایلی، هر فایل مسئول یک بخش خاص از برنامه است. این به عنوان برنامه‌نویسی ماژولار شناخته می‌شود و امکان استفاده مجدد بهتر از کد و اشکال‌زدایی آسان‌تر را فراهم می‌کند.

<div style={{ display: 'flex', justifyContent: 'center' }}>
  <div style={{ width: '300px' }}>
    ![Multi-file](./images/00-intro/Multi-File.png)
  </div>
</div>

در یک پروژه چندفایلی، فایل‌ها به گونه‌ای سازماندهی می‌شوند که یافتن و درک کد آسان باشد. این معمولاً شامل گروه‌بندی فایل‌های مرتبط در دایرکتوری‌ها و استفاده از یک نام‌گذاری منسجم برای فایل‌ها و دایرکتوری‌ها است. فایل‌ها با استفاده از روش‌های مختلفی مانند `include#` در ++C یا `import` در پایتون به یکدیگر متصل می‌شوند. این امکان را فراهم می‌کند که کد در یک فایل از کد در فایل دیگر استفاده کند.

## مثال

به عنوان مثال، در یک پروژه پخش‌کننده موسیقی، می‌توان فایل‌ها را به صورت زیر سازماندهی کرد:

- **دایرکتوری اصلی**: شامل فایل‌های اصلی پروژه مانند `main.py` یا `main.cpp`
- **دایرکتوری مدل‌ها**: شامل فایل‌هایی که مدل‌های داده را تعریف می‌کنند
- **دایرکتوری کنترلرها**: شامل فایل‌هایی که منطق برنامه را پیاده‌سازی می‌کنند
- **دایرکتوری نماها**: شامل فایل‌هایی که رابط کاربری را تعریف می‌کنند
- **دایرکتوری منابع**: شامل فایل‌های منابع مانند تصاویر و فایل‌های صوتی

ساختار درختی این پروژه به عنوان مثال  می‌تواند به شکل زیر باشد:

```text
music_player/
    ├── src/
    │   ├── main.cpp
    │   ├── audio_player.cpp
    │   ├── audio_player.hpp
    │   ├── playlist.cpp
    │   ├── playlist.hpp
    │   ├── song.cpp
    │   └── song.hpp
    └── Makefile
```

```text
music_player/
    ├── src/
    │   ├── audio_player/
    │   │   ├── audio_player.cpp
    │   │   └── audio_player.hpp
    │   ├── playlist/
    │   │   ├── playlist.cpp
    │   │   └── playlist.hpp
    │   ├── song/
    │   │   ├── song.cpp
    │   │   └── song.hpp
    │   └── main.cpp
    └── Makefile
```
