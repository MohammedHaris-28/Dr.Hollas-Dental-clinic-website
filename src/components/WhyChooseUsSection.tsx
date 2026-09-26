import React from "react";
import { motion } from "framer-motion";
import {
  ShieldCheck,
  Award,
  Clock3,
  HeartHandshake,
  Microscope,
  Sparkles,
  CheckCircle2,
  Star,
  Quote,
} from "lucide-react";

const features = [
  {
    icon: ShieldCheck,
    title: "Safe & Hygienic Environment",
    description:
      "Strict sterilization and infection-control practices are followed to maintain a clean, safe, and comfortable clinical environment for every patient.",
  },
  {
    icon: Microscope,
    title: "Modern Dental Technology",
    description:
      "Modern diagnostic and treatment technologies support precise clinical assessment and efficient, comfortable dental care.",
  },
  {
    icon: HeartHandshake,
    title: "Personalized Treatment Plans",
    description:
      "Every treatment plan is tailored to the patient's dental needs, concerns, priorities, and long-term oral health goals.",
  },
  {
    icon: Award,
    title: "Specialist-Led Dental Care",
    description:
      "Our approach combines clinical expertise, careful diagnosis, and treatment planning across preventive, restorative, surgical, and aesthetic dentistry.",
  },
  {
    icon: Clock3,
    title: "Convenient Appointment Planning",
    description:
      "Simple appointment coordination helps patients plan consultations and treatments around their daily schedules.",
  },
  {
    icon: Sparkles,
    title: "Comfort-Focused Experience",
    description:
      "Gentle communication and patient-focused treatment are designed to make every visit feel calm, clear, and reassuring.",
  },
];

