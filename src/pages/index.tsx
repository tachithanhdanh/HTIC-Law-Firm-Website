import AboutCarousel from "@/components/index/AboutCarousel";
import AdditionalInformation from "@/components/index/AdditionalInformation";
import Carousel from "@/components/index/Carousel";
import FeaturedProjects from "@/components/index/FeaturedProjects";
import FeaturedServices from "@/components/index/FeaturedServices";
import LatestNews from "@/components/index/LatestNews";
import ServicesSection from "@/components/index/ServicesSection";

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
    </>
  );
};

export default Home;
