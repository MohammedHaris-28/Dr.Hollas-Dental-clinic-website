import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ArrowUpRight,
  Award,
  Calendar,
  CheckCircle2,
  GraduationCap,
  Heart,
  MapPin,
  Phone,
  Shield,
  Sparkles,
  Star,
  Stethoscope,
  UserCheck,
} from "lucide-react";
import  Doctor from "@/assets/doctor-hero.jpg";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

interface Doctor {
  id: string;
  name: string;
  role: string;
  degrees: string;
  specialty: string;
  experience: string;
  badge: string;
  description: string;
  image: string;
  highlights: string[];
  education: string[];
}

const DOCTORS_DATA: Doctor[] = [
  {
    id: "dr-shashanka-holla",
    name: "Dr. Shashanka Holla",
    role: "Lead Periodontist & Implantologist",
    degrees: "BDS, MDS (Periodontics & Implantology)",
    specialty: "Dental Implants & Gum Surgery",
    experience: "12+ Years Experience",
    badge: "Chief Specialist",
    description:
      "Specializing in dental implants, advanced periodontics, and complex smile restorations with precision laser techniques and clinical excellence.",
    image:
      Doctor,
    highlights: [
      "Master of Dental Surgery (MDS)",
      "Advanced Precision Implantology",
      "Laser Periodontal Therapies",
      "Full-Mouth Smile Restorations",
    ],
    education: [
      "MDS in Periodontics & Oral Implantology",
      "Certified Implantologist Specialist Training",
      "Senior Consultant at Wide Smiles Clinic",
    ],
  },
  {
    id: "dr-ananya-venkatesh",
    name: "Dr. Ananya Venkatesh",
    role: "Pediatric Dentist Specialist",
    degrees: "BDS, MDS (Pediatric & Preventive Dentistry)",
    specialty: "Children's Dental Care & Guidance",
    experience: "Gentle Care Expert",
    badge: "Kids Specialist",
    description:
      "Dedicated to providing gentle, anxiety-free dental care for infants, children, and teenagers, fostering lifelong healthy smile habits.",
    image:
      Doctor,
    highlights: [
      "Child-Friendly Treatment Protocols",
      "Preventive & Early Interceptive Care",
      "Cavity Prevention & Fluoride",
      "Anxiety-Free Pediatric Care",
    ],
    education: [
      "MDS in Pediatric & Preventive Dentistry",
      "Child Psychology & Behavioral Dental Care",
      "Pediatric Oral Healthcare Practitioner",
    ],
  },
];

const CLINIC_FEATURES = [
  {
    title: "Expert Specialists",
    description: "MDS-qualified doctors leading every procedure.",
    icon: Stethoscope,
  },
  {
    title: "Advanced Tech",
    description: "Soft-tissue lasers & digital 3D imaging.",
    icon: Sparkles,
  },
  {
    title: "Painless Focus",
    description: "Gentle care protocols designed for all ages.",
    icon: Heart,
  },
  {
    title: "100% Sterile",
    description: "Class-B autoclave sterilization standards.",
    icon: Shield,
  },
];

