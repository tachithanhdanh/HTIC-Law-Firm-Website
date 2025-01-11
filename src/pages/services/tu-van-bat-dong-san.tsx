import Image from "next/image";
import { getStaticImagePath } from "@/utils";
import ServiceSidebar from "@/components/services/ServiceSideBar";
import ServiceDetailsHeader from "@/components/services/ServiceDetailsHeader";

const IntellectualPropertyPage = () => {
  return (
    <div>
      <ServiceDetailsHeader title="Tư vấn pháp luật về bất động sản" />
      <div className="flex gap-8 max-w-7xl py-5">
        <ServiceSidebar />

        <main className="flex-1">
          <h1 className="text-2xl font-bold text-gray-800 mb-6">
            TƯ VẤN BẤT ĐỘNG SẢN
          </h1>

          <p className="text-gray-600 mb-8">
            Chúng tôi đã cung cấp dịch vụ cho nhiều cá nhân, doanh nghiệp trong
            quá trình triển khai các dự án đầu tư, xây dựng bất động sản và được
            khách hàng đánh giá cao. Trong đó có các dự án lớn. Bên cạnh đó,
            chúng tôi cũng tư vấn về chính sách và quy định của pháp luật Việt
            Nam liên quan đến bất động sản và xây dựng.
          </p>

          <div className="mb-12">
            <div className="flex gap-8">
              <div className="relative mt-5">
                <Image
                  src={getStaticImagePath(
                    "/services/tu-van-bat-dong-san/1.png"
                  )}
                  alt="Dịch vụ sở hữu trí tuệ"
                  width={500}
                  height={400}
                />
              </div>

              <div className="space-y-4">
                <h2 className="text-xl font-bold text-gray-800 mb-6">
                  DỊCH VỤ CỦA CHÚNG TÔI BAO GỒM
                </h2>
                <div className="text-gray-600">
                  <p className="mb-2">
                    – Hỗ trợ phê duyệt và cấp phép cho các dự án bất động sản và
                    xây dựng.
                  </p>
                  <p className="mb-2">
                    – Tư vấn lập hồ sơ mời thầu, tuyển chọn nhà thầu, và ký kết
                    hợp đồng với nhà thầu.
                  </p>
                  <p className="mb-2">
                    – Soạn thảo hợp đồng về đầu tư, tài trợ vốn, thi công,
                    chuyển nhượng, và bảo hiểm.
                  </p>
                  <p className="mb-2">
                    – Tư vấn cấu trúc pháp lý cho dự án bất động sản và xây
                    dựng.
                  </p>
                  <p className="mb-2">
                    – Xử lý các vấn đề pháp lý phát sinh trong quá trình triển
                    khai dự án.
                  </p>
                  <p className="mb-2">
                    – Đại diện khách hàng và giải quyết tranh chấp liên quan đến
                    dự án bất động sản và xây dựng.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Phần lợi ích */}
          <div>
            <div className="flex gap-8">
              <div className="space-y-4">
                <h2 className="text-xl font-bold text-gray-800 mb-6">
                  TẠI SAO PHẢI CHỌN CHÚNG TÔI
                </h2>
                <div className="text-gray-600">
                  <p className="flex items-center space-x-2 mb-3">
                    <span className="text-blue-500">✓</span>
                    <span>Tư vấn chuyên sâu và chính xác</span>
                  </p>
                  <p className="flex items-center space-x-2 mb-3">
                    <span className="text-blue-500">✓</span>
                    <span>Tiết kiệm thời gian, làm việc hiệu quả</span>
                  </p>
                  <p className="flex items-center space-x-2 mb-3">
                    <span className="text-blue-500">✓</span>
                    <span>Đảm bảo tuân thủ theo quy định Pháp luật</span>
                  </p>
                  <p className="flex items-center space-x-2 mb-3">
                    <span className="text-blue-500">✓</span>
                    <span>
                      Hỗ trợ toàn diện trong quy trình phê duyệt, cấp phép
                    </span>
                  </p>
                  <p className="flex items-center space-x-2 mb-3">
                    <span className="text-blue-500">✓</span>
                    <span>Soạn thảo Hợp đồng chất lượng</span>
                  </p>
                  <p className="flex items-center space-x-2 mb-3">
                    <span className="text-blue-500">✓</span>
                    <span>Giải quyết tranh chấp hiệu quả</span>
                  </p>
                </div>
              </div>

              <div className="relative">
                <Image
                  src={getStaticImagePath(
                    "/services/tu-van-bat-dong-san/2.png"
                  )}
                  alt="Lợi ích dịch vụ"
                  width={500}
                  height={400}
                />
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default IntellectualPropertyPage;
