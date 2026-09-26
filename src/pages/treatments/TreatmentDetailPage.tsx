import React from "react";
import { Link, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowUpRight,
  CheckCircle2,
  ChevronDown,
  Clock3,
  Phone,
  Sparkles,
  Stethoscope,
} from "lucide-react";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

/* =========================================================
   TREATMENT DATA
========================================================= */

const treatmentData: Record<
  string,
  {
    number: string;
    title: string;
    tag: string;
    intro: string;
    image: string;
    whatIsIt: string;
    usedFor: string[];
    whatHappens: string[];
    benefits: string[];
    expectation?: string;
    duration?: string;
    faqs: { q: string; a: string }[];
  }
> = {
  "general-dentistry": {
    number: "01",
    title: "General Dentistry",
    tag: "Preventive Care",
    intro:
      "General dentistry covers routine and preventive dental care, helping monitor oral health and address common dental concerns.",
    image:
      "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=85&w=1600",
    whatIsIt:
      "General dentistry focuses on maintaining your teeth, gums, and overall oral health through regular dental care and appropriate treatment.",
    usedFor: [
      "Routine dental check-ups",
      "Preventive dental care",
      "Common tooth and gum concerns",
      "Monitoring overall oral health",
    ],
    whatHappens: [
      "The dentist examines your teeth and gums.",
      "Your dental concerns and oral health are discussed.",
      "Recommended preventive or restorative care is explained.",
      "A treatment plan can be made according to your individual needs.",
    ],
    benefits: [
      "Helps maintain oral health",
      "Supports early identification of dental concerns",
      "Allows care to be planned around individual needs",
    ],
    expectation:
      "Your appointment depends on the reason for your visit and the care required.",
    faqs: [
      {
        q: "How often should I have a dental check-up?",
        a: "Your dentist can recommend an appropriate schedule based on your oral health and individual needs.",
      },
      {
        q: "Can I visit a dentist even if I have no pain?",
        a: "Yes. Regular dental check-ups can help monitor your oral health and identify concerns early.",
      },
    ],
  },

  "root-canal-treatment": {
    number: "02",
    title: "Root Canal Treatment",
    tag: "Tooth Preservation",
    intro:
      "Root canal treatment addresses the affected area inside a tooth when it is affected by infection, damage, or inflammation.",
    image:
      "https://i.pinimg.com/736x/ef/16/19/ef161928e6608173ef9503dd33fb4d27.jpg",
    whatIsIt:
      "A root canal is a dental treatment used to treat the inside of a tooth when the pulp or inner tissues become affected.",
    usedFor: [
      "Infection inside a tooth",
      "Damage affecting the inside of the tooth",
      "Inflammation of the tooth's inner tissues",
    ],
    whatHappens: [
      "The affected area inside the tooth is treated.",
      "The affected tissue is cleaned.",
      "The space is sealed to help protect the tooth.",
      "Further restoration may be planned depending on the condition of the tooth.",
    ],
    benefits: [
      "Helps address infection or inflammation inside the tooth",
      "Can help preserve the natural tooth",
      "Supports comfortable chewing function after appropriate treatment",
    ],
    expectation:
      "The exact procedure and number of visits depend on the condition of the tooth and the treatment plan.",
    faqs: [
      {
        q: "Why might I need a root canal?",
        a: "A root canal may be recommended when the inside of a tooth is affected by infection, damage, or inflammation.",
      },
      {
        q: "Does a root canal save the natural tooth?",
        a: "Root canal treatment is intended to treat the affected inside of the tooth and may help preserve the natural tooth.",
      },
    ],
  },

  "teeth-replacement": {
    number: "04",
    title: "Teeth Replacement",
    tag: "Tooth Replacement",
    intro:
      "Teeth replacement focuses on replacing missing teeth and restoring everyday oral function with an option suited to the individual.",
    image:
      "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?auto=format&fit=crop&q=85&w=1600",
    whatIsIt:
      "Teeth replacement involves treatment options designed to replace missing teeth and restore oral function.",
    usedFor: [
      "Missing teeth",
      "Restoring everyday oral function",
      "Individual tooth replacement needs",
    ],
    whatHappens: [
      "The dentist examines your oral condition.",
      "Suitable replacement options are discussed.",
      "The treatment plan is selected according to your needs.",
      "Treatment is carried out according to the chosen replacement option.",
    ],
    benefits: [
      "Addresses missing teeth",
      "Supports everyday oral function",
      "Treatment can be planned according to individual needs",
    ],
    duration:
      "Treatment time depends on the replacement option selected and your individual dental condition.",
    faqs: [
      {
        q: "What options are available for replacing teeth?",
        a: "Your dentist can examine your condition and explain the appropriate tooth replacement options available for you.",
      },
      {
        q: "How do I know which option is suitable?",
        a: "The suitable option depends on your dental condition and individual needs and can be discussed after examination.",
      },
    ],
  },

  orthodontics: {
    number: "05",
    title: "Orthodontics",
    tag: "Teeth Alignment",
    intro:
      "Orthodontic care focuses on improving tooth alignment and addressing bite-related concerns through individually planned treatment.",
    image:
      "https://i.pinimg.com/736x/3c/50/db/3c50db2e1dc1ebf633f8f275a810b017.jpg",
    whatIsIt:
      "Orthodontics is dental care focused on the alignment of teeth and the relationship between the teeth and bite.",
    usedFor: [
      "Teeth alignment concerns",
      "Bite-related concerns",
      "Improving the overall alignment of the teeth",
    ],
    whatHappens: [
      "The dentist or orthodontic clinician examines the teeth and bite.",
      "Your alignment concerns are assessed.",
      "Suitable treatment options are discussed.",
      "Treatment is planned according to your individual needs.",
    ],
    benefits: [
      "Addresses tooth alignment concerns",
      "Can improve the relationship between teeth and bite",
      "Treatment is planned around individual needs",
    ],
    duration:
      "The duration depends on the alignment concern and the treatment plan.",
    faqs: [
      {
        q: "What is orthodontic treatment?",
        a: "It is dental care focused on improving tooth alignment and addressing bite-related concerns.",
      },
      {
        q: "How long does orthodontic treatment take?",
        a: "Treatment duration varies according to the individual dental condition and treatment plan.",
      },
    ],
  },

  "gum-bone-therapy": {
    number: "06",
    title: "Gum & Bone Therapy",
    tag: "Gum Health",
    intro:
      "Gum and bone therapy addresses concerns involving the gums and supporting structures around the teeth.",
    image:
      "https://images.unsplash.com/photo-1606265752439-1f18756aa2a2?auto=format&fit=crop&q=85&w=1600",
    whatIsIt:
      "Gum and bone therapy focuses on assessing and treating conditions involving the gums and supporting bone according to individual needs.",
    usedFor: [
      "Gum-related concerns",
      "Supporting bone concerns",
      "Individual periodontal treatment needs",
    ],
    whatHappens: [
      "The dentist examines the gums and supporting structures.",
      "Your oral health condition is assessed.",
      "Suitable treatment options are discussed.",
      "Treatment is planned according to the findings and your individual needs.",
    ],
    benefits: [
      "Addresses individual gum and supporting structure concerns",
      "Helps plan care according to your oral condition",
      "Supports comprehensive periodontal care",
    ],
    duration:
      "Treatment time depends on the condition being treated and the treatment plan.",
    faqs: [
      {
        q: "Why is gum health important?",
        a: "Healthy gums are an important part of overall oral health and support the teeth.",
      },
      {
        q: "How is gum treatment planned?",
        a: "The dentist examines your gums and supporting structures and recommends treatment based on the findings.",
      },
    ],
  },

  "oral-surgery": {
    number: "07",
    title: "Oral Surgery",
    tag: "Surgical Care",
    intro:
      "Oral surgery includes selected surgical procedures that are planned following clinical examination and individual assessment.",
    image:
      "https://images.unsplash.com/photo-1581585099408-0d4c0e0e0b3a?auto=format&fit=crop&q=85&w=1600",
    whatIsIt:
      "Oral surgery involves selected surgical dental procedures carried out according to the patient's clinical condition and treatment needs.",
    usedFor: [
      "Selected surgical dental procedures",
      "Surgical treatment needs identified during examination",
      "Individual oral and dental conditions requiring a procedure",
    ],
    whatHappens: [
      "The dentist examines the condition requiring treatment.",
      "The procedure and expected care are explained.",
      "The surgical treatment is planned according to the clinical findings.",
      "Aftercare instructions are provided as appropriate.",
    ],
    benefits: [
      "Provides a planned approach to selected surgical dental needs",
      "Treatment is based on individual clinical assessment",
      "Supports appropriate management of surgical dental conditions",
    ],
    duration:
      "The procedure and recovery time depend on the type of oral surgery required.",
    faqs: [
      {
        q: "Will every oral surgery procedure be the same?",
        a: "No. The procedure depends on the dental condition and the treatment required.",
      },
      {
        q: "How will I know if oral surgery is required?",
        a: "A dental examination helps determine whether a surgical procedure is appropriate for your condition.",
      },
    ],
  },

  "dental-implants": {
    number: "03",
    title: "Dental Implants",
    tag: "Specialist Care",
    intro:
      "Dental implants are an option for replacing missing teeth, with treatment planned after individual assessment and examination.",
    image:
      "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&q=85&w=1600",
    whatIsIt:
      "A dental implant is a treatment option used to replace a missing tooth. It is planned according to the patient's oral condition and individual needs.",
    usedFor: [
      "Replacing missing teeth",
      "Restoring everyday oral function",
      "Individual tooth replacement needs",
    ],
    whatHappens: [
      "Your dentist examines your teeth, gums, and overall oral condition.",
      "Your replacement needs and suitable options are discussed.",
      "The implant treatment is planned according to your individual condition.",
      "The treatment is carried out according to the personalised plan.",
    ],
    benefits: [
      "Provides an option for replacing missing teeth",
      "Supports restoration of oral function",
      "Treatment can be planned around individual needs",
    ],
    expectation:
      "Implant treatment is planned individually. The number of appointments and overall treatment time depend on your oral condition and treatment plan.",
    faqs: [
      {
        q: "What are dental implants used for?",
        a: "Dental implants are used as an option for replacing missing teeth.",
      },
      {
        q: "Is everyone suitable for dental implants?",
        a: "Suitability depends on your individual dental and oral condition. An examination is needed to determine the appropriate treatment.",
      },
    ],
  },

  "pediatric-dentistry": {
    number: "08",
    title: "Pediatric Dentistry",
    tag: "Children's Care",
    intro:
      "Pediatric dentistry focuses on dental care for children, with treatment planned according to their changing teeth, mouth, and individual needs.",
    image:
      "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?auto=format&fit=crop&q=85&w=1600",
    whatIsIt:
      "Pediatric dentistry is dental care focused on children and their developing teeth and mouth.",
    usedFor: [
      "Children's dental check-ups",
      "Monitoring developing teeth",
      "Addressing individual children's dental concerns",
    ],
    whatHappens: [
      "The dentist examines the child's teeth.",
      "Any concerns are discussed with the parent or guardian.",
      "The child's dental needs are assessed.",
      "Suitable care is planned according to the child's needs.",
    ],
    benefits: [
      "Supports children's oral health",
      "Helps monitor developing teeth and mouth",
      "Allows care to be planned according to the child's needs",
    ],
    expectation:
      "The dentist will examine the child's teeth and discuss any concerns with the parent or guardian.",
    faqs: [
      {
        q: "What is pediatric dentistry?",
        a: "It is dental care focused on children.",
      },
      {
        q: "Can children visit a dentist even if they have no pain?",
        a: "Yes. Dental check-ups can help monitor their oral health.",
      },
      {
        q: "Is children's dental care different from adult dental care?",
        a: "Children's dental needs can vary as their teeth and mouth develop, so their care is planned according to their needs.",
      },
    ],
  },

  "aesthetic-dentistry": {
    number: "09",
    title: "Aesthetic Dentistry",
    tag: "Smile Aesthetics",
    intro:
      "Aesthetic dentistry focuses on improving the appearance of your teeth and smile while considering your overall dental health.",
    image:
      "https://images.unsplash.com/photo-1494911840918-8c7e3b1f5f6a?auto=format&fit=crop&q=85&w=1600",
    whatIsIt:
      "Aesthetic dentistry focuses on improving the appearance of your teeth and smile.",
    usedFor: [
      "Concerns about the appearance of teeth",
      "Concerns about the appearance of the smile",
      "Individual aesthetic dental concerns",
    ],
    whatHappens: [
      "The dentist examines your teeth.",
      "Your aesthetic concerns are discussed.",
      "Suitable options are explained.",
      "Treatment is planned according to your dental needs.",
    ],
    benefits: [
      "Focuses on improving the appearance of your smile",
      "Addresses individual aesthetic concerns",
      "Treatment can be planned according to your needs",
    ],
    duration:
      "Treatment time depends on the type of aesthetic dental treatment selected.",
    faqs: [
      {
        q: "What is aesthetic dentistry?",
        a: "It focuses on improving the appearance of your teeth and smile.",
      },
      {
        q: "Is aesthetic dentistry only for appearance?",
        a: "Its main focus is appearance, while your overall dental health should also be considered.",
      },
      {
        q: "How do I know which treatment is suitable for me?",
        a: "Your dentist can examine your teeth and explain the available options.",
      },
    ],
  },
};

