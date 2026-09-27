import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  ChevronsRight,
  Clock,
  MapPin,
  ShieldCheck,
  Sparkles,
  Stethoscope,
  Phone,
} from "lucide-react";




import img2 from "@/assets/img 2.webp";
import img3 from "@/assets/img 3.webp";
import img4 from "@/assets/img 4.webp";


const HERO_SLIDES = [
  {
    id: "slide-1",
    eyebrow: "Dr. Holla's Wide Smiles",
    title: "Modern dentistry.",
    highlight: "Personalised care.",
    description:
      "A contemporary dental clinic focused on comfortable treatment, advanced dentistry, and long-term oral health for every smile.",
    image: img2,
    label: "Wide Smiles Dental Clinic & Implant Center",
    location: "Shivamogga, Karnataka",
  },
  {
    id: "slide-2",
    eyebrow: "Advanced Care",
    title: "State-of-the-art",
    highlight: "clinical facilities.",
    description:
      "Equipped with advanced diagnostic tools and comfortable treatment suites to ensure a smooth, gentle dental experience.",
    image: img3,
    label: "Modern Treatment Suites",
    location: "Shivamogga, Karnataka",
  },
  {
    id: "slide-3",
    eyebrow: "Patient First",
    title: "Comfortable &",
    highlight: "painless procedures.",
    description:
      "From preventive checkups to complex restorations, we prioritize gentle techniques and patient transparency every step of the way.",
    image: img4,
    label: "Gentle Dental Care",
    location: "Shivamogga, Karnataka",
  },
 
];

const trustItems = [
  {
    icon: ShieldCheck,
    title: "Patient-first care",
    text: "Comfort & clarity",
  },
  {
    icon: Stethoscope,
    title: "Comprehensive dentistry",
    text: "Multiple treatment needs",
  },
  {
    icon: Sparkles,
    title: "Modern approach",
    text: "Technology-led care",
  },
];

