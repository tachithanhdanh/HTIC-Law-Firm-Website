import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { getStaticImagePath } from "@/utils";

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="bg-gray-100">
      <div className="container mx-auto px-4 py-2 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <Image
            src={getStaticImagePath("/htic-law-logo.svg")} // Path relative to the public folder
            alt="HTIC Law Firm Logo"
            width={180}
            height={60}
            className="mr-2"
          />
          {/* <span className="font-bold text-lg">HTIC LAW FIRM</span> */}
        </div>

        {/* Contact Info */}
        <div className="hidden md:flex items-center space-x-6 text-sm">
          <div className="flex items-center justify-center">
            <Image
              src={getStaticImagePath("/ic-phone.svg")}
              alt="Phone Icon"
              width={20}
              height={20}
              className="mr-2"
            />
            <span className="font-semibold text-base">0968993220</span>
          </div>
          {/* Vertical Line */}
          <div className="h-6 border-l border-gray-500"></div>
          <div className="flex items-center">
            <Image
              src={getStaticImagePath("/ic-mail.svg")}
              alt="Email Icon"
              width={20}
              height={20}
              className="mr-2"
            />
            <span className="font-semibold text-base">luatsu@hticlaw.vn</span>
          </div>
        </div>

        {/* Language Options */}
        <div className="flex items-center space-x-4">
          <button className="text-base font-semibold flex items-center">
            <Image
              src={getStaticImagePath("/vietnam-flag.svg")}
              alt="Vietnamese Flag"
              width={20}
              height={13}
              className="mr-1"
            />
            Vietnamese
          </button>
          {/* Vertical Line */}
          <div className="h-6 border-l border-gray-500"></div>
          <button className="text-base font-semibold flex items-center">
            <Image
              src={getStaticImagePath("/japan-flag.svg")}
              alt="Japanese Flag"
              width={20}
              height={13}
              className="mr-1"
            />
            Japan
          </button>
        </div>
      </div>

      {/* Navbar Links */}
      <div className="bg-navbarColor text-white">
        <div className="container mx-auto px-4 flex justify-between py-3 uppercase text-sm">
          <Link href="/" className="hover:underline">
            Trang Chủ
          </Link>
          <Link href="/about" className="hover:underline">
            Giới Thiệu
          </Link>
          {/* Dropdown Section for Dịch Vụ */}
          <div className="relative z-50">
            <button
              onClick={toggleDropdown}
              className="hover:underline flex items-center space-x-1"
            >
              <span className="uppercase">Dịch Vụ</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`h-4 w-4 transform transition-transform ${
                  isDropdownOpen ? "rotate-180" : ""
                }`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            {isDropdownOpen && (
              <div className="absolute left-0 mt-2 w-64 bg-white text-black shadow-lg rounded normal-case opacity-75">
                <Link
                  href="/services/business-investment"
                  className="block px-4 py-2 hover:bg-blue-100"
                >
                  Doanh nghiệp - Đầu tư
                </Link>
                <Link
                  href="/services/real-estate"
                  className="block px-4 py-2 hover:bg-blue-100"
                >
                  Pháp lý bất động sản
                </Link>
                <Link
                  href="/services/tax-insurance"
                  className="block px-4 py-2 hover:bg-blue-100"
                >
                  Thuế - Bảo hiểm
                </Link>
                <Link
                  href="/services/intellectual-property"
                  className="block px-4 py-2 hover:bg-blue-100"
                >
                  Sở Hữu Trí Tuệ
                </Link>
                <Link
                  href="/services/securities-law"
                  className="block px-4 py-2 hover:bg-blue-100"
                >
                  Pháp Lý Chứng Khoán
                </Link>
                <Link
                  href="/services/administrative-procedures"
                  className="block px-4 py-2 hover:bg-blue-100"
                >
                  Thủ Tục Hành Chính
                </Link>
                <Link
                  href="/services/online-legal-consultation"
                  className="block px-4 py-2 hover:bg-blue-100"
                >
                  Tư Vấn Pháp Luật Trực Tuyến
                </Link>
                <Link
                  href="/services/permit-consultation"
                  className="block px-4 py-2 hover:bg-blue-100"
                >
                  Tư Vấn Giấy Phép
                </Link>
                <Link
                  href="/services/general-consultation"
                  className="block px-4 py-2 hover:bg-blue-100"
                >
                  Tư Vấn Thường Xuyên
                </Link>
              </div>
            )}
          </div>
          <Link href="/projects" className="hover:underline">
            Dự Án
          </Link>
          <Link href="/news" className="hover:underline">
            Tin Tức
          </Link>
          <Link href="/consult" className="hover:underline">
            Tư Vấn Pháp Lý
          </Link>
          <Link href="/japanese" className="hover:underline">
            Góc Người Nhật Tại Việt Nam
          </Link>
          <Link href="/contact" className="hover:underline">
            Liên Hệ
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
