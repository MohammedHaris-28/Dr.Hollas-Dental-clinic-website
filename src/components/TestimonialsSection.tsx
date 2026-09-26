import React, { useEffect, useRef } from "react";
import { motion, animate, useInView } from "framer-motion";
import {
  Star,
  Quote,
  ShieldCheck,
  ExternalLink,
  Sparkles,
  CheckCircle2,
  ThumbsUp,
} from "lucide-react";

// Local asset imports
import img1 from "@/assets/img 1.webp";
import img2 from "@/assets/img 2.webp";
import img3 from "@/assets/img 3.webp";
import img4 from "@/assets/img 4.webp";
import img5 from "@/assets/img 5.webp";

const CAROUSEL_IMAGES = [img1, img2, img3, img4, img5];

const GOOGLE_REVIEWS = [
  {
    name: "Omkar P.D",
    badge: "Local Guide",
    role: "Patient (Family Care)",
    review:
      "Dr Shashank Holla is a gold medalist from the college of Dental Sciences, Davanagere who has completed his master's in periodontology. He is very thorough and excellent in his treatment and consultations. Builds great rapport with his patients. My whole family and friends visit him for our dental issues.",
    initials: "OP",
    highlight: "Gold Medalist & Periodontist",
    step: "01",
  },
  {
    name: "Sahana TR",
    badge: "Verified Patient",
    role: "Patient (Laser Dental Treatment)",
    review:
      "I recently underwent laser dental treatment at this clinic and had a pleasant experience. Dr Shashank is highly skilled, patient, and explained the procedure clearly. The staff were friendly. The clinic is clean and well maintained.",
    initials: "ST",
    highlight: "Laser Dental Treatment",
    step: "02",
  },
  {
    name: "Vinayaka Bharadwaj",
    badge: "Local Guide",
    role: "Patient (General Dentistry)",
    review:
      "Excellent experience at Dr Hollas Wide Smile Dental Clinic. The doctor is highly skilled, caring, and made the entire treatment process very comfortable. The staff were also supportive and professional. The clinic has very good equipment.",
    initials: "VB",
    highlight: "Comfortable Care",
    step: "03",
  },
  {
    name: "Vishnu Bharadwaj",
    badge: "Verified Patient",
    role: "Patient (Dental Examination)",
    review:
      "Excellent service and a very caring team. The clinic is clean, well-organized, and the dentist Dr. Shashank Holla explained everything clearly. Truly one of the best dental experiences I’ve had.",
    initials: "VB",
    highlight: "Clear Explanations",
    step: "04",
  },
  {
    name: "Bindushree TC",
    badge: "Verified Patient",
    role: "Patient (Consultation & Diagnosis)",
    review:
      "Excellent treatment and consultation by Doctor Holla. He will ensure the diagnosis of the problem, explain the patients very clearly in lay man language.",
    initials: "BT",
    highlight: "Layman Explanations",
    step: "05",
  },
  {
    name: "Oshin M Chandra",
    badge: "Verified Patient",
    role: "Patient (General Care)",
    review:
      "The doctor made me feel very comfortable throughout the treatment. Staff were polite, appointments were well managed, and the care was excellent. Highly recommended.",
    initials: "OC",
    highlight: "Well Managed Visits",
    step: "06",
  },
  {
    name: "Ananya Venkatesh",
    badge: "Verified Patient",
    role: "Patient (Clinical Treatment)",
    review:
      "Dr. Shashank is a very well experienced doctor with thorough clinical knowledge. He explains about the necessary treatments, very clearly. Overall a good experience. Would 100% recommend his clinic for all types of dental treatments.",
    initials: "AV",
    highlight: "100% Recommended",
    step: "07",
  },
  {
    name: "NaveenKumar Naik S",
    badge: "Verified Patient",
    role: "Patient (Advanced Procedures)",
    review:
      "Excellent hospital, with excellent hygienic advanced equipments, excellent staff and with their friendly response overall my recommendation is 10 out of 10.",
    initials: "NN",
    highlight: "10/10 Hygiene & Tech",
    step: "08",
  },
  {
    name: "Dr Shwetha T M",
    badge: "Local Guide",
    role: "Doctor / Patient",
    review: "Very neat facility... skilled professionals.",
    initials: "ST",
    highlight: "Neat & Skilled",
    step: "09",
  },
  {
    name: "Salmanulla R",
    badge: "Verified Patient",
    role: "Patient (Dental Care)",
    review:
      "The experience was too good and the doctor was highly experienced and too good at work.",
    initials: "SR",
    highlight: "Highly Experienced",
    step: "10",
  },
];

