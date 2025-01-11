import Image from "next/image";
import { getStaticImagePath } from "@/utils";
import ServiceSidebar from "@/components/services/ServiceSideBar";
import ServiceDetailsHeader from "@/components/services/ServiceDetailsHeader";

const IntellectualPropertyPage = () => {
  return (
    <div>
      <ServiceDetailsHeader title="Tư Vấn Doanh Nghiệp" />
      <div className="flex gap-8 max-w-7xl py-5">
        <ServiceSidebar />

        <main className="flex-1">
          <h1 className="text-2xl font-bold text-gray-800 mb-6">
            TƯ VẤN DOANH NGHIỆP
          </h1>

          <p className="text-gray-600 mb-8">
            HTIC là tổ chức hành nghề luật sư đi tiên phong trong việc cung cấp
            dịch vụ pháp lý doanh nghiệp chuyên nghiệp. Chúng tôi có nhiều năm
            kinh nghiệm trong lĩnh vực này với dịch vụ đã cung cấp cho hàng trăm
            doanh nghiệp lớn nhỏ ở khắp Việt Nam. Đối với HTIC không chỉ là một
            đơn vị tư vấn mà chúng tôi còn đồng hành cùng sự phát triển của
            doanh nghiệp.
          </p>

          <div className="mb-12">
            <div className="flex gap-8">
              <div className="relative mt-5">
                <Image
                  src={getStaticImagePath("/services/so-huu-tri-tue/1.png")}
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
                    – Tư vấn thành lập doanh nghiệp, chi nhánh, văn phòng đại
                    diện
                  </p>
                  <p className="mb-2">
                    – Tư vấn về thay đổi nội dung đăng ký, chuyển đổi doanh
                    nghiệp
                  </p>
                  <p className="mb-2">
                    – Tư vấn tổ chức Đại hội đồng cổ đông, họp Hội đồng Thành
                    viên, Hội đồng Quản trị và thông qua các Quyết định trong
                    doanh nghiệp
                  </p>
                  <p className="mb-2">
                    – Tư vấn soạn thảo, rà soát các văn bản, điều lệ công ty
                  </p>
                  <p className="mb-2">
                    – Tư vấn soạn thảo và hoàn thiện các quy chế quản trị nội bộ
                  </p>
                  <p className="mb-2">
                    – Tư vấn các báo cáo định kỳ tháng/quý/năm của doanh nghiệp
                    cho cơ quan quản lý nhà nước trong quá trình hoạt động doanh
                    nghiệp
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
                  src={getStaticImagePath("/services/so-huu-tri-tue/2.png")}
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
