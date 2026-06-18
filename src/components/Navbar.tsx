import { useState, useEffect } from "react";
import { useLocation } from "wouter";

const navLinks = [
  { href: "/", label: "الرئيسية" },
  { href: "/courses", label: "الكورسات" },
  { href: "/freedom-journey", label: "رحلة حرية" },
  { href: "/videos", label: "مكتبة الفيديوهات" },
];

export default function Navbar() {
  const [location, navigate] = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  return (
    <header
      className={`fixed top-0 right-0 left-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-md"
          : "bg-transparent"
      }`}
    >
      <nav className="container-rtl flex items-center justify-between h-16 md:h-20">
        {/* Logo / Brand */}
        <button
          onClick={() => navigate("/")}
          className="flex items-center gap-3 group"
        >
          <img
            src="/begory-logo.png"
            alt="شعار بي جوري"
            className="w-11 h-11 rounded-full object-cover shadow-md group-hover:shadow-lg transition-shadow"
          />
          <div className="text-right">
            <p className="font-bold text-lg leading-none text-navy">بي جوري</p>
            <p className="text-[10px] text-sky leading-none mt-0.5 hidden sm:block">
              للصحة النفسية ومكافحة الإدمان
            </p>
          </div>
        </button>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <li key={link.href}>
              <button
                onClick={() => navigate(link.href)}
                className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-200 ${
                  location === link.href
                    ? "bg-navy text-white shadow-sm"
                    : "text-navy hover:bg-navy/10"
                }`}
              >
                {link.label}
              </button>
            </li>
          ))}
        </ul>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2 rounded-lg hover:bg-navy/10 transition-colors"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="القائمة"
        >
          <span
            className={`block w-6 h-0.5 bg-navy transition-transform duration-300 ${
              menuOpen ? "rotate-45 translate-y-2" : ""
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-navy transition-opacity duration-300 ${
              menuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-navy transition-transform duration-300 ${
              menuOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          />
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 bg-white/98 backdrop-blur-md border-t border-border ${
          menuOpen ? "max-h-80 py-4" : "max-h-0"
        }`}
      >
        <ul className="container-rtl flex flex-col gap-1">
          {navLinks.map((link) => (
            <li key={link.href}>
              <button
                onClick={() => navigate(link.href)}
                className={`w-full text-right px-4 py-3 rounded-lg text-base font-semibold transition-all ${
                  location === link.href
                    ? "bg-navy text-white"
                    : "text-navy hover:bg-navy/10"
                }`}
              >
                {link.label}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
