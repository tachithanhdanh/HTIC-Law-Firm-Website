import FeaturedContent from "../common/FeaturedContent";
import PaginatedArticleList from "../common/PaginatedArticleList";
import { featuredProjects, projects } from "@/data/projects";

const ProjectBody = () => {
  const itemsPerPage = 2;

  return (
    <div className="py-12 bg-gray-50 px-16 lg:px-24">
      <div className="bg-white rounded-lg shadow-lg pt-8 pb-10 px-9">
        <FeaturedContent
          contentList={featuredProjects}
          headerTitle={"Dự Án Tiêu Biểu"}
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

export default ProjectBody;
