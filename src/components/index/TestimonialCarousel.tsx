import { useState } from "react";
import Image from "next/image";
import { getStaticImagePath } from "@/utils";

const testimonials = [
  {
    image: "/index/mr-hung.png", // Replace with the path to the image
    text: `"Công ty Luật HTIC có tác phong làm việc chuyên nghiệp, đội ngũ luật sư am hiểu pháp luật luôn nhiệt tình tư vấn giải đáp các thắc mắc của khách hàng. Đưa ra những cách thức giải quyết vấn đề một cách nhanh chóng, hiệu quả, giúp chúng tôi giải quyết được những vấn đề pháp lý phức tạp một cách đơn giản nhất."`,
    name: "MR. HÙNG",
    position: "PHÓ GIÁM ĐỐC CTCP TẠI QUẬN 1",
  },
  {
    image: "/index/baxter.jpg", // Replace with the path to the image
    text: `"HTIC Law Firm provides professional legal services with a team of highly knowledgeable and dedicated lawyers. They have consistently delivered clear and effective solutions to complex legal issues, helping us resolve our challenges efficiently and effectively."`,
    name: "MR. BAXTER",
    position: "MANAGING DIRECTOR, GLOBAL SOLUTIONS INC.",
  },
  {
    image: "/index/mr-hung.png", // Replace with the path to the image
    text: `"HTIC Law Firm's team is exceptional in delivering personalized and insightful legal advice. Their prompt and efficient approach has been instrumental in resolving our business's critical legal matters with utmost professionalism."`,
    name: "MS. ANNA LEE",
    position: "CEO, TECH INNOVATIONS LTD.",
  },
  // Add more testimonials as needed
];

const TestimonialCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <section
      id="testimonial-carousel"
      className="py-12 bg-backgroundTestimonial"
      style={{
        backgroundImage: `url('${getStaticImagePath(
          "/index/testimonial-background.png"
        )}')`,
      }}
    >
      <div className="max-w-5xl mx-auto px-4">
        <div className="relative bg-white p-8 rounded-lg shadow-lg flex items-center gap-6">
          {/* Previous Button */}
          <button
            title="Previous Testimonial"
            onClick={handlePrev}
            className="p-2 bg-white rounded-full shadow-md hover:bg-gray-200 flex-shrink-0"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-6 h-6 text-blue-800"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          {/* Testimonial Card */}
          <div className="flex-1 grid grid-cols-12 items-center gap-6 h-[250px]">
            {/* Profile Image */}
            <div className="col-span-3 flex justify-center w-[192px] h-[192px]">
              <Image
                src={getStaticImagePath(testimonials[currentIndex].image)}
                alt={testimonials[currentIndex].name}
                width={192}
                height={192}
                className="rounded-full object-cover"
              />
            </div>

            {/* Testimonial Text */}
            <div className="col-span-9">
              <p className="text-gray-700 italic mb-4 text-lg">
                {testimonials[currentIndex].text}
              </p>
              <p className="text-gray-800 font-semibold text-lg uppercase">
                {testimonials[currentIndex].name}
              </p>
              <p className="text-gray-500 text-lg uppercase">
                {testimonials[currentIndex].position}
              </p>
            </div>
          </div>

          {/* Next Button */}
          <button
            title="Next Testimonial"
            onClick={handleNext}
            className="p-2 bg-white rounded-full shadow-md hover:bg-gray-200 flex-shrink-0"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-6 h-6 text-blue-800"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>

        {/* Indicators */}
        <div className="flex justify-center space-x-2 mt-4">
          {testimonials.map((_, index) => (
            <span
              key={index}
              className={`w-3 h-3 rounded-full ${
                index === currentIndex ? "bg-gray-800" : "bg-gray-300"
              }`}
            ></span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialCarousel;
