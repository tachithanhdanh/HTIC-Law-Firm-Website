import Image from "next/image";
import { getStaticImagePath } from "@/utils";

const FeaturedProjects = () => {
  const projects = [
    {
      date: "18/05/2022",
      title: "Hoạt động Tư vấn đầu tư",
      description:
        "Lĩnh vực Tư vấn đầu tư luôn là thế mạnh của HTIC, cho đến nay chúng tôi đã tư vấn cho hàng chục dự án đầu tư bao gồm khách hàng ngoài nước...",
      image: "/index/hoat-dong-tu-van-dau-tu.png",
    },
    {
      date: "18/05/2022",
      title: "Hoạt động giải quyết Tranh chấp tố tụng",
      description:
        "HTIC hiện đang hỗ trợ và tư vấn cho nhiều khách hàng trong việc lập và triển khai nhiều dự án bất động...",
      image: "/index/hoat-dong-giai-quyet-tranh-chap-to-tung.png",
    },
    {
      date: "18/05/2022",
      title: "Dự án tư vấn Doanh nghiệp tiêu biểu",
      description:
        "Trong suốt quá trình hoạt động, HTIC đã có nhiều thành tích trong tư vấn doanh nghiệp, tư vấn dự án cho khách hàng...",
      image: "/index/du-an-tu-van-doanh-nghiep-tieu-bieu.png",
    },
    {
      date: "18/05/2022",
      title: "Hoạt động tư vấn đầu tư Bất động sản và Xây dựng",
      description:
        "HTIC hiện đang hỗ trợ và tư vấn cho nhiều khách hàng trong việc lập và triển khai nhiều dự án bất động sản...",
      image: "/index/hoat-dong-tu-van-dau-tu-bat-dong-san.png",
    },
  ];

  return (
    <section id="featured-projects" className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Tiêu Đề */}
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-gray-800">Dự Án Tiêu Biểu</h2>
          <a
            href="#"
            className="text-blue-500 hover:underline flex items-center space-x-2"
          >
            <span>Xem thêm</span>
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
                d="M9 5l7 7-7 7"
              />
            </svg>
          </a>
        </div>

        {/* Grid of Projects */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden grid grid-cols-5 gap-2"
            >
              {/* Image Section */}
              <div className="col-span-2 flex items-center justify-center">
                <Image
                  src={getStaticImagePath(project.image)}
                  alt={project.title}
                  width={210} // Set appropriate width
                  height={150} // Set appropriate height
                  className="object-cover"
                  priority // Optional: Load this image with priority for better performance
                />
              </div>

              {/* Content Section */}
              <div className="col-span-3 p-4 flex flex-col justify-center">
                <p className="text-sm text-gray-500 mb-2">{project.date}</p>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  {project.title}
                </h3>
                <p className="text-sm text-gray-600">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
