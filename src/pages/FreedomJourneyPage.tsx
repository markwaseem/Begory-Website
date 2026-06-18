import { useState } from "react";

type Step = 1 | 2 | 3;

const STEP1_QUESTION = "كم مرة في الأسبوع تجد نفسك تتصفح محتوى غير لائق أو تستهلك وقتاً زائداً على الإنترنت بطريقة تجعلك تشعر بالذنب لاحقاً؟";
const STEP1_CHOICES = [
  { label: "نادراً أو لا أتذكر", value: "rarely" },
  { label: "مرة أو مرتين في الأسبوع", value: "sometimes" },
  { label: "عدة مرات في الأسبوع", value: "often" },
  { label: "يومياً أو بشكل متكرر جداً", value: "daily" },
];

const STEP2_QUESTION = "كيف يؤثر هذا السلوك على حياتك اليومية وعلاقاتك وطريقة نظرتك لنفسك؟";
const STEP2_CHOICES = [
  { label: "لا أشعر بتأثير يذكر حتى الآن", value: "no_impact" },
  { label: "أشعر بالذنب لكن حياتي طبيعية", value: "guilt_only" },
  { label: "أثّر على تركيزي وعلاقاتي الاجتماعية", value: "moderate_impact" },
  { label: "أثّر بشكل كبير على حياتي وثقتي بنفسي", value: "heavy_impact" },
];

export default function FreedomJourneyPage() {
  const [step, setStep] = useState<Step>(1);
  const [answer1, setAnswer1] = useState<string | null>(null);
  const [answer2, setAnswer2] = useState<string | null>(null);

  const handleStep1 = (val: string) => {
    setAnswer1(val);
    setStep(2);
  };

  const handleStep2 = (val: string) => {
    setAnswer2(val);
    setStep(3);
  };

  const restart = () => {
    setStep(1);
    setAnswer1(null);
    setAnswer2(null);
  };

  const progressPct = step === 1 ? 33 : step === 2 ? 66 : 100;

  return (
    <div className="min-h-screen">
      {/* Header */}
      <section
        className="pt-32 pb-16 text-center"
        style={{ background: "linear-gradient(180deg, hsl(218, 65%, 14%) 0%, hsl(218, 55%, 20%) 100%)" }}
      >
        <div className="container-rtl max-w-3xl">
          <span className="inline-block bg-gold/20 text-gold border border-gold/30 rounded-full px-4 py-1.5 text-sm font-semibold mb-4">
            رحلة حرية
          </span>
          <h1 className="text-4xl md:text-5xl font-black text-white mb-4">
            خطوتك الأولى نحو التحرر
          </h1>
          <p className="text-white/70 text-lg max-w-xl mx-auto leading-relaxed">
            رحلة حرية هي برنامجك الشخصي للتعافي من إدمان المحتوى الإلكتروني والمواد الإباحية. أجب عن بعض الأسئلة واكتشف الخطوة التالية نحو حياة أفضل.
          </p>
        </div>
      </section>

      {/* Privacy Banner */}
      <div className="bg-emerald-50 border-b border-emerald-200">
        <div className="container-rtl py-4">
          <div className="flex items-center gap-3 justify-center text-center flex-wrap">
            <div className="w-8 h-8 rounded-full bg-emerald-600 flex items-center justify-center flex-shrink-0">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              </svg>
            </div>
            <p className="text-emerald-800 font-semibold text-sm">
              🔒 خصوصيتك محمية بالكامل. رحلتك سرية تماماً، ونحن لا نقوم بحفظ أو تتبع اختياراتك أو بياناتك.
            </p>
          </div>
        </div>
      </div>

      {/* Wizard */}
      <section className="section-pad" style={{ background: "hsl(210, 20%, 97%)" }}>
        <div className="container-rtl max-w-2xl">
          {/* Progress */}
          <div className="mb-8">
            <div className="flex justify-between text-sm text-muted-foreground mb-3">
              <span>الخطوة {step} من ٣</span>
              <span>{progressPct}٪</span>
            </div>
            <div className="h-2.5 bg-muted rounded-full overflow-hidden">
              <div
                className="h-full rounded-full transition-all duration-700"
                style={{
                  width: `${progressPct}%`,
                  background: "linear-gradient(90deg, hsl(218, 65%, 18%), hsl(204, 72%, 55%))",
                }}
              />
            </div>
            <div className="flex justify-between mt-2">
              {["السؤال الأول", "السؤال الثاني", "خطوتك التالية"].map((label, i) => (
                <span
                  key={label}
                  className={`text-xs transition-colors ${step > i ? "text-navy font-semibold" : "text-muted-foreground"}`}
                >
                  {label}
                </span>
              ))}
            </div>
          </div>

          {/* Step Content */}
          <div className="bg-white rounded-3xl shadow-sm border border-border overflow-hidden">
            {step === 1 && (
              <WizardStep
                stepNum={1}
                question={STEP1_QUESTION}
                choices={STEP1_CHOICES}
                onSelect={handleStep1}
              />
            )}
            {step === 2 && (
              <WizardStep
                stepNum={2}
                question={STEP2_QUESTION}
                choices={STEP2_CHOICES}
                onSelect={handleStep2}
              />
            )}
            {step === 3 && (
              <StepResult answer1={answer1} answer2={answer2} onRestart={restart} />
            )}
          </div>
        </div>
      </section>
    </div>
  );
}

