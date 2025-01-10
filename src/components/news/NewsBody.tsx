import { featuredNews } from "@/data/news";
import FeaturedContent from "../common/FeaturedContent";
import PaginatedArticleList from "../common/PaginatedArticleList";
import { projects } from "@/data/projects";

const NewsBody = () => {
  const itemsPerPage = 2;

  return (
    <div className="py-12 bg-gray-50 px-16 lg:px-24">
      <div className="bg-white rounded-lg shadow-lg pt-8 pb-10 px-9">
        <FeaturedContent
          contentList={featuredNews}
          headerTitle={"Tin Tức Nổi Bật"}
        />
        <div className="border-t border-gray-200 my-8 -mx-9"></div>
        <PaginatedArticleList
          projects={projects}
          itemsPerPage={itemsPerPage}
          headerTitle="Các Dự Án Khác"
        />
      </div>
    </div>
  );
};

export default NewsBody;