/* =========================================================
   FAQ
========================================================= */

function FAQItem({ q, a }: { q: string; a: string }) {
  return (
    <details className="group rounded-2xl border border-slate-200 bg-white px-5 py-4">
      <summary className="flex cursor-pointer list-none items-center justify-between gap-5 text-sm font-bold text-[#111827]">
        <span>{q}</span>

        <ChevronDown className="h-4 w-4 shrink-0 text-[#FF5500] transition-transform group-open:rotate-180" />
      </summary>

      <p className="pt-3 text-sm leading-relaxed text-slate-500">{a}</p>
    </details>
  );
}

/* =========================================================
   PAGE
========================================================= */

export default function TreatmentDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const treatment = slug ? treatmentData[slug] : undefined;

  if (!treatment) {
    return (
      <div className="min-h-screen bg-[#FAFAFA] text-[#111827]">
        <Navbar />

        <main className="min-h-screen px-5 pb-24 pt-36">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#FF5500]">
              Wide Smiles Dental
            </p>

            <h1 className="mt-3 text-4xl font-black tracking-tight">
              Treatment not found
            </h1>

            <p className="mx-auto mt-4 max-w-lg text-sm leading-7 text-slate-500">
              The treatment you are looking for could not be found.
            </p>

            <Link
              to="/treatments"
              className="mt-7 inline-flex items-center gap-2 rounded-2xl bg-[#FF5500] px-5 py-3 text-xs font-bold text-white"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Treatments
            </Link>
          </div>
        </main>

        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#FAFAFA] text-[#111827]">
      <Navbar />

      <main className="overflow-hidden">
        {/* HERO */}
        <section className="px-4 pb-12 pt-28 sm:px-6 sm:pt-36 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <Link
              to="/treatments"
              className="mb-7 inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.16em] text-slate-500 transition-colors hover:text-[#FF5500]"
            >
              <ArrowLeft className="h-3.5 w-3.5" />
              All Treatments
            </Link>

            <div className="overflow-hidden rounded-[34px] bg-[#111827] text-white shadow-[0_30px_80px_-45px_rgba(15,23,42,0.6)]">
              <div className="grid lg:grid-cols-[0.95fr_1.05fr]">
                <div className="flex flex-col justify-center p-7 sm:p-10 lg:p-14">
                  <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center gap-2"
                  >
                    <span className="text-[#FF5500]">{treatment.number}</span>

                    <span className="h-px w-8 bg-white/20" />

                    <span className="text-[9px] font-bold uppercase tracking-[0.18em] text-slate-400">
                      {treatment.tag}
                    </span>
                  </motion.div>

                  <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.05 }}
                    className="mt-5 text-4xl font-black leading-[1.02] tracking-[-0.04em] sm:text-6xl"
                  >
                    {treatment.title}
                  </motion.h1>

                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="mt-5 max-w-xl text-sm leading-relaxed text-slate-400 sm:text-base"
                  >
                    {treatment.intro}
                  </motion.p>

                  <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                    <Link
                      to="/contact"
                      className="inline-flex items-center justify-center gap-2 rounded-2xl bg-[#FF5500] px-5 py-3.5 text-xs font-bold text-white transition-all hover:bg-[#e84d00] hover:shadow-xl"
                    >
                      Book a Consultation
                      <ArrowUpRight className="h-4 w-4" />
                    </Link>

                    <a
                      href="tel:+91XXXXXXXXXX"
                      className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/10 px-5 py-3.5 text-center text-xs font-bold text-white transition-colors hover:border-white/30"
                    >
                      <Phone className="h-3.5 w-3.5" />
                      Call the Clinic
                    </a>
                  </div>
                </div>

                <div className="relative min-h-[360px] overflow-hidden lg:min-h-[520px]">
                  <img
                    src={treatment.image}
                    alt={treatment.title}
                    className="absolute inset-0 h-full w-full object-cover"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#111827]/75 via-[#111827]/10 to-transparent lg:bg-gradient-to-r lg:from-[#111827] lg:via-[#111827]/15 lg:to-transparent lg:w-1/2" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* OVERVIEW */}
        <section className="px-4 py-12 sm:px-6 lg:px-8">
          <div className="mx-auto grid max-w-6xl gap-5 lg:grid-cols-[1.3fr_0.7fr]">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="rounded-[30px] border border-slate-200 bg-white p-7 shadow-[0_20px_60px_-45px_rgba(15,23,42,0.4)] sm:p-10"
            >
              <div className="flex items-center gap-2 text-[#FF5500]">
                <Sparkles className="h-4 w-4" />

                <span className="text-[9px] font-bold uppercase tracking-[0.18em]">
                  Treatment Overview
                </span>
              </div>

              <h2 className="mt-3 text-3xl font-black tracking-tight">
                What is {treatment.title}?
              </h2>

              <p className="mt-4 text-sm leading-7 text-slate-500">
                {treatment.whatIsIt}
              </p>
            </motion.div>

            <div className="rounded-[30px] bg-[#111827] p-7 text-white shadow-[0_25px_60px_-40px_rgba(15,23,42,0.6)] sm:p-10">
              <Stethoscope className="h-6 w-6 text-[#FF5500]" />

              <h3 className="mt-5 text-xl font-black">
                Personalised treatment
              </h3>

              <p className="mt-3 text-sm leading-relaxed text-slate-400">
                Every patient is different. The appropriate treatment depends
                on your dental condition and individual needs.
              </p>
            </div>
          </div>
        </section>

        {/* USED FOR */}
        <section className="px-4 py-12 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <div className="mb-8">
              <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#FF5500]">
                When it may be considered
              </p>

              <h2 className="mt-2 text-3xl font-black tracking-tight sm:text-4xl">
                What is it used for?
              </h2>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {treatment.usedFor.map((item) => (
                <div
                  key={item}
                  className="rounded-[24px] border border-slate-200 bg-white p-6 shadow-[0_15px_40px_-30px_rgba(15,23,42,0.35)] transition-transform hover:-translate-y-1"
                >
                  <CheckCircle2 className="h-5 w-5 text-[#FF5500]" />

                  <p className="mt-5 text-sm font-bold leading-relaxed">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PROCESS */}
        <section className="px-4 py-12 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-6xl rounded-[32px] bg-white p-7 shadow-[0_20px_60px_-45px_rgba(15,23,42,0.3)] sm:p-10 lg:p-14">
            <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr]">
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#FF5500]">
                  The process
                </p>

                <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">
                  What happens?
                </h2>

                <p className="mt-4 text-sm leading-relaxed text-slate-500">
                  Your treatment is planned according to your individual
                  dental condition and clinical findings.
                </p>
              </div>

              <div className="space-y-4">
                {treatment.whatHappens.map((step, index) => (
                  <div
                    key={step}
                    className="flex gap-4 rounded-2xl border border-slate-200 p-5 transition-colors hover:border-[#FF5500]/30"
                  >
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#FF5500]/10 text-xs font-black text-[#FF5500]">
                      {String(index + 1).padStart(2, "0")}
                    </div>

                    <p className="pt-1 text-sm leading-relaxed text-slate-600">
                      {step}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* BENEFITS */}
        <section className="px-4 py-12 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <div className="mb-8">
              <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#FF5500]">
                Why treatment matters
              </p>

              <h2 className="mt-2 text-3xl font-black tracking-tight sm:text-4xl">
                Potential benefits
              </h2>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
              {treatment.benefits.map((benefit) => (
                <div
                  key={benefit}
                  className="rounded-[26px] border border-slate-200 bg-white p-6 transition-transform hover:-translate-y-1"
                >
                  <CheckCircle2 className="h-5 w-5 text-[#FF5500]" />

                  <p className="mt-5 text-sm font-bold leading-relaxed">
                    {benefit}
                  </p>
                </div>
              ))}
            </div>

            {(treatment.expectation || treatment.duration) && (
              <div className="mt-5 grid gap-4 md:grid-cols-2">
                {treatment.expectation && (
                  <div className="rounded-[26px] bg-[#111827] p-6 text-white">
                    <p className="text-[9px] font-bold uppercase tracking-[0.18em] text-[#FF5500]">
                      What should I expect?
                    </p>

                    <p className="mt-4 text-sm leading-relaxed text-slate-300">
                      {treatment.expectation}
                    </p>
                  </div>
                )}

                {treatment.duration && (
                  <div className="rounded-[26px] border border-slate-200 bg-white p-6">
                    <div className="flex items-center gap-2 text-[#FF5500]">
                      <Clock3 className="h-4 w-4" />

                      <p className="text-[9px] font-bold uppercase tracking-[0.18em]">
                        Treatment time
                      </p>
                    </div>

                    <p className="mt-4 text-sm leading-relaxed text-slate-500">
                      {treatment.duration}
                    </p>
                  </div>
                )}
              </div>
            )}
          </div>
        </section>

        {/* FAQ */}
        <section className="px-4 py-12 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <div className="mb-8 text-center">
              <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#FF5500]">
                Frequently Asked Questions
              </p>

              <h2 className="mt-2 text-3xl font-black tracking-tight sm:text-4xl">
                Common questions
              </h2>
            </div>

            <div className="space-y-3">
              {treatment.faqs.map((faq) => (
                <FAQItem key={faq.q} q={faq.q} a={faq.a} />
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="px-4 pb-24 pt-12 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-6xl overflow-hidden rounded-[32px] bg-[#111827] p-8 text-white shadow-[0_30px_80px_-45px_rgba(15,23,42,0.7)] sm:p-12">
            <div className="flex flex-col gap-7 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#FF5500]">
                  Ready when you are
                </p>

                <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">
                  Discuss your dental needs with our team.
                </h2>

                <p className="mt-3 max-w-2xl text-sm leading-relaxed text-slate-400">
                  A proper examination helps determine the right treatment for
                  your individual condition.
                </p>
              </div>

              <Link
                to="/contact"
                className="inline-flex shrink-0 items-center justify-center gap-2 rounded-2xl bg-[#FF5500] px-6 py-4 text-xs font-bold text-white transition-all hover:bg-[#e84d00] hover:shadow-xl"
              >
                Book a Consultation
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}