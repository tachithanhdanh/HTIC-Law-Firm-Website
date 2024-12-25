import { getStaticImagePath } from "@/utils";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const ServiceCard = ({ image, title, line1, line2, line3, line4 }) => {
  return (
    <div className="bg-white rounded-lg shadow-md border-gray-200 border-2">
      <div className="p-2 items-center flex flex-col">
        <Image
          src={getStaticImagePath(image)}
          alt={title}
          width={350}
          height={96}
          className="object-contain"
        />
      </div>
      <div className="px-4">
        <h3 className="text-lg font-bold text-center">{title}</h3>
        <p className="text-gray-600 mt-2 text-sm">{line1}</p>
        <div className="border-b border-gray-300 my-2"></div>
        <p className="text-gray-600 mt-1 text-sm">{line2}</p>
        <div className="border-b border-gray-300 my-2"></div>
        <p className="text-gray-600 mt-1 text-sm">{line3}</p>
        <div className="border-b border-gray-300 my-2"></div>
        <p className="text-gray-600 mt-1 text-sm">{line4}</p>
        <div className="border-b border-gray-300 my-2"></div>
      </div>
      <div className="flex justify-center items-center p-5">
        {/* Nút "Xem Thêm" */}
        <Link
          href="/services/news"
          className="py-2 border text-xs border-gray-400 font-medium text-gray-800 justify-between
          hover:bg-gray-500 hover:text-gray-200 transition flex items-center "
        >
          <span className="pr-16 pl-20">XEM THÊM</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            className=" h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </Link>
      </div>
    </div>
  );
};

export default ServiceCard;
