import AboutCarousel from "@/components/index/AboutCarousel";
import AdditionalInformation from "@/components/index/AdditionalInformation";
import Carousel from "@/components/index/Carousel";
import FeaturedProjects from "@/components/index/FeaturedProjects";
import FeaturedServices from "@/components/index/FeaturedServices";
import LatestNews from "@/components/index/LatestNews";
import LogoCarousel from "@/components/index/LogoCarousel";
import ServicesSection from "@/components/index/ServicesSection";
import TestimonialCarousel from "@/components/index/TestimonialCarousel";

const Home = () => {
  return (
    <>
      <Carousel />
      <AboutCarousel />
      <ServicesSection />
      <FeaturedServices />
      <FeaturedProjects />
      <AdditionalInformation />
      <LatestNews />
      <LogoCarousel />
      <TestimonialCarousel />
    </>
  );
};

export default Home;
