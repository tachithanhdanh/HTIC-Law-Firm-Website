import Image from "next/image";
import { getStaticImagePath } from "@/utils";
import ServiceSidebar from "@/components/services/ServiceSideBar";
import ServiceDetailsHeader from "@/components/services/ServiceDetailsHeader";

const TaxAccountantPage = () => {
  return (
    <div>
      <ServiceDetailsHeader title="Hỗ Trợ Pháp Lý Cho Người Nhật Tại Việt Nam" />
      <div className="flex gap-8 max-w-7xl py-5">
        <ServiceSidebar />

        <main className="flex-1">
          <h1 className="text-2xl font-bold text-gray-800 mb-6">
            HỖ TRỢ PHÁP LÝ CHO NGƯỜI NHẬT
          </h1>

          <p className="text-gray-600 mb-8">
            Sống và làm việc tại một quốc gia mới như Việt Nam có thể mang đến
            nhiều thách thức về pháp lý. Hiểu rõ điều này, HTIC cung cấp dịch vụ
            hỗ trợ pháp lý toàn diện dành riêng cho người Nhật, giúp bạn dễ dàng
            vượt qua mọi rào cản pháp lý và tận hưởng cuộc sống tại đây một cách
            thoải mái.
          </p>

          <div className="mb-12">
            <div className="flex gap-8">
              <div className="relative">
                <Image
                  src={getStaticImagePath("/services/so-huu-tri-tue/1.png")}
                  alt="Dịch vụ sở hữu trí tuệ"
                  width={300}
                  height={200}
                />
              </div>

              <div className="space-y-4">
                <h2 className="text-xl font-bold text-gray-800 mb-6">
                  DỊCH VỤ CỦA CHÚNG TÔI BAO GỒM
                </h2>
                <div className="text-gray-600">
                  <p className="mb-2">
                    – Hỗ trợ khách hàng trong việc xin visa, gia hạn visa
                  </p>
                  <p className="mb-2">
                    – Hỗ trợ các thủ tục cư trú, thuế, lý lịch tư – pháp,…
                  </p>
                  <p className="mb-2">
                    – Tư vấn về bất động sản: mua nhà, thuê nhà
                  </p>
                  <p className="mb-2">
                    – Tư vấn thủ tục kết hôn với người nước ngoài
                  </p>
                  <p className="mb-2">
                    – Các thủ tục pháp lý khác khi người Nhật có yêu cầu
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mb-12 flex">
            <p className="">
              Với đội ngũ chuyên gia giàu kinh nghiệm và hiểu biết sâu sắc về
              văn hóa Nhật Bản, chúng tôi cam kết mang đến cho bạn sự hỗ trợ
              pháp lý tốt nhất, giúp bạn yên tâm và tập trung vào những điều
              quan trọng khác trong cuộc sống.
            </p>
            <div className="flex bg-gray-100 border-l-4 border-gray-500 ml-10 px-5">
              <Image
                src={getStaticImagePath(
                  "/services/ho-tro-phap-ly-cho-nguoi-nhat/1.png"
                )}
                alt="Hỗ trợ pháp lý cho người Nhật"
                width={100}
                height={20}
                className="py-5 mr-5"
              />
              <div className="flex-1 py-2 w-80">
                <p className="italic font-semibold">Mr. Morita Shoki</p>
                <p className="italic text-xs">
                  "Là người Nhật tại Việt Nam tôi hiểu rằng pháp lý rất quan
                  trọng, vậy nên tôi đã đồng hành cùng HTIC để cố gắng hỗ trợ
                  cho người Nhật sinh sống và tại Việt Nam.”
                </p>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default TaxAccountantPage;
