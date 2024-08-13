---
sidebar_position: 5
---

# یکپارچگی

![consistancy](https://images2.memedroid.com/images/UPLOADED50/527e229189a96.jpeg)

به معنای هماهنگی در سبک، ساختار، و نوشتار کد در سراسر یک پروژه است. تمامی قسمت‌های کد از نظر ظاهر، ساختار، و نحوه‌ی عملکرد باید مشابه باشند.
قبلا هم اشاره کردیم وقتی در موضوعی تنوع وجود دارد، مهم نیست شما کدام را انتخاب کنید. مهم این است که در تمام کد قواعدی که در نظر گرفته‌اید رعایت کنید.
برای مثال درباره روش‌های نام‌گذاری صحبت کردیم. برای داشتن کد با کیفیت‌تر باید سبک نام‌گذاری مشخصی برای هر قسمت داشته باشید. اگر برای متغیر ها PascalCase و برای توابع snake_case انتخاب کردید، باید برای تمام متغیرها و توابع اعمال کنید.

برای مثال به این کد توجه کنید:

```cpp
class EmployeeDetails {
public:
    int employee_id;
    std::string employeeName;
    std::string EmployeeAddress;

    void set_employee_id(int id) {
        employee_id = id;
    }

    void setEmployeeName(std::string name) {
        employeeName = name;
    }

    void SetEmployeeAddress(std::string address) {
        EmployeeAddress = address;
    }
};
```

در این نمونه اصلا یکپارچگی نمی‌بینیم.

در متغیر ها:

    ۱. متغیر employee_id به سبک snake_case نام‌گذاری شده است.

    ۲. متغیر employeeName به سبک camelCase نام‌گذاری شده است.

    ۳. متغیر EmployeeAddress به سبک PascalCase نام‌گذاری شده است.

همچنین در method های کلاس از سبک‌های مختلف استفاده شده:

    ۱. تابع set_employee_id به سبک snake_case نام‌گذاری شده است.

    ۲. تابع setEmployeeName به سبک camelCase نام‌گذاری شده است.
    
    ۳. تابع SetEmployeeAddress به سبک PascalCase نام‌گذاری شده است.

برای اصلاح این کد به عنوان مثال روش camelCase را برای متغیر ها و توابع در نظر می‌گیریم:

```cpp
class EmployeeDetails {
public:
    int employeeId;
    std::string employeeName;
    std::string employeeAddress;

    void setEmployeeId(int id) {
        employeeId = id;
    }

    void setEmployeeName(std::string name) {
        employeeName = name;
    }

    void setEmployeeAddress(std::string address) {
        employeeAddress = address;
    }
};
```

## ساختار پوشه‌ها و فایل‌ها

![cat](Images/folder.jpg)

هر چه پروژه مد نظر بزرگ‌تر باشد، تعداد فایل‌ها هم بیشتر می شود. برای داشتن کد با کیفیت تنها نحوه کد نوشتن مهم نیست بلکه باید به نحوه چیدمان و سازماندهی فایل‌ها هم توجه کنیم. اینکه منابع پروژه مثل عکس‌ها، header fileها و کد های اصلی به چه شکلی قرار بگیرند یا حتی نحوه نام‌گذاری آنها اهمیت بالایی دارد.

نکاتی که بهتر است در چیدمان فایل‌ها و پوشه‌ها رعایت کنیم:

* **نام‌گذاری پوشه‌ها و فایل‌ها**: از سبک نام‌گذاری یکنواخت و معنادار برای پوشه‌ها و فایل‌ها استفاده کنید.
* **تقسیم‌بندی منطقی**: پوشه‌ها باید به گونه‌ای تقسیم‌بندی شوند که اجزای مرتبط را در کنار هم نگه دارند.
* **تفکیک کدها و منابع**: منابع مانند تصاویر، فونت‌ها، و فایل‌های استاتیک دیگر باید در پوشه‌های مخصوص به خود قرار گیرند و از فایل‌های کد جدا شوند (به عنوان مثال، assets/, static/, public/)

برای مثال نحوه تقسیم‌بندی فایل‌های یک پروژه را ببینیم:

```
/project-root
│
├── /src
│   ├── /components
│   └── /utils
│
├── /assets
│   ├── /images
│   ├── /fonts
│   └── /styles
│
├── /tests
│   └── /unit
│
└── /config
    └── /settings
```

**/src**: شامل تمامی کدهای اصلی پروژه است.

    • **/components**: کامپوننت‌های قابل استفاده مجدد در این پوشه قرار می‌گیرند.

    • **/utils**: توابع و ابزارهای کمکی که در سراسر پروژه استفاده می‌شوند.

**/assets**: منابع استاتیک پروژه.

    • **/images**: تصاویر و گرافیک‌ها.

    • **/fonts**: فونت‌های سفارشی.

    • **/styles**: فایل‌های CSS.

**/tests**: شامل تست‌های پروژه.

    • **/unit**: تست‌های واحد (Unit Tests).

**/config**: تنظیمات و پیکربندی‌های پروژه.

    • **/settings**: تنظیمات کلی پروژه، مانند تنظیمات دیتابیس یا API.