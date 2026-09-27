import { lazy, Suspense, FC } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";

// Lazy load heavy below-the-fold sections to free up the mobile UI thread
const TreatmentsSection = lazy(() => import("@/components/TreatmentsSection"));
const DoctorsSection = lazy(() => import("@/components/DoctorsSection"));
const WhyChooseUsSection = lazy(() => import("@/components/WhyChooseUsSection"));
const TestimonialsSection = lazy(() => import("@/components/TestimonialsSection"));
const CTASection = lazy(() => import("@/components/CTASection"));
const FooterSection = lazy(() => import("@/components/Footer"));

// Lightweight placeholder during component chunk load
const SectionFallback: FC = () => (
  <div className="w-full h-48 bg-background/50 animate-pulse" />
);

const Index: FC = () => {
  return (
    <div className="w-full min-h-screen bg-background text-foreground relative [touch-action:manipulation]">
      {/* Sticky/Fixed Navigation Bar */}
      <Navbar />

      {/* Main Container */}
      <main className="w-full flex flex-col">
        {/* 01 — First impression + primary action */}
        <section
          id="hero"
          aria-label="Dr. Hollas Dental Clinic"
          className="w-full [contain:content]"
        >
          <HeroSection />
        </section>

        {/* 02 — Treatment discovery */}
        <Suspense fallback={<SectionFallback />}>
          <section
            id="treatments"
            aria-label="Dental treatments"
            className="w-full [contain:content]"
          >
            <TreatmentsSection />
          </section>
        </Suspense>

        {/* 03 — Meet the doctors */}
        <Suspense fallback={<SectionFallback />}>
          <section
            id="doctors"
            aria-label="Our doctors"
            className="w-full [contain:content]"
          >
            <DoctorsSection />
          </section>
        </Suspense>

        {/* 04 — Why patients choose the clinic */}
        <Suspense fallback={<SectionFallback />}>
          <section
            id="why-dr-hollas"
            aria-label="Why choose Dr. Hollas"
            className="w-full [contain:content]"
          >
            <WhyChooseUsSection />
          </section>
        </Suspense>

        {/* 05 — Patient experiences */}
        <Suspense fallback={<SectionFallback />}>
          <section
            id="testimonials"
            aria-label="Patient testimonials"
            className="w-full [contain:content]"
          >
            <TestimonialsSection />
          </section>
        </Suspense>

        {/* 06 — Final appointment conversion */}
        <Suspense fallback={<SectionFallback />}>
          <section
            id="appointment"
            aria-label="Book an appointment"
            className="w-full [contain:content]"
          >
            <CTASection />
          </section>
        </Suspense>
      </main>

      {/* Full-width Footer */}
      <Suspense fallback={<SectionFallback />}>
        <FooterSection />
      </Suspense>
    </div>
  );
};

export default Index;