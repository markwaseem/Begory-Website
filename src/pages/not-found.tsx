export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center p-8">
        <p className="text-6xl mb-4">٤٠٤</p>
        <h1 className="text-2xl font-bold text-gray-900 mb-2">الصفحة غير موجودة</h1>
        <p className="text-gray-500">تأكد من الرابط وحاول مجدداً.</p>
        <a href="/" className="mt-6 inline-block text-blue-600 underline">العودة للرئيسية</a>
      </div>
    </div>
  );
}
