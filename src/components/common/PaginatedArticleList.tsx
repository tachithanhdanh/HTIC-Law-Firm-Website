import React, { useState } from "react";
import Image from "next/image";

export type DescriptionPart = {
  text: string;
  isBold: boolean;
};

export type Article = {
  image: string;
  title: string;
  date: string;
  description: DescriptionPart[][];
};

type PaginatedArticleListProps = {
  projects: Article[];
  itemsPerPage?: number; // Optional for flexibility
  headerTitle: string;
};

const PaginatedArticleList: React.FC<PaginatedArticleListProps> = ({
  projects,
  itemsPerPage = 5,
  headerTitle,
}) => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const totalPages = Math.ceil(projects.length / itemsPerPage);

  const handlePageChange = (page: number): void => {
    setCurrentPage(page);
  };

  const paginatedProjects = projects.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <section className="max-w-7xl mx-auto px-4">
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <div className="flex items-center space-x-2">
          <span className="h-8 w-1 bg-blue-500"></span>
          <h2 className="text-2xl font-semibold text-gray-800">
            {headerTitle}
          </h2>
        </div>
        <div className="relative w-5/12">
          <input
            type="text"
            placeholder="Tìm Kiếm"
            className="w-full border border-gray-300 rounded-lg py-2 px-4 pr-10 focus:ring-blue-500 focus:border-blue-500"
          />
          <button
            title="Search"
            className="absolute right-3 top-2 text-gray-500"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Project List */}
      <div className="space-y-6">
        {paginatedProjects.map((project, index) => (
          <div
            key={index}
            className="bg-white rounded-lg border-slate-300 border-2 overflow-hidden flex py-4 ps-4"
          >
            <Image
              src={project.image}
              alt={project.title}
              width={180}
              height={180}
              className="object-cover"
            />
            <div className="p-6">
              <h3 className="text-sm font-bold text-gray-800 mb-2">
                {project.title}
              </h3>
              <p className="text-xs text-gray-500 mb-2">{project.date}</p>
              {project.description.map((paragraph, paragraphIndex) => (
                <p key={paragraphIndex} className="text-sm text-gray-700 my-0">
                  {paragraph.map((part, partIndex) => (
                    <span
                      key={partIndex}
                      className={part.isBold ? "font-bold" : ""}
                    >
                      {part.text}
                    </span>
                  ))}
                </p>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-between items-center mt-8">
        <button
          disabled={currentPage === 1}
          onClick={() => handlePageChange(currentPage - 1)}
          className="px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300 disabled:opacity-50"
        >
          Trang Trước
        </button>
        <div>
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index}
              onClick={() => handlePageChange(index + 1)}
              className={`px-4 py-2 mx-1 rounded-lg ${
                currentPage === index + 1
                  ? "bg-blue-500 text-white"
                  : "bg-gray-200 hover:bg-gray-300"
              }`}
            >
              {index + 1}
            </button>
          ))}
        </div>
        <button
          disabled={currentPage === totalPages}
          onClick={() => handlePageChange(currentPage + 1)}
          className="px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300 disabled:opacity-50"
        >
          Trang Tiếp Theo
        </button>
      </div>
    </section>
  );
};

export default PaginatedArticleList;
