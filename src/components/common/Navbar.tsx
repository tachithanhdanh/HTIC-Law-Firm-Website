import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { getStaticImagePath } from "@/utils";

const Navbar = () => {
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
          <Link href="/services" className="hover:underline">
            Dịch vụ
          </Link>
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
