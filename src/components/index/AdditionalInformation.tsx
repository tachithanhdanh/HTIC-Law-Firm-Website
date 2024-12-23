import Image from "next/image";
import { getStaticImagePath } from "@/utils";

const AdditionalInformation = () => {
  return (
    <section
      id="additional-information"
      className="py-12 border-t border-b border-gray-300"
    >
      <div className="max-w-7xl mx-auto px-4 grid  grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left Column */}
        <div className="lg:col-span-6">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-2xl font-bold text-gray-800">Tư Vấn Pháp Lý</h3>
            <a
              href="#"
              className="text-blue-500 hover:underline flex items-center"
            >
              Xem thêm
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-4 h-4 ml-1"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </a>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {/* Left Column Content */}
            <div className="md:col-span-2 flex items-center justify-center">
              <Image
                src={getStaticImagePath("/index/tu-van-phap-ly-news.png")}
                alt="Tư Vấn Pháp Lý"
                width={225}
                height={160}
                className="rounded-lg object-cover"
              />
            </div>
            <div className="md:col-span-3">
              <p className="text-sm text-gray-500">18/05/2022</p>
              <h4 className="text-lg font-semibold text-gray-800">
                Các khoản chi phí được trừ và không được trừ khi tính thuế tndn
                2021
              </h4>
              <p className="text-sm text-gray-600 mt-2">
                Thông tin pháp lý tổng hợp về các khoản được khấu trừ và không
                được khấu trừ theo quy định pháp luật hiện hành (cập nhật đến
                thời điểm tháng 7/2021).
              </p>
            </div>
          </div>
        </div>

        {/* Vertical Divider */}
        <div className="hidden lg:block lg:col-span-1 border-l border-gray-300 h-full"></div>

        {/* Right Column */}
        <div className="lg:col-span-5">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-2xl font-bold text-gray-800">
              Góc Doanh Nghiệp Nhật Bản
            </h3>
            <a
              href="#"
              className="text-blue-500 hover:underline flex items-center"
            >
              Xem thêm
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-4 h-4 ml-1"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </a>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-2">
            {/* Right Column Content */}
            <div className="md:col-span-2 flex items-center justify-center">
              <Image
                src={getStaticImagePath(
                  "/index/tu-van-doanh-nghiep-nhat-ban.png"
                )}
                alt="Góc Doanh Nghiệp Nhật Bản"
                width={225}
                height={160}
                className="rounded-lg object-cover"
              />
            </div>
            <div className="md:col-span-3">
              <p className="text-sm text-gray-500">18/05/2022</p>
              <h4 className="text-lg font-semibold text-gray-800">
                Tư Vấn Cho Doanh Nghiệp Nhật Bản
              </h4>
              <p className="text-sm text-gray-600 mt-2">
                Thông tin pháp lý tổng hợp về các khoản được khấu trừ và không
                được khấu trừ theo quy định pháp luật hiện hành (cập nhật đến
                thời điểm tháng 7/2021).
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdditionalInformation;
