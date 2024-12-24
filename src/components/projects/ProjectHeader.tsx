import { getStaticImagePath } from "@/utils";

const ProjectHeader = () => {
  return (
    <section
      id="project-header"
      className="relative bg-cover bg-center h-40 flex items-center justify-center text-white"
      style={{
        backgroundImage: `url('${getStaticImagePath(
          "/projects/project-header.png "
        )}')`,
      }}
    ></section>
  );
};

export default ProjectHeader;
