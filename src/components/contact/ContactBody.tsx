import React from "react";
import Image from "next/image";
import { getStaticImagePath } from "@/utils";

const ContactBody = () => {
  return (
    <>
      <div className="bg-gray-100 py-12 px-9 lg:px-16">
        <div className="bg-white rounded-lg shadow-lg p-9 space-y-12">
          <section>
            {/* Contact Information Section */}
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-10 border-l-4 pl-2 border-blue-600">
                Thông Tin Liên Hệ
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
                <div className="md:col-span-6 flex justify-center items-center">
                  <Image
                    src={getStaticImagePath("/contact/contact-info.png")}
                    alt="Contact Info"
                    width={550}
                    height={150}
                    className="object-cover rounded-lg"
                  />
                </div>
                <div className="md:col-span-6">
                  <p className="text-gray-700 font-semibold my-0">
                    CÔNG TY LUẬT TNHH HTIC
                  </p>
                  <p className="text-gray-600 text-sm my-0">
                    <strong>Địa Chỉ:</strong> 44M Hoàng Quốc Việt, Phú Mỹ, Quận
                    7, Thành Phố Hồ Chí Minh
                  </p>
                  <p className="text-gray-600 text-sm my-0">
                    <strong>Hotline:</strong> 0968 993 220
                  </p>
                  <p className="text-gray-600 text-sm my-0">
                    <strong>Điện Thoại:</strong> (028) 6277 8226
                  </p>
                  <p className="text-gray-600 text-sm my-0">
                    <strong>Email:</strong> luatsu@hticlaw.vn
                  </p>
                  <p className="text-gray-600 text-sm my-0">
                    <strong>Website:</strong> www.hticlaw.vn
                  </p>
                </div>
              </div>
            </div>
          </section>
          <section>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              {/* Contact Form Section */}
              <div className="lg:col-span-6">
                <h2 className="text-3xl font-bold text-gray-800 border-l-4 pl-2 border-blue-500 mb-9">
                  Liên Hệ Theo Form
                </h2>
                <form className="space-y-4">
                  <input
                    type="text"
                    placeholder="Họ Tên"
                    className="w-full p-3 border border-gray-300 rounded-lg"
                  />
                  <input
                    type="text"
                    placeholder="Địa Chỉ"
                    className="w-full p-3 border border-gray-300 rounded-lg"
                  />
                  <input
                    type="email"
                    placeholder="Email"
                    className="w-full p-3 border border-gray-300 rounded-lg"
                  />
                  <input
                    type="text"
                    placeholder="Số Điện Thoại"
                    className="w-full p-3 border border-gray-300 rounded-lg"
                  />
                  <textarea
                    placeholder="Nội Dung"
                    rows={4}
                    className="w-full p-3 border border-gray-300 rounded-lg"
                  ></textarea>
                  <div className="flex items-center space-x-4">
                    {/* Input for captcha */}
                    <div className="relative w-3/4">
                      <input
                        type="text"
                        placeholder="Nhập Mã Bảo Vệ"
                        className="w-full p-3 border border-gray-300 rounded-lg"
                      />
                      <span className="absolute right-3 top-1/2 transform -translate-y-1/2">
                        <Image
                          src={getStaticImagePath("/contact/captcha-image.png")}
                          alt="Captcha"
                          width={50} // Set the appropriate width
                          height={30} // Set the appropriate height
                          className="object-contain"
                        />
                      </span>
                    </div>

                    {/* Submit button */}
                    <button
                      type="submit"
                      className="w-1/4 bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700"
                    >
                      Gửi Đi
                    </button>
                  </div>
                </form>
              </div>

              {/* Map Section */}
              <div className="lg:col-span-6">
                <h2 className="text-3xl font-bold text-gray-800 border-l-4 pl-2 border-blue-500 mb-9">
                  Liên Hệ Theo Bản Đồ
                </h2>
                <div className="relative w-full pb-[56.25%] rounded-lg overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.710247774776!2d106.700423815348!3d10.762622492324417!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTDCsDQ1JzQ1LjQiTiAxMDbCsDQyJzAzLjAiRQ!5e0!3m2!1sen!2s!4v1618354838493!5m2!1sen!2s"
                    allowFullScreen={true}
                    loading="lazy"
                    className="absolute top-0 left-0 w-full h-full border-0"
                  ></iframe>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default ContactBody;
