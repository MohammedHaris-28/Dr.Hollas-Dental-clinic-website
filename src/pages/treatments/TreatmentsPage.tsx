import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Sparkles,
  ArrowUpRight,
  ShieldCheck,
  Activity,
  Award,
  Smile,
  Scissors,
  Baby,
  HeartPulse,
  CheckCircle2,
} from "lucide-react";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ImgPediatricDentistry from "@/assets/img 4.webp";

const treatments = [
  {
    id: "general-dentistry",
    number: "01",
    title: "General Dentistry",
    tag: "Preventive Care",
    description:
      "Everyday dental care focused on maintaining oral health, preventing common problems, and addressing individual dental needs.",
    icon: ShieldCheck,
    image:
      "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=85&w=1200",
  },
  {
    id: "root-canal-treatment",
    number: "02",
    title: "Root Canal Treatment",
    tag: "Tooth Preservation",
    description:
      "Treatment for a tooth when the inside of the tooth becomes affected by infection, damage, or inflammation.",
    icon: Activity,
    image:
      "https://i.pinimg.com/736x/ef/16/19/ef161928e6608173ef9503dd33fb4d27.jpg",
  },
  {
    id: "dental-implants",
    number: "03",
    title: "Dental Implants",
    tag: "Specialist Care",
    description:
      "A planned option for replacing missing teeth and restoring function with individually assessed implant treatment.",
    icon: Award,
    image:
      "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&q=85&w=1200",
    featured: true,
  },
  {
    id: "teeth-replacement",
    number: "04",
    title: "Teeth Replacement",
    tag: "Tooth Replacement",
    description:
      "Treatment options designed around replacing missing teeth and restoring everyday oral function.",
    icon: HeartPulse,
    image:
      "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?auto=format&fit=crop&q=85&w=1200",
  },
  {
    id: "orthodontics",
    number: "05",
    title: "Orthodontics",
    tag: "Teeth Alignment",
    description:
      "Dental care focused on tooth alignment and improving the relationship between the teeth and bite.",
    icon: Smile,
    image:
      "https://i.pinimg.com/736x/3c/50/db/3c50db2e1dc1ebf633f8f275a810b017.jpg",
  },
  {
    id: "gum-bone-therapy",
    number: "06",
    title: "Gum & Bone Therapy",
    tag: "Gum Health",
    description:
      "Care for gum and supporting bone concerns, planned according to the patient's individual dental condition.",
    icon: HeartPulse,
    image:
      "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=85&w=1000",
  },
  {
    id: "oral-surgery",
    number: "07",
    title: "Oral Surgery",
    tag: "Surgical Care",
    description:
      "Selected oral surgical procedures planned with clinical assessment, appropriate treatment, and patient comfort in mind.",
    icon: Scissors,
    image:
      ImgPediatricDentistry,
  },
  {
    id: "pediatric-dentistry",
    number: "08",
    title: "Pediatric Dentistry",
    tag: "Children's Care",
    description:
      "Dental care for children, with treatment planned according to their changing teeth, mouth, and individual needs.",
    icon: Baby,
    image:
      ImgPediatricDentistry,
  },
  {
    id: "aesthetic-dentistry",
    number: "09",
    title: "Aesthetic Dentistry",
    tag: "Smile Aesthetics",
    description:
      "Dental treatment focused on improving the appearance of teeth and the overall look of the smile.",
    icon: Sparkles,
    image:
      "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=85&w=1000",
  },
];

const TreatmentCard = ({
  treatment,
  index,
}: {
  treatment: (typeof treatments)[number];
  index: number;
}) => {
  const Icon = treatment.icon;

  return (
    <motion.article
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      whileHover={{ y: -6 }}
      className="group overflow-hidden rounded-[30px] border border-slate-200 bg-white shadow-[0_15px_45px_-25px_rgba(15,23,42,0.35)] transition-all duration-500 hover:shadow-[0_25px_60px_-25px_rgba(15,23,42,0.42)]"
    >
      <div className="relative h-[235px] overflow-hidden">
        <img
          src={treatment.image}
          alt={treatment.title}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.05]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#111827]/80 via-transparent to-transparent" />

        <div className="absolute left-4 top-4 flex h-10 w-10 items-center justify-center rounded-2xl bg-white/95 text-xs font-black text-[#111827] shadow-lg">
          {treatment.number}
        </div>

        <div className="absolute right-4 top-4">
          <span className="rounded-full bg-[#111827]/80 px-3 py-1.5 text-[9px] font-bold uppercase tracking-wider text-white backdrop-blur-md">
            {treatment.tag}
          </span>
        </div>

        <div className="absolute bottom-5 left-5 right-5">
          <p className="mb-2 text-[9px] font-bold uppercase tracking-[0.15em] text-white/60">
            Wide Smiles Dental
          </p>
          <h3 className="text-2xl font-black leading-tight tracking-tight text-white">
            {treatment.title}
          </h3>
        </div>
      </div>

      <div className="p-6">
        <div className="mb-5 flex items-start gap-4">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#FF5500]/10 text-[#FF5500]">
            <Icon className="h-5 w-5" />
          </div>
          <p className="text-sm leading-relaxed text-slate-500">
            {treatment.description}
          </p>
        </div>

        <Link
          to={`/treatments/${treatment.id}`}
          className="flex items-center justify-between rounded-2xl bg-slate-50 px-4 py-3.5 text-xs font-bold text-[#111827] transition-all hover:bg-[#FF5500] hover:text-white"
        >
          <span>Explore treatment</span>
          <ArrowUpRight className="h-4 w-4" />
        </Link>
      </div>
    </motion.article>
  );
};

