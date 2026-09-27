import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Star,
  MessageCircle,
  Phone,
  MapPin,
  ArrowLeft,
  Smile,
  Copy,
  Check,
  Instagram,
  Clock3,
  Navigation,
  ExternalLink,
  Heart,
  Building2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { feedbackConfig } from "@/config/feedbackConfig";
import logo from "@/assets/logo-dental.webp";

type FlowStep = "RATING" | "POSITIVE_DASHBOARD";

const CLINIC_NAME =
  "Dr. Holla's Wide Smiles Dental clinic and implant center";

const ADDRESS =
  "No 523/55, KHB Colony, 2nd phase, Gopala, Shivamogga, Karnataka 577205";

const PHONE_PRIMARY = "74838 22917";
const PHONE_SECONDARY = "9113550693";

const PHONE_PRIMARY_LINK = "tel:+917483822917";
const PHONE_SECONDARY_LINK = "tel:+919113550693";

const WHATSAPP_NUMBER = "917483822917";

const INSTAGRAM_URL =
  "https://www.instagram.com/wide_smiles_dental_clinic?utm_source=ig_web_button_share_sheet&stkn=ZDNlZDc0MzIxNw==";

const JUSTDIAL_URL =
  "https://www.justdial.com/Shimoga/Dr-HollaS-Wide-Smiles-Dental-Clinic-and-Implant-Center-Khb-Colony/9999P8182-8182-240323133626-V5D1_BZDET";

const MAPS_EMBED_URL =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4593.505236388485!2d75.5457124!3d13.931131199999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbba92494f1ead3%3A0x326ad214df50189e!2sDr.%20Holla's%20Wide%20Smiles%20Dental%20clinic%20and%20implant%20center!5e1!3m2!1sen!2sin!4v1790146894363!5m2!1sen!2sin";

const MAPS_SEARCH_URL =
  "https://www.google.com/maps/search/?api=1&query=Dr.%20Holla%27s%20Wide%20Smiles%20Dental%20clinic%20and%20implant%20center%2C%20KHB%20Colony%2C%20Gopala%2C%20Shivamogga";

