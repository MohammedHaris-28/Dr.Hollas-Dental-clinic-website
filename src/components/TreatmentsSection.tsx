import React, { useState, useRef, useCallback } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Sparkles,
  Smile,
  Baby,
  Activity,
  ShieldCheck,
  Award,
  ChevronRight,
  MapPin,
  ChevronsLeftRight,
  Scissors,
  ArrowUpRight,
  Layers,
  Stethoscope,
  CheckCircle2,
} from "lucide-react";

import WhiteTeeth from "@/assets/white.png";
import YellowTeeth from "@/assets/yellow.png";

/* =========================================================
   DATA
========================================================= */

const services = [
  {
    id: "general",
    number: "01",
    icon: ShieldCheck,
    title: "General Dentistry",
    shortTitle: "General Care",
    description:
      "Comprehensive oral health checkups, professional cleanings, preventive care, and personalized dental wellness routines.",
    tag: "Preventive Care",
    image:
      "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=85&w=1000",
    accent: "orange",
  },
  {
    id: "rct",
    number: "02",
    icon: Activity,
    title: "Root Canal Treatment",
    shortTitle: "Root Canal",
    description:
      "Precision root canal therapies designed to preserve compromised teeth and restore comfortable chewing function.",
    tag: "Pain-Free Care",
    image:
      "https://i.pinimg.com/736x/ef/16/19/ef161928e6608173ef9503dd33fb4d27.jpg",
    accent: "blue",
  },
  {
    id: "implants",
    number: "03",
    icon: Award,
    title: "Dental Implants",
    shortTitle: "Implants",
    description:
      "Biocompatible tooth replacement solutions led by Periodontist & Implantologist Dr. K Shashanka Holla, MDS.",
    tag: "Specialist Care",
    image:
      "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&q=85&w=1000",
    accent: "emerald",
  },
  {
    id: "ortho",
    number: "04",
    icon: Smile,
    title: "Orthodontics & Braces",
    shortTitle: "Orthodontics",
    description:
      "Advanced teeth alignment and bite correction using ceramic braces, self-ligating brackets, and clear aligners.",
    tag: "Teeth Alignment",
    image:
      "https://i.pinimg.com/736x/3c/50/db/3c50db2e1dc1ebf633f8f275a810b017.jpg",
    accent: "violet",
  },
  {
    id: "surgery",
    number: "05",
    icon: Scissors,
    title: "Oral & Maxillofacial Surgery",
    shortTitle: "Oral Surgery",
    description:
      "Surgical extractions, wisdom tooth procedures, and selected soft tissue treatments performed with clinical precision.",
    tag: "Surgical Care",
    image:
      "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=85&w=1000",
    accent: "amber",
  },
  {
    id: "pediatric",
    number: "06",
    icon: Baby,
    title: "Pediatric Dentistry",
    shortTitle: "Kids Dentistry",
    description:
      "Gentle dental care created for young patients, focusing on prevention, healthy development, and positive dental experiences.",
    tag: "Kids Care",
    image:
      "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&q=85&w=1000",
    accent: "rose",
  },
];

const accentStyles = {
  orange: {
    soft: "bg-[#FF5500]/10",
    border: "border-[#FF5500]/20",
    text: "text-[#FF5500]",
    solid: "bg-[#FF5500]",
  },
  blue: {
    soft: "bg-blue-50",
    border: "border-blue-100",
    text: "text-blue-600",
    solid: "bg-blue-600",
  },
  emerald: {
    soft: "bg-emerald-50",
    border: "border-emerald-100",
    text: "text-emerald-600",
    solid: "bg-emerald-600",
  },
  violet: {
    soft: "bg-violet-50",
    border: "border-violet-100",
    text: "text-violet-600",
    solid: "bg-violet-600",
  },
  amber: {
    soft: "bg-amber-50",
    border: "border-amber-100",
    text: "text-amber-600",
    solid: "bg-amber-500",
  },
  rose: {
    soft: "bg-rose-50",
    border: "border-rose-100",
    text: "text-rose-600",
    solid: "bg-rose-500",
  },
};