export default function TreatmentsPage() {
  const featured = treatments.find((item) => item.featured)!;

  return (
    <div className="min-h-screen flex flex-col justify-between bg-[#FAFAFA] text-[#111827]">
      {/* Navigation Header */}
      <Navbar />

      {/* Main Content Body */}
      <main className="flex-1 overflow-hidden">
        {/* Hero Section */}
        <section className="relative px-4 pb-16 pt-28 sm:px-6 sm:pb-24 lg:px-8 lg:pt-36">
          <div className="pointer-events-none absolute -left-32 top-20 h-[420px] w-[420px] rounded-full bg-[#FF5500]/10 blur-[120px]" />
          <div className="pointer-events-none absolute -right-40 top-40 h-[500px] w-[500px] rounded-full bg-slate-900/[0.035] blur-[140px]" />

          <div className="relative z-10 mx-auto max-w-6xl text-center">
            

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.05 }}
              className="mt-5 text-[2.7rem] font-black leading-[1.02] tracking-[-0.045em] sm:text-5xl lg:text-7xl"
            >
              Complete care.
              <br />
              <span className="text-[#FF5500]">Thoughtfully delivered.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mx-auto mt-5 max-w-2xl text-sm leading-relaxed text-slate-500 sm:text-base"
            >
              Explore dental treatments designed around your oral health,
              comfort, individual needs, and long-term smile care.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.18 }}
              className="mt-7 flex flex-col justify-center gap-3 sm:flex-row"
            >
              <Link
                to="/contact"
                className="rounded-2xl bg-[#FF5500] px-6 py-3.5 text-xs font-bold text-white shadow-lg shadow-orange-500/20 transition-transform hover:-translate-y-0.5"
              >
                Book a Consultation
              </Link>
              <a
                href="tel:+91XXXXXXXXXX"
                className="rounded-2xl border border-slate-200 bg-white px-6 py-3.5 text-xs font-bold text-[#111827] transition-colors hover:border-[#FF5500]/30 hover:text-[#FF5500]"
              >
                Call the Clinic
              </a>
            </motion.div>
          </div>
        </section>

        {/* Featured Section */}
        <section className="px-4 pb-14 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="overflow-hidden rounded-[32px] bg-[#111827] text-white"
            >
              <div className="grid lg:grid-cols-[1fr_1.05fr]">
                <div className="flex flex-col justify-center p-7 sm:p-10 lg:p-14">
                  <span className="mb-4 text-[9px] font-bold uppercase tracking-[0.18em] text-[#FF5500]">
                    Specialist Care
                  </span>
                  <h2 className="max-w-xl text-3xl font-black tracking-tight sm:text-5xl">
                    Dental Implants
                  </h2>
                  <p className="mt-4 max-w-lg text-sm leading-relaxed text-slate-400">
                    A planned option for replacing missing teeth and restoring
                    everyday function with treatment tailored to the individual.
                  </p>

                  <Link
                    to={`/treatments/${featured.id}`}
                    className="mt-7 inline-flex w-fit items-center gap-3 rounded-2xl bg-[#FF5500] px-5 py-3.5 text-xs font-bold text-white"
                  >
                    Explore Dental Implants
                    <ArrowUpRight className="h-4 w-4" />
                  </Link>
                </div>

                <div className="relative min-h-[320px] overflow-hidden lg:min-h-[440px]">
                  <img
                    src={featured.image}
                    alt="Dental implants"
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-[#111827] via-[#111827]/20 to-transparent lg:w-1/2" />
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Treatments Grid Section */}
        <section className="px-4 pb-24 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <div className="mb-10 max-w-2xl">
              <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#FF5500]">
                Our Core Treatments
              </p>
              <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-5xl">
                Care for every stage
                <br />
                of your smile.
              </h2>
            </div>

            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {treatments.map((treatment, index) => (
                <TreatmentCard key={treatment.id} treatment={treatment} index={index} />
              ))}
            </div>

            {/* Bottom Callout Banner */}
            <div className="mt-12 rounded-[30px] border border-slate-200 bg-white p-6 sm:p-8">
              <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <div className="flex items-center gap-2 text-[#FF5500]">
                    <CheckCircle2 className="h-4 w-4" />
                    <span className="text-[9px] font-bold uppercase tracking-[0.18em]">
                      Personalised care
                    </span>
                  </div>
                  <h3 className="mt-2 text-xl font-black tracking-tight">
                    Not sure which treatment you need?
                  </h3>
                  <p className="mt-1 max-w-xl text-sm leading-relaxed text-slate-500">
                    A dental examination helps determine the appropriate
                    treatment based on your individual condition and needs.
                  </p>
                </div>
                <Link
                  to="/contact"
                  className="inline-flex shrink-0 items-center justify-center gap-2 rounded-2xl bg-[#111827] px-5 py-3.5 text-xs font-bold text-white"
                >
                  Talk to the Clinic
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer Section */}
      <Footer />
    </div>
  );
}