import React from "react";
import { Link } from "react-router-dom";
import {
  Phone,
  MapPin,
  Instagram,
  Clock,
  ChevronRight,
  MessageCircle,
} from "lucide-react";

import logo from "@/assets/logo-dental.webp";

const treatmentsList = [
  { name: "General Dentistry", slug: "general-dentistry" },
  { name: "Root Canal Treatment", slug: "root-canal-treatment" },
  { name: "Dental Implants", slug: "dental-implants" },
  { name: "Teeth Replacement", slug: "teeth-replacement" },
  { name: "Orthodontics", slug: "orthodontics" },
  { name: "Gum & Bone Therapy", slug: "gum-bone-therapy" },
  { name: "Oral Surgery", slug: "oral-surgery" },
  { name: "Pediatric Dentistry", slug: "pediatric-dentistry" },
  { name: "Aesthetic Dentistry", slug: "aesthetic-dentistry" },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-white border-t border-slate-200/80 antialiased selection:bg-[#FF5500]/10">
      {/* Background Ambient Glows */}
      <div className="absolute top-0 left-[-5%] w-[350px] h-[350px] bg-[#FF5500]/03 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 right-[-5%] w-[350px] h-[350px] bg-[#FF5500]/05 rounded-full blur-[100px] pointer-events-none" />

      <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main Operational Footer Matrix */}
        <div className="py-16 lg:py-20">
          <div className="grid gap-12 lg:grid-cols-12">
            {/* Column 1: Core Clinic Brand Identity (Span 4) */}
            <div className="lg:col-span-4 space-y-6">
              <div className="flex items-center gap-3.5">
                <div className="w-12 h-12 rounded-2xl overflow-hidden border border-slate-200/80 bg-white p-2 flex items-center justify-center shadow-sm">
                  <img
                    src={logo}
                    alt="Dr. Holla’s Wide Smiles Dental Clinic Logo"
                    className="w-full h-full object-contain"
                  />
                </div>

                <div>
                  <h3 className="font-extrabold text-lg sm:text-xl text-[#0F172A] tracking-tight">
                    Dr. Holla’s Wide Smiles Dental Clinic
                  </h3>
                  <p className="text-[11px] font-semibold text-[#FF5500] uppercase tracking-wider mt-0.5">
                    and Implant Center
                  </p>
                </div>
              </div>

              {/* Lead Doctor Identity Profile */}
              <div className="p-4 rounded-2xl bg-[#F8FAFC] border border-slate-200/60 space-y-1.5">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-extrabold text-[#0F172A]">
                    Dr. Holla’s Wide Smiles Dental Team
                  </p>
                  <span className="text-[10px] font-bold text-[#FF5500] bg-[#FFF7F2] border border-[#FF5500]/25 rounded-md px-2 py-0.5">
                    Verified
                  </span>
                </div>
                <p className="text-xs font-semibold text-slate-500">
                  Dental Care & Implant Specialists
                </p>
                <p className="text-[11px] font-bold text-[#FF5500] tracking-wide">
                  General, Implant & Aesthetic Dentistry
                </p>
              </div>

              <p className="text-slate-600 text-sm font-normal leading-relaxed max-w-sm">
                Providing thoughtful general, restorative, implant, orthodontic,
                pediatric, gum, surgical, and aesthetic dental care in
                Shivamogga.
              </p>

              {/* Verified Direct Social Links */}
              <div className="flex gap-2.5 pt-2">
                <a
                  href="https://www.instagram.com/wide_smiles_dental_clinic?utm_source=ig_web_button_share_sheet&stkn=ZDNlZDc0MzIxNw=="
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl bg-[#F8FAFC] border border-slate-200/80 text-slate-600 hover:text-[#FF5500] hover:border-[#FF5500]/40 hover:bg-[#FF5500]/05 transition-all flex items-center justify-center group shadow-sm"
                  aria-label="Instagram Profile Link"
                >
                  <Instagram
                    size={18}
                    className="group-hover:scale-105 transition-transform"
                  />
                </a>

                <a
                  href="https://wa.me/917483822917"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl bg-[#F8FAFC] border border-slate-200/80 text-slate-600 hover:text-[#FF5500] hover:border-[#FF5500]/40 hover:bg-[#FFF7F2] transition-all flex items-center justify-center group shadow-sm"
                  aria-label="WhatsApp Route Connection Link"
                >
                  <MessageCircle
                    size={18}
                    className="group-hover:scale-105 transition-transform"
                  />
                </a>
              </div>
            </div>

            {/* Column 2: Core Treatments Links (Span 4) */}
            <div className="lg:col-span-4">
              <div className="flex items-center justify-between mb-5">
                <h4 className="font-extrabold text-[#0F172A] text-xs uppercase tracking-wider">
                  <Link
                  to="/treatments"
                  className="text-xs font-bold text-[#FF5500] hover:underline"
                >
                  Our Treatments &rarr;
                </Link>
                </h4>
              </div>

              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-4">
                {treatmentsList.map((item) => (
                  <li key={item.slug}>
                    <Link
                      to={`/treatments/${item.slug}`}
                      className="flex items-center gap-1.5 text-xs sm:text-sm font-medium text-slate-600 hover:text-[#FF5500] transition-colors group select-none"
                    >
                      <ChevronRight
                        size={14}
                        className="text-slate-300 group-hover:text-[#FF5500] transition-colors shrink-0"
                      />
                      <span className="truncate">{item.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: Contact & Location Info + Live Map (Span 4) */}
            <div className="lg:col-span-4 space-y-5">
              <h4 className="font-extrabold text-[#0F172A] text-xs uppercase tracking-wider mb-2">
                Contact & Location
              </h4>

              <div className="space-y-3.5">
                {/* Phone Integration */}
                <div className="flex gap-3.5 items-start">
                  <div className="w-9 h-9 rounded-xl bg-[#FF5500]/10 border border-[#FF5500]/20 flex items-center justify-center text-[#FF5500] mt-0.5 shrink-0">
                    <Phone size={15} />
                  </div>
                  <div>
                    <a
                      href="tel:+917483822917"
                      className="font-extrabold text-[#0F172A] text-sm tracking-tight hover:text-[#FF5500] transition-colors"
                    >
                      74838 22917
                    </a>
                    <p className="text-xs font-normal text-slate-500 mt-0.5">
                      Clinic Desk Assistance
                    </p>
                  </div>
                </div>

                {/* Secondary Phone */}
                <div className="flex gap-3.5 items-start">
                  <div className="w-9 h-9 rounded-xl bg-[#FF5500]/10 border border-[#FF5500]/20 flex items-center justify-center text-[#FF5500] mt-0.5 shrink-0">
                    <Phone size={15} />
                  </div>
                  <div>
                    <a
                      href="tel:+919113550693"
                      className="font-extrabold text-[#0F172A] text-sm tracking-tight hover:text-[#FF5500] transition-colors"
                    >
                      91135 50693
                    </a>
                    <p className="text-xs font-normal text-slate-500 mt-0.5">
                      Additional Clinic Contact
                    </p>
                  </div>
                </div>

                {/* Operating Hours Mapping */}
                <div className="flex gap-3.5 items-start">
                  <div className="w-9 h-9 rounded-xl bg-[#FF5500]/10 border border-[#FF5500]/20 flex items-center justify-center text-[#FF5500] mt-0.5 shrink-0">
                    <Clock size={15} />
                  </div>
                  <div className="text-xs text-slate-600 space-y-1">
                    <p className="font-extrabold text-[#0F172A] text-xs">
                      Clinic Hours:
                    </p>
                    <div className="space-y-0.5 font-medium text-slate-600 text-[11px]">
                      <p>
                        <span className="font-bold text-[#0F172A]">
                          Mon – Sat:
                        </span>{" "}
                        10:30 AM – 1:00 PM & 4:30 PM – 8:00 PM
                      </p>
                      <p>
                        <span className="font-bold text-red-500">Sunday:</span>{" "}
                        Closed
                      </p>
                    </div>
                  </div>
                </div>

                {/* Address Mapping & Embedded Map Wrapper */}
                <div className="flex gap-3.5 items-start pt-3 border-t border-slate-100">
                  <div className="w-9 h-9 rounded-xl bg-[#FF5500]/10 border border-[#FF5500]/20 flex items-center justify-center text-[#FF5500] mt-0.5 shrink-0">
                    <MapPin size={15} />
                  </div>
                  <div className="w-full space-y-3">
                    <p className="font-normal text-slate-600 text-xs sm:text-sm leading-relaxed">
                      No 523/55, KHB Colony, 2nd phase, Gopala, Shivamogga,
                      Karnataka 577205
                    </p>

                    {/* Embedded Map Interface */}
                    <div className="w-full h-32 rounded-xl overflow-hidden border border-slate-200 shadow-inner group relative bg-slate-50">
                      <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4593.505236388485!2d75.5457124!3d13.931131199999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbba92494f1ead3%3A0x326ad214df50189e!2sDr.%20Holla's%20Wide%20Smiles%20Dental%20clinic%20and%20implant%20center!5e1!3m2!1sen!2sin!4v1790146894363!5m2!1sen!2sin"
                        className="w-full h-full border-0 grayscale-[20%] group-hover:grayscale-0 transition-all duration-500"
                        allowFullScreen={true}
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Dr. Holla’s Wide Smiles Dental Clinic Google Maps Location"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Legal / Editorial Stripe */}
        <div className="border-t border-slate-200/80 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-xs font-normal text-slate-500 text-center md:text-left">
              © {currentYear} Dr. Holla’s Wide Smiles Dental Clinic and Implant
              Center. All rights reserved. Designed and developed by{" "}
              <a
                href="https://hash2codeteam.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#FF5500] hover:underline font-semibold transition-colors"
              >
                #2Code Studio
              </a>
              .
            </p>

            <div className="flex items-center gap-6 text-xs font-semibold text-slate-500">
              <Link
                to="/privacy"
                className="hover:text-[#0F172A] transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                to="/terms"
                className="hover:text-[#0F172A] transition-colors"
              >
                Terms & Conditions
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;