/* =========================================================
   BEFORE / AFTER
========================================================= */

const BeforeAfterSlider = () => {
  const [sliderPos, setSliderPos] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();

    let percentage = ((clientX - rect.left) / rect.width) * 100;

    percentage = Math.max(3, Math.min(97, percentage));

    setSliderPos(percentage);
  }, []);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return;

    handleMove(e.touches[0].clientX);
  };

  return (
    <div className="w-full">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-5 sm:mb-7">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <div className="w-7 h-7 rounded-lg bg-[#FF5500]/10 flex items-center justify-center">
              <Sparkles className="w-3.5 h-3.5 text-[#FF5500]" />
            </div>

            <span className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.16em] text-[#FF5500]">
              Smile Transformations
            </span>
          </div>

          <h3 className="text-xl sm:text-3xl font-black tracking-tight text-[#111827]">
            See the difference.
          </h3>

          <p className="text-xs sm:text-sm text-slate-500 mt-1.5 max-w-lg leading-relaxed">
            Move the slider to explore the visual difference between before and
            after treatment.
          </p>
        </div>

        <div className="hidden sm:flex items-center gap-2 text-[10px] font-bold uppercase tracking-wider text-slate-400">
          <ChevronsLeftRight className="w-4 h-4" />
          Drag to compare
        </div>
      </div>

      {/* Comparison Container */}
      <div
        ref={containerRef}
        onMouseDown={(e) => {
          setIsDragging(true);
          handleMove(e.clientX);
        }}
        onMouseUp={() => setIsDragging(false)}
        onMouseMove={handleMouseMove}
        onTouchStart={(e) => {
          setIsDragging(true);
          if (e.touches[0]) handleMove(e.touches[0].clientX);
        }}
        onTouchEnd={() => setIsDragging(false)}
        onTouchMove={handleTouchMove}
        className={`
          relative
          w-full
          h-[270px]
          sm:h-[390px]
          lg:h-[460px]
          rounded-[28px]
          overflow-hidden
          select-none
          touch-none
          cursor-ew-resize
          border border-slate-200
          bg-slate-100
          shadow-[0_25px_70px_-25px_rgba(15,23,42,0.35)]
        `}
      >
        {/* AFTER (Base Image - Full Width) */}
        <img
          src={WhiteTeeth}
          alt="After dental treatment"
          className="absolute inset-0 w-full h-full object-cover pointer-events-none"
          draggable={false}
        />

        {/* AFTER overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent pointer-events-none" />

        {/* BEFORE (Revealed via Clip-Path so alignment stays identical) */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ clipPath: `inset(0 ${100 - sliderPos}% 0 0)` }}
        >
          <img
            src={YellowTeeth}
            alt="Before dental treatment"
            className="absolute inset-0 w-full h-full object-cover"
            draggable={false}
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />
        </div>

        {/* CENTER DIVIDER */}
        <div
          className="absolute top-0 bottom-0 w-[2px] bg-white z-20 shadow-[0_0_20px_rgba(0,0,0,0.25)] pointer-events-none"
          style={{ left: `${sliderPos}%` }}
        >
          {/* Drag handle */}
          <div
            className="
              absolute
              top-1/2
              left-1/2
              -translate-x-1/2
              -translate-y-1/2
              w-12
              h-12
              sm:w-14
              sm:h-14
              rounded-full
              bg-[#111827]
              text-white
              border-[3px]
              border-white
              shadow-[0_10px_35px_rgba(0,0,0,0.3)]
              flex
              items-center
              justify-center
            "
          >
            <ChevronsLeftRight className="w-5 h-5 sm:w-6 sm:h-6 text-[#FF5500]" />
          </div>
        </div>

        {/* BEFORE LABEL */}
        <div className="absolute left-4 top-4 sm:left-5 sm:top-5 z-30 pointer-events-none">
          <div className="px-3 py-1.5 rounded-full bg-[#111827]/85 backdrop-blur-md border border-white/10 text-white text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.15em]">
            Before
          </div>
        </div>

        {/* AFTER LABEL */}
        <div className="absolute right-4 top-4 sm:right-5 sm:top-5 z-30 pointer-events-none">
          <div className="px-3 py-1.5 rounded-full bg-[#FF5500] text-white text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.15em] shadow-lg">
            After
          </div>
        </div>

        {/* Bottom instruction */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-30 pointer-events-none">
          <div className="flex items-center gap-2 px-3.5 py-2 rounded-full bg-white/90 backdrop-blur-md border border-white shadow-lg text-[9px] sm:text-[10px] font-bold text-[#111827] whitespace-nowrap">
            <ChevronsLeftRight className="w-3.5 h-3.5 text-[#FF5500]" />
            Drag to compare
          </div>
        </div>
      </div>
    </div>
  );
};


/* =========================================================
   MOBILE STACK CARD
========================================================= */

const MobileTreatmentCard = ({
  service,
  index,
}: {
  service: (typeof services)[number];
  index: number;
}) => {
  const Icon = service.icon;
  const styles =
    accentStyles[service.accent as keyof typeof accentStyles];

  return (
    <div
      className="sticky"
      style={{
        top: `${78 + index * 12}px`,
        zIndex: index + 1,
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{
          duration: 0.5,
          delay: index * 0.04,
        }}
        className="
          relative
          overflow-hidden
          rounded-[28px]
          border
          border-slate-200/90
          bg-white
          shadow-[0_20px_55px_-22px_rgba(15,23,42,0.28)]
        "
      >
        {/* Top accent */}
        <div
          className={`absolute top-0 left-0 right-0 h-1 ${styles.solid}`}
        />

        <div className="p-4">
          {/* Image */}
          <div className="relative h-[185px] w-full rounded-[22px] overflow-hidden">
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-full object-cover"
              loading="lazy"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-[#111827]/70 via-[#111827]/5 to-transparent" />

            {/* Number */}
            <div className="absolute top-3 left-3 w-9 h-9 rounded-xl bg-white/95 backdrop-blur-md flex items-center justify-center text-[10px] font-black text-[#111827] shadow-lg">
              {service.number}
            </div>

            {/* Tag */}
            <div className="absolute top-3 right-3">
              <span className="px-2.5 py-1.5 rounded-full bg-[#111827]/85 backdrop-blur-md text-white text-[9px] font-bold uppercase tracking-wider">
                {service.tag}
              </span>
            </div>

            {/* Image title */}
            <div className="absolute left-4 bottom-4 right-4">
              <p className="text-white/70 text-[9px] font-bold uppercase tracking-[0.16em] mb-1">
                Wide Smiles Dental
              </p>

              <h3 className="text-white text-xl font-black tracking-tight leading-tight">
                {service.title}
              </h3>
            </div>
          </div>

          {/* Content */}
          <div className="pt-4">
            <div className="flex items-start gap-3">
              <div
                className={`
                  w-10
                  h-10
                  rounded-2xl
                  ${styles.soft}
                  ${styles.text}
                  ${styles.border}
                  border
                  flex
                  items-center
                  justify-center
                  shrink-0
                `}
              >
                <Icon className="w-[18px] h-[18px]" />
              </div>

              <div className="min-w-0">
                <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-1">
                  {service.shortTitle}
                </p>

                <p className="text-[12px] leading-[1.65] text-slate-600">
                  {service.description}
                </p>
              </div>
            </div>

            {/* CTA */}
            <div className="mt-4 pt-3 border-t border-slate-100">
              <Link
                to={`/treatments/${service.id}`}
                className="
                  group
                  w-full
                  flex
                  items-center
                  justify-between
                  rounded-2xl
                  bg-[#111827]
                  px-4
                  py-3
                  text-white
                  transition-all
                  duration-300
                  active:scale-[0.98]
                  hover:bg-[#FF5500]
                "
              >
                <span className="text-[11px] font-bold">
                  Learn More
                </span>

                <span className="flex items-center justify-center w-7 h-7 rounded-full bg-white/10 group-hover:bg-white/20 transition-colors">
                  <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

/* =========================================================
   MOBILE VIEW MORE CARD
========================================================= */

const MobileViewMoreCard = () => {
  return (
    <div
      className="sticky"
      style={{
        top: "148px",
        zIndex: 20,
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="
          relative
          overflow-hidden
          rounded-[28px]
          bg-[#111827]
          border
          border-slate-800
          p-5
          shadow-[0_25px_65px_-20px_rgba(15,23,42,0.55)]
        "
      >
        {/* Decorative circle */}
        <div className="absolute -right-16 -top-16 w-44 h-44 rounded-full border border-white/5" />
        <div className="absolute -right-8 -top-8 w-28 h-28 rounded-full border border-white/5" />

        <div className="relative z-10">
          <div className="flex items-center justify-between mb-5">
            <div className="w-11 h-11 rounded-2xl bg-[#FF5500] flex items-center justify-center shadow-lg">
              <Layers className="w-5 h-5 text-white" />
            </div>

            <span className="text-[9px] font-bold uppercase tracking-[0.18em] text-[#FF5500] px-3 py-1.5 rounded-full bg-[#FF5500]/10 border border-[#FF5500]/20">
              Full Treatment List
            </span>
          </div>

          <p className="text-[10px] uppercase tracking-[0.18em] text-white/40 font-bold mb-2">
            Explore Wide Smiles
          </p>

          <h3 className="text-2xl font-black tracking-tight text-white leading-tight">
            Looking for a
            <br />
            specific treatment?
          </h3>

          <p className="text-xs leading-relaxed text-slate-400 mt-3 max-w-sm">
            Explore our complete range of dental treatments, procedures,
            implants, cosmetic care, and specialist services.
          </p>

          <Link
            to="/treatments"
            className="
              mt-5
              w-full
              flex
              items-center
              justify-between
              rounded-2xl
              bg-[#FF5500]
              px-4
              py-3.5
              text-white
              shadow-lg
              active:scale-[0.98]
              transition-transform
            "
          >
            <span className="text-[11px] font-bold">
              View All Treatments
            </span>

            <span className="w-7 h-7 rounded-full bg-white/15 flex items-center justify-center">
              <ArrowUpRight className="w-3.5 h-3.5" />
            </span>
          </Link>
        </div>
      </motion.div>
    </div>
  );
};

/* =========================================================
   DESKTOP TREATMENT CARD
========================================================= */

const DesktopTreatmentCard = ({
  service,
  index,
}: {
  service: (typeof services)[number];
  index: number;
}) => {
  const Icon = service.icon;

  const styles =
    accentStyles[service.accent as keyof typeof accentStyles];

  return (
    <motion.article
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{
        duration: 0.5,
        delay: index * 0.06,
      }}
      whileHover={{ y: -6 }}
      className="
        group
        relative
        overflow-hidden
        rounded-[30px]
        border
        border-slate-200
        bg-white
        shadow-[0_15px_45px_-25px_rgba(15,23,42,0.35)]
        hover:shadow-[0_25px_60px_-25px_rgba(15,23,42,0.42)]
        transition-all
        duration-500
      "
    >
      {/* Top accent */}
      <div
        className={`absolute top-0 left-0 right-0 h-1 ${styles.solid}`}
      />

      {/* Image */}
      <div className="relative h-[235px] overflow-hidden">
        <img
          src={service.image}
          alt={service.title}
          className="
            w-full
            h-full
            object-cover
            transition-transform
            duration-700
            group-hover:scale-[1.05]
          "
          loading="lazy"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-[#111827]/75 via-transparent to-transparent" />

        {/* Number */}
        <div className="absolute top-4 left-4">
          <div className="w-10 h-10 rounded-2xl bg-white/95 backdrop-blur-md flex items-center justify-center text-xs font-black text-[#111827] shadow-lg">
            {service.number}
          </div>
        </div>

        {/* Tag */}
        <div className="absolute top-4 right-4">
          <span className="px-3 py-1.5 rounded-full bg-[#111827]/80 backdrop-blur-md text-white text-[9px] font-bold uppercase tracking-wider">
            {service.tag}
          </span>
        </div>

        {/* Bottom image content */}
        <div className="absolute left-5 right-5 bottom-5">
          <div className="flex items-center gap-2 text-white/60 text-[9px] font-bold uppercase tracking-[0.15em] mb-2">
            <div className={`w-1.5 h-1.5 rounded-full ${styles.solid}`} />
            Wide Smiles Dental
          </div>

          <h3 className="text-2xl font-black text-white tracking-tight leading-tight">
            {service.title}
          </h3>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="flex items-start gap-4">
          <div
            className={`
              w-11
              h-11
              rounded-2xl
              ${styles.soft}
              ${styles.text}
              ${styles.border}
              border
              flex
              items-center
              justify-center
              shrink-0
              transition-all
              duration-300
              group-hover:scale-105
            `}
          >
            <Icon className="w-5 h-5" />
          </div>

          <div>
            <p className="text-[9px] uppercase tracking-[0.18em] font-bold text-slate-400 mb-1">
              {service.shortTitle}
            </p>

            <p className="text-sm leading-relaxed text-slate-600">
              {service.description}
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-6 pt-5 border-t border-slate-100">
          <Link
            to={`/treatments/${service.id}`}
            className="
              group/button
              flex
              items-center
              justify-between
              w-full
              rounded-2xl
              bg-slate-50
              border
              border-slate-200
              px-4
              py-3
              text-[#111827]
              hover:bg-[#111827]
              hover:border-[#111827]
              hover:text-white
              transition-all
              duration-300
            "
          >
            <span className="text-xs font-bold">
              Learn More
            </span>

            <span className="w-7 h-7 rounded-full bg-white border border-slate-200 flex items-center justify-center group-hover/button:bg-[#FF5500] group-hover/button:border-[#FF5500] transition-all">
              <ArrowUpRight className="w-3.5 h-3.5 text-[#FF5500] group-hover/button:text-white transition-colors" />
            </span>
          </Link>
        </div>
      </div>
    </motion.article>
  );
};

/* =========================================================
   MAIN SECTION
========================================================= */

const ServicesSection = () => {
  return (
    <section
      className="
        relative
        overflow-hidden
        bg-[#FAFAFA]
        text-[#111827]
        py-14
        sm:py-20
        lg:py-28
        antialiased
      "
    >
      {/* Ambient background */}
      <div className="absolute top-0 left-[-12%] w-[320px] sm:w-[520px] h-[320px] sm:h-[520px] rounded-full bg-[#FF5500]/[0.055] blur-[100px] sm:blur-[140px] pointer-events-none" />

      <div className="absolute bottom-[20%] right-[-12%] w-[360px] sm:w-[560px] h-[360px] sm:h-[560px] rounded-full bg-slate-900/[0.035] blur-[110px] sm:blur-[150px] pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* =====================================================
            HEADER
        ===================================================== */}

        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="
              mt-5
              text-[2rem]
              sm:text-4xl
              lg:text-5xl
              font-black
              tracking-[-0.035em]
              leading-[1.05]
              text-[#111827]
            "
          >
            Complete care.
            <br />

            <span className="text-[#FF5500]">
              Thoughtfully delivered.
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="
              mt-4
              text-xs
              sm:text-base
              leading-relaxed
              text-slate-500
              max-w-2xl
              mx-auto
            "
          >
            Comprehensive dental care and implant procedures led by{" "}
            <strong className="text-[#111827] font-bold">
              Dr. K Shashanka Holla (BDS, MDS)
            </strong>{" "}
            at Wide Smiles Dental Clinic & Implant Centre.
          </motion.p>
        </div>

        {/* =====================================================
            BEFORE / AFTER
        ===================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.65 }}
          className="mb-14 sm:mb-20"
        >
          <BeforeAfterSlider />
        </motion.div>

        {/* =====================================================
            MOBILE STACK
        ===================================================== */}

  
<div className="md:hidden">
  {/* Mobile Section Header */}
  <div className="mb-7">
    <div className="flex items-center gap-2 mb-2">
      <Stethoscope className="w-4 h-4 text-[#FF5500]" />

      <span className="text-[10px] font-bold uppercase tracking-[0.16em] text-slate-400">
        Our Core Treatments
      </span>
    </div>

    <h3 className="text-2xl font-black tracking-tight text-[#111827] leading-tight">
      Care for every stage
      <br />
      of your smile.
    </h3>
  </div>

  {/* Mobile Treatment Cards */}
  <div className="w-full shrink-0">
  <div className="flex flex-col gap-5 w-full">
    {services.map((service, index) => (
      <div
        key={service.id}
        className="w-full shrink-0"
      >
        <MobileTreatmentCard
          service={service}
          index={index}
        />
      </div>
      
    ))}</div>

    {/* Spacing before View More */}
    <div className="h-2" />

    {/* View More Card */}
    <div className="w-full shrink-0">
      <MobileViewMoreCard />
    </div>

    {/* Bottom breathing space */}
    <div className="h-[5vh] min-h-[50px]" />
  </div>
</div>



        {/* =====================================================
            DESKTOP GRID
        ===================================================== */}

        <div className="hidden md:block">
          <div className="flex items-end justify-between mb-8">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Stethoscope className="w-4 h-4 text-[#FF5500]" />

                <span className="text-[10px] font-bold uppercase tracking-[0.16em] text-slate-400">
                  Clinical Services
                </span>
              </div>

              <h3 className="text-3xl font-black tracking-tight text-[#111827]">
                Care for every stage of your smile.
              </h3>
            </div>

            <div className="hidden lg:flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-slate-400">
              <CheckCircle2 className="w-4 h-4 text-[#FF5500]" />
              Patient-focused care
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <DesktopTreatmentCard
                key={service.id}
                service={service}
                index={index}
              />
            ))}
          </div>

          {/* Desktop View All */}
          <Link
            to="/treatments"
            className="
              group
              mt-6
              flex
              items-center
              justify-between
              gap-6
              rounded-[28px]
              bg-[#111827]
              border
              border-[#111827]
              p-6
              lg:p-7
              text-white
              shadow-[0_25px_60px_-25px_rgba(15,23,42,0.45)]
              hover:shadow-[0_30px_70px_-25px_rgba(15,23,42,0.55)]
              hover:border-[#FF5500]/40
              transition-all
              duration-300
            "
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-[#FF5500] flex items-center justify-center shrink-0 shadow-lg">
                <Layers className="w-5 h-5" />
              </div>

              <div>
                <h4 className="text-sm lg:text-base font-extrabold tracking-tight">
                  Looking for another treatment?
                </h4>

                <p className="text-xs text-slate-400 mt-1">
                  Explore the complete range of procedures available at Wide
                  Smiles.
                </p>
              </div>
            </div>

            <div
              className="
                shrink-0
                inline-flex
                items-center
                gap-2
                rounded-2xl
                bg-[#FF5500]
                px-5
                py-3
                text-xs
                font-bold
                group-hover:bg-[#ff6518]
                transition-colors
              "
            >
              <span>View All Treatments</span>
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;