import Image from "next/image";
import { getStaticImagePath } from "@/utils";
import ServiceSidebar from "@/components/services/ServiceSideBar";
import ServiceDetailsHeader from "@/components/services/ServiceDetailsHeader";

const TaxAccountantPage = () => {
  return (
    <div>
      <ServiceDetailsHeader title="Tư Vấn Pháp Luật Về Thuế - Kế Toán" />
      <div className="flex gap-8 max-w-7xl py-5">
        <ServiceSidebar />

        <main className="flex-1">
          <h1 className="text-2xl font-bold text-gray-800 mb-6">
            TƯ VẤN THUẾ - KẾ TOÁN
          </h1>

          <p className="text-gray-600 mb-8">
            Là một dịch vụ nằm trong nhóm dịch vụ hỗ trợ doanh nghiệp của HTIC,
            chúng tôi có đội ngũ các kế toán trưởng, các chuyên gia về thuế và
            các luật sư của Chúng tôi có nhiều năm kinh nghiệm trong việc hỗ trợ
            khách hàng tạo lập các giải pháp hiệu quả về thuế – kế toán cho các
            giao dịch và hoạt động kinh doanh trên cơ sở tuân thủ quy định của
            pháp luật.
          </p>
          <div className="grid md:grid-cols-2 gap-8 mb-5">
            <Image
              src={getStaticImagePath("/services/tu-van-thue-ke-toan/1.png")}
              alt="Dịch vụ tư vấn thuế kế toán"
              width={400}
              height={300}
            />
            <Image
              src={getStaticImagePath("/services/tu-van-thue-ke-toan/2.png")}
              alt="Dịch vụ tư vấn thuế kế toán"
              width={400}
              height={300}
            />
          </div>

          <div className="mb-12">
            <h2 className="text-xl font-bold text-gray-800 mb-6">
              DỊCH VỤ CỦA CHÚNG TÔI BAO GỒM
            </h2>

            <div className="gap-8">
              <div className="space-y-4">
                <div className="text-gray-600">
                  <p className="mb-2">
                    – Tư vấn chung các quy định của pháp luật về thuế, kế toán,
                    các chính sách và ưu đãi về thuế;
                  </p>
                  <p className="mb-2">
                    – Đưa ra giải pháp tối ưu về thuế, kế toán cho các giao dịch
                    dự kiến của khách hàng;
                  </p>
                  <p className="mb-2">
                    – Tư vấn, hướng dẫn lập hồ sơ kê khai thuế, hưởng mức thuế
                    ưu đãi, miễn thuế, giảm thuế, hoàn thuế;
                  </p>
                  <p className="mb-2">
                    – Đại diện khách hàng thực hiện các thủ tục về thuế, kế
                    toán;
                  </p>
                  <p className="mb-2">
                    – Kiểm tra hóa đơn, chứng từ; hạch toán các nghiệp vụ kinh
                    tế phát sinh;
                  </p>
                  <p className="mb-2">
                    – Tư vấn và đại diện cho khách hàng làm việc với cơ quan
                    thuế để giải quyết các vấn đề phát sinh;
                  </p>
                  <p className="mb-2">
                    – Các công việc khác tùy vào thực tế hồ sơ của khách hàng
                    hoặc theo yêu cầu của cơ quan nhà nước.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Phần lợi ích */}
          <div>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h2 className="text-xl font-bold text-gray-800 mb-6">
                  LỢI ÍCH KHI SỬ DỤNG DỊCH VỤ
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
                  width={400}
                  height={300}
                />
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default TaxAccountantPage;