const AnimatedCounter = ({
  value,
  suffix = "+",
}: {
  value: number;
  suffix?: string;
}) => {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (!inView) return;
    const node = ref.current;
    if (!node) return;

    const controls = animate(0, value, {
      duration: 2,
      ease: "easeOut",
      onUpdate: (latest) => {
        node.textContent = Math.floor(latest).toLocaleString();
      },
    });

    return () => controls.stop();
  }, [value, inView]);

  return (
    <span className="font-black text-2xl sm:text-4xl text-foreground tracking-tight">
      <span ref={ref}>0</span>
      {suffix}
    </span>
  );
};

export const TestimonialsSection: React.FC = () => {
  const duplicatedImages = [
    ...CAROUSEL_IMAGES,
    ...CAROUSEL_IMAGES,
    ...CAROUSEL_IMAGES,
  ];

  return (
    <section className="relative py-16 sm:py-24 lg:py-28 bg-background text-foreground selection:bg-[#FF5500]/20 selection:text-[#FF5500]">
      {/* Background Ambient Blur Effects */}
      <div className="absolute top-1/4 left-[-10%] w-[350px] sm:w-[600px] h-[350px] sm:h-[600px] bg-[#FF5500]/05 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 right-[-10%] w-[350px] sm:w-[600px] h-[350px] sm:h-[600px] bg-[#FF5500]/08 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12 sm:space-y-16">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4">
         

          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-foreground leading-tight">
            Patient Stories. <br className="hidden sm:inline" />
            <span className="text-[#FF5500] underline decoration-[#FF5500]/30 underline-offset-8">
              Real Clinical Care.
            </span>
          </h2>

          <p className="text-sm sm:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Discover why families across Shivamogga trust Dr. Shashank Holla (MDS - Gold Medalist) at Dr. Holla's Wide Smiles Dental Clinic for laser treatments, implantology, and periodontal care.
          </p>
        </div>

        {/* Dynamic Metric Counter Banner */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-6 rounded-3xl bg-card border border-border/80 shadow-md">
          <div className="text-center space-y-1">
            <AnimatedCounter value={5000} suffix="+" />
            <p className="text-xs sm:text-sm text-muted-foreground font-medium">Happy Patients</p>
          </div>
          <div className="text-center space-y-1">
            <AnimatedCounter value={100} suffix="%" />
            <p className="text-xs sm:text-sm text-muted-foreground font-medium">Clear Explanations</p>
          </div>
          <div className="text-center space-y-1">
            <div className="flex items-center justify-center gap-1">
              <span className="font-black text-2xl sm:text-4xl text-foreground">5.0</span>
              <Star className="w-5 h-5 fill-amber-400 text-amber-400 mb-1" />
            </div>
            <p className="text-xs sm:text-sm text-muted-foreground font-medium">Google Rating</p>
          </div>
          <div className="text-center space-y-1">
            <AnimatedCounter value={10} suffix="+" />
            <p className="text-xs sm:text-sm text-muted-foreground font-medium">Years Experience</p>
          </div>
        </div>

        {/* Auto-Sliding Image Carousel */}
        <div className="relative w-full overflow-hidden py-2">
          <div className="absolute top-0 bottom-0 left-0 w-12 sm:w-28 bg-gradient-to-r from-background to-transparent z-20 pointer-events-none" />
          <div className="absolute top-0 bottom-0 right-0 w-12 sm:w-28 bg-gradient-to-l from-background to-transparent z-20 pointer-events-none" />

          <motion.div
            className="flex gap-4 sm:gap-6 w-max"
            animate={{ x: [0, -1200] }}
            transition={{
              repeat: Infinity,
              repeatType: "loop",
              duration: 25,
              ease: "linear",
            }}
          >
            {duplicatedImages.map((img, idx) => (
              <div
                key={idx}
                className="w-[220px] sm:w-[300px] aspect-[4/3] rounded-3xl border border-border/80 bg-card p-2 shadow-sm flex-shrink-0 relative overflow-hidden group hover:border-[#FF5500]/40 transition-all duration-300"
              >
                <img
                  src={img}
                  alt={`Dr. Holla Clinic Case ${idx + 1}`}
                  className="w-full h-full object-cover rounded-2xl pointer-events-none transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute bottom-3.5 right-3.5 bg-background/90 backdrop-blur-md px-2.5 py-1 rounded-xl border border-border/80 text-[10px] font-bold text-foreground uppercase tracking-wider flex items-center gap-1 shadow-sm">
                  <Sparkles size={11} className="text-[#FF5500]" />
                  <span>Clinical Results</span>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* STEPPED STACKING SCROLL CONTAINER */}
        <div className="relative lg:grid lg:grid-cols-3 lg:gap-6 space-y-6 lg:space-y-0">
          {GOOGLE_REVIEWS.map((testimonial, index) => {
            // Inline style calculation for mobile stacking step-upon-step
            const mobileTopOffset = 80 + index * 18; // Each card pins slightly lower than the last
            const mobileZIndex = index + 1; // Later cards stack above previous ones

            return (
              <div
                key={`${testimonial.name}-${index}`}
                className="sticky lg:static"
                style={{
                  top: `${mobileTopOffset}px`,
                  zIndex: mobileZIndex,
                }}
              >
                <div className="bg-card border border-border rounded-3xl p-6 sm:p-7 space-y-4 shadow-2xl lg:shadow-md hover:border-[#FF5500]/40 transition-all duration-300 flex flex-col justify-between h-full min-h-[220px] sm:min-h-[240px]">
                  <div className="space-y-3">
                    {/* Card Header */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Quote className="w-7 h-7 text-[#FF5500]/40" />
                        <span className="text-[10px] font-extrabold text-[#FF5500] uppercase tracking-wider bg-[#FF5500]/10 border border-[#FF5500]/20 px-2.5 py-0.5 rounded-full">
                          {testimonial.highlight}
                        </span>
                      </div>

                      <div className="flex items-center gap-2">
                        <div className="flex gap-0.5">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className="w-3.5 h-3.5 fill-amber-400 text-amber-400"
                            />
                          ))}
                        </div>
                        <span className="lg:hidden text-xs font-black text-muted-foreground/40 pl-1">
                          {testimonial.step}
                        </span>
                      </div>
                    </div>

                    {/* Review Text */}
                    <p className="text-muted-foreground text-xs sm:text-sm font-normal leading-relaxed italic">
                      "{testimonial.review}"
                    </p>
                  </div>

                  {/* Patient Profile Footer */}
                  <div className="flex items-center gap-3.5 pt-4 border-t border-border/60 w-full mt-auto">
                    <div className="w-10 h-10 rounded-2xl bg-[#FF5500]/10 border border-[#FF5500]/20 text-[#FF5500] font-extrabold text-xs flex items-center justify-center shrink-0 shadow-sm">
                      {testimonial.initials}
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center gap-1.5">
                        <h4 className="font-bold text-foreground text-sm tracking-tight truncate">
                          {testimonial.name}
                        </h4>
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                      </div>
                      <div className="flex items-center gap-2 mt-0.5">
                        <span className="text-[10px] font-semibold text-muted-foreground/90 truncate">
                          {testimonial.role}
                        </span>
                        <span className="text-[9px] bg-secondary text-foreground font-medium px-2 py-0.5 rounded-md border border-border/50 shrink-0">
                          {testimonial.badge}
                        </span>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Banner to Google Maps Reviews */}
        <div className="bg-gradient-to-br from-[#FF5500]/10 via-card to-card border border-[#FF5500]/20 rounded-3xl p-6 sm:p-8 text-center space-y-4 shadow-md max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-background border border-border/80 text-xs font-semibold text-foreground">
            <ThumbsUp className="w-3.5 h-3.5 text-[#FF5500]" />
            <span>Google Maps Verified Reviews</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-black text-foreground">
            Have you visited Dr. Holla's Wide Smiles Dental Clinic?
          </h3>
          <p className="text-xs sm:text-sm text-muted-foreground max-w-lg mx-auto">
            Your feedback helps us continue offering high-quality periodontal, implant, and general dental care in Shivamogga.
          </p>
          <div className="pt-2">
            <a
              href="https://maps.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-[#FF5500] text-white font-bold text-xs sm:text-sm hover:bg-[#FF5500]/90 transition-all shadow-md hover:shadow-lg"
            >
              <span>Leave a Review on Google</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};

export default TestimonialsSection;