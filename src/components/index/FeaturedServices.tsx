import Image from "next/image";
import { getStaticImagePath } from "@/utils";

const FeaturedServices = () => {
  const services = [
    {
      icon: "/index/doanh-nghiep-va-dau-tu.svg",
      title: "Doanh Nghiệp & Đầu Tư",
    },
    {
      icon: "/index/phap-ly-bat-dong-san.svg",
      title: "Pháp Lý Bất Động Sản",
    },
    {
      icon: "/index/thue-bao-hiem.svg",
      title: "Thuế - Bảo Hiểm",
    },
    {
      icon: "/index/so-huu-tri-tue.svg",
      title: "Sở Hữu Trí Tuệ",
    },
    {
      icon: "/index/phap-ly-chung-khoan.svg",
      title: "Pháp Lý Chứng Khoán",
    },
    {
      icon: "/index/tu-van-giay-phep.svg",
      title: "Tư Vấn Giấy Phép",
    },
  ];

  return (
    <section
      className="py-12 bg-cover bg-center"
      style={{
        backgroundImage: `url('${getStaticImagePath(
          "/index/featured-services.png"
        )}')`,
      }}
    >
      <div className="max-w-7xl mx-auto px-4">
        {/* Tiêu Đề */}
        <h2 className="text-3xl font-bold text-center text-white mb-8">
          Dịch Vụ Tiêu Biểu
        </h2>

        {/* Dịch Vụ */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-transparent p-6 flex flex-col items-center text-center"
            >
              {/* Biểu Tượng */}
              <div className="w-[230px] h-[230px] mb-3">
                <Image
                  src={getStaticImagePath(service.icon)}
                  alt={service.title}
                  width={230}
                  height={230}
                  className="object-contain"
                />
              </div>
              {/* Tiêu Đề */}
              <h3 className="text-xl font-semibold text-white">
                {service.title}
              </h3>
            </div>
          ))}
        </div>
        {/* Div Bao Ngoài */}
        <div className="flex justify-center items-center h-full">
          {/* Nút "Xem Thêm" */}
          <button className="w-[348px] px-6 py-2 border border-white font-semibold text-white hover:bg-red-500 hover:text-white transition flex items-center justify-center space-x-2">
            <span>XEM THÊM</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedServices;
