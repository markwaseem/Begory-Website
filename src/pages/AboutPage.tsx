import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, ShieldCheck, HeartHandshake } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="relative min-h-screen bg-white overflow-hidden" style={{ direction: 'rtl' }}>
      
      {/* Background Faded Logo */}
      <div className="fixed inset-0 z-0 flex items-center justify-center opacity-5 pointer-events-none">
        <img 
          src="/begory-logo.png" 
          alt="BeGory Background" 
          className="w-3/4 md:w-1/2 object-contain"
        />
      </div>

      {/* Section 1: Hero Introduction */}
      <section className="relative z-10 min-h-[80vh] flex flex-col items-center justify-center px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <h1 className="text-4xl md:text-6xl font-bold text-navy mb-6">
            عن <span className="text-gold">بي جوري</span>
          </h1>
          <p className="text-lg md:text-2xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            خدمة تهدف إلى زيادة الوعي النفسي ومحاربة الإدمان والإدمانات الخفية، 
            لنساعدك على تغيير ما يمكن تغييره، والتصالح مع ما لا يمكن تغييره.
          </p>
        </motion.div>
      </section>

      {/* Section 2: Promotional/Introductory Video */}
      <section className="relative z-10 py-20 px-4 bg-gray-50/80">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-4xl mx-auto"
        >
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-navy mb-4">تعرف علينا أكثر</h2>
            <div className="w-20 h-1 bg-gold mx-auto rounded-full"></div>
          </div>
          
          {/* Video Container */}
          <div className="relative w-full aspect-video rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
            <iframe 
              className="absolute top-0 left-0 w-full h-full"
              src="https://www.youtube.com/embed/YOUR_VIDEO_ID_HERE" 
              title="فيديو تعريفي بخدمة بي جوري"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen
            ></iframe>
          </div>
        </motion.div>
      </section>

      {/* Section 3: Our Goals (تعليم، وقاية، علاج) */}
      <section className="relative z-10 py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">أهداف خدمتنا</h2>
            <p className="text-gray-600 text-lg">ثلاثة ركائز أساسية نبني عليها رحلة التعافي</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1: التعليم */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow text-center group"
            >
              <div className="w-20 h-20 mx-auto bg-blue-50 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <BookOpen className="w-10 h-10 text-navy" />
              </div>
              <h3 className="text-2xl font-bold text-navy mb-4">تعليم</h3>
              <p className="text-gray-600 leading-relaxed">
                نشر الوعي النفسي وتصحيح المفاهيم المغلوطة حول الإدمان والصحة النفسية من خلال محتوى علمي وموثوق.
              </p>
            </motion.div>

            {/* Card 2: الوقاية */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow text-center group"
            >
              <div className="w-20 h-20 mx-auto bg-yellow-50 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <ShieldCheck className="w-10 h-10 text-gold" />
              </div>
              <h3 className="text-2xl font-bold text-navy mb-4">وقاية</h3>
              <p className="text-gray-600 leading-relaxed">
                بناء حواجز حماية نفسية استباقية وتقديم أدوات عملية لحماية الشباب والمجتمع من الوقوع في فخ الإدمانات.
              </p>
            </motion.div>

            {/* Card 3: العلاج */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow text-center group"
            >
              <div className="w-20 h-20 mx-auto bg-red-50 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <HeartHandshake className="w-10 h-10 text-navy" />
              </div>
              <h3 className="text-2xl font-bold text-navy mb-4">علاج</h3>
              <p className="text-gray-600 leading-relaxed">
                توفير مجموعات مساندة وبرامج تعافي متخصصة (مثل رحلة حرية) لدعم المتألمين في طريقهم نحو الحرية التامة.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
 }