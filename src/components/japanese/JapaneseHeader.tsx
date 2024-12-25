import { getStaticImagePath } from "@/utils";

const JapaneseHeader = () => {
  return (
    <section
      id="project-header"
      className="relative bg-cover bg-center h-40 flex items-center justify-center text-white"
      style={{
        backgroundImage: `url('${getStaticImagePath(
          "/japanese/japanese-header.png "
        )}')`,
      }}
    ></section>
  );
};

export default JapaneseHeader;
