import Image from "next/image";

const ServicesSection = () => {
  const services = [
    {
      icon: "/index/tu-van-phap-ly.svg", // Replace with actual icon paths
      title: "Tư Vấn Pháp Lý",
      description:
        "Cung cấp dịch vụ pháp lý tư vấn pháp luật, đưa giải pháp áp dụng pháp luật vào thực tiễn cho mọi tổ chức, cá nhân có nhu cầu.",
    },
    {
      icon: "/index/luat-su-dai-dien.svg",
      title: "Luật Sư Đại Diện",
      description:
        "Luật sư đại diện ngoài tố tụng cho khách hàng để giúp khách hàng xử lý mọi công việc có liên quan đến các vấn đề pháp lý.",
    },
    {
      icon: "/index/to-tung.svg",
      title: "Tố Tụng",
      description:
        "Tham gia đại diện cho khách hàng để bảo vệ quyền và lợi ích hợp pháp của khách hàng tại toà án hoặc trung tâm trọng tài.",
    },
    {
      icon: "/index/luat-su-rieng.svg",
      title: "Luật Sư Riêng",
      description:
        "Dịch vụ luật sư tư vấn thường xuyên cho khách hàng. Chúng tôi sẽ đồng hành cùng khách hàng trong quá trình hoạt động.",
    },
  ];

  return (
    <section className="bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
          Lĩnh Vực Hoạt Động
          <span className="block h-[2px] w-11/12 bg-gray-300 mx-auto mt-2"></span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-20">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-full shadow-lg p-8 flex flex-col items-center text-center min-w-[320px]"
            >
              <div className="w-24 h-24 mb-4">
                <Image
                  src={service.icon}
                  alt={service.title}
                  width={96}
                  height={96}
                  className="object-contain"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {service.title}
              </h3>
              <p className="text-gray-600 text-base">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
