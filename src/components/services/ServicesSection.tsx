import Image from "next/image";
import { getStaticImagePath } from "@/utils";

const ServicesSection = () => {
  const services = [
    {
      icon: "/index/tu-van-phap-ly.svg",
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
    <section className="py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex gap-5">
          <div className="h-10 w-1 bg-blue-500 rounded-3xl"></div>
          <h2 className="text-3xl font-bold text-gray-800 mb-8">
            Lĩnh Vực Hoạt Động
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white border-gray-200 border-2 rounded-full shadow-lg py-8 px-5 flex flex-col items-center text-center"
            >
              <div className="w-20 h-20 mb-2">
                <Image
                  src={getStaticImagePath(service.icon)}
                  alt={service.title}
                  width={96}
                  height={96}
                  className="object-contain"
                />
              </div>
              <h3 className="text-l font-semibold text-gray-800 mb">
                {service.title}
              </h3>
              <p className="text-gray-600 text-xs font-medium">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
