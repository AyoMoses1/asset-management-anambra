import AssetTracking from "components/landing/AssetTracking";
import Dashboard from "components/landing/Dashboard";
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
    </>
  );
};

export default index;
