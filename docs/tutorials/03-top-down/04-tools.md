---
sidebar_position: 4
---

# جعبه ابزار

ابزارهای کاربردی برای طراحی بالا به پایین

<br/><div style={{ display: 'flex', justifyContent: 'center' }}>
  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/UML_logo.svg/640px-UML_logo.svg.png" alt="UML" width="500"/>
</div><br/>

برای طراحی بالا به پایین می‌توان با تصویر سازی درک بهتری از فرآیند و بخش‌های مختلف به دست آورد. در این قسمت به ابزاری می‌پردازیم که در این زمینه به ما کمک می‌کند.

UML (Unified Modeling Language) یک زبان مدل‌سازی استاندارد است که برای طراحی و مستندسازی سیستم‌های نرم‌افزاری استفاده می‌شود. UML توسط Object Management Group (OMG) توسعه داده شده و به‌عنوان یک ابزار قدرتمند در مهندسی نرم‌افزار به کار می‌رود.

یکی از برنامه‌هایی که می‌توان برای طراحی بصری برنامه استفاده کرد Microsoft Visio است. ابزاری برای طراحی نمودارهای UML و سایر نمودارهای مهندسی نرم‌افزار. این ابزار به شما اجازه می‌دهد تا دیاگرام‌های کلاس، توالی، و استفاده را طراحی کنید.

<br/><div style={{ display: 'flex', justifyContent: 'center' }}>
  <img src="https://mspoweruser.com/wp-content/uploads/2021/10/visio-web-app.png" alt="make file syntax"/>
</div><br/>

برای نمایش یک نمونه از نمودارهای UML (Unified Modeling Language)، معمولاً از نوع‌های مختلف نمودارها استفاده می‌شود. در اینجا یک نمونه از نمودار کلاس UML برای یک سیستم ساده مدیریت کتابخانه را نمایش می‌دهیم. این نمودار به شما کمک می‌کند تا ساختار کلی کلاس‌ها و ارتباطات بین آن‌ها را مشاهده کنید.

```text
+---------------------------------+
|         Library                 |
+---------------------------------+
| - name: string                  |
| - address: string               |
+---------------------------------+
| + addBook(b: Book)              |
| + removeBook(b: Book)           |
| + findBook(title: string): Book |
+---------------------------------+
            |
            |
            |
+-------------------------+
|          Book           |
+-------------------------+
| - title: string         |
| - author: string        |
| - isbn: string          |
+-------------------------+
| + getTitle(): string    |
| + getAuthor(): string   |
| + getIsbn(): string     |
+-------------------------+
            |
            |
            |
+-------------------------+
|         Member          |
+-------------------------+
| - memberId: string      |
| - name: string          |
| - email: string         |
+-------------------------+
| + borrowBook(b: Book)   |
| + returnBook(b: Book)   |
+-------------------------+

```

توضیحات:

* Library Class:
  * Attributes: name, address
  * Methods: addBook(), removeBook(), findBook()
  * این کلاس نمایانگر کتابخانه است و دارای روش‌هایی برای اضافه کردن، حذف و جستجوی کتاب‌ها است
* Book Class:
  * Attributes: title, author, isbn
  * Methods: getTitle(), getAuthor(), getIsbn()
  * این کلاس نمایانگر کتاب‌ها است و شامل ویژگی‌ها و متدهایی برای دریافت جزئیات کتاب است
* Member Class:
  * Attributes: memberId, name, email
  * Methods: borrowBook(), returnBook()
  * این کلاس نمایانگر اعضای کتابخانه است و شامل متدهایی برای قرض کردن و بازگرداندن کتاب‌ها است    

<br/>

نمودار کلاس UML به شما کمک می‌کند تا:

۱. ساختار کلی سیستم را ببینید: چگونه کلاس‌ها و اشیاء مختلف در سیستم به هم مرتبط هستند

۲. ویژگی‌ها و متدها را تعریف کنید: مشخص کنید که هر کلاس چه داده‌ها و رفتارهایی دارد

۳. رابطه‌ها را شبیه‌سازی کنید: ارتباطات و وابستگی‌ها بین کلاس‌ها را درک کنید