const WhyChooseUsSection = () => {
  return (
    <section
      id="why-choose-us"
      className="relative overflow-hidden border-t border-slate-200/70 bg-[#FAFAFA] py-16 antialiased selection:bg-[#FF5500]/10 sm:py-24 lg:py-28"
    >
      {/* Background Ambient Glows */}
      <div className="pointer-events-none absolute right-[-8%] top-0 h-[350px] w-[350px] rounded-full bg-[#FF5500]/[0.06] blur-[100px] sm:h-[500px] sm:w-[500px] sm:blur-[130px]" />
      <div className="pointer-events-none absolute bottom-0 left-[-8%] h-[350px] w-[350px] rounded-full bg-[#111827]/[0.035] blur-[110px] sm:h-[450px] sm:w-[450px] sm:blur-[130px]" />

      <div className="relative z-10 mx-auto w-full max-w-[1280px] px-4 sm:px-6 lg:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mx-auto mb-12 max-w-3xl text-center sm:mb-16 lg:mb-20"
        >
          

          <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-[#111827] sm:text-4xl lg:text-5xl">
            Thoughtful Dental Care
            <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-[#FF5500] to-[#D94300] bg-clip-text text-transparent">
              Built Around You.
            </span>
          </h2>

          <p className="mx-auto mt-3 max-w-2xl text-sm font-normal leading-relaxed text-slate-600 sm:mt-4 sm:text-base lg:text-lg">
            At Dr. Holla&apos;s Wide Smiles Dental Clinic and Implant Center, we combine modern dentistry, careful diagnosis, personalized treatment planning, and a comfortable patient experience.
          </p>
        </motion.div>

        {/* Main Grid Interface Layout */}
        <div className="grid items-start gap-8 lg:grid-cols-12 lg:gap-12">
          {/* Left Block: Feature Cards */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:col-span-7">
            {features.map((feature, index) => {
              const Icon = feature.icon;

              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.05,
                    ease: "easeOut",
                  }}
                  className="group rounded-[20px] border border-slate-200/80 bg-white/95 p-5 shadow-sm backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-[#FF5500]/30 hover:shadow-lg sm:rounded-[24px] sm:p-6"
                >
                  <div className="mb-4 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-[#FF5500]/10 bg-[#FFF7F2] transition-all duration-300 group-hover:scale-105 group-hover:bg-[#FF5500]/10 sm:mb-5 sm:h-12 sm:w-12">
                    <Icon className="h-4 w-4 text-[#FF5500] transition-colors sm:h-5 sm:w-5" />
                  </div>

                  <h3 className="mb-1.5 text-base font-bold tracking-tight text-[#111827] transition-colors group-hover:text-[#FF5500] sm:text-lg">
                    {feature.title}
                  </h3>

                  <p className="text-xs font-normal leading-relaxed text-slate-600 sm:text-sm">
                    {feature.description}
                  </p>
                </motion.div>
              );
            })}
          </div>

          {/* Right Block: Brand Trust Panel */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
            className="lg:sticky lg:top-28 lg:col-span-5"
          >
            <div className="relative overflow-hidden rounded-[20px] border border-slate-200/80 bg-white p-6 shadow-sm sm:rounded-[28px] sm:p-8">
              <div className="pointer-events-none absolute right-0 top-0 h-36 w-36 rounded-bl-full bg-[#FF5500]/[0.05]" />

              <div className="mb-2 inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider text-[#FF5500]">
                <CheckCircle2 size={13} />
                <span>Our Care Approach</span>
              </div>

              <h3 className="text-2xl font-extrabold leading-tight tracking-tight text-[#111827] sm:text-3xl">
                Your Comfort.
                <br />
                <span className="text-[#FF5500]">Your Smile. Our Care.</span>
              </h3>

              <p className="mt-3 text-xs font-normal leading-relaxed text-slate-600 sm:text-sm">
                We focus on clear communication, careful diagnosis, comfortable treatment, and practical long-term solutions so you can make informed decisions about your oral health.
              </p>

              {/* Trust Metrics */}
              <div className="mt-6 grid grid-cols-2 gap-3 sm:mt-8 sm:gap-4">
                <div className="rounded-2xl border border-slate-200/80 bg-[#FAFAFA] p-3.5 sm:p-4">
                  <h4 className="text-xl font-bold tracking-tight text-[#111827] sm:text-2xl">
                    9+
                  </h4>
                  <p className="mt-0.5 text-[10px] font-semibold uppercase tracking-wider text-slate-400">
                    Treatment Areas
                  </p>
                </div>

                <div className="rounded-2xl border border-slate-200/80 bg-[#FAFAFA] p-3.5 sm:p-4">
                  <h4 className="text-xl font-bold tracking-tight text-[#FF5500] sm:text-2xl">
                    MDS
                  </h4>
                  <p className="mt-0.5 text-[10px] font-semibold uppercase tracking-wider text-slate-400">
                    Specialist Care
                  </p>
                </div>

                <div className="rounded-2xl border border-slate-200/80 bg-[#FAFAFA] p-3.5 sm:p-4">
                  <h4 className="flex items-center gap-1 text-xl font-bold tracking-tight text-[#111827] sm:text-2xl">
                    360°
                  </h4>
                  <p className="mt-0.5 text-[10px] font-semibold uppercase tracking-wider text-slate-400">
                    Patient-Focused Care
                  </p>
                </div>

                <div className="rounded-2xl border border-slate-200/80 bg-[#FAFAFA] p-3.5 sm:p-4">
                  <h4 className="text-xl font-bold tracking-tight text-[#111827] sm:text-2xl">
                    100%
                  </h4>
                  <p className="mt-0.5 text-[10px] font-semibold uppercase tracking-wider text-slate-400">
                    Hygiene Focused
                  </p>
                </div>
              </div>

              {/* Clinical Philosophy */}
              <div className="relative mt-6 rounded-xl border border-slate-200/80 bg-[#FAFAFA] p-4">
                <div className="mb-1 flex items-center gap-2">
                  <Quote size={14} className="text-[#FF5500]" />
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#111827]">
                    Our Philosophy
                  </span>
                </div>
                <p className="text-xs font-normal italic leading-relaxed text-slate-600">
                  &quot;Clear guidance, careful treatment, and a comfortable experience — every step of the way.&quot;
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
