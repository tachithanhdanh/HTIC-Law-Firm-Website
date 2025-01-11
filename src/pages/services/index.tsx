import ServicesHeader from "@/components/services/ServicesHeader";
import ServicesSection from "@/components/services/ServicesSection";

const Services = () => {
  return (
    <div className="bg-gray-200">
      <ServicesHeader />
      <div className="bg-white mt-10 mx-20">
        <ServicesSection />
      </div>
    </div>
  );
};

export default Services;