export const DoctorsPage: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col justify-between bg-[#F2F4F7] text-[#111827] selection:bg-[#FF5500]/20 selection:text-[#FF5500] relative overflow-x-hidden">
      {/* Navigation Header */}
      <Navbar />

      {/* Main Content Body */}
      <main className="flex-1 pt-24 sm:pt-32 pb-16 sm:pb-24 px-4 sm:px-6 lg:px-8 relative">
        {/* Soft Ambient Background Elements */}
        <div className="pointer-events-none absolute -left-20 top-20 h-72 w-72 sm:h-96 sm:w-96 rounded-full bg-[#FF5500]/10 blur-3xl" />
        <div className="pointer-events-none absolute -right-20 top-1/2 h-80 w-80 sm:h-96 sm:w-96 rounded-full bg-slate-900/[0.04] blur-3xl" />

        <div className="mx-auto max-w-6xl space-y-10 sm:space-y-16 relative z-10">
          {/* Header Section */}
          <div className="text-center max-w-3xl mx-auto space-y-3.5">
            

            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.05 }}
              className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.1]"
            >
              Excellence in Care. <br className="hidden sm:inline" />
              <span className="text-[#FF5500]">Personalized for You.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }}
              className="text-xs sm:text-base text-slate-500 leading-relaxed max-w-2xl mx-auto px-2"
            >
              Meet our highly skilled dental specialists at Dr. Holla’s Wide
              Smiles Dental Clinic & Implant Center in Shivamogga, Karnataka.
            </motion.p>
          </div>

          {/* DOCTORS CARDS SECTION - RESPONSIVE HYBRID LAYOUT */}
          <div className="space-y-10 lg:space-y-14">
            {DOCTORS_DATA.map((doctor, index) => {
              const isEven = index % 2 === 0;

              return (
                <motion.article
                  key={doctor.id}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group relative flex flex-col lg:grid lg:grid-cols-12 items-stretch rounded-[2.5rem] bg-white p-3 sm:p-4 lg:p-6 border border-slate-200/80 shadow-xl shadow-slate-200/60 hover:shadow-2xl transition-all duration-500 gap-6 lg:gap-8"
                >
                  {/* Image Container: Pill layout on mobile / Side-by-side full height on desktop */}
                  <div
                    className={`relative w-full aspect-[4/4.5] sm:aspect-[4/3.5] lg:aspect-auto lg:h-full lg:col-span-5 rounded-[2rem] overflow-hidden bg-slate-100 min-h-[320px] lg:min-h-[440px] ${
                      isEven ? "lg:order-1" : "lg:order-2"
                    }`}
                  >
                    <img
                      src={doctor.image}
                      alt={doctor.name}
                      className="h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                    />

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/20" />

                    {/* Top Right Experience Badge */}
                    <div className="absolute top-3 right-3 sm:top-4 sm:right-4 z-10">
                      <span className="bg-black/60 backdrop-blur-md border border-white/20 text-white text-[10px] sm:text-xs font-bold px-3 py-1.5 rounded-full shadow-lg flex items-center gap-1.5">
                        <Star className="w-3 h-3 text-[#FF5500] fill-[#FF5500]" />
                        {doctor.badge}
                      </span>
                    </div>

                    {/* FLOATING PILL OVERLAY DESIGN (Mainly for Mobile View) */}
                    <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 lg:hidden z-10">
                      <div className="flex items-center justify-between gap-3 rounded-full bg-black/60 backdrop-blur-xl border border-white/20 p-2 pl-4 sm:p-2.5 sm:pl-5 text-white shadow-2xl">
                        <div className="min-w-0 flex-1">
                          <h3 className="text-sm sm:text-base font-bold truncate leading-tight">
                            {doctor.name}
                          </h3>
                          <p className="text-[10px] sm:text-xs text-slate-300 font-medium truncate">
                            {doctor.role}
                          </p>
                        </div>

                        <Link
                          to="/contact"
                          aria-label={`Book appointment with ${doctor.name}`}
                          className="flex h-10 w-10 sm:h-11 sm:w-11 shrink-0 items-center justify-center rounded-full bg-white text-[#111827] shadow-md transition-all duration-300 group-hover:bg-[#FF5500] group-hover:text-white group-hover:scale-105"
                        >
                          <ArrowUpRight className="w-5 h-5" />
                        </Link>
                      </div>
                    </div>
                  </div>

                  {/* Desktop Side Content / Card Details */}
                  <div
                    className={`flex-1 lg:col-span-7 flex flex-col justify-between p-2 sm:p-4 lg:p-2 space-y-5 lg:space-y-6 ${
                      isEven ? "lg:order-2" : "lg:order-1"
                    }`}
                  >
                    {/* Desktop Heading Block */}
                    <div className="space-y-2">
                      <div className="hidden lg:flex items-center justify-between">
                        <span className="text-xs font-bold uppercase tracking-widest text-[#FF5500]">
                          {doctor.role}
                        </span>
                        <span className="inline-flex items-center gap-1 text-xs font-semibold text-slate-400">
                          <MapPin className="w-3.5 h-3.5 text-[#FF5500]" />
                          Shivamogga, KA
                        </span>
                      </div>

                      <h2 className="hidden lg:block text-3xl font-black tracking-tight text-[#111827]">
                        {doctor.name}
                      </h2>

                      {/* Qualifications & Degrees */}
                      <div className="flex items-center justify-between border-b border-slate-100 pb-3 pt-1">
                        <span className="text-[11px] sm:text-xs font-bold text-slate-400 uppercase tracking-wider">
                          Degrees & Specialty
                        </span>
                        <span className="text-[11px] sm:text-xs font-semibold text-[#FF5500] bg-[#FF5500]/10 px-2.5 py-1 rounded-md">
                          {doctor.degrees}
                        </span>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {doctor.description}
                    </p>

                    {/* Highlights Grid */}
                    <div className="space-y-2.5">
                      <h4 className="text-[11px] font-black uppercase tracking-wider text-slate-400">
                        Specialized Clinical Expertise
                      </h4>
                      <div className="grid grid-cols-2 gap-2.5">
                        {doctor.highlights.map((item, idx) => (
                          <div
                            key={idx}
                            className="flex items-center gap-2 bg-slate-50 border border-slate-100 rounded-xl p-2.5 text-xs text-slate-700 font-medium"
                          >
                            <CheckCircle2 className="w-4 h-4 text-[#FF5500] shrink-0" />
                            <span className="truncate">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Action Buttons Footer */}
                    <div className="pt-2 flex items-center gap-3">
                      <Link
                        to="/contact"
                        className="flex-1 inline-flex items-center justify-center gap-2 rounded-2xl bg-[#FF5500] px-5 py-3.5 text-xs font-bold text-white shadow-md shadow-orange-500/20 transition-all hover:bg-[#e04b00]"
                      >
                        <Calendar className="w-4 h-4" />
                        <span>Book Appointment</span>
                        <ArrowUpRight className="w-4 h-4" />
                      </Link>

                      <a
                        href="tel:+917483822917"
                        className="inline-flex items-center justify-center gap-2 rounded-2xl border border-slate-200 bg-white px-5 py-3.5 text-xs font-bold text-[#111827] transition-all hover:border-[#FF5500] hover:text-[#FF5500]"
                      >
                        <Phone className="w-4 h-4 text-[#FF5500]" />
                        <span>Call Clinic</span>
                      </a>
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </div>

          {/* WHY PATIENTS TRUST US GRID */}
          <div className="rounded-[2.5rem] bg-[#111827] text-white p-6 sm:p-12 space-y-8 relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 w-80 h-80 bg-[#FF5500]/10 rounded-full blur-3xl pointer-events-none" />

            <div className="max-w-xl space-y-3 relative z-10">
              <span className="text-[10px] font-bold uppercase tracking-widest text-[#FF5500]">
                Care Built Around You
              </span>
              <h3 className="text-2xl sm:text-4xl font-black tracking-tight">
                Why Choose Dr. Holla’s Wide Smiles?
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                Combining MDS specialist expertise, warm patient care, and state-of-the-art dental technology under one roof in Shivamogga.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 relative z-10">
              {CLINIC_FEATURES.map((feature, idx) => {
                const Icon = feature.icon;
                return (
                  <div
                    key={idx}
                    className="p-5 rounded-2xl bg-white/5 border border-white/10 space-y-2.5 backdrop-blur-sm"
                  >
                    <div className="w-10 h-10 rounded-xl bg-[#FF5500]/20 flex items-center justify-center text-[#FF5500]">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h4 className="text-sm font-bold text-white">
                      {feature.title}
                    </h4>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* BOTTOM QUICK CALLOUT */}
          <div className="rounded-[2.5rem] border border-slate-200 bg-white p-6 sm:p-8 shadow-sm">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-5 text-center sm:text-left">
              <div className="space-y-1">
                <h4 className="text-lg font-black text-[#111827]">
                  Ready for a Consultation with Our Specialists?
                </h4>
                <p className="text-xs sm:text-sm text-slate-500">
                  Visit us at KHB Colony, 2nd Phase, Gopala, Shivamogga, KA 577205.
                </p>
              </div>

              <Link
                to="/contact"
                className="inline-flex shrink-0 items-center justify-center gap-2 rounded-2xl bg-[#111827] px-6 py-3.5 text-xs font-bold text-white transition-all hover:bg-[#FF5500]"
              >
                <span>Get Directions & Hours</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </main>

      {/* Footer Section */}
      <Footer />
    </div>
  );
};

export default DoctorsPage;