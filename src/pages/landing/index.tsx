import AssetTracking from "components/landing/AssetTracking";
import Dashboard from "components/landing/Dashboard";
import FAQ from "components/landing/FAQ";
import Footer from "components/landing/Footer";
import Hero from "components/landing/Hero";
import Niche from "components/landing/Niche";
import SoludoSection from "components/landing/SoludoSection";

const index = () => {
  return (
    <>
      <Hero />
      <Niche />
      <Dashboard />
      <AssetTracking />
      <SoludoSection />
      <FAQ/>
      <Footer/>
    </>
  );
};

export default index;
