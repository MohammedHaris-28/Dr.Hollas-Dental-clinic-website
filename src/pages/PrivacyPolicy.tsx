import React from "react";
import { Link } from "react-router-dom";
import {
  ShieldCheck,
  Lock,
  Database,
  Eye,
  Share2,
  Server,
  Cookie,
  UserX,
  FileText,
  Mail,
  AlertTriangle,
  Sparkles,
  ChevronRight,
  Globe,
  CheckCircle2,
  Building,
  Stethoscope,
  CalendarCheck,
  Award,
  Phone,
  Clock,
  HeartPulse,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const PrivacyPolicy: React.FC = () => {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col selection:bg-[#FF5500]/20 selection:text-[#FF5500]">
      <Navbar />

      <main className="flex-1 max-w-5xl w-full mx-auto px-4 sm:px-6 lg:px-8 pt-24 sm:pt-28 pb-12 sm:pb-16 space-y-12 sm:space-y-16">
        
        {/* Header / Hero Section */}
        <section className="text-center space-y-4 pt-2 sm:pt-4 relative">
          <div className="absolute inset-0 -z-10 bg-radial from-[#FF5500]/10 via-transparent to-transparent blur-3xl opacity-50" />
          
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FF5500]/10 text-[#FF5500] text-xs font-semibold tracking-wider uppercase border border-[#FF5500]/20 shadow-sm">
            <ShieldCheck className="w-3.5 h-3.5 animate-pulse" />
            Patient Data Protection & Transparency
          </div>
          
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight text-foreground leading-tight">
            Privacy <span className="text-[#FF5500] underline decoration-[#FF5500]/30 underline-offset-8">Policy</span>
          </h1>
          
          <p className="text-sm sm:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            How Dr. Holla's Wide Smiles Dental Clinic handles, protects, and respects your appointment information, contact inquiries, and website interactions.
          </p>
          
          <div className="flex items-center justify-center gap-2 text-xs font-semibold text-muted-foreground/80 pt-1">
            <span className="px-2.5 py-1 rounded-md bg-secondary border border-border/50">Version 1.0</span>
            <span>•</span>
            <span>Effective September 2026</span>
          </div>
        </section>

        {/* Dynamic Responsive Parallax Stacked Cards Container */}
        <section className="relative space-y-8 sm:space-y-12">
          
          {/* Section Header */}
          <div className="text-center space-y-2 sticky top-16 sm:top-20 z-0 bg-background/90 py-4 backdrop-blur-md">
            <h2 className="text-2xl sm:text-3xl font-black text-foreground tracking-tight">
              Policy Breakdown
            </h2>
            <p className="text-xs sm:text-sm text-muted-foreground">
              Scroll through each card to review our clinical and digital privacy guidelines.
            </p>
          </div>

          {/* Stacking Cards Wrapper */}
          <div className="relative space-y-6 sm:space-y-8 lg:space-y-10 pb-12">
            
            {/* Card 1: Clinic Scope & Purpose */}
            <div className="sticky top-24 sm:top-28 lg:static z-10">
              <div className="bg-card/95 backdrop-blur-xl border border-border/90 rounded-3xl p-6 sm:p-8 space-y-4 shadow-xl hover:shadow-2xl transition-all">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3.5">
                    <div className="w-11 h-11 rounded-2xl bg-[#FF5500]/10 text-[#FF5500] flex items-center justify-center font-bold">
                      <Stethoscope className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[10px] sm:text-xs font-semibold text-[#FF5500] uppercase tracking-wider">Website Scope</span>
                      <h3 className="font-extrabold text-lg sm:text-2xl text-foreground">1. About Our Website & Services</h3>
                    </div>
                  </div>
                  <span className="text-2xl sm:text-3xl font-black opacity-20">01</span>
                </div>
                <div className="space-y-3 text-xs sm:text-sm text-muted-foreground leading-relaxed pt-2">
                  <p>
                    <strong className="text-foreground">Dr. Holla's Wide Smiles Dental Clinic & Implant Center</strong> operates this website to provide patient education, highlight dental treatments, display doctor credentials, showcase clinic facilities, and facilitate direct appointment scheduling for patients in <strong className="text-foreground">Shivamogga, Karnataka</strong>.
                  </p>
                  <p>
                    Information published on this website is for informational and educational purposes only. It is not intended as formal medical or dental advice. Formal clinical diagnoses and treatment plans are only established during direct in-person dental consultations.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 2: No Data Selling Policy */}
            <div className="sticky top-28 sm:top-32 lg:static z-20">
              <div className="bg-card/95 backdrop-blur-xl border border-border/90 rounded-3xl p-6 sm:p-8 space-y-4 shadow-xl hover:shadow-2xl transition-all border-emerald-500/30">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3.5">
                    <div className="w-11 h-11 rounded-2xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center font-bold">
                      <ShieldCheck className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[10px] sm:text-xs font-semibold text-emerald-500 uppercase tracking-wider">Strict Data Protection</span>
                      <h3 className="font-extrabold text-lg sm:text-2xl text-foreground">2. Zero Data Selling Guarantee</h3>
                    </div>
                  </div>
                  <span className="text-2xl sm:text-3xl font-black opacity-20">02</span>
                </div>
                <div className="space-y-3 text-xs sm:text-sm text-muted-foreground leading-relaxed pt-2">
                  <p>
                    We respect patient confidentiality and medical privacy. <strong className="text-foreground">We never sell, rent, trade, or monetize your personal details, phone numbers, or health information to third-party advertisers or data brokers.</strong>
                  </p>
                  <p>
                    Any contact or appointment information submitted through our platform is strictly used to coordinate your dental care, confirm visits, or respond directly to your clinical inquiries.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 3: Information We Collect */}
            <div className="sticky top-32 sm:top-36 lg:static z-30">
              <div className="bg-card/95 backdrop-blur-xl border border-border/90 rounded-3xl p-6 sm:p-8 space-y-4 shadow-xl hover:shadow-2xl transition-all">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3.5">
                    <div className="w-11 h-11 rounded-2xl bg-blue-500/10 text-blue-600 dark:text-blue-400 flex items-center justify-center font-bold">
                      <Database className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[10px] sm:text-xs font-semibold text-blue-500 uppercase tracking-wider">Data Collection</span>
                      <h3 className="font-extrabold text-lg sm:text-2xl text-foreground">3. Information We Collect</h3>
                    </div>
                  </div>
                  <span className="text-2xl sm:text-3xl font-black opacity-20">03</span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4 text-xs sm:text-sm text-muted-foreground leading-relaxed pt-2">
                  <ul className="space-y-2 list-disc list-inside">
                    <li><strong className="text-foreground">Appointment Inquiries:</strong> Name, phone number, email address, preferred visit dates, and general treatment needs.</li>
                    <li><strong className="text-foreground">Patient Reviews:</strong> Testimonials, star ratings, and treatment experiences shared voluntarily.</li>
                  </ul>
                  <ul className="space-y-2 list-disc list-inside">
                    <li><strong className="text-foreground">External Booking Data:</strong> Details submitted through external booking portals like Practo during appointment redirection.</li>
                    <li><strong className="text-foreground">Technical Analytics:</strong> Device type, browser preferences, and general website page usage metrics.</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Card 4: Appointment & External Bookings */}
            <div className="sticky top-36 sm:top-40 lg:static z-40">
              <div className="bg-card/95 backdrop-blur-xl border border-border/90 rounded-3xl p-6 sm:p-8 space-y-4 shadow-xl hover:shadow-2xl transition-all">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3.5">
                    <div className="w-11 h-11 rounded-2xl bg-purple-500/10 text-purple-600 dark:text-purple-400 flex items-center justify-center font-bold">
                      <CalendarCheck className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[10px] sm:text-xs font-semibold text-purple-500 uppercase tracking-wider">Appointment Integrations</span>
                      <h3 className="font-extrabold text-lg sm:text-2xl text-foreground">4. Appointment Scheduling</h3>
                    </div>
                  </div>
                  <span className="text-2xl sm:text-3xl font-black opacity-20">04</span>
                </div>
                <div className="space-y-3 text-xs sm:text-sm text-muted-foreground leading-relaxed pt-2">
                  <p>
                    When booking appointments online, you may be redirected to trusted healthcare platforms such as <strong className="text-foreground">Practo</strong>. Information processed through these platforms is governed by their respective privacy standards alongside our clinical protocols.
                  </p>
                  <p>
                    We utilize this information exclusively to manage doctor availability, prevent double bookings, and send appointment reminders via Call, SMS, or WhatsApp.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 5: External Services & Infrastructure */}
            <div className="sticky top-40 sm:top-44 lg:static z-50">
              <div className="bg-card/95 backdrop-blur-xl border border-border/90 rounded-3xl p-6 sm:p-8 space-y-4 shadow-xl hover:shadow-2xl transition-all">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3.5">
                    <div className="w-11 h-11 rounded-2xl bg-amber-500/10 text-amber-600 dark:text-amber-400 flex items-center justify-center font-bold">
                      <Server className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[10px] sm:text-xs font-semibold text-amber-500 uppercase tracking-wider">Infrastructure</span>
                      <h3 className="font-extrabold text-lg sm:text-2xl text-foreground">5. Third-Party Integrations</h3>
                    </div>
                  </div>
                  <span className="text-2xl sm:text-3xl font-black opacity-20">05</span>
                </div>
                <div className="space-y-3 text-xs sm:text-sm text-muted-foreground leading-relaxed pt-2">
                  <p>
                    To ensure fast loading speeds, secure site hosting, and reliable map directions, we integrate with industry-standard web service providers:
                  </p>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-1 font-semibold text-foreground text-center">
                    <div className="p-2.5 rounded-xl bg-secondary border border-border/60">Practo (Bookings)</div>
                    <div className="p-2.5 rounded-xl bg-secondary border border-border/60">Google Maps (Directions)</div>
                    <div className="p-2.5 rounded-xl bg-secondary border border-border/60">Vercel / Hosting</div>
                    <div className="p-2.5 rounded-xl bg-secondary border border-border/60">Google Analytics</div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* 6. Cookies, Security, & Patient Rights */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 pt-4">
          <div className="bg-card border border-border/80 rounded-3xl p-6 sm:p-8 space-y-3 shadow-sm">
            <div className="w-10 h-10 rounded-2xl bg-[#FF5500]/10 text-[#FF5500] flex items-center justify-center font-bold">
              <Cookie className="w-5 h-5" />
            </div>
            <h2 className="text-lg font-bold text-foreground">6. Cookies & Site Analytics</h2>
            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
              We use functional cookies to optimize website performance, remember your settings, and evaluate website visitor traffic without linking IP addresses to personal health files.
            </p>
          </div>

          <div className="bg-card border border-border/80 rounded-3xl p-6 sm:p-8 space-y-3 shadow-sm">
            <div className="w-10 h-10 rounded-2xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center font-bold">
              <Lock className="w-5 h-5" />
            </div>
            <h2 className="text-lg font-bold text-foreground">7. Security & Confidentiality</h2>
            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
              Website interactions use encrypted SSL (HTTPS) connections. In-clinic clinical and treatment records are stored securely in compliance with healthcare data norms.
            </p>
          </div>

          <div className="bg-card border border-border/80 rounded-3xl p-6 sm:p-8 space-y-3 shadow-sm">
            <div className="w-10 h-10 rounded-2xl bg-rose-500/10 text-rose-600 dark:text-rose-400 flex items-center justify-center font-bold">
              <UserX className="w-5 h-5" />
            </div>
            <h2 className="text-lg font-bold text-foreground">8. Your Rights & Access</h2>
            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
              You can request updates, corrections, or deletion of your digital contact inquiries by reaching out directly to our clinic administration.
            </p>
          </div>
        </section>

        {/* 9. Policy Changes Notice */}
        <section className="bg-card border border-border/80 rounded-3xl p-6 sm:p-8 space-y-3 shadow-sm">
          <div className="flex items-center gap-3">
            <Sparkles className="w-5 h-5 text-[#FF5500]" />
            <h2 className="text-lg font-bold text-foreground">9. Policy Evolution</h2>
          </div>
          <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
            This policy may be updated periodically to reflect new healthcare technology integrations, expanded online services, or updated medical privacy regulations in India.
          </p>
        </section>

        {/* 10. Contact & Clinic Details */}
        <section className="bg-gradient-to-br from-[#FF5500]/10 via-card to-card border border-[#FF5500]/20 rounded-3xl p-6 sm:p-8 space-y-6 shadow-md">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              <h2 className="text-2xl font-black text-foreground">10. Clinic Contact & Inquiries</h2>
              <p className="text-xs sm:text-sm text-muted-foreground mt-1">
                For questions regarding this privacy policy or your appointment details, reach out to our team.
              </p>
            </div>
            
            <div className="flex flex-wrap gap-2.5 sm:gap-3 text-xs font-semibold">
              <div className="flex items-center gap-2 bg-background/90 border border-border/80 px-3.5 py-2.5 rounded-2xl shadow-sm">
                <MapPinIcon className="w-4 h-4 text-[#FF5500]" />
                <span>Shivamogga, Karnataka</span>
              </div>
              <a
                href="tel:+919876543210"
                className="flex items-center gap-2 bg-background/90 border border-border/80 px-3.5 py-2.5 rounded-2xl hover:text-[#FF5500] transition-colors shadow-sm"
              >
                <Phone className="w-4 h-4 text-[#FF5500]" />
                <span>Contact Reception</span>
              </a>
              <a
                href="https://www.practo.com/shimoga/doctor/akarsh-niranjan-dentist"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-background/90 border border-border/80 px-3.5 py-2.5 rounded-2xl hover:text-[#FF5500] transition-colors shadow-sm"
              >
                <Globe className="w-4 h-4 text-[#FF5500]" />
                <span>Practo Profile</span>
              </a>
            </div>
          </div>

          {/* Legal Disclaimer Box */}
          <div className="bg-amber-500/10 border border-amber-500/20 rounded-2xl p-4 flex items-start gap-3 text-xs text-amber-700 dark:text-amber-400">
            <AlertTriangle className="w-5 h-5 shrink-0 mt-0.5" />
            <div>
              <strong className="font-semibold block mb-0.5">Clinical Disclaimer:</strong>
              This privacy policy outlines data protection procedures for Dr. Holla's Wide Smiles Dental Clinic & Implant Center. Website content is provided for general health guidance and does not replace professional dental diagnoses or emergency care.
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
};

// Helper Map Pin Icon
const MapPinIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

export default PrivacyPolicy;