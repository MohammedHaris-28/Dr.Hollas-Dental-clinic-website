import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Sparkles,
  X,
  ChevronLeft,
  ChevronRight,
  Building2,
  ArrowUpRight,
  CheckCircle2,
} from "lucide-react";

// Local image imports
import img1 from "@/assets/img 1.webp";
import img2 from "@/assets/img 2.webp";
import img3 from "@/assets/img 3.webp";
import img4 from "@/assets/img 4.webp";
import img5 from "@/assets/img 5.webp";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

interface GalleryItem {
  id: number;
  title: string;
  categoryLabel: string;
  description: string;
  image: string;
  tag: string;
}

const GALLERY_DATA: GalleryItem[] = [
  {
    id: 1,
    title: "Our Clinic",
    categoryLabel: "Clinic Exterior",
    description: "Prominently located facility in Shivamogga.",
    image: img1,
    tag: "Clinic Exterior View",
  },
  {
    id: 2,
    title: "Reception & Waiting Area",
    categoryLabel: "Reception",
    description: "Waiting suite designed for maximum patient comfort.",
    image: img2,
    tag: "Reception Desk",
  },
  {
    id: 3,
    title: "Consultation Lounge",
    categoryLabel: "Consultation",
    description: "With intraoral displays for transparent treatment planning.",
    image: img3,
    tag: "Comfortable Consultation",
  },
 {
    id: 4,
    title: "Treatment Operatory",
    categoryLabel: "Treatment Area",
    description: "Modern dental operatory equipped with advanced dental chairs and clinical lighting.",
    image: img4,
    tag: "Dental Chair Setup",
  },
  {
    id: 5,
    title: "Patient Consultation & Diagnostics",
    categoryLabel: "Diagnostics",
    description: "In-chair patient consultation area equipped with digital X-ray display screens.",
    image: img5,
    tag: "Digital X-Ray View",
  },
];

