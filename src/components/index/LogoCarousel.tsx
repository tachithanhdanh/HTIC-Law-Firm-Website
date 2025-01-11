import { useState, useEffect } from "react";
import { getStaticImagePath } from "@/utils";
import Image from "next/image";

const LogoCarousel = () => {
  const slides = [
    "/index/company-logos-1.png",
    "/index/company-logos-1.png",
    "/index/company-logos-1.png",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === slides.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // Transition every 5 seconds
    return () => clearInterval(interval); // Cleanup interval on unmount
  }, [slides.length]);

  return (
    <div className="w-full overflow-hidden py-10">
      <div className="max-w-7xl mx-auto px-4">
        {/* Image Carousel */}
        <div className="relative h-56 md:h-72 lg:h-96 overflow-hidden">
          {slides.map((slide, index) => (
            <Image
              key={index}
              src={getStaticImagePath(slide)}
              alt={`Slide ${index + 1}`}
              width={930} // Specify an appropriate width
              height={210} // Specify an appropriate height
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
                currentIndex === index ? "opacity-100" : "opacity-0"
              }`}
            />
          ))}
        </div>

        {/* Dots Navigation */}
        <div className="flex justify-center mt-6 space-x-3">
          {slides.map((_, index) => (
            <button
              title="Navigate to slide"
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full ${
                index === currentIndex ? "bg-gray-800" : "bg-gray-300"
              }`}
            ></button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LogoCarousel;
