import Image from "next/image";
import { getStaticImagePath } from "@/utils";
import ServiceSidebar from "@/components/services/ServiceSideBar";
import ServiceDetailsHeader from "@/components/services/ServiceDetailsHeader";

const TaxAccountantPage = () => {
  return (
    <div>
      <ServiceDetailsHeader title="Tư Vấn Pháp Lý Thường Xuyên" />
      <div className="flex gap-8 max-w-7xl py-5">
        <ServiceSidebar />

        <main className="flex-1">
          <h1 className="text-2xl font-bold text-gray-800 mb-6">
            TƯ VẤN PHÁP LÝ THƯỜNG XUYÊN
          </h1>

          <p className="text-gray-600 mb-8">
            Thay vì phải xây dựng một phòng pháp chế nội bộ với chi phí cao và
            hạn chế về kinh nghiệm, dịch vụ Tư Vấn Pháp Luật Thường Xuyên của
            chúng tôi mang đến cho bạn một giải pháp pháp lý toàn diện và hiệu
            quả. Với mức chi phí hợp lý hàng tháng, doanh nghiệp của bạn sẽ có
            một đội ngũ luật sư giàu kinh nghiệm hỗ trợ toàn diện mọi nhu cầu
            pháp lý, giúp bạn tránh khỏi những rủi ro tiềm ẩn trong suốt quá
            trình kinh doanh.
          </p>

          {/* Phần lợi ích */}
          <div>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="relative">
                <Image
                  src={getStaticImagePath("/services/so-huu-tri-tue/2.png")}
                  alt="Lợi ích dịch vụ"
                  width={400}
                  height={300}
                />
              </div>
              <div className="space-y-4">
                <h2 className="text-xl font-bold text-gray-800 mb-6">
                  LỢI ÍCH KHI SỬ DỤNG DỊCH VỤ
                </h2>
                <div className="text-gray-600">
                  <p className="flex items-center space-x-2 mb-3">
                    <span className="text-blue-500">✓</span>
                    <span>Phòng pháp chế riêng với chi phí hợp lý</span>
                  </p>
                  <p className="flex items-center space-x-2 mb-3">
                    <span className="text-blue-500">✓</span>
                    <span>Giảm thiểu rủi ro pháp lý</span>
                  </p>
                  <p className="flex items-center space-x-2 mb-3">
                    <span className="text-blue-500">✓</span>
                    <span>Hỗ trợ kịp thời, mọi lúc, mọi nơi</span>
                  </p>
                  <p className="flex items-center space-x-2 mb-3">
                    <span className="text-blue-500">✓</span>
                    <span>Tiết kiệm thời gian và chi phí</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <p className="text-gray-600 my-8">
            Với dịch vụ Tư Vấn Pháp Lý Thường Xuyên, chúng tôi chính là phòng
            pháp chế của bạn – luôn đồng hành và bảo vệ doanh nghiệp bạn một
            cách toàn diện và hiệu quả. Chỉ cần một khoản chi phí hàng tháng,
            bạn sẽ có trong tay sự hỗ trợ pháp lý vững chắc, giúp doanh nghiệp
            bạn phát triển an toàn và bền vững.
          </p>
          <Image
            src={getStaticImagePath(
              "/services/tu-van-phap-ly-thuong-xuyen/1.png"
            )}
            alt="Tư vấn pháp lý thường xuyên"
            height={400}
            width={1000}
          />
        </main>
      </div>
    </div>
  );
};

export default TaxAccountantPage;
