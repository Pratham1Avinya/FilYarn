import React, { useEffect } from 'react';
import Hero from '../components/sections/Hero';
import CompanyIntro from '../components/sections/CompanyIntro';
import ProductHighlights from '../components/sections/ProductHighlights';
import ManufacturingSteps from '../components/sections/ManufacturingSteps';
import LeadershipSection from '../components/sections/LeadershipSection';
import CapabilityVideo from '../components/sections/CapabilityVideo';
import LegacyTimeline from '../components/sections/LegacyTimeline';
import ConnectCTA from '../components/sections/ConnectCTA';

const Home = () => {
  useEffect(() => {
    document.title = "FILYARN INDUSTRIES PRIVATE LIMITED | Yarn & Textile Solutions";
    
    // Set meta description dynamically
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Filyarn Industries Pvt. Ltd. is a Surat, Gujarat-based yarn and textile B2B supplier providing polyester yarn and sewing thread solutions with a focus on quality, reliable supply and long-term relationships.");
    }
  }, []);

  return (
    <>
      <Hero />
      <CompanyIntro />
      <ProductHighlights />
      <ManufacturingSteps />
      <LeadershipSection />
      <CapabilityVideo />
      <LegacyTimeline variant="alt" />
      <ConnectCTA />
    </>
  );
};

export default Home;
