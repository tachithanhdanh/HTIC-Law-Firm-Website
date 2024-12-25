import Image from "next/image";
import { useState } from "react";
import ViewMoreButton from "../common/ViewMoreButton";
import { getStaticImagePath } from "@/utils";
import { get } from "https";

const projects = [
  {
    title: "Hoạt Động Tư Vấn Đầu Tư",
    date: "18/05/2022",
    description:
      "Lĩnh vực Tư vấn đầu tư luôn là thế mạnh của HTIC, cho đến nay chúng tôi đã tư vấn cho hàng chục dự án đầu tư bao gồm khách hàng ngoài nước (tư vấn đầu tư nước ngoài) và các nhà đầu tư trong nước. Các dự án tiêu biểu như: Thành lập dự án đầu tư tại Việt Nam; Đầu tư vào các Khu công nghiệp, Mua bán- sáp nhập doanh nghiệp (M&A)...",
    image: "/projects/hoat-dong-tu-van-dau-tu.png",
  },
  {
    title: "Xin Giấy Xác Nhận ATTP Đối Với Thực Phẩm Chức Năng",
    date: "18/05/2022",
    description:
      "Khách hàng là Công ty TNHH ABC Việt Nam hoạt động kinh doanh chủ yếu liên quan đến lĩnh vực truyền thông, tổ chức sự kiện. Ngoài ra, Công ty ABC có mối quan hệ mật thiết mạnh trên mảng truyền thông, marketing của mình để mở rộng kinh doanh thị trường bán lẻ các sản phẩm thực phẩm bảo vệ sức khỏe (“thực phẩm chức năng”) do Công ty nhập khẩu trực tiếp từ Hàn Quốc...",
    image: "/projects/xin-giay-xac-nhan-attp.png",
  },
];

const FeaturedProjects = () => {
  const [search, setSearch] = useState("");

  const filteredProjects = projects.filter((project) =>
    project.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    // <section className="py-12 bg-gray-50 px-16 lg:px-24">
    // <div className="bg-white rounded-lg shadow-lg pt-8 pb-10">
    <section className="max-w-7xl mx-auto px-4">
      <div className="flex justify-between items-center mb-8">
        {/* Section Header */}
        <div className="flex items-center space-x-2">
          <span className="h-8 w-1 bg-blue-500"></span>
          <h2 className="text-2xl font-semibold text-gray-800 font-roboto">
            Dự Án Tiêu Biểu
          </h2>
        </div>
        <div className="relative w-5/12">
          <input
            type="text"
            placeholder="Tìm Kiếm"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full py-2 px-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            title="Search"
            type="submit"
            className="absolute top-2 right-4 text-gray-500 hover:text-blue-500"
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
      <div className="grid grid-cols-1 gap-8">
        {filteredProjects.map((project, index) => (
          <div
            key={index}
            className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center"
          >
            {/* Image */}
            <div
              className={`col-span-12 md:col-span-6 ${
                index % 2 !== 0 ? "md:order-2" : ""
              }`}
            >
              <Image
                src={getStaticImagePath(project.image)}
                alt={project.title}
                width={500}
                height={300}
                className="object-cover w-full rounded-lg"
              />
            </div>

            {/* Text */}
            <div
              className={`col-span-12 md:col-span-6 ${
                index % 2 !== 0 ? "md:order-1" : ""
              } p-6`}
            >
              <h3 className="text-lg font-semibold text-gray-800">
                {project.title}
              </h3>
              <p className="text-sm text-gray-500 font-roboto">
                {project.date}
              </p>
              <p className="text-sm text-gray-600 mb-4 font-roboto">
                {project.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      <ViewMoreButton isWhite={false} />
    </section>
    // </div>
    // </section>
  );
};

export default FeaturedProjects;
