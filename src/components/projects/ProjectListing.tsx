import React, { useState } from "react";
import Image from "next/image";
import { getStaticImagePath } from "@/utils";

type Project = {
  image: string;
  title: string;
  date: string;
  description: string;
};

const projects: Project[] = [
  {
    image: getStaticImagePath("/projects/project-1.jpg"),
    title: "Hoạt Động Giải Quyết Tranh Chấp Tố Tụng",
    date: "18/05/2022",
    description:
      "HTIC hiện đang hỗ trợ và tư vấn cho nhiều khách hàng trong việc lập và triển khai nhiều dự án bất động sản và xây dựng tại Việt Nam. Cùng hỗ trợ và tư vấn nhiều vấn đề phức tạp khác...",
  },
  {
    image: getStaticImagePath("/projects/project-2.jpg"),
    title: "Điểm Mới Dự Thảo Luật Thuế Thu Nhập Doanh Nghiệp",
    date: "18/05/2022",
    description:
      "Luật Thuế Thu nhập doanh nghiệp luôn là một chủ đề quan trọng, ảnh hưởng trực tiếp đến hoạt động và sự phát triển của doanh nghiệp...",
  },
  {
    image: getStaticImagePath("/projects/project-3.jpg"),
    title: "Dự Án Tư Vấn Doanh Nghiệp Tiêu Biểu",
    date: "18/05/2022",
    description:
      "HTIC đã có nhiều thành tích trong tư vấn doanh nghiệp, tư vấn dự án cho khách hàng với hơn 100 dự án lớn nhỏ trên toàn quốc...",
  },
  {
    image: getStaticImagePath("/projects/project-4.jpg"),
    title: "Đăng Ký Mã Số Thuế Cá Nhân: Hồ Sơ & Thủ Tục Cần Biết",
    date: "18/05/2022",
    description:
      "Mã số thuế cá nhân là một yếu tố quan trọng, giúp cá nhân và tổ chức thực hiện nghĩa vụ thuế đúng quy định...",
  },
  {
    image: getStaticImagePath("/projects/project-5.jpg"),
    title:
      "Thuế Tối Thiểu Toàn Cầu Và Những Vấn Đề Doanh Nghiệp Việt Nam Cần Biết",
    date: "18/05/2022",
    description:
      "Thuế tối thiểu toàn cầu đã trở thành một vấn đề đáng quan tâm đối với doanh nghiệp Việt Nam và các quốc gia khác...",
  },
];

const ProjectsPage = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const itemsPerPage = 5;
  const totalPages = Math.ceil(projects.length / itemsPerPage);

  const handlePageChange = (page: number): void => {
    setCurrentPage(page);
  };

  const paginatedProjects = projects.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    // <section className="py-12 bg-gray-50">
    <div className="max-w-7xl mx-auto px-4">
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-3xl font-bold text-gray-800">Các Dự Án Khác</h2>
        <div className="relative">
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
            className="bg-white rounded-lg shadow-md overflow-hidden flex"
          >
            <Image
              src={project.image}
              alt={project.title}
              width={200}
              height={150}
              className="object-cover w-1/3"
            />
            <div className="p-6 w-2/3">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                {project.title}
              </h3>
              <p className="text-sm text-gray-500 mb-2">{project.date}</p>
              <p className="text-sm text-gray-600">{project.description}</p>
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
    </div>
    // </section>
  );
};

export default ProjectsPage;
