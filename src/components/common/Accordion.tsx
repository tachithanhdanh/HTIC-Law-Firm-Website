import React, { useState } from "react";

export interface FAQ {
  question: string;
  answer: string;
}

const Accordion: React.FC<{ data: FAQ[] }> = ({ data }) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div id="accordion-open" data-accordion="open">
      {data.map((faq, index) => (
        <div key={index} className="border-b border-gray-200">
          <h2>
            <button
              type="button"
              className="flex items-center justify-between w-full p-5 font-medium text-gray-500 hover:text-blue-500 transition border border-gray-200 rounded-t-xl gap-3"
              onClick={() => toggleAccordion(index)}
            >
              <span className="flex items-center">
                <svg
                  className="w-5 h-5 me-2 shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                    clipRule="evenodd"
                  />
                </svg>
                {faq.question}
              </span>
              <svg
                data-accordion-icon
                className={`w-3 h-3 transition-transform ${
                  activeIndex === index ? "rotate-180" : ""
                }`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 10 6"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5 5 1 1 5"
                />
              </svg>
            </button>
          </h2>
          {activeIndex === index && (
            <div className="p-5 border border-t-0 border-gray-200">
              <p className="text-gray-700">{faq.answer}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Accordion;
