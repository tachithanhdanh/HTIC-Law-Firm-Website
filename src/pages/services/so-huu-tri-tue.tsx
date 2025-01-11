import Image from "next/image";
import { getStaticImagePath } from "@/utils";
import ServiceSidebar from "@/components/services/ServiceSideBar";
import ServiceDetailsHeader from "@/components/services/ServiceDetailsHeader";

const IntellectualPropertyPage = () => {
  return (
    <div>
      <ServiceDetailsHeader title="Sở Hữu Trí Tuệ" />
      <div className="flex gap-8 max-w-7xl py-5">
        <ServiceSidebar />

        <main className="flex-1">
          <h1 className="text-2xl font-bold text-gray-800 mb-6">
            TƯ VẤN SỞ HỮU TRÍ TUỆ
          </h1>

          <p className="text-gray-600 mb-8">
            HTIC cung cấp dịch vụ tư vấn liên quan đến các đối tượng sở hữu công
            nghiệp như nhãn hiệu, sáng chế, kiểu dáng công nghiệp, bản quyền tác
            giả, chỉ dẫn địa lý và tên miền. Chúng tôi luôn sẵn sàng trợ giúp
            khách hàng từ việc tư vấn về cách bảo hộ những ý tưởng sáng tạo của
            khách hàng cho đến yêu cầu xử lý những vấn đề phức tạp liên quan đến
            sở hữu trí tuệ như tranh chấp quyền sở hữu trí tuệ, thực thi quyền
            sở hữu trí tuệ.
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
                    – Tư vấn bảo hộ sở hữu trí tuệ: Nhãn hiệu, kiểu dáng công
                    nghiệp sáng chế, chỉ dẫn địa lý, bản quyền tác giả.
                  </p>
                  <p className="mb-2">
                    – Tra cứu, thẩm định và đánh giá khả năng bảo hộ trước khi
                    đăng ký.
                  </p>
                  <p className="mb-2">
                    – Tư vấn Hợp đồng li-xăng, chuyển giao công nghệ, nhượng
                    quyền và các hợp đồng sở hữu trí tuệ khác.
                  </p>
                  <p className="mb-2">
                    – Đại diện xử lý hành vi xâm phạm quyền sở hữu công nghiệp,
                    tranh tụng bảo vệ quyền lợi tại Tòa án.
                  </p>
                  <p className="mb-2">
                    – Giải quyết xâm phạm bí mật kinh doanh và chống cạnh tranh
                    không lành mạnh trong lĩnh vực sở hữu công nghiệp.
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
