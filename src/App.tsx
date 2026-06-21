import { Switch, Route } from "wouter";
import Navbar from "./components/Navbar"; // تأكد من صحة مسار الاستيراد الخاص بالـ Navbar
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import DonatePage from "./pages/DonatePage";
import CoursesPage from "./pages/CoursesPage";
import FreedomJourneyPage from "./pages/FreedomJourneyPage";

function App() {
  return (
    <div className="min-h-screen bg-[#0B132B] text-white font-sans antialiased">
      {/* الـ Navbar هنا فوق السويتش مباشرة ليظهر في كل الصفحات بشكل ثابت */}
      <Navbar />

      {/* محتوى الصفحات المتغيرة */}
      <main>
        <Switch>
          <Route path="/" component={HomePage} />
          <Route path="/about" component={AboutPage} />
          <Route path="/courses" component={CoursesPage} />
          <Route path="/freedom-journey" component={FreedomJourneyPage} />
          <Route path="/donate" component={DonatePage} />
          
          {/* صفحة الـ 404 في النهاية دائماً */}
          <Route>
            <div className="flex h-[80vh] items-center justify-center">
              <h1 className="text-2xl font-bold">الصفحة غير موجودة</h1>
            </div>
          </Route>
        </Switch>
      </main>
    </div>
  );
}

export default App;