import { getStaticImagePath } from "@/utils";

const AboutHeader = () => {
  return (
    <section
      id="about-header"
      className="relative bg-cover bg-center h-40 flex items-center justify-center text-white"
      style={{
        backgroundImage: `url('${getStaticImagePath(
          "/about/about-header-background.png "
        )}')`,
      }}
    ></section>
  );
};

export default AboutHeader;
