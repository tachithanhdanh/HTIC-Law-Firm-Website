import FeaturedProjects from "./FeaturedProjects";
import ProjectListing from "./ProjectListing";

const ProjectPageBody = () => {
  return (
    <section className="py-12 bg-gray-50 px-16 lg:px-24">
      <div className="bg-white rounded-lg shadow-lg pt-8 pb-10">
        <FeaturedProjects />
        <ProjectListing />
      </div>
    </section>
  );
};

export default ProjectPageBody;
