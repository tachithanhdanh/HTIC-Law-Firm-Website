import PaginatedArticleList from "../common/PaginatedArticleList";
import { legalConsultNews } from "@/data/consult";
import FAQComponent from "./FAQComponent";

const JapaneseBody = () => {
  const itemsPerPage = 3;
  return (
    <div className="py-12 bg-gray-50 px-16 lg:px-24">
      <div className="bg-white rounded-lg shadow-lg pt-8 pb-10 px-9">
        <PaginatedArticleList
          projects={legalConsultNews}
          itemsPerPage={itemsPerPage}
          headerTitle="Hỗ Trợ Pháp Lý Cho Người Nhật Tại Việt Nam"
        />
        <div className="border-t border-gray-200 my-8 -mx-9"></div>
        <FAQComponent />
      </div>
    </div>
  );
};

export default JapaneseBody;
