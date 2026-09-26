import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Sparkles,
  GraduationCap,
  Award,
  Stethoscope,
  CheckCircle2,
  ShieldCheck,
  Zap,
  Smile,
  ArrowUpRight,
  Phone,
  Calendar,
  MapPin,
  Star,
  RotateCw
} from "lucide-react";
import { Link } from "react-router-dom";
import Doctor from "@/assets/doctor-hero.jpg";
import Navbar from "@/components/Navbar";

interface DoctorHighlight {
  icon: React.ElementType;
  title: string;
  desc: string;
}

interface Doctor {
  id: string;
  name: string;
  role: string;
  degrees: string;
  regNo: string;
  specialty: string;
  bio: string;
  specialties: string[];
  metric: string;
  experience: string;
  badge: string;
  image: string;
  badgeIcon: React.ElementType;
  highlights: DoctorHighlight[];
}

const DOCTORS: Doctor[] = [
  {
    id: "dr-shashanka-holla",
    name: "Dr. Shashanka Holla",
    role: "Lead Periodontist & Implantologist",
    degrees: "BDS, MDS (Periodontics & Implantology)",
    regNo: "Reg. No: 45334 A",
    specialty: "Dental Implants, Gum Surgeries & Laser Periodontics",
    bio: "Dr. Shashanka Holla leads the periodontics and implantology division at Dr. Holla’s Wide Smiles. Combining advanced surgical precision with state-of-the-art laser technology, he specializes in full-mouth dental implants, soft tissue preservation, and pain-free gum rehabilitation.",
    specialties: [
      "Dental Implantology",
      "Laser Periodontal Therapy",
      "Bone Grafting & Regeneration",
      "Cosmetic Gum Contouring"
    ],
    metric: "MDS Periodontics",
    experience: "12+ Yrs Experience",
    badge: "Chief Specialist",
    image:
      Doctor,
    badgeIcon: Zap,
    highlights: [
      {
        icon: GraduationCap,
        title: "Master of Dental Surgery (MDS)",
        desc: "Advanced post-graduate specialization in periodontium restoration and surgical dental implant placement."
      },
      {
        icon: ShieldCheck,
        title: "Laser Periodontal Precision",
        desc: "Expertise in soft-tissue preservation, flap surgeries, and minimally invasive laser rehabilitation."
      }
    ]
  },
  {
    id: "dr-ananya-venkatesh",
    name: "Dr. Ananya Venkatesh",
    role: "Pediatric Dentist Specialist",
    degrees: "BDS, MDS (Pediatric & Preventive Dentistry)",
    regNo: "Verified Pediatric Practitioner",
    specialty: "Children's Dental Care, Preventive Dentistry & Habit Breaking",
    bio: "Dr. Ananya Venkatesh brings specialized care for infants, children, and teenagers. She focuses on gentle, anxiety-free pediatric dental procedures, preventive sealants, early interceptive orthodontics, and creating positive dental experiences for young minds.",
    specialties: [
      "Pediatric Care & Psychology",
      "Preventive Dentistry & Fluoride",
      "Interceptive Orthodontics",
      "Restorative Child Dental Care"
    ],
    metric: "MDS Pediatric Care",
    experience: "Gentle Care Expert",
    badge: "Kids Specialist",
    image: Doctor,
    badgeIcon: Smile,
    highlights: [
      {
        icon: GraduationCap,
        title: "Master of Dental Surgery (MDS)",
        desc: "Post-graduate expertise in child behavior guidance, developmental oral care, and specialized pediatric dentistry."
      },
      {
        icon: Award,
        title: "Anxiety-Free Dentistry",
        desc: "Specialized in creating calm, child-friendly treatment plans that encourage healthy lifetime dental habits."
      }
    ]
  }
];

