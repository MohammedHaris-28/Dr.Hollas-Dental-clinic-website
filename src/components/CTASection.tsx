import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Phone,
  MessageCircle,
  Clock3,
  ShieldCheck,
  Sparkles,
  ArrowUpRight,
  ChevronDown,
  MapPin,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const AppointmentCTA = () => {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    treatment: "",
    message: "",
  });

  const clinicPhone = "74838 22917";
  const secondaryPhone = "91135 50693";
  const whatsappNumber = "917483822917";

  const clinicAddress =
    "No 523/55, KHB Colony, 2nd phase, Gopala, Shivamogga, Karnataka 577205";

  const treatmentsList = [
    "General Dentistry",
    "Root Canal Treatment",
    "Dental Implants",
    "Teeth Replacement",
    "Orthodontics",
    "Gum & Bone Therapy",
    "Oral Surgery",
    "Pediatric Dentistry",
    "Aesthetic Dentistry",
    "General Consultation",
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const text = `
🦷 Dr. Holla's Wide Smiles Dental Clinic & Implant Center
Appointment Request

👤 Patient Name: ${form.name}
📞 Contact Number: ${form.phone}
🩺 Selected Treatment: ${form.treatment}

💬 Patient Message / Concern:
${form.message || "No additional notes provided."}

📍 Clinic:
${clinicAddress}
`;

    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      text.trim()
    )}`;

    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <section
      id="appointment"
      className="relative py-12 md:py-20 lg:py-28 bg-[#FAFAFA] overflow-hidden antialiased selection:bg-[#FF5500]/10 border-t border-slate-200/60"
    >
      {/* Background Ambience */}
      <div className="absolute top-1/2 left-[-5%] w-[400px] h-[400px] bg-[#FF5500]/05 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-[-5%] w-[400px] h-[400px] bg-[#FF5500]/08 rounded-full blur-[120px] pointer-events-none" />

      <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="rounded-[24px] sm:rounded-[32px] lg:rounded-[40px] border border-slate-200/80 bg-white shadow-sm overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
            {/* LEFT — Clinic Value & Contact */}
            <div className="lg:col-span-6 p-6 sm:p-10 md:p-14 lg:p-16 flex flex-col justify-between bg-white">
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="space-y-4 sm:space-y-6"
              >
                

                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-extrabold text-[#111827] tracking-tight leading-tight">
                  Your Smile Deserves{" "}
                  <br className="hidden sm:block" />
                  <span className="bg-gradient-to-r from-[#FF5500] to-[#E54800] bg-clip-text text-transparent">
                    Thoughtful Care.
                  </span>
                </h2>

                <p className="text-slate-600 text-xs sm:text-sm md:text-base font-normal max-w-xl leading-relaxed">
                  Connect with Dr. Holla&apos;s Wide Smiles Dental Clinic and
                  Implant Center for personalized dental care, clear treatment
                  guidance, and a comfortable patient experience.
                </p>

                <div className="space-y-4 sm:space-y-6 pt-5 sm:pt-6 border-t border-slate-100">
                  <div className="flex items-start gap-3 sm:gap-4">
                    <div className="w-10 h-10 sm:w-11 sm:h-11 shrink-0 rounded-xl bg-[#FF5500]/10 flex items-center justify-center text-[#FF5500]">
                      <Clock3 size={18} />
                    </div>
                    <div>
                      <h4 className="font-bold text-[#111827] text-sm sm:text-base">
                        Consultation Booking
                      </h4>
                      <p className="text-xs text-slate-500 font-normal mt-0.5">
                        Send your preferred treatment and appointment details.
                        The clinic can confirm the available consultation
                        time directly.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 sm:gap-4">
                    <div className="w-10 h-10 sm:w-11 sm:h-11 shrink-0 rounded-xl bg-[#FFF3ED] flex items-center justify-center text-[#FF5500]">
                      <ShieldCheck size={18} />
                    </div>
                    <div>
                      <h4 className="font-bold text-[#111827] text-sm sm:text-base">
                        Patient-Focused Dental Care
                      </h4>
                      <p className="text-xs text-slate-500 font-normal mt-0.5">
                        Personalized consultation and treatment planning
                        across general, restorative, surgical, orthodontic,
                        pediatric, and aesthetic dentistry.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 sm:gap-4">
                    <div className="w-10 h-10 sm:w-11 sm:h-11 shrink-0 rounded-xl bg-slate-100 flex items-center justify-center text-[#FF5500]">
                      <MapPin size={18} />
                    </div>
                    <div>
                      <h4 className="font-bold text-[#111827] text-sm sm:text-base">
                        Visit Wide Smiles
                      </h4>
                      <p className="text-xs text-slate-500 font-normal mt-0.5 leading-relaxed">
                        {clinicAddress}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Quick Contact Panel */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="mt-8 sm:mt-12 p-4 sm:p-5 rounded-[20px] sm:rounded-[24px] border border-slate-200/80 bg-[#FAFAFA] flex flex-col gap-4"
              >
                <div>
                  <p className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-slate-400">
                    Speak With The Clinic
                  </p>

                  <div className="flex flex-wrap items-center gap-x-4 gap-y-1 mt-1">
                    <a
                      href="tel:+917483822917"
                      className="font-extrabold text-lg sm:text-xl text-[#111827] tracking-tight hover:text-[#FF5500] transition-colors"
                    >
                      {clinicPhone}
                    </a>

                    <a
                      href="tel:+919113550693"
                      className="font-bold text-sm sm:text-base text-slate-600 hover:text-[#FF5500] transition-colors"
                    >
                      {secondaryPhone}
                    </a>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-2.5">
                  <Button
                    variant="outline"
                    className="w-full sm:w-auto rounded-full bg-white h-11 px-5 text-xs font-bold border-slate-200 text-[#111827] hover:bg-[#FFF3ED] hover:border-[#FF5500]/30 shadow-sm active:scale-95 transition-transform"
                    onClick={() =>
                      window.open("tel:+917483822917", "_self")
                    }
                  >
                    <Phone size={13} className="mr-2 text-[#FF5500]" />
                    Call Clinic
                  </Button>

                  <Button
                    type="button"
                    className="w-full sm:w-auto rounded-full bg-[#FF5500] hover:bg-[#E54800] text-white h-11 px-5 text-xs font-bold shadow-sm active:scale-95 transition-transform"
                    onClick={() =>
                      window.open(
                        `https://wa.me/${whatsappNumber}`,
                        "_blank",
                        "noopener,noreferrer"
                      )
                    }
                  >
                    <MessageCircle size={14} className="mr-2" />
                    WhatsApp
                  </Button>
                </div>
              </motion.div>
            </div>

            {/* RIGHT — Appointment Form */}
           <div className="lg:col-span-6 p-6 sm:p-10 md:p-14 lg:p-16 flex flex-col justify-center bg-[#13171C] border-t lg:border-t-0 lg:border-l border-slate-800">
  <motion.div
    initial={{ opacity: 0, y: 15 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay: 0.1 }}
    className="w-full max-w-md mx-auto lg:mx-0"
  >
    <div className="mb-6 sm:mb-8 text-center lg:text-left">
      <span className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#FF5500]">
        Appointment Enquiry
      </span>

      <h3 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight mt-1">
        Request an Appointment
      </h3>

      <p className="text-slate-400 text-xs font-normal mt-1">
        Submit your details and continue to WhatsApp to discuss your
        appointment with the clinic.
      </p>
    </div>

    <form onSubmit={handleSubmit} className="space-y-3.5 sm:space-y-4">
      <Input
        type="text"
        required
        placeholder="Full Name"
        value={form.name}
        onChange={(e) =>
          setForm({ ...form, name: e.target.value })
        }
        className="w-full h-12 px-4 rounded-xl border-slate-800 bg-[#1A1F26] placeholder:text-slate-500 font-medium text-slate-100 shadow-sm focus-visible:ring-[#FF5500] focus-visible:border-[#FF5500] transition-all text-sm"
      />

      <Input
        type="tel"
        required
        placeholder="Phone Number"
        value={form.phone}
        onChange={(e) =>
          setForm({ ...form, phone: e.target.value })
        }
        className="w-full h-12 px-4 rounded-xl border-slate-800 bg-[#1A1F26] placeholder:text-slate-500 font-medium text-slate-100 shadow-sm focus-visible:ring-[#FF5500] focus-visible:border-[#FF5500] transition-all text-sm"
      />

      <div className="relative">
        <select
          required
          value={form.treatment}
          onChange={(e) =>
            setForm({ ...form, treatment: e.target.value })
          }
          className="w-full h-12 pl-4 pr-10 rounded-xl border border-slate-800 bg-[#1A1F26] font-medium text-slate-100 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#FF5500] focus:border-[#FF5500] transition-all appearance-none text-sm cursor-pointer invalid:text-slate-500"
        >
          <option value="" disabled hidden className="text-slate-500">
            Select Service / Treatment
          </option>

          {treatmentsList.map((treatment) => (
            <option
              key={treatment}
              value={treatment}
              className="bg-[#1A1F26] text-slate-100 font-medium"
            >
              {treatment}
            </option>
          ))}
        </select>

        <div className="absolute inset-y-0 right-0 pr-4 flex items-center pointer-events-none text-slate-400">
          <ChevronDown size={16} />
        </div>
      </div>

      <Textarea
        placeholder="Tell us about your concern or preferred appointment date..."
        value={form.message}
        onChange={(e) =>
          setForm({ ...form, message: e.target.value })
        }
        className="w-full p-4 rounded-xl border-slate-800 bg-[#1A1F26] placeholder:text-slate-500 font-medium text-slate-100 shadow-sm min-h-[110px] sm:min-h-[130px] focus-visible:ring-[#FF5500] focus-visible:border-[#FF5500] transition-all resize-none text-sm"
      />

      <Button
        type="submit"
        className="w-full h-12 sm:h-14 rounded-xl bg-[#FF5500] hover:bg-[#E54800] text-white font-bold text-sm tracking-wide flex items-center justify-center gap-2.5 shadow-md active:scale-[0.99] transition-all border-0 group mt-2"
      >
        <MessageCircle
          size={16}
          className="text-white group-hover:scale-110 transition-transform"
        />
        <span>Send via WhatsApp</span>
        <ArrowUpRight
          size={15}
          className="text-white/80 group-hover:text-white transition-colors"
        />
      </Button>

      <p className="text-[10px] sm:text-[11px] text-center text-slate-500 font-normal leading-relaxed pt-2">
        By submitting, you will be redirected to WhatsApp to share
        your appointment details with Dr. Holla&apos;s Wide Smiles
        Dental Clinic and Implant Center.
      </p>
    </form>
  </motion.div>
</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppointmentCTA;
