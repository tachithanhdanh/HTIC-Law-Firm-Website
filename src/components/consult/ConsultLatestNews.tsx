import NewsGrid from "../common/NewsGrid";
import { latestNewsData } from "@/data/consult";
import ViewMoreButton from "../common/ViewMoreButton";

const ConsultLatestNews = () => {
  return (
    <>
      <div className="flex items-center space-x-2">
        <span className="h-12 w-1 bg-blue-500"></span>
        <h2 className="text-2xl font-semibold text-gray-800">
          Tin Tư Vấn Pháp Lý Mới
        </h2>
      </div>
      <NewsGrid data={latestNewsData} />
      <ViewMoreButton isWhite={false} />
    </>
  );
};

export default ConsultLatestNews;