export const DoctorsPage: React.FC = () => {
  const [activeDoctorId, setActiveDoctorId] = useState<string>(DOCTORS[0].id);
  const [isFlipped, setIsFlipped] = useState<boolean>(false);

  const activeDoctor = DOCTORS.find((d) => d.id === activeDoctorId) || DOCTORS[0];

  const handleTabChange = (id: string) => {
    setActiveDoctorId(id);
    setIsFlipped(false);
  };

  return (
    <div className="min-h-screen flex flex-col justify-between bg-[#F2F4F7] text-[#111827] selection:bg-[#FF5500]/20 selection:text-[#FF5500] relative overflow-x-hidden antialiased">
      {/* Navigation Header */}
      <Navbar />

      {/* Main Content Body */}
      <main className="flex-1 pt-24 sm:pt-32 pb-16 sm:pb-24 px-4 sm:px-6 lg:px-8 relative">
        {/* Ambient Lights */}
        <div className="pointer-events-none absolute -left-20 top-20 h-72 w-72 sm:h-96 sm:w-96 rounded-full bg-[#FF5500]/10 blur-3xl" />
        <div className="pointer-events-none absolute -right-20 top-1/2 h-80 w-80 sm:h-96 sm:w-96 rounded-full bg-slate-900/[0.04] blur-3xl" />

        <div className="mx-auto max-w-6xl space-y-8 sm:space-y-16 relative z-10">
          {/* Header Section */}
          <div className="text-center max-w-3xl mx-auto space-y-3.5">
            

            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.25 }}
              className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.1]"
            >
              Specialist Expertise Behind <br className="hidden sm:inline" />
              <span className="text-[#FF5500]">Your Complete Dental Health.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.25 }}
              className="text-xs sm:text-base text-slate-500 leading-relaxed max-w-2xl mx-auto px-2"
            >
              Meet the MDS specialist doctors leading dental implants, pediatric care, laser periodontics, and comprehensive dentistry at Dr. Holla’s Wide Smiles in Shivamogga.
            </motion.p>

            {/* Selector Tabs */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.25 }}
              className="pt-2 sm:pt-4 flex justify-center"
            >
              <div className="inline-flex p-1.5 bg-white rounded-full border border-slate-200/90 shadow-sm w-full max-w-md sm:w-auto">
                {DOCTORS.map((doc) => {
                  const isActive = doc.id === activeDoctorId;
                  return (
                    <button
                      key={doc.id}
                      onClick={() => handleTabChange(doc.id)}
                      className={`relative flex-1 sm:flex-initial px-4 sm:px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-colors duration-150 flex items-center justify-center gap-2 touch-manipulation ${
                        isActive
                          ? "text-white shadow-md shadow-slate-900/10"
                          : "text-slate-600 hover:text-[#111827]"
                      }`}
                    >
                      {isActive && (
                        <motion.div
                          layoutId="activeDoctorTab"
                          className="absolute inset-0 bg-[#111827] rounded-full"
                          transition={{ type: "spring", stiffness: 600, damping: 35 }}
                        />
                      )}
                      <span className="relative z-10 flex items-center gap-2 truncate">
                        <Stethoscope
                          className={`w-3.5 h-3.5 ${
                            isActive ? "text-[#FF5500]" : "text-slate-400"
                          }`}
                        />
                        {doc.name}
                      </span>
                    </button>
                  );
                })}
              </div>
            </motion.div>
          </div>

          {/* DYNAMIC DOCTOR PROFILE DISPLAY SECTION */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeDoctor.id}
              initial={{ opacity: 0, scale: 0.99 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.99 }}
              transition={{ duration: 0.15 }}
              className="w-full"
            >
              {/* MOBILE ONLY: Fast 3D Flip Card */}
              <div className="block lg:hidden [perspective:1000px] w-full min-h-[460px]">
                <motion.div
                  className="relative w-full h-full min-h-[460px] rounded-[2.2rem] shadow-xl [transform-style:preserve-3d]"
                  animate={{ rotateY: isFlipped ? 180 : 0 }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                >
                  {/* FRONT SIDE (MOBILE) */}
                  <div 
                    onClick={() => setIsFlipped(true)}
                    className="absolute inset-0 w-full h-full rounded-[2.2rem] overflow-hidden bg-white border border-slate-200/80 p-2.5 flex flex-col justify-between [backface-visibility:hidden] cursor-pointer touch-manipulation active:scale-[0.99] transition-transform duration-100"
                  >
                    <div className="relative w-full h-full rounded-[1.8rem] overflow-hidden bg-slate-100 flex flex-col justify-between p-4">
                      <img
                        src={activeDoctor.image}
                        alt={activeDoctor.name}
                        className="absolute inset-0 h-full w-full object-cover object-center"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-black/30" />

                      {/* Top Badges */}
                      <div className="relative z-10 flex items-center justify-between">
                        <span className="bg-black/60 backdrop-blur-md border border-white/20 text-white text-[10px] font-bold px-3 py-1.5 rounded-full shadow-lg flex items-center gap-1.5">
                          <Star className="w-3 h-3 text-[#FF5500] fill-[#FF5500]" />
                          {activeDoctor.badge}
                        </span>

                        <span className="bg-[#FF5500] text-white text-[10px] font-bold px-3 py-1.5 rounded-full shadow-lg flex items-center gap-1.5">
                          <RotateCw className="w-3 h-3" />
                          Tap to View Details
                        </span>
                      </div>

                      {/* Bottom Info Pill */}
                      <div className="relative z-10 mt-auto pt-20">
                        <div className="flex items-center justify-between gap-3 rounded-2xl bg-black/65 backdrop-blur-xl border border-white/20 p-3.5 text-white shadow-2xl">
                          <div className="min-w-0 flex-1">
                            <h3 className="text-base font-bold truncate leading-tight">
                              {activeDoctor.name}
                            </h3>
                            <p className="text-xs text-[#FF5500] font-semibold truncate mt-0.5">
                              {activeDoctor.role}
                            </p>
                          </div>
                          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#FF5500] text-white shadow-md">
                            <RotateCw className="w-4 h-4" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* BACK SIDE (MOBILE) */}
                  <div 
                    onClick={() => setIsFlipped(false)}
                    className="absolute inset-0 w-full h-full rounded-[2.2rem] bg-white border border-slate-200/80 p-5 flex flex-col justify-between [backface-visibility:hidden] [transform:rotateY(180deg)] shadow-xl overflow-y-auto cursor-pointer"
                  >
                    <div className="space-y-4">
                      {/* Back Header */}
                      <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                        <div>
                          <span className="text-[10px] font-bold uppercase tracking-widest text-[#FF5500]">
                            {activeDoctor.role}
                          </span>
                          <h3 className="text-xl font-black text-[#111827]">
                            {activeDoctor.name}
                          </h3>
                        </div>
                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            setIsFlipped(false);
                          }}
                          className="flex items-center gap-1 text-[10px] font-bold text-slate-700 bg-slate-100 px-3 py-1.5 rounded-full border border-slate-300 touch-manipulation active:scale-95 transition-transform"
                        >
                          <RotateCw className="w-3 h-3 text-[#FF5500]" />
                          Back Photo
                        </button>
                      </div>

                      {/* Degrees */}
                      <div className="flex flex-wrap items-center gap-1.5">
                        <span className="text-[10px] font-bold text-[#FF5500] bg-[#FF5500]/10 border border-[#FF5500]/20 px-2.5 py-0.5 rounded-md">
                          {activeDoctor.degrees}
                        </span>
                        <span className="text-[10px] font-semibold text-slate-500 bg-slate-100 px-2.5 py-0.5 rounded-md">
                          {activeDoctor.regNo}
                        </span>
                      </div>

                      {/* Bio */}
                      <p className="text-xs text-slate-600 leading-relaxed italic">
                        "{activeDoctor.bio}"
                      </p>

                      {/* Specialties */}
                      <div className="space-y-2">
                        <h4 className="text-[10px] font-black uppercase tracking-wider text-slate-400">
                          Specialties
                        </h4>
                        <div className="grid grid-cols-2 gap-1.5">
                          {activeDoctor.specialties.map((spec, i) => (
                            <div
                              key={i}
                              className="flex items-center gap-1.5 bg-slate-50 border border-slate-100 rounded-lg p-2 text-[11px] text-slate-700 font-medium truncate"
                            >
                              <CheckCircle2 className="w-3.5 h-3.5 text-[#FF5500] shrink-0" />
                              <span className="truncate">{spec}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div 
                      className="pt-3 border-t border-slate-100 flex items-center gap-2"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <Link
                        to="/contact"
                        className="flex-1 inline-flex items-center justify-center gap-1.5 rounded-xl bg-[#FF5500] px-3 py-2.5 text-xs font-bold text-white shadow-md active:scale-95 transition-transform"
                      >
                        <Calendar className="w-3.5 h-3.5" />
                        <span>Book Now</span>
                      </Link>

                      <a
                        href="tel:+917483822917"
                        className="inline-flex items-center justify-center gap-1.5 rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-xs font-bold text-[#111827] active:scale-95 transition-transform"
                      >
                        <Phone className="w-3.5 h-3.5 text-[#FF5500]" />
                        <span>Call</span>
                      </a>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* DESKTOP LAYOUT */}
              <article className="hidden lg:grid grid-cols-12 items-stretch rounded-[2.5rem] bg-white p-6 border border-slate-200/80 shadow-xl shadow-slate-200/60 transition-all duration-300 gap-8">
                {/* Left Portrait Image Container */}
                <div className="relative w-full h-full col-span-5 rounded-[2rem] overflow-hidden bg-slate-100 min-h-[440px]">
                  <img
                    src={activeDoctor.image}
                    alt={activeDoctor.name}
                    className="h-full w-full object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/20" />

                  <div className="absolute top-4 right-4 z-10">
                    <span className="bg-black/60 backdrop-blur-md border border-white/20 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg flex items-center gap-1.5">
                      <Star className="w-3 h-3 text-[#FF5500] fill-[#FF5500]" />
                      {activeDoctor.badge}
                    </span>
                  </div>
                </div>

                {/* Right Details Container */}
                <div className="col-span-7 flex flex-col justify-between p-2 space-y-6">
                  <div className="space-y-2.5">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold uppercase tracking-widest text-[#FF5500]">
                        {activeDoctor.role}
                      </span>
                      <span className="inline-flex items-center gap-1 text-xs font-semibold text-slate-400">
                        <MapPin className="w-3.5 h-3.5 text-[#FF5500]" />
                        Shivamogga, KA
                      </span>
                    </div>

                    <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-[#111827]">
                      {activeDoctor.name}
                    </h2>

                    <div className="flex flex-wrap items-center gap-2 pt-1 border-b border-slate-100 pb-3">
                      <span className="text-[11px] font-bold text-[#FF5500] bg-[#FF5500]/10 border border-[#FF5500]/20 px-3 py-1 rounded-md">
                        {activeDoctor.degrees}
                      </span>
                      <span className="text-[10px] font-semibold text-slate-500 bg-slate-100 px-2.5 py-1 rounded-md">
                        {activeDoctor.regNo}
                      </span>
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    "{activeDoctor.bio}"
                  </p>

                  <div className="space-y-2.5">
                    <h4 className="text-[11px] font-black uppercase tracking-wider text-slate-400">
                      Core Clinical Specialties
                    </h4>
                    <div className="grid grid-cols-2 gap-2.5">
                      {activeDoctor.specialties.map((spec, i) => (
                        <div
                          key={i}
                          className="flex items-center gap-2 bg-slate-50 border border-slate-100 rounded-xl p-2.5 text-xs text-slate-700 font-medium"
                        >
                          <CheckCircle2 className="w-4 h-4 text-[#FF5500] shrink-0" />
                          <span className="truncate">{spec}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-2 flex items-center gap-3">
                    <Link
                      to="/contact"
                      className="flex-1 inline-flex items-center justify-center gap-2 rounded-2xl bg-[#FF5500] px-5 py-3.5 text-xs font-bold text-white shadow-md shadow-orange-500/20 transition-colors hover:bg-[#e04b00]"
                    >
                      <Calendar className="w-4 h-4" />
                      <span>Book Appointment</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </Link>

                    <a
                      href="tel:+917483822917"
                      className="inline-flex items-center justify-center gap-2 rounded-2xl border border-slate-200 bg-white px-5 py-3.5 text-xs font-bold text-[#111827] transition-colors hover:border-[#FF5500] hover:text-[#FF5500]"
                    >
                      <Phone className="w-4 h-4 text-[#FF5500]" />
                      <span>Call Clinic</span>
                    </a>
                  </div>
                </div>
              </article>
            </motion.div>
          </AnimatePresence>

          {/* DOCTOR HIGHLIGHTS FOOTER */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeDoctor.id + "-highlights"}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.15 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6"
            >
              {activeDoctor.highlights.map((item, idx) => {
                const IconComp = item.icon;
                return (
                  <div
                    key={idx}
                    className="flex items-start gap-4 p-5 rounded-[2rem] bg-white border border-slate-200/80 shadow-sm relative overflow-hidden"
                  >
                    <div className="w-10 h-10 rounded-xl bg-[#FF5500]/10 border border-[#FF5500]/20 flex items-center justify-center text-[#FF5500] shrink-0 mt-0.5">
                      <IconComp className="w-5 h-5" />
                    </div>
                    <div>
                      <h5 className="font-extrabold text-sm text-[#111827] tracking-tight">
                        {item.title}
                      </h5>
                      <p className="text-slate-600 text-xs mt-1 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </motion.div>
          </AnimatePresence>
        </div>
      </main>
    </div>
  );
};

export default DoctorsPage;