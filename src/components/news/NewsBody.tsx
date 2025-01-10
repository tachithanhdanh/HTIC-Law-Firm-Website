import { useState } from "react";
import { featuredNews, latestNews } from "@/data/news";
import FeaturedContent from "../common/FeaturedContent";
import PaginatedArticleList from "../common/PaginatedArticleList";

const NewsBody = () => {
  const [articles, setArticles] = useState([...latestNews]);
  const [selectedMode, setSelectedMode] = useState<string>("latest");

  const sortLatest = () => {
    setSelectedMode("latest");
    const sortedArticles = [...latestNews].sort(
      (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
    );
    setArticles(sortedArticles);
  };

  const scrambleArticles = () => {
    setSelectedMode("scramble");
    const scrambledArticles = [...latestNews].sort(() => Math.random() - 0.5);
    setArticles(scrambledArticles);
  };

  return (
    <div className="py-12 bg-gray-50 px-16 lg:px-24">
      <div className="bg-white rounded-lg shadow-lg pt-8 pb-10 px-9">
        <FeaturedContent
          contentList={featuredNews}
          headerTitle={"Tin Tức Nổi Bật"}
        />
        <div className="border-t border-gray-200 my-8 -mx-9"></div>

        {/* Buttons to switch between sorting modes */}
        <div className="flex space-x-4 mb-6 px-4">
          <button
            onClick={sortLatest}
            className={`px-4 py-2 rounded ${
              selectedMode === "latest"
                ? "bg-blue-500 text-white"
                : "bg-gray-500 text-white hover:bg-gray-600"
            }`}
          >
            Tin Tức Mới
          </button>
          <button
            onClick={scrambleArticles}
            className={`px-4 py-2 rounded ${
              selectedMode === "scramble"
                ? "bg-blue-500 text-white"
                : "bg-gray-500 text-white hover:bg-gray-600"
            }`}
          >
            Các Tin Tức Khác
          </button>
        </div>

        <PaginatedArticleList
          projects={articles}
          itemsPerPage={8}
          headerTitle="Các Tin Tức Khác"
          columns={2}
          hideHeader={true}
        />
      </div>
    </div>
  );
};

export default NewsBody;
