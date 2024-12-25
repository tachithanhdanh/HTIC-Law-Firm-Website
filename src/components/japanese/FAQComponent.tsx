import { faqs } from "@/data/japanese";
import Accordion from "../common/Accordion";

const FAQComponent = () => {
  return (
    <>
      <div className="flex items-center space-x-2 mb-8">
        <span className="h-12 w-1 bg-blue-500"></span>
        <h2 className="text-2xl font-semibold text-gray-800">
          Những Câu Hỏi Về Pháp Lý thường Gặp của người Nhật Tại Việt Nam
        </h2>
      </div>
      <Accordion data={faqs} />
    </>
  );
};

export default FAQComponent;
