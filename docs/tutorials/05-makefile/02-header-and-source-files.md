---
sidebar_position: 1
---

# انواع فایل در ++C

## تعریف

در ++C، برنامه‌نویسی چندفایلی با استفاده از فایل‌های هدر (header files) و فایل‌های منبع (source files) انجام می‌شود. فایل‌های هدر شامل اعلان‌های توابع و کلاس‌ها هستند، در حالی که فایل‌های منبع شامل تعریف‌های این توابع و کلاس‌ها هستند. فایل‌های هدر با استفاده از دستور `include#` در فایل‌های منبع گنجانده می‌شوند. این اجازه می‌دهد که فایل‌های منبع از توابع و کلاس‌های اعلان شده در فایل‌های هدر استفاده کنند.

## مثال

به عنوان مثال، فایل هدر `myclass.hpp` را در نظر بگیرید:

```cpp
#ifndef MYCLASS_H
#define MYCLASS_H

class MyClass {
public:
    void myFunction();
};

#endif
```

و فایل منبع `myclass.cpp` را در نظر بگیرید:

```cpp
#include "myclass.hpp"

void MyClass::myFunction() {
    // function definition
}
```

فایل `myclass.cpp` شامل تعریف کلاس `MyClass` و متد `myFunction` آن است. فایل `myclass.hpp` شامل اعلان کلاس `MyClass` است. دستور `include#` در `myclass.cpp` اجازه می‌دهد که کد در `myclass.cpp` از کد در `myclass.hpp` استفاده کند.

فایل‌های هدر معمولا شامل header guards هستند تا از گنجاندن چندباره یک فایل جلوگیری کنند. این کار با استفاده از دستورات پیش‌پردازنده انجام می‌شود، همانطور که در مثال بالا نشان داده شده است. دستورات `ifndef#` و `define#` و `endif#` برای ایجاد یک header guard استفاده می‌شوند. این اطمینان می‌دهد که فایل هدر تنها یک بار در هر فایل منبع گنجانده می‌شود.

با استفاده از دستورات `include#` و header guard، کد در فایل‌های هدر می‌تواند بدون ایجاد هیچ مشکلی در فایل‌های منبع متعدد استفاده شود.

<br/><div style={{ display: 'flex', justifyContent: 'center' }}>
  <img src="https://preview.redd.it/qpdn02pk14w51.png?width=640&crop=smart&auto=webp&s=c5d9bd09fc9837818957f5d58789dcd2a9acf8ac" alt="header files cpp" width="600"/>
</div><br/>

البته توجه داشته باشید که تغییر فایل‌های هدر می‌تواند زمان کامپایل را افزایش دهد، زیرا هر بار که فایل هدر تغییر می‌کند، تمام فایل‌های منبعی که آن را شامل می‌شوند باید مجددا کامپایل شوند. این می‌تواند زمان توسعه را افزایش دهد.

<br/><div style={{ display: 'flex', justifyContent: 'center' }}>
  <img src="https://i.redd.it/366x5w8sxeea1.jpg" alt="header files change cpp" width="600"/>
</div><br/>