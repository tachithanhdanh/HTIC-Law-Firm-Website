import AboutCarousel from "@/components/index/AboutCarousel";
import Carousel from "@/components/index/Carousel";
import FeaturedServices from "@/components/index/FeaturedServices";
import ServicesSection from "@/components/index/ServicesSection";

const Home = () => {
  return (
    <>
      <Carousel />
      <AboutCarousel />
      <ServicesSection />
      <FeaturedServices />
      <div>
        <h1>Trang Chủ</h1>
        <p>Chào mừng đến với website của chúng tôi!</p>
      </div>
    </>
  );
};

export default Home;
