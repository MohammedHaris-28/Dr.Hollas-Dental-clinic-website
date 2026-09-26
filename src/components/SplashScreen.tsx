import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "@/assets/logo-dental.png";

interface SplashScreenProps {
  onComplete?: () => void;
}

const SplashScreen = ({ onComplete }: SplashScreenProps) => {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    // Total timing: 4300ms display + 700ms exit transition = 5000ms
    const timer = setTimeout(() => {
      setShowSplash(false);

      setTimeout(() => {
        onComplete?.();
      }, 700);
    }, 4300);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {showSplash && (
        <motion.div
          className="fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden bg-[#FAFAFA]"
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            scale: 1.02,
            filter: "blur(12px)",
          }}
          transition={{
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          {/* Subtle Background Pattern */}
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: `radial-gradient(#111827 1px, transparent 1px)`,
              backgroundSize: "28px 28px",
            }}
          />

          {/* Primary Glow Light Source */}
          <motion.div
            className="absolute left-1/2 top-1/2 h-[550px] w-[550px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#FF5500]/10 blur-[120px]"
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: [0, 0.85, 0.5], scale: [0.6, 1.15, 1] }}
            transition={{
              duration: 3.5,
              ease: "easeOut",
            }}
          />

          {/* Precision Architectural Outer Ring */}
          <motion.div
            className="absolute left-1/2 top-1/2 h-[460px] w-[460px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-slate-200/90"
            initial={{ opacity: 0, scale: 0.82 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 1.6,
              delay: 0.15,
              ease: [0.16, 1, 0.3, 1],
            }}
          />

          {/* Precision Accent Ring */}
          <motion.div
            className="absolute left-1/2 top-1/2 h-[550px] w-[550px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-[#FF5500]/20"
            initial={{ opacity: 0, scale: 0.88, rotate: -10 }}
            animate={{ opacity: 1, scale: 1, rotate: 10 }}
            transition={{
              duration: 4,
              delay: 0.25,
              ease: "easeOut",
            }}
          />

          {/* Main Container */}
          <div className="relative z-10 flex w-full max-w-lg flex-col items-center px-6 text-center">
            
            {/* Logo Unit */}
            <motion.div
              initial={{ opacity: 0, scale: 0.82, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{
                duration: 1.1,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="relative flex justify-center"
            >
              {/* Backlight Glow */}
              <motion.div
                className="absolute inset-0 -z-10 rounded-full bg-[#FF5500]/20 blur-2xl"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: [0, 0.8, 0.45],
                  scale: [0.8, 1.2, 1],
                }}
                transition={{
                  duration: 2.2,
                  delay: 0.2,
                  ease: "easeOut",
                }}
              />

              <motion.img
                src={logo}
                alt="Dr. Holla's Wide Smiles Dental Clinic"
                className="h-auto w-[140px] object-contain sm:w-[160px]"
                animate={{
                  y: [0, -5, 0],
                }}
                transition={{
                  duration: 3.6,
                  ease: "easeInOut",
                  repeat: Infinity,
                }}
              />
            </motion.div>

            {/* Geometric Accent Line */}
            <motion.div
              className="mt-7 flex items-center justify-center gap-3"
              initial={{ opacity: 0, width: 0 }}
              animate={{ opacity: 1, width: "100%" }}
              transition={{
                duration: 0.9,
                delay: 0.45,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              <span className="h-[1px] w-10 bg-gradient-to-r from-transparent to-[#FF5500]" />
              <span className="h-1.5 w-1.5 rounded-full bg-[#FF5500] shadow-[0_0_10px_#FF5500]" />
              <span className="h-[1px] w-10 bg-gradient-to-l from-transparent to-[#FF5500]" />
            </motion.div>

            {/* Typography Stack */}
            <div className="mt-6 flex flex-col items-center justify-center px-4">
              
              {/* Dr. Holla's */}
              <motion.h1
                className="font-sans text-[28px] font-black tracking-[-0.03em] text-[#111827] sm:text-[35px]"
                initial={{ opacity: 0, y: 15, filter: "blur(8px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{
                  duration: 0.9,
                  delay: 0.7,
                  ease: [0.16, 1, 0.3, 1],
                }}
              >
                Dr. Holla's
              </motion.h1>

              {/* Wide Smiles (Clean, Upright, Unclipped Container with Padding) */}
              <div className="relative mt-0.5 overflow-visible px-2 py-1 sm:px-4">
                <motion.h2
                  className="font-sans text-[28px] font-black tracking-[-0.01em] text-[#FF5500] sm:text-[35px]"
                  initial={{
                    opacity: 0,
                    y: 12,
                    filter: "blur(10px)",
                    scale: 0.96,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                    filter: "blur(0px)",
                    scale: 1,
                  }}
                  transition={{
                    duration: 1,
                    delay: 1.0,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                >
                  Wide Smiles
                </motion.h2>
              </div>

              {/* Subtitle Badge */}
              <motion.div
                className="mt-6 inline-flex items-center gap-2 rounded-full border border-slate-800 bg-[#111827] px-4 py-1.5 shadow-[0_10px_25px_-5px_rgba(17,24,39,0.3)]"
                initial={{ opacity: 0, y: 12, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{
                  duration: 0.8,
                  delay: 1.35,
                  ease: [0.16, 1, 0.3, 1],
                }}
              >
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#FF5500]" />
                <p className="text-[9px] font-bold uppercase tracking-[0.22em] text-white sm:text-[10px]">
                  Dental Clinic & Implant Center
                </p>
              </motion.div>

            </div>
          </div>

          {/* Bottom Ambient Lighting Glow */}
          <motion.div
            className="absolute bottom-[-160px] left-1/2 h-[300px] w-[650px] -translate-x-1/2 rounded-full bg-[#FF5500]/10 blur-[110px]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2.2, delay: 0.6 }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SplashScreen;