export default function ReviewPage() {
  const [rating, setRating] = useState<number>(0);
  const [hoveredRating, setHoveredRating] = useState<number>(0);
  const [step, setStep] = useState<FlowStep>("RATING");
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const handleRatingSelect = (selectedRating: number) => {
    setRating(selectedRating);

    if (selectedRating >= feedbackConfig.positiveThreshold) {
      setStep("POSITIVE_DASHBOARD");
    } else {
      const whatsappText = encodeURIComponent(
        `Hello Dr. Holla's Wide Smiles Dental clinic and implant center Team, I am writing to share feedback regarding my recent visit. I rated my experience ${selectedRating}/5 stars. I would love to share how things can be improved.`
      );

      const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${whatsappText}`;

      window.open(whatsappUrl, "_blank", "noopener,noreferrer");
    }
  };

  const handleTemplateClick = (text: string, index: number) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);

    setTimeout(() => {
      setCopiedIndex(null);
      window.open(
        feedbackConfig.googleReviewUrl,
        "_blank",
        "noopener,noreferrer"
      );
    }, 800);
  };

  return (
    <div className="min-h-screen bg-[#FAFAFA] pb-28 text-[#111827] antialiased selection:bg-[#FF5500]/10">
      {/* =========================================================
          TOP BRAND HEADER
      ========================================================== */}
      <header className="w-full px-4 pb-3 pt-8 sm:pt-10">
        <div className="mx-auto max-w-md text-center">
          <a
            href={MAPS_SEARCH_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex flex-col items-center"
          >
            <motion.div
              whileHover={{ y: -3 }}
              className="mb-4 flex h-[82px] w-[82px] items-center justify-center overflow-hidden rounded-[26px] border border-slate-200 bg-white p-3 shadow-[0_20px_45px_-28px_rgba(15,23,42,0.4)] transition-all duration-300 group-hover:border-[#FF5500]/25 group-hover:shadow-[0_22px_50px_-28px_rgba(255,85,0,0.3)]"
            >
              <img
                src={logo}
                alt={CLINIC_NAME}
                className="h-full w-full object-contain"
              />
            </motion.div>

            <h1 className="max-w-[340px] text-[20px] font-black leading-[1.08] tracking-[-0.035em] text-[#111827] transition-colors group-hover:text-[#FF5500]">
              {CLINIC_NAME}
            </h1>
          </a>

          <p className="mt-3 text-[9px] font-bold uppercase tracking-[0.19em] text-[#FF5500]">
            Dental Clinic • Implant Center • Shivamogga
          </p>

          <div className="mt-4 flex items-center justify-center gap-2 text-[10px] font-medium text-slate-400">
            <MapPin className="h-3 w-3 text-[#FF5500]" />
            <span>Gopala, Shivamogga</span>
          </div>
        </div>
      </header>

      {/* =========================================================
          MAIN CONTENT
      ========================================================== */}
      <main className="mx-auto flex w-full max-w-md flex-col px-4 py-5">
        {/* =======================================================
            QUICK CLINIC INFORMATION
        ======================================================== */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-4 grid grid-cols-2 gap-2.5"
        >
          <a
            href={PHONE_PRIMARY_LINK}
            className="group flex items-center gap-2.5 rounded-[22px] border border-slate-200 bg-white p-3.5 shadow-[0_15px_35px_-28px_rgba(15,23,42,0.45)] transition-all hover:-translate-y-0.5 hover:border-[#FF5500]/25 hover:shadow-md"
          >
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#FF5500]/10">
              <Phone className="h-4 w-4 text-[#FF5500]" />
            </div>

            <div className="min-w-0">
              <p className="text-[8px] font-bold uppercase tracking-[0.14em] text-slate-400">
                Call
              </p>
              <p className="mt-0.5 truncate text-[10px] font-black text-slate-700 transition-colors group-hover:text-[#FF5500]">
                {PHONE_PRIMARY}
              </p>
            </div>
          </a>

          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}`}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2.5 rounded-[22px] border border-slate-200 bg-white p-3.5 shadow-[0_15px_35px_-28px_rgba(15,23,42,0.45)] transition-all hover:-translate-y-0.5 hover:border-[#FF5500]/25 hover:shadow-md"
          >
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#FF5500]/10">
              <MessageCircle className="h-4 w-4 text-[#FF5500]" />
            </div>

            <div className="min-w-0">
              <p className="text-[8px] font-bold uppercase tracking-[0.14em] text-slate-400">
                WhatsApp
              </p>
              <p className="mt-0.5 truncate text-[10px] font-black text-slate-700 transition-colors group-hover:text-[#FF5500]">
                {PHONE_PRIMARY}
              </p>
            </div>
          </a>
        </motion.div>

        {/* =======================================================
            ADDRESS CARD
        ======================================================== */}
        <motion.a
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.05 }}
          href={MAPS_SEARCH_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="group mb-4 flex items-center gap-3 rounded-[22px] border border-slate-200 bg-white p-4 shadow-[0_15px_35px_-28px_rgba(15,23,42,0.45)] transition-all hover:-translate-y-0.5 hover:border-[#FF5500]/25 hover:shadow-md"
        >
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#FF5500]/10">
            <MapPin className="h-4 w-4 text-[#FF5500]" />
          </div>

          <div className="min-w-0 flex-1">
            <div className="mb-1 flex items-center justify-between">
              <p className="text-[9px] font-bold uppercase tracking-[0.15em] text-slate-400">
                Clinic Address
              </p>

              <Navigation className="h-3.5 w-3.5 text-[#FF5500]" />
            </div>

            <p className="text-[11px] font-semibold leading-relaxed text-slate-600">
              {ADDRESS}
            </p>
          </div>
        </motion.a>

        {/* =======================================================
            MAP PREVIEW
        ======================================================== */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-5 overflow-hidden rounded-[28px] border border-slate-200 bg-white p-1.5 shadow-[0_20px_55px_-35px_rgba(15,23,42,0.4)]"
        >
          <div className="relative overflow-hidden rounded-[22px]">
            <iframe
              src={MAPS_EMBED_URL}
              width="600"
              height="450"
              style={{
                border: 0,
                width: "100%",
                height: "190px",
              }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
              title={`${CLINIC_NAME} location`}
            />

            <a
              href={MAPS_SEARCH_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="absolute bottom-3 right-3 inline-flex items-center gap-1.5 rounded-xl bg-white/95 px-3 py-2 text-[9px] font-black text-slate-700 shadow-lg backdrop-blur-md transition-colors hover:text-[#FF5500]"
            >
              <Navigation className="h-3 w-3 text-[#FF5500]" />
              Open Maps
              <ExternalLink className="h-3 w-3" />
            </a>
          </div>
        </motion.div>

        {/* =======================================================
            RATING / REVIEW CARD
        ======================================================== */}
        <div className="relative overflow-hidden rounded-[30px] border border-slate-200 bg-white p-6 shadow-[0_25px_70px_-40px_rgba(15,23,42,0.45)]">
          {/* Decorative brand glows */}
          <div className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full bg-[#FF5500]/10 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-20 -left-20 h-48 w-48 rounded-full bg-slate-900/[0.035] blur-3xl" />

          <AnimatePresence mode="wait">
            {/* =====================================================
                STEP 1 — RATING
            ====================================================== */}
            {step === "RATING" && (
              <motion.div
                key="rating-step"
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                className="relative py-3 text-center"
              >
                <div className="mx-auto mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#FF5500]/10">
                  <Heart className="h-5 w-5 fill-[#FF5500] text-[#FF5500]" />
                </div>

                <p className="mb-2 text-[9px] font-bold uppercase tracking-[0.18em] text-[#FF5500]">
                  Your feedback matters
                </p>

                <h2 className="text-xl font-black tracking-tight text-[#111827]">
                  How was your experience?
                </h2>

                <p className="mx-auto mt-2 max-w-[270px] text-xs leading-relaxed text-slate-400">
                  Your feedback helps us continue improving the care we provide
                  at Wide Smiles.
                </p>

                {/* Stars */}
                <div className="mt-7 flex items-center justify-center gap-1.5 sm:gap-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      type="button"
                      onClick={() => handleRatingSelect(star)}
                      onMouseEnter={() => setHoveredRating(star)}
                      onMouseLeave={() => setHoveredRating(0)}
                      aria-label={`Rate ${star} out of 5`}
                      className="rounded-xl p-1.5 transition-transform duration-150 hover:scale-110 active:scale-90"
                    >
                      <Star
                        size={38}
                        strokeWidth={1.8}
                        className={`transition-colors duration-150 ${
                          star <= (hoveredRating || rating)
                            ? "fill-[#FF5500] text-[#FF5500]"
                            : "text-slate-200"
                        }`}
                      />
                    </button>
                  ))}
                </div>

                <p className="mt-4 text-[10px] font-semibold text-slate-400">
                  Tap a star to submit your rating
                </p>

                {/* Contact numbers */}
                <div className="mt-7 border-t border-slate-100 pt-5">
                  <p className="text-[9px] font-bold uppercase tracking-[0.15em] text-slate-400">
                    Need assistance?
                  </p>

                  <div className="mt-2 flex items-center justify-center gap-3">
                    <a
                      href={PHONE_PRIMARY_LINK}
                      className="text-[10px] font-bold text-slate-600 transition-colors hover:text-[#FF5500]"
                    >
                      {PHONE_PRIMARY}
                    </a>

                    <span className="h-3 w-px bg-slate-200" />

                    <a
                      href={PHONE_SECONDARY_LINK}
                      className="text-[10px] font-bold text-slate-600 transition-colors hover:text-[#FF5500]"
                    >
                      {PHONE_SECONDARY}
                    </a>
                  </div>
                </div>
              </motion.div>
            )}

            {/* =====================================================
                STEP 2 — POSITIVE REVIEW DASHBOARD
            ====================================================== */}
            {step === "POSITIVE_DASHBOARD" && (
              <motion.div
                key="positive-step"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                className="relative space-y-5"
              >
                <div className="text-center">
                  <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#FF5500]/10">
                    <Smile className="h-6 w-6 text-[#FF5500]" />
                  </div>

                  <p className="text-[9px] font-bold uppercase tracking-[0.18em] text-[#FF5500]">
                    Thank you for your feedback
                  </p>

                  <h2 className="mt-2 text-xl font-black tracking-tight text-[#111827]">
                    We really appreciate it! 🎉
                  </h2>

                  <p className="mx-auto mt-2 max-w-[300px] text-xs leading-relaxed text-slate-500">
                    Choose a message below. It will be copied automatically and
                    Google Reviews will open so you can share your experience.
                  </p>
                </div>

                {/* Review templates */}
                <div className="max-h-64 space-y-2 overflow-y-auto pr-1">
                  {feedbackConfig.reviewTemplates.map((text, idx) => (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => handleTemplateClick(text, idx)}
                      className="group flex w-full items-start gap-3 rounded-[20px] border border-slate-200 bg-slate-50 p-3.5 text-left transition-all hover:border-[#FF5500]/25 hover:bg-[#FF5500]/[0.03] active:scale-[0.99]"
                    >
                      <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-400 shadow-sm transition-colors group-hover:border-[#FF5500]/25 group-hover:text-[#FF5500]">
                        {copiedIndex === idx ? (
                          <Check
                            size={13}
                            className="text-[#FF5500]"
                          />
                        ) : (
                          <Copy size={13} />
                        )}
                      </div>

                      <p className="text-[11px] font-semibold leading-relaxed text-slate-600">
                        {copiedIndex === idx
                          ? "Copied! Opening Google Reviews..."
                          : text}
                      </p>
                    </button>
                  ))}
                </div>

                {/* Google review button */}
                <div className="border-t border-slate-100 pt-4">
                  <a
                    href={feedbackConfig.googleReviewUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full"
                  >
                    <Button className="h-12 w-full rounded-2xl bg-[#111827] text-xs font-black uppercase tracking-wider text-white shadow-lg transition-all hover:bg-[#FF5500]">
                      <Star className="mr-2 h-3.5 w-3.5 fill-[#FF5500] text-[#FF5500]" />
                      Write My Own Review
                      <ExternalLink className="ml-2 h-3.5 w-3.5 text-slate-400" />
                    </Button>
                  </a>
                </div>

                <div className="text-center">
                  <button
                    type="button"
                    onClick={() => {
                      setStep("RATING");
                      setRating(0);
                    }}
                    className="inline-flex items-center gap-1.5 text-[9px] font-bold uppercase tracking-[0.15em] text-slate-400 transition-colors hover:text-[#FF5500]"
                  >
                    <ArrowLeft className="h-3 w-3" />
                    Change Rating
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* =======================================================
            EXTERNAL PRESENCE
        ======================================================== */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="mt-4 grid grid-cols-2 gap-2.5"
        >
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-center gap-2 rounded-[22px] border border-slate-200 bg-white px-3 py-3.5 text-[10px] font-black text-slate-600 shadow-[0_15px_35px_-28px_rgba(15,23,42,0.45)] transition-all hover:-translate-y-0.5 hover:border-[#FF5500]/25 hover:text-[#FF5500]"
          >
            <Instagram className="h-4 w-4 text-[#FF5500]" />
            Follow on Instagram
          </a>

          <a
            href={JUSTDIAL_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-center gap-2 rounded-[22px] border border-slate-200 bg-white px-3 py-3.5 text-[10px] font-black text-slate-600 shadow-[0_15px_35px_-28px_rgba(15,23,42,0.45)] transition-all hover:-translate-y-0.5 hover:border-[#FF5500]/25 hover:text-[#FF5500]"
          >
            <Building2 className="h-4 w-4 text-[#FF5500]" />
            View on Justdial
          </a>
        </motion.div>

        {/* =======================================================
            FOOTER DETAILS
        ======================================================== */}
        <div className="mt-7 px-4 text-center">
          <p className="text-[9px] font-bold uppercase tracking-[0.16em] text-slate-300">
            Dr. Holla's Wide Smiles Dental clinic and implant center
          </p>

          <p className="mt-2 text-[9px] leading-relaxed text-slate-400">
            {ADDRESS}
          </p>

          <div className="mt-3 flex items-center justify-center gap-2 text-[9px] font-semibold text-slate-400">
            <a
              href={PHONE_PRIMARY_LINK}
              className="transition-colors hover:text-[#FF5500]"
            >
              {PHONE_PRIMARY}
            </a>

            <span>•</span>

            <a
              href={PHONE_SECONDARY_LINK}
              className="transition-colors hover:text-[#FF5500]"
            >
              {PHONE_SECONDARY}
            </a>
          </div>
        </div>
      </main>

      {/* =========================================================
          FIXED MOBILE ACTION BAR
      ========================================================== */}
      <div className="fixed inset-x-3 bottom-3 z-40 mx-auto max-w-md">
        <div className="rounded-[24px] border border-slate-200/20 bg-[#111827]/95 p-1.5 shadow-[0_25px_60px_rgba(15,23,42,0.3)] backdrop-blur-xl">
          <div className="flex items-center">
            {/* Call */}
            <a
              href={PHONE_PRIMARY_LINK}
              className="group flex min-w-0 flex-1 flex-col items-center justify-center gap-1 rounded-xl py-2 text-slate-300 transition-all hover:bg-white/5 hover:text-white"
            >
              <Phone className="h-4 w-4 text-[#FF5500]" />
              <span className="text-[8px] font-black uppercase tracking-wider">
                Call
              </span>
            </a>

            <div className="h-6 w-px bg-white/10" />

            {/* WhatsApp */}
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex min-w-0 flex-1 flex-col items-center justify-center gap-1 rounded-xl py-2 text-slate-300 transition-all hover:bg-white/5 hover:text-white"
            >
              <MessageCircle className="h-4 w-4 text-[#FF5500]" />
              <span className="text-[8px] font-black uppercase tracking-wider">
                WhatsApp
              </span>
            </a>

            <div className="h-6 w-px bg-white/10" />

            {/* Instagram */}
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex min-w-0 flex-1 flex-col items-center justify-center gap-1 rounded-xl py-2 text-slate-300 transition-all hover:bg-white/5 hover:text-white"
            >
              <Instagram className="h-4 w-4 text-[#FF5500]" />
              <span className="text-[8px] font-black uppercase tracking-wider">
                Insta
              </span>
            </a>

            <div className="h-6 w-px bg-white/10" />

            {/* Justdial */}
            <a
              href={JUSTDIAL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex min-w-0 flex-1 flex-col items-center justify-center gap-1 rounded-xl py-2 text-slate-300 transition-all hover:bg-white/5 hover:text-white"
            >
              <Building2 className="h-4 w-4 text-[#FF5500]" />
              <span className="text-[8px] font-black uppercase tracking-wider">
                Justdial
              </span>
            </a>

            <div className="h-6 w-px bg-white/10" />

            {/* Maps */}
            <a
              href={MAPS_SEARCH_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex min-w-0 flex-1 flex-col items-center justify-center gap-1 rounded-xl py-2 text-slate-300 transition-all hover:bg-white/5 hover:text-white"
            >
              <MapPin className="h-4 w-4 text-[#FF5500]" />
              <span className="text-[8px] font-black uppercase tracking-wider">
                Maps
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}