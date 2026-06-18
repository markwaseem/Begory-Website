const courses = [
  {
    id: 1,
    title: "دايرة شفاء",
    emoji: "💚",
    badge: "الأكثر طلباً",
    badgeColor: "bg-emerald-100 text-emerald-700",
    desc: "برنامج متكامل يقودك في رحلة شفاء عميقة من الجراح النفسية والصدمات العاطفية. من خلال تقنيات مثبتة علمياً، ستتعلم كيف تطلق ما يثقلك وتبني حياة داخلية أكثر سلاماً وتوازناً.",
    duration: "٨ أسابيع",
    sessions: "١٦ جلسة",
    level: "جميع المستويات",
    topics: ["التعافي من الصدمات", "تقنيات اليقظة الذهنية", "إدارة المشاعر", "بناء الثقة بالنفس"],
    formLink: "https://forms.gle/PLACEHOLDER_LINK",
  },
  {
    id: 2,
    title: "دايرة ثقة",
    emoji: "🌟",
    badge: "جديد",
    badgeColor: "bg-blue-100 text-blue-700",
    desc: "كورس مخصص لبناء الثقة بالنفس وتطوير الهوية الشخصية. ستكتشف نقاط قوتك الخفية وتتعلم كيف تقدم نفسك بثقة وأصالة في كل جانب من جوانب حياتك.",
    duration: "٦ أسابيع",
    sessions: "١٢ جلسة",
    level: "مبتدئ إلى متوسط",
    topics: ["بناء احترام الذات", "التواصل الفعال", "تجاوز الخوف من الحكم", "الأصالة والهوية"],
    formLink: "https://forms.gle/PLACEHOLDER_LINK",
  },
  {
    id: 3,
    title: "افهمني",
    emoji: "🧩",
    badge: "تفاعلي",
    badgeColor: "bg-purple-100 text-purple-700",
    desc: "رحلة اكتشاف الذات العميقة لفهم دوافعك وأنماطك السلوكية. ستتعلم لغة مشاعرك وتطور مهارة الوعي الذاتي التي تحول طريقة تعاملك مع الحياة والعلاقات.",
    duration: "١٠ أسابيع",
    sessions: "٢٠ جلسة",
    level: "متوسط إلى متقدم",
    topics: ["فهم أنماط التفكير", "الذكاء العاطفي", "ديناميكيات العلاقات", "الحدود الصحية"],
    formLink: "https://forms.gle/PLACEHOLDER_LINK",
  },
];

export default function CoursesPage() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <section
        className="pt-32 pb-16 text-center"
        style={{ background: "linear-gradient(180deg, hsl(218, 65%, 14%) 0%, hsl(218, 55%, 20%) 100%)" }}
      >
        <div className="container-rtl">
          <span className="inline-block bg-gold/20 text-gold border border-gold/30 rounded-full px-4 py-1.5 text-sm font-semibold mb-4">
            الكورسات السنوية
          </span>
          <h1 className="text-4xl md:text-5xl font-black text-white mb-4">
            برامجنا التحولية
          </h1>
          <p className="text-white/70 text-lg max-w-xl mx-auto">
            اختر البرنامج المناسب لرحلتك وابدأ التحول الحقيقي اليوم
          </p>
        </div>
      </section>

      {/* Courses Grid */}
      <section className="section-pad bg-white">
        <div className="container-rtl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section
        className="section-pad"
        style={{ background: "hsl(210, 20%, 97%)" }}
      >
        <div className="container-rtl">
          <div
            className="rounded-3xl p-10 md:p-16 text-center text-white relative overflow-hidden"
            style={{ background: "linear-gradient(135deg, hsl(218, 65%, 18%), hsl(204, 72%, 35%))" }}
          >
            <div className="absolute top-0 left-0 w-64 h-64 rounded-full opacity-10"
              style={{ background: "hsl(42, 60%, 78%)", transform: "translate(-30%, -30%)", filter: "blur(40px)" }} />
            <h2 className="text-3xl md:text-4xl font-black mb-4 relative z-10">
              لست متأكداً من أين تبدأ؟
            </h2>
            <p className="text-white/80 text-lg mb-8 max-w-lg mx-auto relative z-10">
              جرب استبيان رحلة حرية وسيساعدك في اختيار المسار الأنسب لك
            </p>
            <a
              href="/freedom-journey"
              className="inline-block font-bold text-lg px-8 py-4 rounded-2xl transition-all duration-300 hover:scale-105 hover:shadow-xl relative z-10"
              style={{ background: "hsl(42, 60%, 78%)", color: "hsl(218, 65%, 14%)" }}
            >
              جرّب الاستبيان المجاني
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

interface CourseCardProps {
  course: typeof courses[0];
}

function CourseCard({ course }: CourseCardProps) {
  return (
    <div className="bg-white border border-border rounded-3xl overflow-hidden hover-lift flex flex-col shadow-sm">
      {/* Card Top */}
      <div
        className="p-6"
        style={{ background: "linear-gradient(135deg, hsl(210, 20%, 97%), hsl(210, 30%, 93%))" }}
      >
        <div className="flex items-start justify-between mb-4">
          <div className="text-5xl">{course.emoji}</div>
          <span className={`text-xs font-bold px-3 py-1 rounded-full ${course.badgeColor}`}>
            {course.badge}
          </span>
        </div>
        <h3 className="text-2xl font-black text-navy mb-2">{course.title}</h3>
        <div className="flex flex-wrap gap-2">
          {[
            { icon: "⏱", val: course.duration },
            { icon: "📅", val: course.sessions },
            { icon: "📊", val: course.level },
          ].map((m) => (
            <span key={m.val} className="text-xs text-muted-foreground bg-white rounded-lg px-2 py-1 border border-border">
              {m.icon} {m.val}
            </span>
          ))}
        </div>
      </div>

      {/* Card Body */}
      <div className="p-6 flex flex-col flex-1">
        <p className="text-gray-600 leading-relaxed mb-5 text-sm">{course.desc}</p>

        <div className="mb-6">
          <p className="text-xs font-bold text-navy uppercase tracking-wide mb-3">ما ستتعلمه</p>
          <ul className="space-y-2">
            {course.topics.map((topic) => (
              <li key={topic} className="flex items-center gap-2 text-sm text-gray-600">
                <span className="w-1.5 h-1.5 rounded-full bg-sky flex-shrink-0" />
                {topic}
              </li>
            ))}
          </ul>
        </div>

        <a
          href={course.formLink}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-auto w-full text-center font-bold text-base py-3.5 px-6 rounded-2xl text-white transition-all duration-300 hover:opacity-90 hover:shadow-lg hover:scale-[1.02] active:scale-[0.98]"
          style={{ background: "linear-gradient(135deg, hsl(218, 65%, 18%), hsl(204, 72%, 35%))" }}
        >
          سجل الآن
        </a>
      </div>
    </div>
  );
}
