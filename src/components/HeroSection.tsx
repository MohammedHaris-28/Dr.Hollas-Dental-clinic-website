import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ArrowUpRight,
  Calendar,
  ChevronLeft,
  ChevronRight,
  Clock,
  MapPin,
  ShieldCheck,
  Sparkles,
  Stethoscope,
  Star,
  Phone,
} from "lucide-react";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import clinicImage from "@/assets/img 2.webp";
import doctorImage from "@/assets/img 5.webp";

const HERO_SLIDES = [
  {
    id: "clinic",
    eyebrow: "Dr. Holla's Wide Smiles",
    title: "Modern dentistry.",
    highlight: "Personalised care.",
    description:
      "A contemporary dental clinic focused on comfortable treatment, advanced dentistry, and long-term oral health for every smile.",
    image: clinicImage,
    label: "Wide Smiles Dental Clinic & Implant Center",
    location: "Shivamogga, Karnataka",
  },
  {
    id: "doctor",
    eyebrow: "Expert Dental Care",
    title: "Confident smiles",
    highlight: "start with expert care.",
    description:
      "From preventive and restorative dentistry to implants, orthodontics, and smile-focused treatments, your care begins with an individual clinical assessment.",
    image: doctorImage,
    label: "Dr. Holla's Wide Smiles Dental Clinic",
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

  const slide = HERO_SLIDES[activeSlide];

  useEffect(() => {
    if (isPaused) return;

    const interval = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % HERO_SLIDES.length);
    }, 5000);

    return () => window.clearInterval(interval);
  }, [isPaused]);

  const nextSlide = () => {
    setActiveSlide((current) => (current + 1) % HERO_SLIDES.length);
  };

  const previousSlide = () => {
    setActiveSlide(
      (current) => (current - 1 + HERO_SLIDES.length) % HERO_SLIDES.length
    );
  };

  return (
    <div className="min-h-screen bg-[#FAFAFA] text-[#111827]">
      <Navbar />

      <main>
        {/* =========================================================
            HERO
        ========================================================== */}
        <section className="relative min-h-[100svh] overflow-hidden bg-[#FAFAFA]">
          {/* Background atmosphere */}
          <div className="pointer-events-none absolute inset-0 overflow-hidden">
            <div className="absolute -left-[18%] top-[18%] h-[520px] w-[520px] rounded-full bg-orange-100/70 blur-[130px]" />

            <div className="absolute -right-[12%] top-[5%] h-[620px] w-[620px] rounded-full bg-blue-100/60 blur-[150px]" />

            <div className="absolute bottom-[-25%] left-[35%] h-[500px] w-[500px] rounded-full bg-slate-100 blur-[130px]" />

            {/* Subtle editorial grid */}
            <div
              className="absolute inset-0 opacity-[0.028]"
              style={{
                backgroundImage:
                  "linear-gradient(#111827 1px, transparent 1px), linear-gradient(90deg, #111827 1px, transparent 1px)",
                backgroundSize: "48px 48px",
              }}
            />
          </div>

          <div className="relative z-10 mx-auto flex min-h-[100svh] w-full max-w-[1440px] items-center px-5 pb-12 pt-28 sm:px-8 lg:px-12 lg:py-20 xl:px-16">
            <div className="grid w-full grid-cols-1 items-center gap-12 lg:grid-cols-[1.02fr_0.98fr] lg:gap-14 xl:gap-20">
              {/* =====================================================
                  LEFT — CONTENT
              ====================================================== */}
              <motion.div
                initial="hidden"
                animate="visible"
                className="order-2 lg:order-1"
              >
                {/* Small premium label */}
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
                  <div className="inline-flex items-center gap-2.5 rounded-full border border-slate-200 bg-white/80 px-3.5 py-2 shadow-sm backdrop-blur-xl">
                    <span className="relative flex h-2 w-2">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#FF5500] opacity-50" />
                      <span className="relative h-2 w-2 rounded-full bg-[#FF5500]" />
                    </span>

                    <span className="text-[9px] font-black uppercase tracking-[0.18em] text-slate-600 sm:text-[10px]">
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
                  <h1 className="max-w-[760px] text-[3rem] font-black leading-[0.96] tracking-[-0.055em] text-[#111827] sm:text-5xl md:text-6xl lg:text-[4.6rem] xl:text-[5.2rem]">
                    Your smile,
                    <br />
                    <span className="text-[#FF5500]">our priority.</span>
                  </h1>

                  <div className="mt-5 flex items-center gap-3">
                    <div className="h-px w-10 bg-[#FF5500]" />
                    <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-slate-400">
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
                  className="mt-7 max-w-[610px] text-[15px] leading-7 text-slate-500 sm:text-base lg:text-[17px]"
                >
                  Thoughtfully planned dental care combining clinical
                  expertise, modern technology, and a comfortable patient
                  experience — from everyday dental needs to advanced
                  restorative and implant care.
                </motion.p>

                {/* CTA buttons */}
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
                  className="mt-8 flex flex-col gap-3 sm:flex-row"
                >
                  <Link
                    to="/contact"
                    className="group inline-flex h-14 items-center justify-center rounded-2xl bg-[#FF5500] px-7 text-xs font-black text-white shadow-[0_16px_35px_rgba(255,85,0,0.2)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#e94d00] hover:shadow-[0_20px_40px_rgba(255,85,0,0.28)]"
                  >
                    <Calendar className="mr-2.5 h-4 w-4" />
                    Book an Appointment
                    <ArrowUpRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </Link>

                  <a
                    href="tel:+918618955829"
                    className="inline-flex h-14 items-center justify-center rounded-2xl border border-slate-200 bg-white px-7 text-xs font-black text-[#111827] shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-orange-200 hover:text-[#FF5500] hover:shadow-md"
                  >
                    <Phone className="mr-2 h-4 w-4" />
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
                  className="mt-9 grid max-w-[650px] grid-cols-1 gap-3 border-t border-slate-200 pt-6 sm:grid-cols-3 sm:gap-0"
                >
                  {trustItems.map((item, index) => {
                    const Icon = item.icon;

                    return (
                      <div
                        key={item.title}
                        className={`flex items-center gap-3 ${
                          index !== 0
                            ? "border-slate-200 sm:border-l sm:pl-5"
                            : ""
                        }`}
                      >
                        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-orange-50">
                          <Icon className="h-4 w-4 text-[#FF5500]" />
                        </div>

                        <div>
                          <p className="text-[10px] font-black text-[#111827]">
                            {item.title}
                          </p>
                          <p className="mt-0.5 text-[9px] font-medium text-slate-400">
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
                  className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 text-[10px] font-bold uppercase tracking-[0.12em] text-slate-400"
                >
                  <span className="flex items-center gap-1.5">
                    <MapPin className="h-3.5 w-3.5 text-[#FF5500]" />
                    Shivamogga, Karnataka
                  </span>

                  <span className="hidden h-3 w-px bg-slate-200 sm:block" />

                  <span className="flex items-center gap-1.5">
                    <Clock className="h-3.5 w-3.5 text-[#FF5500]" />
                    Mon – Sat
                  </span>
                </motion.div>
              </motion.div>

              {/* =====================================================
                  RIGHT — VISUAL STORYTELLING
              ====================================================== */}
              <motion.div
                initial={{ opacity: 0, x: 35 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 1,
                  delay: 0.15,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="order-1 flex justify-center lg:order-2 lg:justify-end"
              >
                <div
                  className="relative w-full max-w-[520px]"
                  onMouseEnter={() => setIsPaused(true)}
                  onMouseLeave={() => setIsPaused(false)}
                >
                  {/* Decorative background shape */}
                  <div className="absolute -right-6 top-10 h-[82%] w-[85%] rounded-[42px] bg-[#FF5500]/[0.055]" />

                  <div className="absolute -bottom-7 -left-7 h-32 w-32 rounded-full border border-orange-200/50" />

                  {/* Main glass frame */}
                  <div className="relative rounded-[38px] border border-white bg-white/70 p-2.5 shadow-[0_35px_90px_-25px_rgba(15,23,42,0.28)] backdrop-blur-xl sm:p-3">
                    <div className="relative aspect-[0.9/1] overflow-hidden rounded-[30px] bg-slate-900">
                      <AnimatePresence mode="wait">
                        <motion.div
                          key={slide.id}
                          initial={{
                            opacity: 0,
                            scale: 1.06,
                          }}
                          animate={{
                            opacity: 1,
                            scale: 1,
                          }}
                          exit={{
                            opacity: 0,
                            scale: 0.98,
                          }}
                          transition={{
                            duration: 0.9,
                            ease: [0.16, 1, 0.3, 1],
                          }}
                          className="absolute inset-0"
                        >
                          <img
                            src={slide.image}
                            alt={slide.label}
                            className="h-full w-full object-cover"
                          />

                          {/* Image overlays */}
                          <div className="absolute inset-0 bg-gradient-to-t from-[#111827]/95 via-[#111827]/15 to-transparent" />

                          <div className="absolute inset-x-0 top-0 h-36 bg-gradient-to-b from-black/25 to-transparent" />

                          {/* Top label */}
                          <div className="absolute left-5 right-5 top-5 flex items-center justify-between">
                            <span className="rounded-full border border-white/20 bg-black/20 px-3.5 py-2 text-[8px] font-black uppercase tracking-[0.17em] text-white backdrop-blur-md">
                              {slide.eyebrow}
                            </span>

                            <div className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-black/20 backdrop-blur-md">
                              <Sparkles className="h-3.5 w-3.5 text-white" />
                            </div>
                          </div>

                          {/* Bottom content */}
                          <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
                            <div className="mb-3 flex items-center gap-2">
                              <span className="h-1.5 w-1.5 rounded-full bg-[#FF5500]" />
                              <span className="text-[9px] font-black uppercase tracking-[0.18em] text-white/60">
                                {slide.label}
                              </span>
                            </div>

                            <h2 className="text-3xl font-black leading-[1.02] tracking-tight text-white sm:text-4xl">
                              {slide.title}
                              <br />
                              <span className="text-orange-300">
                                {slide.highlight}
                              </span>
                            </h2>

                            <div className="mt-4 flex items-center gap-2 text-white/70">
                              <MapPin className="h-3.5 w-3.5 text-orange-300" />
                              <span className="text-xs font-medium">
                                {slide.location}
                              </span>
                            </div>
                          </div>
                        </motion.div>
                      </AnimatePresence>

                      {/* Navigation controls */}
                      <div className="absolute bottom-5 right-5 z-20 flex gap-1.5">
                        <button
                          type="button"
                          onClick={previousSlide}
                          aria-label="Previous slide"
                          className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-black/20 text-white backdrop-blur-md transition-all hover:bg-black/50 active:scale-95"
                        >
                          <ChevronLeft className="h-4 w-4" />
                        </button>

                        <button
                          type="button"
                          onClick={nextSlide}
                          aria-label="Next slide"
                          className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-black/20 text-white backdrop-blur-md transition-all hover:bg-black/50 active:scale-95"
                        >
                          <ChevronRight className="h-4 w-4" />
                        </button>
                      </div>

                      {/* Slide indicators */}
                      <div className="absolute bottom-6 left-6 z-20 flex items-center gap-1.5">
                        {HERO_SLIDES.map((item, index) => (
                          <button
                            key={item.id}
                            type="button"
                            onClick={() => setActiveSlide(index)}
                            aria-label={`Go to slide ${index + 1}`}
                            className="overflow-hidden rounded-full"
                          >
                            <span
                              className={`block h-1.5 rounded-full transition-all duration-500 ${
                                activeSlide === index
                                  ? "w-8 bg-white"
                                  : "w-1.5 bg-white/40 hover:bg-white/70"
                              }`}
                            />
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Floating trust card */}
                  <motion.div
                    animate={{ y: [0, -7, 0] }}
                    transition={{
                      duration: 4.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="absolute -bottom-5 -left-2 z-30 rounded-2xl border border-white bg-white/95 p-3.5 shadow-[0_20px_50px_rgba(15,23,42,0.13)] backdrop-blur-xl sm:-left-8 sm:p-4"
                  >
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-orange-50">
                        <ShieldCheck className="h-4 w-4 text-[#FF5500]" />
                      </div>

                      <div>
                        <p className="text-[10px] font-black uppercase tracking-[0.12em] text-[#111827]">
                          Care you can trust
                        </p>

                        <div className="mt-1 flex items-center gap-1.5">
                          <Star className="h-3 w-3 fill-orange-400 text-orange-400" />
                          <span className="text-[9px] font-semibold text-slate-400">
                            Comfort • Clarity • Care
                          </span>
                        </div>
                      </div>
                    </div>
                  </motion.div>

                  {/* Floating location card */}
                  <motion.div
                    animate={{ y: [0, 6, 0] }}
                    transition={{
                      duration: 5,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="absolute -right-2 top-[32%] z-30 hidden rounded-2xl border border-white bg-white/95 px-4 py-3 shadow-[0_20px_50px_rgba(15,23,42,0.1)] backdrop-blur-xl sm:block lg:-right-7"
                  >
                    <div className="flex items-center gap-2.5">
                      <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-slate-100">
                        <MapPin className="h-3.5 w-3.5 text-[#FF5500]" />
                      </div>

                      <div>
                        <p className="text-[9px] font-black uppercase tracking-wider text-[#111827]">
                          Visit Us
                        </p>
                        <p className="mt-0.5 text-[9px] text-slate-400">
                          Shivamogga, Karnataka
                        </p>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Bottom scroll indicator */}
          <div className="absolute bottom-5 left-1/2 hidden -translate-x-1/2 items-center gap-3 text-[8px] font-black uppercase tracking-[0.22em] text-slate-300 lg:flex">
            <span className="h-px w-8 bg-slate-200" />
            Discover our care
            <span className="h-px w-8 bg-slate-200" />
          </div>
        </section>
      </main>

    
    </div>
  );
}