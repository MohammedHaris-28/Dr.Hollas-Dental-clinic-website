import React, { useState } from "react";
import FooterSection from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";
import {
  Phone,
  MapPin,
  Clock3,
  MessageCircle,
  Instagram,
  CalendarCheck2,
  ArrowRight,
  ArrowUpRight,
  Calendar,
  Navigation,
  ShieldCheck,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const ContactSection = () => {
  const primaryPhone = "7483822917";
  const primaryDisplay = "74838 22917";
  const secondaryPhone = "9113550693";
  const secondaryDisplay = "91135 50693";
  const whatsappNumber = "917483822917";

  const instagramUrl =
    "https://www.instagram.com/wide_smiles_dental_clinic?utm_source=ig_web_button_share_sheet&stkn=ZDNlZDc0MzIxNw==";

  const justdialUrl =
    "https://www.justdial.com/Shimoga/Dr-HollaS-Wide-Smiles-Dental-Clinic-and-Implant-Center-Khb-Colony/9999P8182-8182-240323133626-V5D1_BZDET";

  const mapsEmbedUrl =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4593.505236388485!2d75.5457124!3d13.931131199999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbba92494f1ead3%3A0x326ad214df50189e!2sDr.%20Holla's%20Wide%20Smiles%20Dental%20clinic%20and%20implant%20center!5e1!3m2!1sen!2sin!4v1790146894363!5m2!1sen!2sin";

  const address =
    "No 523/55, KHB Colony, 2nd phase, Gopala, Shivamogga, Karnataka 577205";

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    date: "",
    treatment: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleWhatsAppSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const message = [
      "Hello Dr. Holla's Wide Smiles Dental Clinic & Implant Center,",
      "",
      "I would like to book an appointment.",
      "",
      `*Patient Name:* ${formData.name}`,
      `*Contact Phone:* ${formData.phone}`,
      `*Preferred Date:* ${formData.date}`,
      `*Preferred Treatment:* ${formData.treatment}`,
    ].join("\n");

    window.open(
      `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`,
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <div className="min-h-screen overflow-hidden bg-[#FAFAFA] font-sans text-slate-800 antialiased selection:bg-[#FF5500]/10">
      <Navbar />

      <main>
        {/* Hero */}
        <section className="relative overflow-hidden px-4 pb-14 pt-32 sm:px-6 sm:pb-20 sm:pt-36 lg:px-8 lg:pt-40">
          <div className="pointer-events-none absolute -right-40 -top-20 h-[420px] w-[420px] rounded-full bg-[#FF5500]/10 blur-[110px]" />
          <div className="pointer-events-none absolute -left-40 bottom-0 h-[360px] w-[360px] rounded-full bg-slate-900/[0.035] blur-[100px]" />

          <div className="relative z-10 mx-auto max-w-6xl">
            <div className="grid items-end gap-10 lg:grid-cols-[1.1fr_0.9fr]">
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.65 }}
              >
                <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#FF5500]/20 bg-[#FF5500]/10 px-4 py-1.5">
                  <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#FF5500]" />
                  <span className="text-[9px] font-bold uppercase tracking-[0.18em] text-[#FF5500]">
                    Contact Wide Smiles
                  </span>
                </div>

                <h1 className="max-w-4xl text-[2.9rem] font-black leading-[0.98] tracking-[-0.055em] text-[#111827] sm:text-6xl lg:text-7xl">
                  Your smile deserves
                  <span className="block text-[#FF5500]">thoughtful care.</span>
                </h1>

                <p className="mt-6 max-w-2xl text-sm leading-7 text-slate-500 sm:text-base">
                  Connect with Dr. Holla's Wide Smiles Dental Clinic & Implant
                  Center in Shivamogga for personalised dental care and
                  treatment guidance.
                </p>

                <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                  <a
                    href={`tel:${primaryPhone}`}
                    className="inline-flex items-center justify-center gap-2 rounded-2xl bg-[#FF5500] px-6 py-4 text-xs font-bold text-white shadow-xl shadow-orange-500/15 transition-all hover:-translate-y-0.5"
                  >
                    <Phone className="h-4 w-4" />
                    Call the Clinic
                  </a>

                  <a
                    href={`https://wa.me/${whatsappNumber}`}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-2xl border border-slate-200 bg-white px-6 py-4 text-xs font-bold text-[#111827] transition-all hover:border-[#FF5500]/30 hover:text-[#FF5500]"
                  >
                    <MessageCircle className="h-4 w-4" />
                    WhatsApp Us
                  </a>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.65, delay: 0.1 }}
                className="grid grid-cols-2 gap-3 sm:gap-4"
              >
                <div className="rounded-[26px] border border-slate-200 bg-white p-5 shadow-[0_20px_50px_-35px_rgba(15,23,42,0.45)]">
                  <ShieldCheck className="h-5 w-5 text-[#FF5500]" />
                  <p className="mt-5 text-sm font-black text-[#111827]">
                    Personalised
                  </p>
                  <p className="mt-1 text-xs leading-relaxed text-slate-500">
                    Treatment planned around your dental needs.
                  </p>
                </div>

                <div className="rounded-[26px] bg-[#111827] p-5 text-white shadow-[0_20px_50px_-30px_rgba(15,23,42,0.5)]">
                  <CalendarCheck2 className="h-5 w-5 text-[#FF5500]" />
                  <p className="mt-5 text-sm font-black">Easy appointment</p>
                  <p className="mt-1 text-xs leading-relaxed text-slate-400">
                    Send your preferred details directly through WhatsApp.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Main contact layout */}
        <section className="px-4 pb-24 sm:px-6 lg:px-8">
          <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-12">
            {/* Contact information */}
            <div className="space-y-5 lg:col-span-5">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                className="rounded-[30px] border border-slate-200 bg-white p-6 shadow-[0_25px_70px_-45px_rgba(15,23,42,0.45)] sm:p-8"
              >
                <p className="text-[9px] font-bold uppercase tracking-[0.18em] text-[#FF5500]">
                  Clinic Information
                </p>
                <h2 className="mt-2 text-2xl font-black tracking-tight text-[#111827] sm:text-3xl">
                  Find Wide Smiles.
                </h2>

                <div className="mt-7 space-y-3">
                  <a
                    href={`tel:${primaryPhone}`}
                    className="group flex items-center gap-4 rounded-2xl border border-slate-100 bg-slate-50 p-4 transition-all hover:border-[#FF5500]/20 hover:bg-[#FF5500]/[0.03]"
                  >
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#FF5500]/10 text-[#FF5500]">
                      <Phone className="h-5 w-5" />
                    </div>
                    <div>
                      <span className="block text-[9px] font-bold uppercase tracking-[0.14em] text-slate-400">
                        Primary Phone
                      </span>
                      <span className="mt-1 block text-sm font-black text-slate-800 transition-colors group-hover:text-[#FF5500]">
                        {primaryDisplay}
                      </span>
                    </div>
                  </a>

                  <a
                    href={`tel:${secondaryPhone}`}
                    className="group flex items-center gap-4 rounded-2xl border border-slate-100 bg-slate-50 p-4 transition-all hover:border-[#FF5500]/20 hover:bg-[#FF5500]/[0.03]"
                  >
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-slate-900/5 text-slate-700">
                      <Phone className="h-5 w-5" />
                    </div>
                    <div>
                      <span className="block text-[9px] font-bold uppercase tracking-[0.14em] text-slate-400">
                        Alternate Phone
                      </span>
                      <span className="mt-1 block text-sm font-black text-slate-800 transition-colors group-hover:text-[#FF5500]">
                        {secondaryDisplay}
                      </span>
                    </div>
                  </a>

                  <div className="flex items-start gap-4 rounded-2xl border border-slate-100 bg-slate-50 p-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#FF5500]/10 text-[#FF5500]">
                      <MapPin className="h-5 w-5" />
                    </div>
                    <div>
                      <span className="block text-[9px] font-bold uppercase tracking-[0.14em] text-slate-400">
                        Clinic Address
                      </span>
                      <p className="mt-1 text-sm font-medium leading-6 text-slate-600">
                        {address}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 rounded-2xl border border-slate-100 bg-slate-50 p-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#111827]/5 text-[#111827]">
                      <Clock3 className="h-5 w-5" />
                    </div>
                    <div>
                      <span className="block text-[9px] font-bold uppercase tracking-[0.14em] text-slate-400">
                        Clinic Hours
                      </span>
                      <p className="mt-1 text-sm font-semibold leading-6 text-slate-700">
                        Please contact the clinic to confirm current
                        consultation hours.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-6 border-t border-slate-100 pt-5">
                  <p className="mb-3 text-[9px] font-bold uppercase tracking-[0.18em] text-slate-400">
                    Connect & Discover
                  </p>

                  <div className="grid grid-cols-3 gap-3">
                    <a
                      href={`https://wa.me/${whatsappNumber}`}
                      target="_blank"
                      rel="noreferrer"
                      className="flex h-12 items-center justify-center rounded-2xl border border-slate-200 bg-white text-slate-600 transition-all hover:border-[#FF5500] hover:bg-[#FF5500] hover:text-white"
                      title="WhatsApp"
                    >
                      <MessageCircle className="h-5 w-5" />
                    </a>

                    <a
                      href={instagramUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="flex h-12 items-center justify-center rounded-2xl border border-slate-200 bg-white text-slate-600 transition-all hover:border-[#FF5500] hover:bg-[#FF5500] hover:text-white"
                      title="Instagram"
                    >
                      <Instagram className="h-5 w-5" />
                    </a>

                    <a
                      href={justdialUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="flex h-12 items-center justify-center rounded-2xl border border-slate-200 bg-white text-[10px] font-black uppercase tracking-wider text-slate-600 transition-all hover:border-[#FF5500] hover:bg-[#FF5500] hover:text-white"
                      title="Justdial"
                    >
                      Justdial
                    </a>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="rounded-[30px] bg-[#111827] p-6 text-white sm:p-8"
              >
                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#FF5500]/15 text-[#FF5500]">
                    <Navigation className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-[9px] font-bold uppercase tracking-[0.18em] text-[#FF5500]">
                      Visit the clinic
                    </p>
                    <h3 className="mt-2 text-xl font-black">
                      Gopala, Shivamogga
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate-400">
                      No 523/55, KHB Colony, 2nd phase, Gopala, Shivamogga,
                      Karnataka 577205
                    </p>
                  </div>
                </div>

                <a
                  href={justdialUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-6 flex items-center justify-between rounded-2xl bg-white/5 px-4 py-3.5 text-xs font-bold text-white transition-colors hover:bg-white/10"
                >
                  <span>View clinic details</span>
                  <ArrowUpRight className="h-4 w-4 text-[#FF5500]" />
                </a>
              </motion.div>
            </div>

            {/* Appointment + map */}
            <div className="space-y-5 lg:col-span-7">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                className="relative overflow-hidden rounded-[30px] border border-slate-200 bg-white p-6 shadow-[0_25px_70px_-45px_rgba(15,23,42,0.45)] sm:p-8"
              >
                <div className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full bg-[#FF5500]/10 blur-3xl" />

                <div className="relative z-10">
                  <div className="flex items-center gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#FF5500]/10 text-[#FF5500]">
                      <CalendarCheck2 className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-[9px] font-bold uppercase tracking-[0.18em] text-[#FF5500]">
                        Appointment
                      </p>
                      <h2 className="text-xl font-black text-[#111827]">
                        Request an appointment
                      </h2>
                    </div>
                  </div>

                  <p className="mt-4 max-w-2xl text-sm leading-relaxed text-slate-500">
                    Share a few details and your request will open directly in
                    WhatsApp.
                  </p>

                  <form
                    onSubmit={handleWhatsAppSubmit}
                    className="mt-6 space-y-4"
                  >
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div>
                        <label className="mb-1.5 block text-[9px] font-bold uppercase tracking-[0.14em] text-slate-400">
                          Full Name
                        </label>
                        <input
                          type="text"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="Patient name"
                          className="h-12 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 text-sm text-slate-800 outline-none transition-all placeholder:text-slate-400 focus:border-[#FF5500]/40 focus:bg-white focus:ring-4 focus:ring-[#FF5500]/5"
                        />
                      </div>

                      <div>
                        <label className="mb-1.5 block text-[9px] font-bold uppercase tracking-[0.14em] text-slate-400">
                          Contact Number
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          required
                          value={formData.phone}
                          onChange={handleInputChange}
                          placeholder="Phone number"
                          className="h-12 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 text-sm text-slate-800 outline-none transition-all placeholder:text-slate-400 focus:border-[#FF5500]/40 focus:bg-white focus:ring-4 focus:ring-[#FF5500]/5"
                        />
                      </div>
                    </div>

                    <div className="grid gap-4 sm:grid-cols-2">
                      <div>
                        <label className="mb-1.5 block text-[9px] font-bold uppercase tracking-[0.14em] text-slate-400">
                          Preferred Date
                        </label>
                        <input
                          type="date"
                          name="date"
                          required
                          value={formData.date}
                          onChange={handleInputChange}
                          className="h-12 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 text-sm text-slate-800 outline-none transition-all focus:border-[#FF5500]/40 focus:bg-white focus:ring-4 focus:ring-[#FF5500]/5"
                        />
                      </div>

                      <div>
                        <label className="mb-1.5 block text-[9px] font-bold uppercase tracking-[0.14em] text-slate-400">
                          Treatment Needed
                        </label>
                        <select
                          name="treatment"
                          required
                          value={formData.treatment}
                          onChange={handleInputChange}
                          className="h-12 w-full cursor-pointer appearance-none rounded-2xl border border-slate-200 bg-slate-50 px-4 text-sm text-slate-800 outline-none transition-all focus:border-[#FF5500]/40 focus:bg-white focus:ring-4 focus:ring-[#FF5500]/5"
                        >
                          <option value="" disabled>
                            Select treatment
                          </option>
                          <option value="General Dentistry">
                            General Dentistry
                          </option>
                          <option value="Root Canal Treatment">
                            Root Canal Treatment
                          </option>
                          <option value="Dental Implants">
                            Dental Implants
                          </option>
                          <option value="Teeth Replacement">
                            Teeth Replacement
                          </option>
                          <option value="Orthodontics">Orthodontics</option>
                          <option value="Gum & Bone Therapy">
                            Gum & Bone Therapy
                          </option>
                          <option value="Oral Surgery">Oral Surgery</option>
                          <option value="Pediatric Dentistry">
                            Pediatric Dentistry
                          </option>
                          <option value="Aesthetic Dentistry">
                            Aesthetic Dentistry
                          </option>
                          <option value="General Consultation">
                            General Consultation
                          </option>
                        </select>
                      </div>
                    </div>

                    <button
                      type="submit"
                      className="group flex h-13 w-full items-center justify-center gap-2 rounded-2xl bg-[#FF5500] px-5 py-4 text-sm font-bold text-white shadow-lg shadow-orange-500/15 transition-all hover:-translate-y-0.5 hover:bg-[#e94d00] active:scale-[0.99]"
                    >
                      Send Appointment Request
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </button>
                  </form>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="overflow-hidden rounded-[30px] border border-slate-200 bg-white shadow-[0_25px_70px_-45px_rgba(15,23,42,0.45)]"
              >
                <div className="flex items-center justify-between border-b border-slate-100 px-5 py-4 sm:px-6">
                  <div>
                    <p className="text-[9px] font-bold uppercase tracking-[0.18em] text-[#FF5500]">
                      Location
                    </p>
                    <h3 className="mt-1 text-base font-black text-[#111827]">
                      Dr. Holla's Wide Smiles Dental Clinic
                    </h3>
                  </div>

                  <a
                    href={justdialUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="hidden items-center gap-1 text-[10px] font-bold text-slate-500 transition-colors hover:text-[#FF5500] sm:flex"
                  >
                    Clinic details
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </a>
                </div>

                <iframe
                  title="Dr. Holla's Wide Smiles Dental Clinic and Implant Center Map"
                  src={mapsEmbedUrl}
                  width="100%"
                  height="430"
                  loading="lazy"
                  allowFullScreen
                  referrerPolicy="strict-origin-when-cross-origin"
                  className="w-full border-0"
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="px-4 pb-24 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mx-auto max-w-6xl overflow-hidden rounded-[32px] bg-[#111827] px-7 py-9 text-white sm:px-10 sm:py-12"
          >
            <div className="flex flex-col gap-7 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <p className="text-[9px] font-bold uppercase tracking-[0.18em] text-[#FF5500]">
                  Wide Smiles Dental Clinic & Implant Center
                </p>
                <h2 className="mt-3 max-w-3xl text-3xl font-black leading-tight tracking-tight sm:text-4xl">
                  Have a question about your dental treatment?
                </h2>
                <p className="mt-3 max-w-2xl text-sm leading-relaxed text-slate-400">
                  Call the clinic or send your appointment request through
                  WhatsApp.
                </p>
              </div>

              <div className="flex shrink-0 flex-col gap-3 sm:flex-row">
                <a
                  href={`tel:${primaryPhone}`}
                  className="inline-flex items-center justify-center gap-2 rounded-2xl bg-[#FF5500] px-6 py-4 text-xs font-bold text-white"
                >
                  <Phone className="h-4 w-4" />
                  {primaryDisplay}
                </a>

                <a
                  href={`https://wa.me/${whatsappNumber}`}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-6 py-4 text-xs font-bold text-white transition-colors hover:bg-white/10"
                >
                  WhatsApp
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          </motion.div>
        </section>
      </main>

      <FooterSection />
    </div>
  );
};

export default ContactSection;
