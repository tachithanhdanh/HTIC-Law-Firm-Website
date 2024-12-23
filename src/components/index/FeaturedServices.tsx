import Image from "next/image";

const FeaturedServices = () => {
  const services = [
    {
      icon: "/icons/service-1.svg",
      title: "Doanh Nghiệp & Đầu Tư",
    },
    {
      icon: "/icons/service-2.svg",
      title: "Pháp Lý Bất Động Sản",
    },
    {
      icon: "/icons/service-3.svg",
      title: "Thuế - Bảo Hiểm",
    },
    {
      icon: "/icons/service-4.svg",
      title: "Sở Hữu Trí Tuệ",
    },
    {
      icon: "/icons/service-5.svg",
      title: "Pháp Lý Chứng Khoán",
    },
    {
      icon: "/icons/service-6.svg",
      title: "Tư Vấn Giấy Phép",
    },
  ];

  return (
    <section className="bg-gray-900 py-12">
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
              className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center text-center transform transition-transform hover:scale-105"
            >
              {/* Biểu Tượng */}
              <div className="w-16 h-16 mb-4">
                <Image
                  src={service.icon}
                  alt={service.title}
                  width={64}
                  height={64}
                  className="object-contain"
                />
              </div>
              {/* Tiêu Đề */}
              <h3 className="text-lg font-semibold text-gray-800">
                {service.title}
              </h3>
            </div>
          ))}
        </div>

        {/* Nút "Xem Thêm" */}
        <div className="text-center mt-8">
          <button className="px-6 py-2 bg-white text-gray-800 font-medium rounded-full shadow hover:bg-gray-200 transition">
            Xem Thêm
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedServices;
