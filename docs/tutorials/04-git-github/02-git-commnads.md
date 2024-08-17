---
sidebar_position: 2
---

# Git Commands

## دستور های اولیه

### Status

برای مشاهده تغییرات، از جمله فایل‌های تغییر یافته و وضعیت فایل‌های اضافه شده یا فایل‌های tracked، می‌توانید از این دستور استفاده کنید:

```bash
git status
```

فایل‌های untracked فایل‌هایی هستند که هنوز به مخزن اضافه نشده‌اند و تغییرات آن‌ها ثبت نمی‌شود.

<br/><div style={{ display: 'flex', justifyContent: 'center' }}>
  <img src="https://programmerhumor.io/wp-content/uploads/2023/03/programmerhumor-io-linux-memes-backend-memes-7f5ca6f5d2d9293.jpg" alt="version control"/>
</div><br/>

### Stage

فایل ها در یک مخزن گیت در 2 حالت کلی قرار دارند.

1. **Untracked**
    - فایل‌هایی که در پوشه فعلی قرار دارند ولی تغییرات آن‌ها توسط گیت دنبال نمی‌شود.
1. **Tracked**
    - فایل‌هایی که به گیت اضافه شده‌اند و تغییرات آن‌ها توسط گیت دنبال می‌شود.
    این فایل‌ها به سه دسته اصلی تقسیم می‌شوند:
        - **Unmodified**: فایل‌هایی که قبلاً به گیت اضافه شده‌اند ولی نسبت به آخرین کامیت تغییری نداشته‌اند.
        - **Modified**: فایل‌هایی که قبلاً به گیت اضافه شده‌اند و نسبت به آخرین کامیت تغییر کرده‌اند.
        - **Staged**: فایل‌هایی که آماده کامیت کردن هستند.

با وارد کردن دستور بالا، فایل‌های موردنظر از وضعیت untracked/modified به حالت staged تغییر حالت می‌دهند و حالا این فایل‌ها آماده کامیت کردن هستند.

```bash
git add <path to the files>
```

با وارد کردن دستور بالا، فایل‌های موردنظر از وضعیت untracked/modified به حالت staged تغییر حالت می‌دهند و حالا این فایل‌ها آماده کامیت کردن هستند.

برای تغییر وضعیت همه فایل‌ها به staged، کافی است که دستور زیر را وارد کنید:

```bash
git add -A
```

### Unstage/Untrack

برای تغییر وضعیت فایل از staged به untracked بدون حذف فایل، می‌توانید از دستور زیر استفاده کنید:

```bash
git rm --catched <path to files>
```

برای تغییر وضعیت فایل‌ها از staged به modified، می‌توانید از دستور زیر استفاده کنید:

```bash
git restore --staged <path to file>
```

با وارد کردن دستورات بالا، فایل‌ها تا زمانی که دوباره وضعیت آن‌ها را به staged تغییر ندهید، در کامیت‌ها در نظر گرفته نخواهند شد.

### Commit

برای ذخیره وضعیت کنونی فایل‌ها، از دستور زیر استفاده می‌کنیم. با دستور زیر تنها تغییرات فایل‌هایی که در وضعیت staged قرار دارند، ذخیره می‌شود:

```bash
git commit -m "<This message should describe the commit>"
```

<br/><div style={{ display: 'flex', justifyContent: 'center' }}>
  <img src="https://miro.medium.com/v2/resize:fit:880/0*cesFJY5JFpI0Rl4v.jpg" alt="version control"/>
</div><br/>

برای اضافه کردن توضیحات اضافی به کامیت نیز می‌توانید از دستور زیر استفاده کنید:

```bash
git commit -m "<commit message>" -m "<description>"
```

<br/><div style={{ display: 'flex', justifyContent: 'center' }}>
  <img src="https://i.redd.it/zouykvhs1a681.jpg" alt="version control" width="400"/>
</div><br/>

### Log

برای دیدن اطلاعات مربوط به کامیت‌های قبلی می‌توانید از دستور زیر استفاده کنید:

```bash
git log
```

هر کامیت شامل اطلاعات زیر است:

- Commit Hash
- Author
- Timestamp
- Commit Message

می‌توان با استفاده از flagها، کامیت‌های قبلی را در فرمت‌های مختلفی مشاهده کرد. تعدادی از دستورات معروف برای فرمت‌های مختلف را می‌توانید در این لینک مشاهده کنید.

برای مثال، دستور زیر کامیت‌ها را به شکل یک گراف نمایش می‌دهد:

```bash
git log --all --decorate --onleline --graph
```

### Amend

هنگامی که فراموش کردید فایلی را در کامیت اضافه کنید یا خواستید توضیحات مربوط به کامیت را تغییر دهید، می‌توانید از دستور زیر استفاده کنید:

```bash
git commit --amend
```

قبل از وارد کردن این دستور، فایل‌های خود را در وضعیت staged قرار دهید. با وارد کردن این دستور، یک ویرایشگر (editor) باز می‌شود که می‌توانید توضیحات کامیت مورد نظر را تغییر دهید. با این کار، هش کامیت مورد نظر تغییر خواهد کرد.

### Diff

برای دیدن تغییرات فایل‌های کامیت شده نسبت به آخرین کامیت، می‌توانید از این دستور استفاده کنید:

```bash
git diff
```

برای مشاهده تغییرات دو کامیت دلخواه نسبت به هم، کافی است که هش یا آدرس HEAD-based کامیت‌های مورد نظر را به ترتیب وارد کنید:

```bash
git diff <src commit> <dst commit>
```

<br/><div style={{ display: 'flex', justifyContent: 'center' }}>
  <img src="https://res.cloudinary.com/practicaldev/image/fetch/s--O3K1kbDQ--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/i/ob4tl88f6rsgsm90da2e.png" alt="version control" width="600"/>
</div><br/>

### Checkout

اگر نیاز دارید به کامیت‌های قبلی برگردید، دستور زیر را وارد کنید. در این دستور لازم است که هش یا آدرس HEAD-based کامیت مورد نظر را وارد کنید:

```bash
git checkout <commit>
```

برای برگرداندن HEAD به کامیت قبلی، می‌توانیم از دستور زیر نیز استفاده کنیم:

```bash
git checkout -
```

### Reset

اگر می‌خواهید یک کامیت را پاک کنید، می‌توانید از دستورات زیر استفاده کنید. تنها در مواقع ضروری از این دستورات استفاده کنید.

این دستور تغییرات اعمال شده بعد از این کامیت را حذف می‌کند، ولی این تغییرات را نگه می‌دارد. در واقع، فایل‌های تغییر یافته با این تغییرات در وضعیت modified قرار خواهند گرفت:

```bash
git reset --soft <commit>
```

این دستور تمام تغییرات را بعد از کامیت مورد نظر حذف می‌کند:

```bash
git reset --hard <commit>
```
