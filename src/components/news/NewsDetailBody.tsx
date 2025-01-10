import PaginatedArticleList from "@/components/common/PaginatedArticleList";
import {
  exampleArticle,
  featuredServices,
  latestNews,
  relatedNews,
} from "@/data/news";
import { useState } from "react";
import NewsDetailContent from "./NewsDetailContent";
import NewsSidebarContent from "./NewsSidebarContent";

const NewsDetailBody = () => {
  const [articles, setArticles] = useState([...latestNews]);

  return (
    <div className="py-12 bg-gray-50 px-16 lg:px-24">
      <div className="bg-white rounded-lg shadow-lg p-8">
        {/* Grid Layout */}
        <div className="grid grid-cols-12 gap-6">
          {/* News Detail Content - Chiếm 8 cột */}
          <div className="col-span-12 lg:col-span-8">
            <NewsDetailContent article={exampleArticle} />
          </div>

          {/* Sidebar Content - Chiếm 4 cột */}
          <div className="col-span-12 lg:col-span-4 p-6">
            <NewsSidebarContent
              relatedNews={relatedNews}
              featuredServices={featuredServices}
            />
          </div>
        </div>

        {/* Dòng phân cách */}
        <div className="border-t border-gray-200 my-8 -mx-8"></div>

        {/* Paginated Article List */}
        <PaginatedArticleList
          projects={articles}
          itemsPerPage={8}
          headerTitle="Các Tin Tức Khác"
          columns={2}
        />
      </div>
    </div>
  );
};

export default NewsDetailBody;