export default function DentalHero() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Slide to Book States
  const trackRef = useRef<HTMLDivElement>(null);
  const [dragX, setDragX] = useState(0);
  const [maxDrag, setMaxDrag] = useState(200);
  const [isUnlocked, setIsUnlocked] = useState(false);

  const slide = HERO_SLIDES[activeSlide];

  // Auto-slide every 4 seconds
  useEffect(() => {
    if (isPaused) return;

    const interval = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % HERO_SLIDES.length);
    }, 4000);

    return () => {
      window.clearInterval(interval);
    };
  }, [isPaused]);

  // Calculate max drag distance for "Slide to Book"
  useEffect(() => {
    const updateMaxDrag = () => {
      if (trackRef.current) {
        const handleWidth = 48; // width of handle button
        const padding = 8; // total padding
        setMaxDrag(trackRef.current.clientWidth - handleWidth - padding);
      }
    };

    updateMaxDrag();
    window.addEventListener("resize", updateMaxDrag);

    return () => {
      window.removeEventListener("resize", updateMaxDrag);
    };
  }, []);

  const nextSlide = () => {
    setActiveSlide((current) => (current + 1) % HERO_SLIDES.length);
  };

  const previousSlide = () => {
    setActiveSlide(
      (current) => (current - 1 + HERO_SLIDES.length) % HERO_SLIDES.length
    );
  };

  // WhatsApp Booking Redirection
  const handleBookAppointment = () => {
    const phoneNumber = "918618955829";
    const message = encodeURIComponent(
      "Hello Dr. Holla's Wide Smiles Clinic, I would like to book an appointment."
    );
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank");
  };

  const handleDragEnd = () => {
    if (dragX >= maxDrag * 0.85) {
      setDragX(maxDrag);
      setIsUnlocked(true);
      handleBookAppointment();

      // Reset slider state after redirection delay
      setTimeout(() => {
        setDragX(0);
        setIsUnlocked(false);
      }, 1500);
    } else {
      setDragX(0);
    }
  };

  return (
    <div className="min-h-screen bg-[#FAFAFA] text-[#111827]">


      <main>
        {/* =========================================================
            HERO WITH ULTRA-LIGHT GRADIENT & HIGH IMAGE VISIBILITY
        ========================================================== */}
        <section
          className="relative min-h-[100svh] w-full overflow-hidden bg-white"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Background Slider */}
          <AnimatePresence mode="wait">
            <motion.div
              key={slide.id}
              initial={{ opacity: 0, scale: 1.02 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.99 }}
              transition={{
                duration: 0.8,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="absolute inset-0 z-0"
            >
              <img
                src={slide.image}
                alt={slide.label}
                className="h-full w-full object-cover object-center"
              />

              {/* Minimal light overlays to ensure maximum background image visibility */}
              <div className="absolute inset-0 bg-gradient-to-r from-white/70 via-white/20 to-transparent lg:w-[60%]" />
              <div className="absolute inset-0 bg-gradient-to-t from-white/30 via-transparent to-white/10 lg:hidden" />
            </motion.div>
          </AnimatePresence>

          {/* Hero Content Layer with Generous Navbar Padding */}
          <div className="relative z-10 mx-auto flex min-h-[100svh] w-full max-w-[1440px] flex-col justify-between px-5 pb-12 pt-36 sm:px-8 sm:pt-40 lg:px-12 lg:pb-20 lg:pt-44 xl:px-16">
            <div className="grid w-full grid-cols-1 items-end gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14 xl:gap-20">
              {/* LEFT — CONTENT */}
              <motion.div
                initial="hidden"
                animate="visible"
                className="order-1"
              >
                {/* Small label */}
                <motion.div
                  variants={{
                    hidden: { opacity: 0, y: 15 },
                    visible: {
                      opacity: 1,
                      y: 0,
                      transition: { duration: 0.6 },
                    },
                  }}
                  className="mb-6"
                >
                  <div className="inline-flex items-center gap-2.5 rounded-full border border-slate-200/80 bg-white/90 px-3.5 py-2 shadow-sm backdrop-blur-md">
                    <span className="relative flex h-2 w-2">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#FF5500] opacity-50" />
                      <span className="relative h-2 w-2 rounded-full bg-[#FF5500]" />
                    </span>

                    <span className="text-[9px] font-black uppercase tracking-[0.18em] text-slate-700 sm:text-[10px]">
                      Wide Smiles Dental • Shivamogga
                    </span>
                  </div>
                </motion.div>

                {/* Main headline */}
                <motion.div
                  variants={{
                    hidden: { opacity: 0, y: 25 },
                    visible: {
                      opacity: 1,
                      y: 0,
                      transition: {
                        duration: 0.75,
                        ease: [0.16, 1, 0.3, 1],
                      },
                    },
                  }}
                >
                  <h1 className="max-w-[760px] text-[2.8rem] font-black leading-[0.98] tracking-[-0.055em] text-[#111827] sm:text-5xl md:text-6xl lg:text-[4.6rem] xl:text-[5.2rem]">
                    Your smile,
                    <br />
                    <span className="text-[#FF5500]">our priority.</span>
                  </h1>

                  <div className="mt-5 flex items-center gap-3">
                    <div className="h-px w-10 bg-[#FF5500]" />
                    <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-slate-600">
                      Dr. Holla's Wide Smiles
                    </span>
                  </div>
                </motion.div>

                {/* Description */}
                <motion.p
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: {
                      opacity: 1,
                      y: 0,
                      transition: {
                        duration: 0.7,
                        delay: 0.08,
                      },
                    },
                  }}
                  className="mt-7 max-w-[610px] text-[15px] font-medium leading-7 text-slate-700 sm:text-base lg:text-[17px]"
                >
                  Thoughtfully planned dental care combining clinical expertise,
                  modern technology, and a comfortable patient experience — from
                  everyday dental needs to advanced restorative and implant care.
                </motion.p>

                {/* CTA ACTIONS (Interactive Slide to Book + Call with Identical Height h-14) */}
                <motion.div
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: {
                      opacity: 1,
                      y: 0,
                      transition: {
                        duration: 0.7,
                        delay: 0.14,
                      },
                    },
                  }}
                  className="mt-8 flex w-full flex-col items-stretch gap-3 sm:max-w-[500px] sm:flex-row sm:items-center"
                >
                  {/* SLIDE TO BOOK BUTTON — h-14 */}
                  <div
                    ref={trackRef}
                    className="relative flex h-14 w-full flex-1 shrink-0 items-center rounded-2xl border border-slate-200/80 bg-white p-1 shadow-md select-none overflow-hidden"
                  >
                    {/* Background Progress Fill */}
                    <div
                      className="absolute left-0 top-0 bottom-0 bg-[#FF5500]/10 transition-all"
                      style={{ width: `${dragX + 48}px` }}
                    />

                    {/* Sliding Handle */}
                    <motion.div
                      drag="x"
                      dragConstraints={{ left: 0, right: maxDrag }}
                      dragElastic={0.05}
                      dragMomentum={false}
                      onDrag={(_, info) =>
                        setDragX(Math.max(0, Math.min(info.offset.x, maxDrag)))
                      }
                      onDragEnd={handleDragEnd}
                      animate={{ x: dragX }}
                      className="z-10 flex h-12 w-12 cursor-grab items-center justify-center rounded-xl bg-[#FF5500] text-white shadow-md active:cursor-grabbing hover:bg-[#e94d00] transition-colors"
                    >
                      <ChevronsRight className="h-6 w-6 animate-pulse" />
                    </motion.div>

                    {/* Text Label */}
                    <span className="pointer-events-none absolute inset-0 flex items-center justify-center pl-6 text-xs font-black tracking-wider uppercase text-[#111827]">
                      {isUnlocked ? "Redirecting..." : "Slide to Book"}
                    </span>
                  </div>

                  {/* CALL CLINIC BUTTON — Matching h-14 Height */}
                  <a
                    href="tel:+917483822917"
                    className="flex h-14 w-full flex-2  items-center justify-center rounded-2xl border border-slate-200/80 bg-white/90 px-6 text-xs font-black text-[#111827] shadow-md backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-orange-300 hover:text-[#FF5500] hover:shadow-lg sm:w-auto"
                  >
                    <Phone className="mr-4 h-6 w-4 text-[#FF5500]" />
                    Call the Clinic
                  </a>
                </motion.div>

                {/* Trust indicators */}
                <motion.div
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: {
                      opacity: 1,
                      y: 0,
                      transition: {
                        duration: 0.7,
                        delay: 0.2,
                      },
                    },
                  }}
                  className="mt-9 grid max-w-[650px] grid-cols-1 gap-3 border-t border-slate-200/80 pt-6 sm:grid-cols-3 sm:gap-0"
                >
                  {trustItems.map((item, index) => {
                    const Icon = item.icon;

                    return (
                      <div
                        key={item.title}
                        className={`flex items-center gap-3 ${
                          index !== 0
                            ? "border-slate-200/80 sm:border-l sm:pl-5"
                            : ""
                        }`}
                      >
                        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-orange-50/90 shadow-sm">
                          <Icon className="h-4 w-4 text-[#FF5500]" />
                        </div>

                        <div>
                          <p className="text-[10px] font-black text-[#111827]">
                            {item.title}
                          </p>
                          <p className="mt-0.5 text-[9px] font-semibold text-slate-600">
                            {item.text}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </motion.div>

                {/* Location / timing */}
                <motion.div
                  variants={{
                    hidden: { opacity: 0 },
                    visible: {
                      opacity: 1,
                      transition: {
                        duration: 0.6,
                        delay: 0.3,
                      },
                    },
                  }}
                  className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 text-[10px] font-bold uppercase tracking-[0.12em] text-slate-600"
                >
                  <span className="flex items-center gap-1.5">
                    <MapPin className="h-3.5 w-3.5 text-[#FF5500]" />
                    Shivamogga, Karnataka
                  </span>

                  <span className="hidden h-3 w-px bg-slate-300 sm:block" />

                  <span className="flex items-center gap-1.5">
                    <Clock className="h-3.5 w-3.5 text-[#FF5500]" />
                    Mon – Sat
                  </span>
                </motion.div>
              </motion.div>

              {/* RIGHT — SLIDER CONTROLS ONLY */}
              <div className="order-2 flex items-center justify-start lg:justify-end">
                <div className="flex items-center gap-4 rounded-2xl border border-slate-200/80 bg-white/80 p-3 shadow-md backdrop-blur-md">
                  {/* Indicators */}
                  <div className="flex items-center gap-2">
                    {HERO_SLIDES.map((item, index) => (
                      <button
                        key={item.id}
                        type="button"
                        onClick={() => setActiveSlide(index)}
                        aria-label={`Go to slide ${index + 1}`}
                        className="overflow-hidden rounded-full py-1.5"
                      >
                        <span
                          className={`block h-2 rounded-full transition-all duration-500 ${
                            activeSlide === index
                              ? "w-8 bg-[#FF5500]"
                              : "w-2 bg-slate-300 hover:bg-slate-400"
                          }`}
                        />
                      </button>
                    ))}
                  </div>

                  {/* Navigation Arrow Buttons */}
                  <div className="flex gap-2">
                    <button
                      type="button"
                      onClick={previousSlide}
                      aria-label="Previous slide"
                      className="flex h-9 w-9 items-center justify-center rounded-xl border border-slate-200 bg-white text-[#111827] shadow-sm transition-all hover:bg-slate-50 active:scale-95"
                    >
                      <ChevronLeft className="h-4 w-4" />
                    </button>

                    <button
                      type="button"
                      onClick={nextSlide}
                      aria-label="Next slide"
                      className="flex h-9 w-9 items-center justify-center rounded-xl border border-slate-200 bg-white text-[#111827] shadow-sm transition-all hover:bg-slate-50 active:scale-95"
                    >
                      <ChevronRight className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom scroll indicator */}
          <div className="absolute bottom-5 left-1/2 z-10 hidden -translate-x-1/2 items-center gap-3 text-[8px] font-black uppercase tracking-[0.22em] text-slate-400 lg:flex">
            <span className="h-px w-8 bg-slate-300" />
            Discover our care
            <span className="h-px w-8 bg-slate-300" />
          </div>
        </section>
      </main>


    </div>
  );
}