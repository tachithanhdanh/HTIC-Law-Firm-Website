import Image from "next/image";
import { getStaticImagePath } from "@/utils";

const lawyers = [
  {
    name: "L.S.Trần Quốc Hưng",
    position: "Luật sư Điều hành",
    image: "/about/tran-quoc-hung.png",
    social: [
      { platform: "facebook", link: "#", icon: "/ic-facebook.svg" },
      { platform: "instagram", link: "#", icon: "/ic-instagram.svg" },
      { platform: "linkedin", link: "#", icon: "/ic-linkedin.svg" },
    ],
  },
  {
    name: "L.S.Hoàng Giang Tử Lăng",
    position: "Luật sư Sáng lập",
    image: "/about/hoang-giang-tu-lang.png",
    social: [
      { platform: "facebook", link: "#", icon: "/ic-facebook.svg" },
      { platform: "instagram", link: "#", icon: "/ic-instagram.svg" },
      { platform: "linkedin", link: "#", icon: "/ic-linkedin.svg" },
    ],
  },
  {
    name: "L.S.Dương Anh Khoa",
    position: "Luật sư Tố tụng",
    image: "/about/duong-anh-khoa.png",
    social: [
      { platform: "facebook", link: "#", icon: "/ic-facebook.svg" },
      { platform: "instagram", link: "#", icon: "/ic-instagram.svg" },
      { platform: "linkedin", link: "#", icon: "/ic-linkedin.svg" },
    ],
  },
  {
    name: "L.S.Đồng Quốc Duy",
    position: "Luật sư Tư vấn Doanh nghiệp",
    image: "/about/dong-quoc-duy.png",
    social: [
      { platform: "facebook", link: "#", icon: "/ic-facebook.svg" },
      { platform: "instagram", link: "#", icon: "/ic-instagram.svg" },
      { platform: "linkedin", link: "#", icon: "/ic-linkedin.svg" },
    ],
  },
];

const TeamSection = () => {
  return (
    <section className="py-12 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Title */}
        <h2 className="text-center text-3xl font-roboto font-bold text-gray-800 mb-8">
          Đội Ngũ Luật Sư
        </h2>

        {/* Team Cards */}
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-9 py-9 bg-transparent bg-cover bg-center"
          style={{
            backgroundImage: `url(${getStaticImagePath(
              "/about/team-background.png"
            )})`,
          }}
        >
          {lawyers.map((lawyer, index) => (
            <div
              key={index}
              className="relative bg-white shadow-lg rounded-lg overflow-hidden"
            >
              {/* Image Section */}
              <div className="p-6 text-center bg-white">
                <Image
                  src={getStaticImagePath(lawyer.image)}
                  alt={lawyer.name}
                  width={200}
                  height={200}
                  className="rounded-full mx-auto object-cover"
                />
              </div>
              {/* Content Section */}
              <div className="p-6 text-center">
                <h3 className="text-lg font-bold text-gray-800">
                  {lawyer.name}
                </h3>
                <p className="text-sm text-gray-600">{lawyer.position}</p>
                {/* Social Links */}
                <div className="flex justify-center space-x-4 mt-4">
                  {lawyer.social.map((social, idx) => (
                    <a
                      key={idx}
                      href={social.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-blue-600 transition"
                    >
                      <Image
                        src={getStaticImagePath(social.icon)}
                        alt={social.platform}
                        width={24}
                        height={24}
                      />
                    </a>
                  ))}
                </div>
              </div>
              {/* Decorative Corners */}
              <div className="absolute bottom-0 left-0 w-8 h-8 bg-blue-200"></div>
              <div className="absolute top-0 right-0 w-8 h-8 bg-blue-200"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
