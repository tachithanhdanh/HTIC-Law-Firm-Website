import { getStaticImagePath } from "@/utils";

const NewsHeader = () => {
  return (
    <section
      id="project-header"
      className="relative bg-cover bg-center h-40 flex items-center justify-center text-white"
      style={{
        backgroundImage: `url('${getStaticImagePath(
          "/news/news-header.png "
        )}')`,
      }}
    ></section>
  );
};

export default NewsHeader;
