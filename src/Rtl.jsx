import React from "react";
import { Home, User, Settings, Globe, CreditCard, ChevronLeft } from "lucide-react";

// Simple Card
const RTLCard = ({ title, description }) => (
  <div className="bg-white rounded-2xl shadow-sm p-6 text-right">
    <h3 className="text-slate-800 font-extrabold text-lg">{title}</h3>
    <p className="text-sm text-slate-600 mt-1 leading-relaxed">{description}</p>
  </div>
);

export default function RTL() {
  return (
    <div dir="rtl">
      {/* Hero */}
      <div className="bg-gradient-to-br from-indigo-500 to-sky-500 rounded-2xl shadow-sm p-10 relative text-white">
        <h1 className="text-3xl font-extrabold">مرحبا بك في لوحة التحكم RTL</h1>
        <p className="mt-2 text-white/90 text-sm leading-relaxed">
          هذه الصفحة تعرض لك كيف تبدو الواجهة عند استخدام تخطيط من اليمين إلى اليسار.
        </p>
        <button className="mt-5 inline-flex items-center gap-2 bg-white text-slate-900 px-5 py-2 rounded-xl font-semibold shadow-sm hover:bg-slate-100 transition-colors">
          <Globe size={16} /> تبديل اللغة
        </button>

        <div className="absolute left-10 bottom-5 opacity-70">
          <Settings size={120} className="text-white" />
        </div>
      </div>

      {/* Cards Row */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
        <RTLCard
          title="الصفحة الرئيسية"
          description="واجهة مستخدم واضحة وسهلة للتنقل باستخدام التخطيط RTL."
        />
        <RTLCard
          title="إدارة الحساب"
          description="تحديث معلوماتك الشخصية، كلمة المرور، والإعدادات بسهولة."
        />
        <RTLCard
          title="الفواتير والمدفوعات"
          description="إدارة بطاقات الدفع الخاصة بك وتتبع جميع الفواتير."
        />
      </div>
    </div>
  );
}
