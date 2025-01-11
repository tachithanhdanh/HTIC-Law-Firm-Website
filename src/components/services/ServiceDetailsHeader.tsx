import React from "react";
import { getStaticImagePath } from "@/utils";
import Image from "next/image";

const ServiceDetailsHeader = ({ title }) => {
  return (
    <div className="relative h-40 border-gray-200 overflow-hidden group mb-10">
      <div className="absolute inset-0 w-full h-full">
        <Image
          src={getStaticImagePath("/services/service-details-header.png")}
          alt={title}
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
      </div>

      <div className="absolute top-5 left-5 p-4">
        <h3 className="text-4xl font-medium text-white">{title}</h3>
      </div>
    </div>
  );
};

export default ServiceDetailsHeader;
