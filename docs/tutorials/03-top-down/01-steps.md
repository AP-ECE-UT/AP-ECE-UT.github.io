---
sidebar_position: 1
---

# از کلیات به جزئیات

## مراحل روش طراحی بالا به پایین

<br/><div style={{ display: 'flex', justifyContent: 'center' }}>
  <img src="https://programmerhumor.io/wp-content/uploads/2023/03/programmerhumor-io-programming-memes-83d346868e68a1f.jpg" alt="complexity" width="350" height="500"/>
</div><br/>

مراحل روش طراحی بالا به پایین (Top-Down Design) به طور کلی به این صورت است:

### ۱. تعریف مسئله و تعیین هدف کلی

ابتدا باید هدف کلی و نیازمندی‌های اصلی پروژه یا مسئله‌ای که قرار است حل شود، مشخص کنیم. این مرحله شامل درک عمیق از آنچه که قرار است به دست آورده شود، می‌باشد.

### ۲. طراحی معماری کلی (High-Level Design)

در این مرحله، ساختار کلی راه‌حل یا برنامه را ترسیم می‌کنیم. این طراحی شامل اجزای اصلی، زیر مسئله‌ها و ارتباطات کلی بین آن‌ها است. در این مرحله، بر روی بخش‌های بزرگ‌تر تمرکز می‌شود و هنوز وارد جزئیات نشده‌ایم.

### ۳. تقسیم‌بندی

پس از طراحی کلی، مسئله را به بخش‌های کوچکتر و قابل مدیریت تقسیم می‌کنیم. هر یک به عنوان بخشی مستقل و قابل تعریف از مسئله کلی در نظر گرفته می‌شود.

### ۴. طراحی جزئیات

در این مرحله، هر بخش  را به طور دقیق‌تر و با جزئیات بیشتری طراحی می‌کنیم که شامل تعیین داده‌ها، الگوریتم‌ها، و وظایف داخلی هر بخش است. به عبارت دیگر، هر یک از بخش‌های کوچکتر که در مرحله قبلی تعیین شده‌اند، به تفصیل بررسی و پیاده‌سازی می‌شوند.

### ۵. پیاده‌سازی (Implementation)

پس از طراحی دقیق، کدنویسی هر یک از بخش‌ها یا زیر مسئله‌ها را آغاز می‌کنیم. در این مرحله، تمامی بخش‌های مختلف برنامه به صورت جداگانه نوشته و سپس با هم ترکیب می‌شوند تا برنامه نهایی شکل گیرد.

### ۶. تست و اعتبارسنجی (Testing and Validation)

بعد از پیاده‌سازی، تمام برنامه را باید به طور کامل تست کنیم. این تست‌ها شامل بررسی عملکرد هر بخش به صورت مستقل و همچنین بررسی کلی برای اطمینان از عملکرد صحیح و هماهنگی بین زیر مسئله‌ها است.

### ۷. یکپارچه‌سازی و نهایی‌سازی (Integration and Finalization)

در این مرحله، تمامی بخش‌ها و زیر مسئله‌ها را با یکدیگر ترکیب می‌کنیم و برنامه به شکل نهایی خود درمی‌آید. همچنین ممکن است اصلاحات نهایی و بهینه‌سازی‌ها انجام شود.

### ۸. مستندسازی و نگهداری (Documentation and Maintenance)

خوب است پس از تکمیل برنامه، مستندات لازم برای آن را تهیه کنیم. این مستندات شامل توضیحات مربوط به طراحی، پیاده‌سازی و نحوه استفاده از برنامه است. همچنین، برنامه را باید به گونه‌ای طراحی کنیم که نگهداری و به‌روزرسانی‌های آینده به سادگی انجام شود.

<br/><div style={{ display: 'flex', justifyContent: 'center' }}>
  <img src="https://www.christianhomeschoolersofhawaii.org/w/wp-content/uploads/2022/08/4263b2ddbba3d7536372ae1d5c058feb.png" alt="grade" width="400" height="400"/>
</div><br/>

فرض کنید می‌خواهیم برنامه‌ای بنویسیم که میانگین نمرات چند دانش‌آموز را محاسبه کند. حالا این مسئله را با روش طراحی بالا به پایین حل می‌کنیم.

هدف ما نوشتن برنامه‌ای است که نمرات چند دانش‌آموز را دریافت کند و میانگین آنها را محاسبه و نمایش دهد.
برنامه باید دارای چند بخش کلی باشد:
        ۱. دریافت تعداد دانش‌آموزان و نمرات آنها
        ۲. محاسبه میانگین نمرات
        ۳. نمایش میانگین
پس برای هر بخش یک تابع می‌نویسیم:

```cpp
#include <iostream>
#include <vector>
using namespace std;

vector<int> getInput()
{
    int n;
    vector<int> grades;
    cout << "Enter the number of students: ";
    cin >> n;
    for (int i = 0; i < n; i++)
    {
        cout << "Enter grade for student " << i + 1 << ": ";
        double grade;
        cin >> grade;
        grades.push_back(grade);
    }
    return grades;
}

double calculateAverage(vector<int> grades)
{
    double sum = 0;
    for (int i = 0; i < grades.size(); i++)
    {
        sum += grades[i];
    }
    return sum / grades.size();
}

void displayAverage(double average)
{
    cout << "The average grade is: " << average << endl;
}

int main()
{
    vector<int> grades = getInput();
    double average = calculateAverage(grades);
    displayAverage(average);

    return 0;
}
```

برنامه‌ای نوشتیم را تست می‌کنیم:

```text
Enter the number of students: 5
Enter grade for student 1: 15.5
Enter grade for student 2: 20
Enter grade for student 3: 13
Enter grade for student 4: 2
Enter grade for student 5: 19.75
The average grade is: 13.8
```
