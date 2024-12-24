import Image from "next/image";
import { getStaticImagePath } from "@/utils";
import Link from "next/link";

const Footer = () => {
  return (
    <footer
      className="text-white py-8 bg-backgroundFooterColor bg-cover bg-center filter-none"
      style={{
        backgroundImage: `url('${getStaticImagePath(
          "/background-footer.png"
        )}')`,
      }}
    >
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-6">
        {/* Logo and Contact Info */}
        <div>
          <Image
            src={getStaticImagePath("/htic-law-transparent-logo.svg")}
            alt="HTIC Law Firm Logo"
            width={250}
            height={70}
          />
          <p className="mt-4 uppercase font-roboto">
            <strong>CÔNG TY LUẬT TNHH HTIC</strong>
          </p>
          <p className="font-roboto text-sm">
            <strong>Địa chỉ:</strong> 44M Hoàng Quốc Việt, Phú Mỹ, Quận 7, Thành
            phố Hồ Chí Minh
          </p>
          <p className="font-roboto text-sm">
            <strong>Điện thoại:</strong> (028) 62 773 226
          </p>
          <p className="font-roboto text-sm">
            <strong>Hotline/Zalo:</strong> 0968 993 220
          </p>
          <p className="font-roboto text-sm">
            <strong>Email:</strong> contact@hticlaw.vn
          </p>
        </div>

        {/* Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4 uppercase">LIÊN KẾT</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-4">
            {/* First Column */}
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="hover:text-blue-400 transition">
                  Giới thiệu
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="hover:text-blue-400 transition"
                >
                  Dịch vụ
                </Link>
              </li>
              <li>
                <Link
                  href="/consult"
                  className="hover:text-blue-400 transition"
                >
                  Tư Vấn Pháp Lý
                </Link>
              </li>
            </ul>
            {/* Second Column */}
            <ul className="space-y-2">
              <li>
                <Link
                  href="/contact"
                  className="hover:text-blue-400 transition"
                >
                  Liên Hệ
                </Link>
              </li>
              <li>
                <Link href="/news" className="hover:text-blue-400 transition">
                  Tin Tức
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Free Consultation Form */}
        <div>
          <h3 className="text-base font-semibold mb-4 uppercase">
            ĐĂNG KÝ NHẬN TƯ VẤN MIỄN PHÍ
          </h3>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Họ tên"
              className="w-full p-2 border border-gray-300 rounded-lg text-black"
            />
            <div className="grid grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Điện thoại"
                className="w-full p-2 border border-gray-300 rounded-lg text-black"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full p-2 border border-gray-300 rounded-lg text-black"
              />
            </div>
            <textarea
              placeholder="Nội Dung"
              rows={3}
              className="w-full p-2 border border-gray-300 rounded-lg text-black"
            ></textarea>
            <button
              type="submit"
              className="w-full bg-red-600 text-white py-2 px-4 rounded-lg hover:bg-red-700 transition"
            >
              Đăng Ký Ngay
            </button>
          </form>
        </div>

        {/* Map */}
        <div>
          <h3 className="text-base uppercase font-semibold mb-4">
            BẢN ĐỒ ĐƯỜNG ĐI
          </h3>
          <div className="w-full h-48">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.710247774776!2d106.700423815348!3d10.762622492324417!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTDCsDQ1JzQ1LjQiTiAxMDbCsDQyJzAzLjAiRQ!5e0!3m2!1sen!2s!4v1618354838493!5m2!1sen!2s"
              width="100%"
              height="100%"
              allowFullScreen={undefined}
              loading="lazy"
              className="rounded-lg border border-gray-300"
            ></iframe>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
