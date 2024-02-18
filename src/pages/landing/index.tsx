import AssetTracking from "components/landing/AssetTracking";
import Dashboard from "components/landing/Dashboard";
import Hero from "components/landing/Hero";
import Niche from "components/landing/Niche";

const index = () => {
  return (
    <>
      <Hero />
      <Niche />
      <Dashboard />
      <AssetTracking />
    </>
  );
};

export default index;
