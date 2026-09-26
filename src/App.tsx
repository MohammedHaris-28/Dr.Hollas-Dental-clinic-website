import { useEffect, useState } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  BrowserRouter,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";

import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";

import SplashScreen from "@/components/SplashScreen";

import Index from "./pages/Index.tsx";
import NotFound from "./pages/NotFound.tsx";
import AboutPage from "./pages/AboutUs&Contact.tsx";
import TermsPage from "./pages/TermsPage.tsx";
import ContactSection from "./pages/AboutUs&Contact.tsx";
import ReviewPage from "./pages/ReviewPage";
import TreatmentsPage from "./pages/treatments/TreatmentsPage.tsx";
import TreatmentDetailPage from "./pages/treatments/TreatmentDetailPage.tsx";
import PrivacyPolicy from "./pages/PrivacyPolicy.tsx";
import { GalleryPage } from "./pages/GalleryPage.tsx";
import DoctorsPage from "./pages/DoctorsPage.tsx";

const queryClient = new QueryClient();

/**
 * ---------------------------------------------------------
 * Scroll To Top
 * ---------------------------------------------------------
 *
 * Automatically scrolls to the top whenever the route changes.
 */
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });
  }, [pathname]);

  return null;
};

/**
 * ---------------------------------------------------------
 * Splash Controller
 * ---------------------------------------------------------
 *
 * Splash screen is shown ONLY when:
 *
 * 1. The website initially opens at "/"
 * 2. Splash has not already been shown in this session
 *
 * It will NOT appear when navigating to:
 *
 * /privacy
 * /terms
 * /aboutus
 * /contact
 * /gallery
 * /doctors
 * /treatments
 * etc.
 */
const SplashController = () => {
  const { pathname } = useLocation();

  const [showSplash, setShowSplash] = useState(() => {
    // Never show splash on non-home routes
    if (window.location.pathname !== "/") {
      return false;
    }

    // Prevent splash from appearing again during
    // normal navigation in the same browser session
    const hasShownSplash = sessionStorage.getItem(
      "wide-smiles-splash-shown"
    );

    return !hasShownSplash;
  });

  useEffect(() => {
    // If user navigates away from home,
    // immediately hide the splash.
    if (pathname !== "/") {
      setShowSplash(false);
    }
  }, [pathname]);

  const handleSplashComplete = () => {
    sessionStorage.setItem("wide-smiles-splash-shown", "true");
    setShowSplash(false);
  };

  if (!showSplash || pathname !== "/") {
    return null;
  }

  return (
    <SplashScreen onComplete={handleSplashComplete} />
  );
};

/**
 * ---------------------------------------------------------
 * Application
 * ---------------------------------------------------------
 */
const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <BrowserRouter>
          {/* Global toast notifications */}
          <Toaster />
          <Sonner />

          {/* 
            Splash is now controlled by the current route.
            It only appears on the initial home page.
          */}
          <SplashController />

          {/* Automatically scroll to top on route changes */}
          <ScrollToTop />

          <Routes>
            {/* Home */}
            <Route path="/" element={<Index />} />

            {/* About */}
            <Route path="/aboutus" element={<AboutPage />} />

            {/* Treatments */}
            <Route path="/treatments" element={<TreatmentsPage />} />

            <Route
              path="/treatments/:slug"
              element={<TreatmentDetailPage />}
            />

            {/* Terms */}
            <Route path="/terms" element={<TermsPage />} />

            {/* Contact */}
            <Route path="/contact" element={<ContactSection />} />

            {/* Reviews / Feedback */}
            <Route path="/review" element={<ReviewPage />} />

            <Route path="/feedback" element={<ReviewPage />} />

            {/* Privacy */}
            <Route path="/privacy" element={<PrivacyPolicy />} />

            {/* Gallery */}
            <Route path="/gallery" element={<GalleryPage />} />

            {/* Doctors */}
            <Route path="/doctors" element={<DoctorsPage />} />

            {/* Catch-all */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;