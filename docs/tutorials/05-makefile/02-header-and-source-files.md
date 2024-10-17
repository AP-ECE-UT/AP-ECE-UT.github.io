---
sidebar_position: 2
---

# انواع فایل در ++C

## چه نوع فایل‌هایی در ++C داریم؟

در ++C، برنامه‌نویسی چندفایلی با استفاده از فایل‌های هدر (header files) و فایل‌های منبع (source files) انجام می‌شود. فایل‌های هدر شامل اعلان‌های توابع و کلاس‌ها هستند، در حالی که فایل‌های منبع شامل تعریف‌های این توابع و کلاس‌ها هستند. فایل‌های هدر با استفاده از دستور `include#` در فایل‌های منبع گنجانده می‌شوند. این اجازه می‌دهد که فایل‌های منبع از توابع و کلاس‌های اعلان شده در فایل‌های هدر استفاده کنند.

## مثال

```cpp title="myclass.hpp"
#ifndef MYCLASS_HPP
#define MYCLASS_HPP

class MyClass {
public:
    void myFunction();
};

#endif
```

```cpp title="myclass.cpp"
#include "myclass.hpp"

void MyClass::myFunction() {
    // function definition
}
```

فایل `myclass.cpp` شامل تعریف کلاس `MyClass` و متد `myFunction` آن است. فایل `myclass.hpp` شامل اعلان کلاس `MyClass` است. دستور `include#` در `myclass.cpp` اجازه می‌دهد که کد در `myclass.cpp` از کد در `myclass.hpp` استفاده کند.

فایل‌های هدر معمولا شامل header guards هستند تا از گنجاندن چندباره یک فایل جلوگیری کنند. این کار با استفاده از دستورات پیش‌پردازنده انجام می‌شود، همانطور که در مثال بالا نشان داده شده است. دستورات `ifndef#` و `define#` و `endif#` برای ایجاد یک header guard استفاده می‌شوند. این اطمینان می‌دهد که فایل هدر تنها یک بار در هر فایل منبع گنجانده می‌شود.

با استفاده از دستورات `include#` و header guard، کد در فایل‌های هدر می‌تواند بدون ایجاد هیچ مشکلی در فایل‌های منبع متعدد استفاده شود.

<div style={{ display: 'flex', justifyContent: 'center' }}>
  <div style={{ width: '600px' }}>
  ![Header Files](./images/02-header-and-source-files/Header-Files.webp)
  </div>
</div>

البته توجه داشته باشید که تغییر فایل‌های هدر می‌تواند زمان کامپایل را افزایش دهد، زیرا هر بار که فایل هدر تغییر می‌کند، تمام فایل‌های منبعی که آن را شامل می‌شوند باید مجددا کامپایل شوند. این می‌تواند زمان توسعه را افزایش دهد.

<div style={{ display: 'flex', justifyContent: 'center' }}>
  <div style={{ width: '600px' }}>
  ![Editing Headers](./images/02-header-and-source-files/Editing-Headers.jpg)
  </div>
</div>
