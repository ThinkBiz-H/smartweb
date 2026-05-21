import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import ConsultationPopup from "./components/ConsultationPopup";

import CryptoTicker from "./components/CryptoTicker";
import HeroSection from "./components/HeroSection";
import StatsSection from "./components/StatsSection";
import ServicesSection from "./components/ServicesSection";
import ProcessSection from "./components/ProcessSection";
import WalletRecoverySection from "./components/WalletRecoverySection";
import PlatformsSection from "./components/PlatformsSection";
import SecuritySection from "./components/SecuritySection";
import ComparisonSection from "./components/ComparisonSection";
import TestimonialSection from "./components/TestimonialSection";
import CaseStudiesSection from "./components/CaseStudiesSection";
import FAQSection from "./components/FAQSection";
import CTASection from "./components/CTASection";
import Footer from "./components/Footer";

import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsConditions from "./pages/TermsConditions";

/* ADMIN */
import AdminLogin from "./admin/AdminLogin";
import AdminDashboard from "./admin/AdminDashboard";

function HomePage() {
  return (
    <>
      <CryptoTicker />
      <HeroSection />
      <StatsSection />
      <ServicesSection />
      <ProcessSection />
      <WalletRecoverySection />
      <PlatformsSection />
      <SecuritySection />
      <ComparisonSection />
      <TestimonialSection />
      <CaseStudiesSection />
      <FAQSection />
      <CTASection />
      <Footer />
    </>
  );
}

function WebsiteLayout({ children }) {
  return (
    <div className="bg-[#06122b] text-white min-h-screen overflow-hidden pt-[90px]">
      <Navbar />
      <ConsultationPopup />
      {children}
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* WEBSITE */}
        <Route
          path="/"
          element={
            <WebsiteLayout>
              <HomePage />
            </WebsiteLayout>
          }
        />

        <Route
          path="/privacy-policy"
          element={
            <WebsiteLayout>
              <PrivacyPolicy />
            </WebsiteLayout>
          }
        />

        <Route
          path="/terms-and-conditions"
          element={
            <WebsiteLayout>
              <TermsConditions />
            </WebsiteLayout>
          }
        />

        {/* ADMIN */}
        <Route path="/admin" element={<AdminLogin />} />
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
