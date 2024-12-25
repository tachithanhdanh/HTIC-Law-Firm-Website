import NewsGrid from "../common/NewsGrid";
import { newsData } from "@/data";

const LatestNews = () => {
  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="flex justify-center items-center mb-8">
          {/* Title */}
          <h2 className="text-3xl font-bold text-gray-800 flex-grow text-center">
            Tin Tức Mới
          </h2>

          {/* "Xem thêm" Button */}
          <a
            href="#"
            className="text-blue-500 hover:underline flex items-center ml-auto"
          >
            Xem thêm
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-4 h-4 ml-1"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </a>
        </div>
        <div className="bg-white rounded-lg shadow">
          <NewsGrid data={newsData} />
        </div>
      </div>
    </section>
  );
};

export default LatestNews;
