import FeaturedServices from "@/components/services/FeaturedServices";
import OtherServices from "@/components/services/OtherServices";
import ServicesHeader from "@/components/services/ServicesHeader";
import ServicesSection from "@/components/services/ServicesSection";

const Services = () => {
  return (
    <div className="bg-gray-200">
      <ServicesHeader />
      <div className="bg-white mt-10 mx-20">
        <ServicesSection />
        <FeaturedServices />
        <OtherServices />
      </div>
    </div>
  );
};

export default Services;
