import { isolate } from "@site/src/i18n/bidi";

// Persian -> English labels for sidebar items, categories, pagination, breadcrumbs,
// generated index pages and a few static texts that come from config / content files.
// Anything that is not listed here stays as it is (Persian).
const labels = {
    // static texts from docusaurus.config.js
    "مجله": "Blog",
    "جلدهای منتشر شده": "Published Issues",

    // blog post titles
    "از سی به سی++": "From C to C++",
    "قانون سه/پنج/صفر، مدیریت منابع، Move Semantics": "The Rule of Three/Five/Zero, Resource Management, Move Semantics",
    "اصول SOLID و Design Pattern-ها": "SOLID Principles & Design Patterns",
    "مراحل کامپایل، Make & CMake": "Compilation Steps, Make & CMake",

    // intro pages
    "محتوای درس": "Course Content",
    "محتوای آموزشی دستیاران": "TA Tutorials",

    // course: categories and docs
    "مقدمه‌ای بر ++C": "Introduction to C++",
    "ورودی و خروجی پایه در ++C": "Basic Input and Output in C++",
    "ورودی و خروجی در محیط ترمینال": "Terminal Input and Output",
    "کد خروج از برنامه": "Program Exit Code",
    "کار با بردارها": "Working with Vectors",

    "توابع بازگشتی": "Recursive Functions",
    "مدیریت حافظه در تابع": "Memory Management in Functions",
    "فراخوانی‌های بازگشتی": "Recursive Calls",
    "حل بازگشتی مسائل": "Solving Problems Recursively",
    "زمان اجرای توابع بازگشتی": "Running Time of Recursive Functions",
    "پردازش بازگشتی دنباله‌ها": "Recursive List Processing",

    "حل مسئله به روش پس‌گرد": "Solving Problems with Backtracking",
    "جستجوی دودویی در درخت": "Binary Search in a Tree",
    "مسئله سفر اسب": "The Knight's Tour Problem",
    "مسئله هشت وزیر": "The Eight Queens Problem",

    "طراحی پیمانه‌ای برنامه": "Modular Program Design",
    "مقدمه‌ای بر برنامه‌نویسی شیءگرا": "Introduction to Object-Oriented Programming",

    "شبیه‌سازی شیءگرا": "Object-Oriented Simulation",
    "شبیه‌سازی حرکت توپ در میز لبه‌دار": "Simulating a Ball Moving on a Bordered Table",

    "مقدمه‌ای بر طراحی شیءگرا": "Introduction to Object-Oriented Design",

    "وراثت و چندریختی": "Inheritance and Polymorphism",
    "مروری بر مفاهیم پایه شیءگرایی": "Review of Basic Object-Oriented Concepts",
    "رابطه وراثت": "The Inheritance Relationship",
    "بازنویسی متدها": "Method Overriding",
    "سلسله‌مراتب وراثت": "Inheritance Hierarchy",
    "مقیدسازی پویا": "Dynamic Binding",
    "فواید مقیدسازی پویا": "Advantages of Dynamic Binding",
    "چندریختی": "Polymorphism",

    "رسیدگی به خطاها": "Error Handling",
    "راه‌های مختلف برخورد با خطا": "Different Ways of Dealing with Errors",
    "محل بروز خطا، محل رسیدگی به خطا": "Where Errors Occur, Where Errors Are Handled",
    "ناکافی بودن روش‌های موجود": "Shortcomings of Existing Methods",
    "رسیدگی به خطاها با «استثناءها»": "Handling Errors with Exceptions",
    "تایپ استثناءها": "Exception Types",
    "بازپرتاب استثناءها": "Rethrowing Exceptions",
    "الگوهای کنترل در رسیدگی به استثناءها": "Control Patterns in Exception Handling",

    "سربارگذاری عملگرها": "Operator Overloading",
    "مقدمه‌ای بر سربارگذاری عملگرها": "Introduction to Operator Overloading",
    "اعضای ثابت کلاس‌ها": "Constant Class Members",
    "سربارگذاری با توابع غیر عضو": "Overloading with Non-Member Functions",
    "سربارگذاری عملگر >>": "Overloading the >> Operator",
    "دوستان کلاس‌ها": "Friends of Classes",
    "سربارگذاری سایر عملگرها": "Overloading Other Operators",

    "مدیریت حافظه کلاس‌ها": "Class Memory Management",

    "پیاده‌سازی داده‌ساختارها": "Implementing Data Structures",
    "لیست‌های پیوندی غیر شیءگرا": "Non-Object-Oriented Linked Lists",
    "لیست‌های پیوندی شیءگرا": "Object-Oriented Linked Lists",
    "لیست‌های پیوندی (تکرارکننده‌ها)": "Linked Lists (Iterators)",

    "الگوها": "Templates",
    "الگوها در ++C": "Templates in C++",

    "اشاره‌گر به تابع": "Function Pointers",
    "2 اشاره‌گر به تابع - بخش": "Function Pointers - Part 2",

    "کتابخانه STL": "The STL Library",
    "مقدمه‌ای بر کتابخانه STL": "Introduction to the STL Library",
    "مقدمه‌ای بر الگوریتم‌های STL": "Introduction to STL Algorithms",
    "مقدمه‌ای بر کانتینرهای STL": "Introduction to STL Containers",
    "مقدمه‌ای بر predicateها در STL": "Introduction to Predicates in STL",

    "برنامه‌نویسی تابعی": "Functional Programming",
    "عبارت‌های لامبدا": "Lambda Expressions",
    "مقدمه‌ای بر برنامه‌نویسی تابعی": "Introduction to Functional Programming",
    "محاسبه با عبارت‌های لامبدا": "Computing with Lambda Expressions",
    "توابع مرتبه بالاتر": "Higher-Order Functions",
    "کار با مجموعه‌های نامتناهی": "Working with Infinite Series",

    "اعضای ایستای کلاس": "Static Class Members",

    "وب": "Web",
    "کتابخانه APHTTP": "The APHTTP Library",
    "طراحی یک برنامه وب": "Designing a Web Application",

    "مطالب اضافی": "Bonus Material",

    // tutorials: categories, descriptions and docs
    "آموزش لینوکس": "Linux Tutorial",
    "آموزش نصب، راه اندازی و دستورات اولیه لینوکس": "Installing, setting up and the basic commands of Linux",
    "آشنایی با لینوکس": "Getting to Know Linux",
    "نصب در کنار ویندوز (Dual Boot)": "Installing Alongside Windows (Dual Boot)",
    "نصب روی ماشین مجازی (VM)": "Installing on a Virtual Machine (VM)",
    "نصب WSL": "Installing WSL",
    "دستورات ساده ترمینال": "Basic Terminal Commands",

    "تمیزی کد": "Clean Code",
    "راهنمای جامع تمیزی کد": "A comprehensive guide to clean code",
    "خوانایی": "Readability",
    "سادگی": "Simplicity",
    "توابع": "Functions",
    "یکپارچگی": "Consistency",
    "آزمون‌پذیری": "Testability",

    "طراحی بالا به پایین": "Top-Down Design",
    "راهمنای جامع طراحی بالا به پایین": "A comprehensive guide to top-down design",
    "از کلیات به جزئیات": "From the Big Picture to the Details",
    "کاربرد": "Usage",
    "کل‌نگری vs جزءنگری": "Holistic vs Detail-Oriented",
    "جعبه ابزار": "Toolbox",
    "مراقب باشیم": "Watch Out",

    "گیت و گیت‌هاب": "Git and GitHub",
    "راهنمای جامع گیت و گیت‌هاب": "A comprehensive guide to Git and GitHub",

    "میک‌فایل و مولتی‌فایل": "Makefile and Multi-File Programming",
    "راهنمای جامع میک‌فایل و مولتی‌فایل": "A comprehensive guide to Makefiles and multi-file programming",
    "کاربردهای برنامه‌نویسی چندفایلی": "Applications of Multi-File Programming",
    "انواع فایل در ++C": "File Types in C++",

    "راهنمای جامع وب": "A comprehensive guide to the web",

    "برنامه‌سازی رویداد محور": "Event-Driven Programming",
    "راهنمای برنامه‌سازی رویداد محور": "A guide to event-driven programming",
    "SFML چیست؟": "What Is SFML?",

    "مقدمه": "Introduction",
    "منابع": "Sources",
};

// "ورودی 1402" (author / TA subtitle) -> "Entry year 1402"
export function translateEntryYear(title) {
    const match = typeof title === "string" && title.match(/^ورودی\s*([0-9۰-۹]+)$/);
    if (!match) return title;
    return `Entry ${match[1].replace(/[۰-۹]/g, d => "۰۱۲۳۴۵۶۷۸۹".indexOf(d))}`;
}

const normalize = text => text.replace(/\s+/g, " ").trim();

/** Translates a Persian label to English (as an LTR isolate). Unknown labels are returned unchanged. */
export default function translateLabel(label) {
    if (typeof label !== "string" || !label) return label;
    const text = normalize(label);
    if (labels[text]) return isolate(labels[text]);

    // "3 - <title>": category labels with a number prefix
    let match = text.match(/^(\d+)\s*-\s*(.+)$/);
    if (match && labels[match[2]]) return isolate(`${match[1]} - ${labels[match[2]]}`);

    // "<title> - بخش 2": multi-part lessons
    match = text.match(/^(.+?)\s*-\s*بخش\s*(\d+)$/);
    if (match && labels[match[1]]) return isolate(`${labels[match[1]]} - Part ${match[2]}`);

    return label;
}
