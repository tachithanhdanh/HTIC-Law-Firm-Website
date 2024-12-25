import { getStaticImagePath } from "@/utils";
import React from "react";

const ServicesHeader = () => {
  return (
    <section
      id="about-header"
      className="relative bg-cover bg-center h-40 flex items-center justify-center text-white"
      style={{
        backgroundImage: `url('${getStaticImagePath(
          "/services/service-header-background.png"
        )}')`,
      }}
    ></section>
  );
};

export default ServicesHeader;
