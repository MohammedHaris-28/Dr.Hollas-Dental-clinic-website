import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Calendar, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate, useLocation } from "react-router-dom";
import logo from "@/assets/logo-dental.png";

// Direct page navigation routing setup
const navItems = [
  { label: "Treatments", path: "/treatments" },
  { label: "Doctors", path: "/doctors" },
  { label: "Contact", path: "/contact" },
  { label: "Gallery", path: "/gallery" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0);

  const navigate = useNavigate();
  const location = useLocation();

  const appointmentUrl =
    "https://www.practo.com/shimoga/doctor/akarsh-niranjan-dentist";

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);

      const doc = document.documentElement;
      const totalScroll = doc.scrollHeight - doc.clientHeight;
      const scrollProgress =
        totalScroll > 0 ? (doc.scrollTop / totalScroll) * 100 : 0;

      setProgress(scrollProgress);
    };

    onScroll();

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavigation = (path: string) => {
    setOpen(false);
    navigate(path);
  };

  const isActive = (path: string) => location.pathname === path;

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled ? "py-2.5 sm:py-2" : "py-4 sm:py-3.5"
      }`}
    >
      {/* Ultra-wide container with crisp horizontal edge alignment */}
      <div className="mx-auto max-w-[1420px] px-3 sm:px-6">
        <motion.nav
          initial={{ y: -12, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className={`flex items-center justify-between rounded-2xl px-4 sm:px-6 py-3 sm:py-2 border transition-all duration-500 ${
            scrolled
              ? "bg-white/85 backdrop-blur-xl border-slate-200/80 shadow-lg shadow-slate-900/5"
              : "bg-white/60 backdrop-blur-md border-slate-100/70"
          }`}
        >
          {/* Brand Identity / Logo */}
          <div
            onClick={() => {
              if (location.pathname !== "/") navigate("/");
              else window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="flex items-center gap-2.5 cursor-pointer group select-none"
          >
            <div className="relative w-11 h-11 sm:w-10 sm:h-10 rounded-xl overflow-hidden bg-white border border-slate-200 shadow-sm transition-all duration-300 group-hover:scale-[1.03]">
              <img
                src={logo}
                alt="Dr. Holla's Wide Smiles Dental Clinic Logo"
                className="w-full h-full object-contain p-1"
              />
            </div>

            <div className="flex flex-col">
              <div className="flex items-center gap-1">
                <span className="font-black text-base sm:text-base text-[#111827] tracking-tight leading-none">
                  Dr. Holla's
                </span>
                <span className="font-extrabold italic text-base sm:text-base text-[#FF5500] tracking-tight leading-none">
                  Wide Smiles
                </span>
              </div>
              <span className="text-[9px] sm:text-[9px] font-bold text-slate-500 tracking-widest uppercase mt-0.5">
                Dental Clinic & Implant Center
              </span>
            </div>
          </div>

          {/* Desktop Navigation Link Pill */}
          <div className="hidden md:flex items-center gap-1 bg-slate-100/80 border border-slate-200/70 p-1 rounded-full">
            {navItems.map((item) => {
              const active = isActive(item.path);
              return (
                <button
                  key={item.label}
                  onClick={() => handleNavigation(item.path)}
                  className={`px-4 py-1.5 text-xs font-bold rounded-full transition-all duration-200 uppercase tracking-wider ${
                    active
                      ? "bg-[#111827] text-white shadow-sm"
                      : "text-slate-600 hover:text-[#FF5500] hover:bg-white"
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </div>

          {/* Desktop Call to Actions */}
          <div className="hidden md:flex items-center gap-2.5">
            <button
              onClick={() => handleNavigation("/review")}
              className={`px-4 h-9 text-xs font-bold border rounded-full transition-all duration-200 uppercase tracking-wider flex items-center gap-1.5 group active:scale-[0.98] ${
                isActive("/review")
                  ? "bg-[#FF5500] text-white border-[#FF5500]"
                  : "bg-[#FF5500]/5 hover:bg-[#FF5500]/10 border-[#FF5500]/20 text-[#FF5500]"
              }`}
            >
              <Star
                size={13}
                className="fill-amber-400 text-amber-400 group-hover:rotate-12 transition-transform"
              />
              <span>Leave a Review</span>
            </button>

            <Button
              onClick={() =>
                window.open(appointmentUrl, "_blank", "noopener,noreferrer")
              }
              className="rounded-full px-5 h-9 bg-[#111827] hover:bg-slate-800 text-white font-bold text-xs tracking-wider uppercase flex items-center gap-1.5 shadow-md shadow-slate-900/10 border-0 group active:scale-[0.98] transition-all"
            >
              <Calendar
                size={13}
                className="text-[#FF5500] group-hover:rotate-12 transition-transform"
              />
              <span>Book Appointment</span>
            </Button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            className="md:hidden p-2.5 rounded-xl text-slate-700 hover:bg-slate-100 border border-transparent hover:border-slate-200 transition-all"
            onClick={() => setOpen(!open)}
            aria-label="Toggle Navigation Options"
          >
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </motion.nav>

        {/* Mobile Navigation Dropdown Menu */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2, ease: "easeInOut" }}
              className="md:hidden mt-2 rounded-2xl bg-white/95 backdrop-blur-xl border border-slate-200 shadow-xl overflow-hidden p-3"
            >
              <div className="flex flex-col gap-1">
                {navItems.map((item) => {
                  const active = isActive(item.path);
                  return (
                    <button
                      key={item.label}
                      onClick={() => handleNavigation(item.path)}
                      className={`text-left px-4 py-3 rounded-xl text-xs font-bold transition-all uppercase tracking-wider ${
                        active
                          ? "bg-[#111827] text-white"
                          : "text-slate-600 hover:text-[#FF5500] hover:bg-slate-50"
                      }`}
                    >
                      {item.label}
                    </button>
                  );
                })}

                {/* Mobile Extra Navigation Integration */}
                <div className="mt-2 pt-2 border-t border-slate-100 space-y-2">
                  <button
                    onClick={() => handleNavigation("/review")}
                    className={`w-full rounded-xl h-11 border font-bold text-xs tracking-wider uppercase flex items-center justify-center gap-2 transition-all ${
                      isActive("/review")
                        ? "bg-[#FF5500] text-white border-[#FF5500]"
                        : "bg-[#FF5500]/5 hover:bg-[#FF5500]/10 border-[#FF5500]/20 text-[#FF5500]"
                    }`}
                  >
                    <Star
                      size={14}
                      className="fill-amber-400 text-amber-400"
                    />
                    <span>Leave a Review</span>
                  </button>

                  <Button
                    onClick={() => {
                      setOpen(false);
                      window.open(
                        appointmentUrl,
                        "_blank",
                        "noopener,noreferrer"
                      );
                    }}
                    className="w-full rounded-xl h-11 bg-[#111827] hover:bg-slate-800 text-white font-bold text-xs tracking-wider uppercase flex items-center justify-center gap-2 border-0"
                  >
                    <Calendar size={14} className="text-[#FF5500]" />
                    <span>Book Appointment</span>
                  </Button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Dynamic Scroll Progress Bar */}
      <div
        className="absolute bottom-0 left-0 h-[2.5px] bg-[#FF5500]"
        style={{
          width: `${progress}%`,
          transition: "width 0.15s ease-out",
        }}
      />
    </header>
  );
};

export default Navbar;