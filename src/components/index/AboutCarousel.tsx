import { useState } from "react";

const AboutCarousel = () => {
  const slides = [
    {
      title: "Slide 1",
      description: "Mô tả Slide 1",
      image: "/index/about-us-slider.png",
    },
    {
      title: "Slide 2",
      description: "Mô tả Slide 2",
      image: "/index/about-us-slider.png",
    },
    {
      title: "Slide 3",
      description: "Mô tả Slide 3",
      image: "/index/about-us-slider.png",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === slides.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  return (
    <section
      id="about-us"
      className="w-full bg-gray-100 py-10 bg-[url('/index/about-us-background.png')] bg-cover bg-center"
    >
      <div className="max-w-7xl mx-auto px-4">
        {/* Wrapper bao quanh cả Left và Right Section */}
        <div className="bg-white/70 rounded-lg shadow-lg p-8 grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
          {/* Left Section */}
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-4 text-center">
              Về Chúng Tôi
            </h2>
            <div className="mb-4">
              <img
                src="/index/about-us-office.png"
                alt="Văn phòng HTIC"
                className="rounded-lg object-cover w-full h-auto"
              />
            </div>
            <p className="text-gray-600 font-roboto">
              <strong>HTIC</strong> là công ty luật của Việt Nam chuyên cung cấp
              dịch vụ pháp lý và các giải pháp cho khách hàng với các mảng kinh
              doanh trong và ngoài lãnh thổ Việt Nam. Chúng tôi có chuyên môn
              nhiều năm hoạt động trên cả hai lĩnh vực công và tư. Dịch vụ của
              chúng tôi đảm bảo những nhu cầu khác nhau của các nhà đầu tư,
              doanh nghiệp và các tổ chức công trong các lĩnh vực thương mại
              quốc tế, đầu tư, chi tiêu chính phủ hoặc giao dịch dân sự.{" "}
              <strong>HTIC</strong> là một lựa chọn của Khách Hàng cho dịch vụ
              chất lượng cao và cung cách làm việc hiệu quả.
            </p>
          </div>

          {/* Right Section */}
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-4 text-center">
              Tại Sao Nên Chọn Chúng Tôi
            </h2>
            <div
              id="default-carousel"
              className="relative w-full"
              data-carousel="slide"
            >
              {/* Carousel Wrapper */}
              <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
                {slides.map((slide, index) => (
                  <div
                    key={index}
                    className={`${
                      currentIndex === index ? "block" : "hidden"
                    } duration-700 ease-in-out`}
                    data-carousel-item
                  >
                    <img
                      src={slide.image}
                      alt={slide.title}
                      className="block w-full object-cover"
                    />
                    <p className="text-center text-gray-600 mt-2">
                      {slide.description}
                    </p>
                  </div>
                ))}
              </div>

              {/* Slider Indicators */}
              <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3">
                {slides.map((_, index) => (
                  <button
                    key={index}
                    type="button"
                    onClick={() => setCurrentIndex(index)}
                    className={`w-3 h-3 rounded-full ${
                      index === currentIndex ? "bg-white" : "bg-gray-500"
                    }`}
                    aria-current={currentIndex === index}
                    aria-label={`Slide ${index + 1}`}
                  ></button>
                ))}
              </div>

              {/* Navigation */}
              <button
                title="Previous Slide"
                type="button"
                onClick={handlePrev}
                className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group"
                data-carousel-prev
              >
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/70 group-hover:bg-white/80">
                  <svg
                    className="w-4 h-4 text-black"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 6 10"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 1 1 5l4 4"
                    />
                  </svg>
                </span>
              </button>
              <button
                title="Next Slide"
                type="button"
                onClick={handleNext}
                className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group"
                data-carousel-next
              >
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/70 group-hover:bg-white/80">
                  <svg
                    className="w-4 h-4 text-black"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 6 10"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m1 9 4-4-4-4"
                    />
                  </svg>
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutCarousel;