interface WizardStepProps {
  stepNum: number;
  question: string;
  choices: { label: string; value: string }[];
  onSelect: (val: string) => void;
}

function WizardStep({ stepNum, question, choices, onSelect }: WizardStepProps) {
  return (
    <div className="p-8 md:p-10">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-8 h-8 rounded-full bg-navy text-white flex items-center justify-center text-sm font-bold flex-shrink-0">
          {stepNum}
        </div>
        <span className="text-sm text-muted-foreground font-medium">السؤال {stepNum}</span>
      </div>
      <h2 className="text-xl md:text-2xl font-bold text-navy leading-relaxed mb-8">
        {question}
      </h2>
      <div className="grid grid-cols-1 gap-3">
        {choices.map((choice) => (
          <button
            key={choice.value}
            onClick={() => onSelect(choice.value)}
            className="text-right w-full px-6 py-4 rounded-2xl border-2 border-border bg-white hover:border-sky hover:bg-sky/5 active:bg-sky/10 transition-all duration-200 font-semibold text-gray-700 hover:text-navy"
          >
            {choice.label}
          </button>
        ))}
      </div>
    </div>
  );
}

interface StepResultProps {
  answer1: string | null;
  answer2: string | null;
  onRestart: () => void;
}

function StepResult({ answer1, answer2, onRestart }: StepResultProps) {
  const isSerious = answer1 === "daily" || answer2 === "heavy_impact" || answer2 === "moderate_impact";

  return (
    <div className="p-8 md:p-10 text-center">
      <div className="w-16 h-16 rounded-full mx-auto mb-6 flex items-center justify-center text-3xl"
        style={{ background: "linear-gradient(135deg, hsl(42, 60%, 78%), hsl(42, 60%, 68%))" }}>
        {isSerious ? "🌱" : "✨"}
      </div>

      <h2 className="text-2xl md:text-3xl font-black text-navy mb-4">
        {isSerious
          ? "شجاعتك في الاعتراف هي البداية الحقيقية"
          : "أنت على الطريق الصحيح"}
      </h2>

      <p className="text-gray-600 leading-relaxed mb-4 max-w-lg mx-auto">
        {isSerious
          ? "من خبرتنا مع مئات الأشخاص، نعلم أن الاعتراف بالتحدي هو أصعب خطوة وأشجعها. تطبيق رحلة حرية صُمِّم خصيصاً ليرافقك خطوة بخطوة نحو التعافي الحقيقي."
          : "الوعي بما يحدث هو نصف الحل. تطبيق رحلة حرية سيساعدك على بناء عادات صحية وتعزيز مقاومتك الداخلية قبل أن تتفاقم الأمور."}
      </p>

      <p className="text-muted-foreground text-sm mb-8 max-w-md mx-auto">
        التطبيق مجاني تماماً، يعمل بدون إنترنت، ولا يجمع أي بيانات شخصية. 🔒
      </p>

      <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
        <a
          href="/downloads/freedom-journey.apk"
          download
          className="inline-flex items-center gap-3 font-bold text-lg px-8 py-4 rounded-2xl text-white transition-all duration-300 hover:scale-105 hover:shadow-xl"
          style={{ background: "linear-gradient(135deg, hsl(218, 65%, 18%), hsl(204, 72%, 35%))" }}
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M12 15V3m0 12l-4-4m4 4l4-4M2 17l.621 2.485A2 2 0 0 0 4.561 21h14.878a2 2 0 0 0 1.94-1.515L22 17" />
          </svg>
          تحميل تطبيق رحلة حرية للأندرويد (APK)
        </a>
      </div>

      <button
        onClick={onRestart}
        className="mt-6 text-sm text-muted-foreground hover:text-navy transition-colors underline underline-offset-4"
      >
        أعد الاستبيان من البداية
      </button>
    </div>
  );
}
