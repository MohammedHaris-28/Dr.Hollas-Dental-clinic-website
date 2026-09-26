import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import TreatmentsSection from "@/components/TreatmentsSection";
import DoctorsSection from "@/components/DoctorsSection";
import WhyChooseUsSection from "@/components/WhyChooseUsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import CTASection from "@/components/CTASection";
import FooterSection from "@/components/Footer";

const Index = () => {
  return (
    <div className="w-full min-h-screen bg-background text-foreground overflow-x-hidden relative">
      {/* Sticky/Fixed Navigation Bar */}
      <Navbar />

      {/* Main Container spanning full width */}
      <main className="w-full flex flex-col">
        {/* 01 — First impression + primary action */}
        <section
          id="hero"
          aria-label="Dr. Hollas Dental Clinic"
          className="w-full"
        >
          <HeroSection />
        </section>

        {/* 02 — Treatment discovery */}
        <section
          id="treatments"
          aria-label="Dental treatments"
          className="w-full"
        >
          <TreatmentsSection />
        </section>

        {/* 03 — Meet the doctors */}
        <section
          id="doctors"
          aria-label="Our doctors"
          className="w-full"
        >
          <DoctorsSection />
        </section>

        {/* 04 — Why patients choose the clinic */}
        <section
          id="why-dr-hollas"
          aria-label="Why choose Dr. Hollas"
          className="w-full"
        >
          <WhyChooseUsSection />
        </section>

        {/* 05 — Patient experiences */}
        <section
          id="testimonials"
          aria-label="Patient testimonials"
          className="w-full"
        >
          <TestimonialsSection />
        </section>

        {/* 06 — Final appointment conversion */}
        <section
          id="appointment"
          aria-label="Book an appointment"
          className="w-full"
        >
          <CTASection />
        </section>
      </main>

      {/* Full-width Footer */}
      <FooterSection />
    </div>
  );
};

export default Index;