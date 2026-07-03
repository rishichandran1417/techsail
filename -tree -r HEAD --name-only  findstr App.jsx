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
import VideoModal from "./components/VideoModal";

export default function App() {
  const [videoOpen, setVideoOpen] = useState(false);

  return (
    <div className="font-sans antialiased">
      <Header />
      <Hero onWatchVideo={() => setVideoOpen(true)} />
      <Services />
      <StatsBar />
      <Industries />
      <Process />
      <WhyChooseUs />
      <QuoteCTA />
      <ContactSection />
      <Footer />
      
    </div>
  );
}
