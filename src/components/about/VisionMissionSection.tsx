import Image from "next/image";
import { getStaticImagePath } from "@/utils";
import IntegrityCard from "./IntegrityCard";

const VisionMissionSection = () => {
  const integrityCardData = [
    {
      title: "Sự Trung Thực",
      subtitle: "(Honesty)",
      description: [
        {
          text: "Tạo dựng hình ảnh luật sư có tâm, có tầm, có giá trị là chỗ dựa cho mọi tổ chức, cá nhân có nhu cầu cần đến sự hỗ trợ pháp lý.",
          isBold: false,
        },
      ],
      icon: "/about/su-trung-thuc.svg",
    },
    {
      title: "Sự Tin Cậy",
      subtitle: "(Trust)",
      description: [
        {
          text: "Để đạt được sự tin cậy, tín nhiệm từ khách hàng là mục đích mà mỗi thành viên của ",
          isBold: false,
        },
        { text: "HTIC", isBold: true },
        {
          text: " luôn nỗ lực hướng tới. Chúng tôi phải luôn cố gắng để hoàn thiện bản thân, trau dồi kiến thức và kinh nghiệm, nhằm hướng tới một hình ảnh đẹp, tạo ra giá trị tích cực khi cung cấp dịch vụ cho khách hàng.",
          isBold: false,
        },
      ],
      icon: "/about/su-tin-cay.svg",
    },
    {
      title: "Sự Chính Trực",
      subtitle: "(Integrity)",
      description: [
        {
          text: "Là luật sư yếu tố chính trực luôn đứng hàng đầu, chúng tôi đưa ra tiêu chí này để khẳng định với khách hàng rằng sẽ ”",
          isBold: false,
        },
        {
          text: '"Không bao giờ vì một cám dỗ nào khác mà quên đi lợi ích của khách hàng."',
          isBold: true,
        },
      ],
      icon: "/about/su-chinh-truc.svg",
    },
    {
      title: "Sự Cẩn Trọng",
      subtitle: "(Carefulness)",
      description: [
        {
          text: "Đây là giá trị bên trong của mỗi cá nhân người luật sư và nhân viên ",
          isBold: false,
        },
        {
          text: "HTIC",
          isBold: true,
        },
        {
          text: ". Chúng tôi đưa ra sự cẩn trọng để đảm bảo với khách hàng rằng mỗi lời tư vấn & giải pháp chúng tôi đưa ra đều được chắt lọc kỹ lưỡng để mang lại...",
          isBold: false,
        },
      ],
      icon: "/about/su-can-trong.svg",
    },
  ];

  return (
    <section className="bg-gray-100 py-12">
      <div className="max-w-7xl mx-auto bg-white rounded-lg shadow-md px-9 pb-16 pt-11">
        {/* Section Title */}
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
          Tầm Nhìn Và Sứ Mệnh Của Chúng Tôi
        </h2>

        {/* Vision and Mission */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <div className="bg-blue-50 rounded-lg p-6 flex items-center space-x-4">
            {/* Image Section */}
            <div className="flex-shrink-0">
              <Image
                src={getStaticImagePath("/about/tam-nhin.svg")}
                alt="Tầm Nhìn"
                width={80}
                height={80}
                className="object-contain"
              />
              <h3 className="text-lg font-medium font-roboto">Tầm Nhìn</h3>
            </div>

            {/* Vertical Line */}
            <div className="w-px h-full bg-gray-300 mx-4"></div>

            {/* Text Section */}
            <div>
              <p className="uppercase font-bold font-roboto text-sm">
                Trở thành một tổ chức hành nghề luật sư hàng đầu tại Việt Nam.
              </p>
              <p className="text-gray-700 font-roboto text-sm">
                Tạo dựng hình ảnh luật sư có tâm, có tầm, có giá trị là chỗ dựa
                cho mọi tổ chức, cá nhân có nhu cầu cần đến sự hỗ trợ pháp lý.
              </p>
            </div>
          </div>

          <div className="bg-blue-50 rounded-lg p-6 flex items-center space-x-4">
            {/* Image Section */}
            <div className="flex-shrink-0">
              <Image
                src={getStaticImagePath("/about/su-menh.svg")}
                alt="Sứ Mệnh"
                width={80}
                height={80}
                className="object-contain"
              />
              <h3 className="text-lg font-medium font-roboto">Sứ Mệnh</h3>
            </div>

            {/* Vertical Line */}
            <div className="w-px h-full bg-gray-300 mx-4"></div>

            {/* Text Section */}
            <div>
              <p className="text-gray-700 uppercase text-sm font-semibold font-roboto">
                Chúng tôi lấy sứ mệnh: <br />
              </p>
              <p className="font-roboto">
                <span className="text-aboutUsTextColor text-lg uppercase font-semibold">
                  “Phụng sự cộng lý - bảo vệ lợi ích khách hàng.”
                </span>
                <br />
                Làm sự định hướng, kim chỉ nam cho hành động của đội ngũ{" "}
                <strong>HTIC</strong>.
              </p>
            </div>
          </div>
        </div>

        {/* Core Values Section */}
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-4">
          Giá Trị Cốt Lõi Của Chúng Tôi
        </h2>
        <div className="text-center mb-12 border-l-8 border-aboutUsIntrodctionBorderColor pl-4 bg-aboutUsIntrodctionBackgroundColor pt-4 pb-3">
          <p className="text-aboutUsTextColor font-semibold text-lg uppercase m-0">
            “Honesty - Trust - Integrity - Carefulness”
          </p>
          <p className="text-gray-700">
            Cũng chính là slogan của{" "}
            <span className="font-semibold">HTIC LAW FIRM</span>.
          </p>
        </div>

        {/* Core Values */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {integrityCardData.map((value, index) =>
            IntegrityCard({ ...value, index })
          )}
        </div>
      </div>
    </section>
  );
};

export default VisionMissionSection;
