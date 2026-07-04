import React, { useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import StatsBar from "./components/StatsBar";
import Industries from "./components/Industries";
import Process from "./components/Process";
import WhyChooseUs from "./components/WhyChooseUs";
import QuoteCTA from "./components/QuoteCTA";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";

// Careers
import CareersHero from "./components/careers/CareersHero";
import CareersModal from "./components/careers/CareersModal";

export default function App() {
  const [careersOpen, setCareersOpen] = useState(false);

  return (
    <div className="font-sans antialiased">
      <Header />

      <Hero />

      <Services />

      <StatsBar />

      <Industries />

      <Process />

      <WhyChooseUs />

      <QuoteCTA />

      <CareersHero
        onOpen={() => setCareersOpen(true)}
      />

      <ContactSection />

      <Footer />

      <CareersModal
        open={careersOpen}
        onClose={() => setCareersOpen(false)}
      />
    </div>
  );
}