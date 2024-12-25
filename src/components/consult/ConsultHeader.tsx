import { getStaticImagePath } from "@/utils";

const ConsultHeader = () => {
  return (
    <section
      id="about-header"
      className="relative bg-cover bg-center h-40 flex items-center justify-center text-white"
      style={{
        backgroundImage: `url('${getStaticImagePath(
          "/consult/consult-header.png "
        )}')`,
      }}
    ></section>
  );
};

export default ConsultHeader;
