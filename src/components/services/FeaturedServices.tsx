import Image from "next/image";
import { getStaticImagePath } from "@/utils";
import Link from "next/link";

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
      <div className="max-w-6xl mx-auto px-4">
        {/* Tiêu Đề */}
        <div className="flex gap-5">
          <div className="h-10 w-1 bg-gray-600 rounded-3xl"></div>
          <h2 className="text-3xl font-bold text-white mb-8">
            Dịch vụ tiêu biểu
          </h2>
        </div>

        {/* Dịch Vụ */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
          {services.map((service, index) => (
            <Link
              key={index}
              href="/services/news"
              className="bg-transparent p-6 flex flex-col items-center text-center"
            >
              {/* Biểu Tượng */}
              <div className="w-[200px] h-[200px] mb-3">
                <Image
                  src={getStaticImagePath(service.icon)}
                  alt={service.title}
                  width={200}
                  height={200}
                  className="object-contain"
                />
              </div>
              {/* Tiêu Đề */}
              <h3 className="text-xl font-semibold text-white">
                {service.title}
              </h3>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedServices;