export const GalleryPage: React.FC = () => {
  const [activeLightboxIndex, setActiveLightboxIndex] = useState<number | null>(null);

  const handlePrevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (activeLightboxIndex !== null) {
      setActiveLightboxIndex((prev) =>
        prev === 0 ? GALLERY_DATA.length - 1 : (prev as number) - 1
      );
    }
  };

  const handleNextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (activeLightboxIndex !== null) {
      setActiveLightboxIndex((prev) =>
        prev === GALLERY_DATA.length - 1 ? 0 : (prev as number) + 1
      );
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col justify-between selection:bg-[#FF5500]/20 selection:text-[#FF5500] relative overflow-x-hidden">
      {/* Fixed/Sticky Navbar */}
      <Navbar />

      {/* Main Content Area with Top Padding to accommodate sticky/fixed Navbar */}
      <main className="flex-1 pt-24 sm:pt-32 pb-12 sm:pb-20 px-4 sm:px-6 lg:px-8 relative">
        {/* Background Lighting */}
        <div className="absolute top-10 left-[-10%] w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-[#FF5500]/05 rounded-full blur-[130px] pointer-events-none" />
        <div className="absolute bottom-20 right-[-10%] w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-[#FF5500]/08 rounded-full blur-[140px] pointer-events-none" />

        <div className="max-w-7xl mx-auto space-y-10 sm:space-y-14 relative z-10">
          {/* Page Header */}
          <div className="text-center max-w-3xl mx-auto space-y-4">
            
            <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-foreground leading-tight">
              Our Dental Clinic <br />
              <span className="text-[#FF5500] underline decoration-[#FF5500]/30 underline-offset-8">
                Inside & Out.
              </span>
            </h1>

            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
              Take a virtual tour of Dr. Holla's Wide Smiles Dental Clinic & Implant Center in Shivamogga. Swipe through our operatories, reception area, and equipment.
            </p>
          </div>

          {/* MOBILE STACKED SIDE CAROUSEL SCROLL (HORIZONTAL DECK STACK) / DESKTOP GRID */}
          <div className="relative">
            {/* Mobile Horizontal Stack Scroll Container */}
            <div className="flex sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-6 overflow-x-auto snap-x snap-mandatory no-scrollbar pb-8 pt-2 px-2 -mx-4 sm:mx-0">
              {GALLERY_DATA.map((item, index) => {
                // Sticky horizontal offset calculation for side-stack effect on mobile
                const mobileStickyLeft = 16 + index * 24;

                return (
                  <div
                    key={item.id}
                    className="sticky left-0 shrink-0 w-[85vw] sm:w-auto snap-center sm:static"
                    style={{
                      left: `${mobileStickyLeft}px`,
                      zIndex: index + 1,
                    }}
                  >
                    <motion.div
                      layout
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3 }}
                      onClick={() => setActiveLightboxIndex(index)}
                      className="group cursor-pointer relative aspect-[4/5] w-full rounded-[2.5rem] overflow-hidden border border-border/80 bg-card shadow-2xl sm:shadow-md hover:border-[#FF5500]/50 transition-all duration-500"
                    >
                      {/* Full Card Background Image */}
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-108"
                      />

                      {/* Dark Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-90 transition-opacity" />

                      {/* Top Badge Overlay */}
                      <div className="absolute top-4 left-4 right-4 flex items-center justify-between pointer-events-none">
                        <span className="bg-black/40 backdrop-blur-md border border-white/10 text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider flex items-center gap-1.5 shadow-sm">
                          <Sparkles className="w-3 h-3 text-[#FF5500]" />
                          {item.tag}
                        </span>
                        <span className="bg-white/10 backdrop-blur-md border border-white/10 text-white text-[10px] font-extrabold px-2.5 py-0.5 rounded-full">
                          0{index + 1}
                        </span>
                      </div>

                      {/* FLOATING FROSTED GLASS PILL AT BOTTOM */}
                      <div className="absolute bottom-4 left-4 right-4 bg-black/60 backdrop-blur-xl border border-white/15 rounded-[1.8rem] p-4 text-white shadow-2xl transition-transform duration-300 group-hover:translate-y-[-2px]">
                        <div className="flex items-center justify-between gap-3">
                          <div className="min-w-0 flex-1 space-y-0.5">
                            <div className="flex items-center gap-1.5 text-[10px] font-bold text-[#FF5500] uppercase tracking-wider">
                              <CheckCircle2 className="w-3 h-3 shrink-0" />
                              <span className="truncate">{item.categoryLabel}</span>
                            </div>
                            <h3 className="font-extrabold text-white text-base sm:text-lg leading-tight truncate">
                              {item.title}
                            </h3>
                            <p className="text-xs text-gray-300 line-clamp-1 leading-snug">
                              {item.description}
                            </p>
                          </div>

                          {/* Circular Action Button */}
                          <div className="w-11 h-11 rounded-full bg-white text-black flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:bg-[#FF5500] group-hover:text-white group-hover:rotate-45 shadow-lg">
                            <ArrowUpRight className="w-5 h-5 stroke-[2.5]" />
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </main>

      {/* FULLSCREEN LIGHTBOX MODAL */}
      <AnimatePresence>
        {activeLightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveLightboxIndex(null)}
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex items-center justify-center p-4 sm:p-8"
          >
            {/* Close Button */}
            <button
              onClick={() => setActiveLightboxIndex(null)}
              className="absolute top-5 right-5 z-50 p-3 rounded-full bg-white/10 text-white hover:bg-[#FF5500] transition-all"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Modal Container */}
            <div
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-5xl w-full flex flex-col items-center justify-center space-y-4"
            >
              <div className="relative w-full max-h-[75vh] rounded-[2.5rem] overflow-hidden border border-white/10 shadow-2xl flex items-center justify-center bg-black/50">
                <img
                  src={GALLERY_DATA[activeLightboxIndex].image}
                  alt={GALLERY_DATA[activeLightboxIndex].title}
                  className="max-h-[75vh] w-auto object-contain rounded-2xl"
                />

                <button
                  onClick={handlePrevImage}
                  className="absolute left-3 p-3 rounded-full bg-black/60 text-white border border-white/10 hover:bg-[#FF5500] transition-all"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>

                <button
                  onClick={handleNextImage}
                  className="absolute right-3 p-3 rounded-full bg-black/60 text-white border border-white/10 hover:bg-[#FF5500] transition-all"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </div>

              {/* Bottom Info Drawer */}
              <div className="text-center space-y-1.5 max-w-xl">
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#FF5500] bg-[#FF5500]/10 px-3 py-1 rounded-full border border-[#FF5500]/20">
                  {GALLERY_DATA[activeLightboxIndex].categoryLabel}
                </span>
                <h3 className="text-xl sm:text-2xl font-black text-white">
                  {GALLERY_DATA[activeLightboxIndex].title}
                </h3>
                <p className="text-xs sm:text-sm text-gray-400">
                  {GALLERY_DATA[activeLightboxIndex].description}
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </div>
  );
};

export default GalleryPage;