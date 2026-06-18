# بي جوري — موقع الصحة النفسية ومكافحة الإدمان

## متطلبات التشغيل

قبل البدء، تأكد من تثبيت:
- **Node.js** النسخة 18 أو أحدث — https://nodejs.org
- **npm** (يأتي مع Node.js تلقائياً)

---

## طريقة التشغيل

افتح الـ Terminal (موجه الأوامر) في مجلد المشروع ثم نفّذ الأوامر التالية:

```bash
# 1) تثبيت المكتبات (مرة واحدة فقط)
npm install

# 2) تشغيل المشروع محلياً
npm run dev
```

بعد ذلك افتح المتصفح على الرابط:
**http://localhost:3000**

---

## بناء نسخة الإنتاج (اختياري)

```bash
npm run build
```

سيُنشئ مجلد `dist/` يحتوي على الملفات الجاهزة للرفع على أي استضافة.

---

## هيكل المشروع

```
begory-website/
├── public/
│   └── begory-logo.png        # شعار المنظمة
├── src/
│   ├── components/
│   │   ├── Navbar.tsx         # شريط التنقل العلوي
│   │   ├── Footer.tsx         # التذييل
│   │   └── WhatsAppButton.tsx # زر واتساب العائم
│   ├── pages/
│   │   ├── AboutPage.tsx      # الصفحة الرئيسية
│   │   ├── CoursesPage.tsx    # صفحة الكورسات
│   │   ├── FreedomJourneyPage.tsx  # رحلة حرية
│   │   └── VideoGalleryPage.tsx    # مكتبة الفيديوهات
│   ├── index.css              # الألوان والتصميم العام
│   ├── App.tsx                # التوجيه الرئيسي
│   └── main.tsx               # نقطة الدخول
├── index.html
├── vite.config.ts
├── tsconfig.json
└── package.json
```

---

## تخصيص المحتوى

| الملف | ما يمكن تعديله |
|-------|----------------|
| `src/pages/CoursesPage.tsx` | مصفوفة `courses` — عنوان الكورس، الوصف، رابط نموذج التسجيل |
| `src/pages/VideoGalleryPage.tsx` | مصفوفة `videos` — معرّف فيديو يوتيوب، العنوان، التصنيف |
| `src/components/WhatsAppButton.tsx` | رقم الواتساب |
| `src/index.css` | ألوان العلامة التجارية (متغيرات CSS) |
| `public/begory-logo.png` | استبدل بشعار مختلف بنفس الاسم |
