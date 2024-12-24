import Image from "next/image";
import { getStaticImagePath } from "@/utils";

const IntroductionSection = () => {
  return (
    <section className="bg-gray-100 py-12 px-16 lg:px-24">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-6 bg-white rounded-lg shadow-md">
        {/* Left Profile Section */}
        <div className="md:col-span-3 p-6 flex flex-col items-center text-center">
          <Image
            src={getStaticImagePath("/about/luat-su-tran-quoc-hung.png")}
            alt="Luật sư Trần Quốc Hưng"
            width={200}
            height={200}
            className="rounded-full object-cover"
          />
          <h3 className="text-lg font-semibold mt-4">Luật sư Trần Quốc Hưng</h3>
          <p className="text-sm text-gray-600">Giám Đốc Điều Hành</p>
        </div>

        {/* Right Content Section */}
        <div className="md:col-span-9 p-6">
          {/* Quote Section */}
          <div className="border-l-8 border-aboutUsIntrodctionBorderColor pl-4 mb-4 bg-aboutUsIntrodctionBackgroundColor pt-5 pb-4">
            <p className="text-aboutUsTextColor font-semibold text-lg uppercase text-center m-0 font-roboto">
              “Đúng thôi chưa đủ - mà còn phải tốt”
            </p>
            <p className="text-center text-zinc-950 font-medium font-roboto">
              Chúng tôi luôn đưa ra giải pháp tối ưu cho mọi vấn đề
            </p>
          </div>

          {/* Introduction */}
          <div>
            <h3 className="text-red-600 font-semibold text-lg mb-2 uppercase">
              Thư Ngỏ
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4 uppercase">
              <strong>Kính gửi: Quý Khách Hàng!</strong>
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              HTIC là công ty luật được thành lập từ năm 2011 (tên ban đầu là
              công ty Luật Pháp Chính), hiện nay HTICLAW là một tổ chức hành
              nghề luật sư uy tín được nhiều khách hàng tại Việt Nam tin cậy.
              Chúng tôi luôn từng bước cố gắng để khẳng định chất lượng trên thị
              trường trong và ngoài nước. Với nỗ lực không ngừng, chúng tôi đã
              được sự tín nhiệm từ các đối tác lớn cùng nhiều tổ chức lớn nhỏ
              khác trong thông qua các hoạt động tư vấn pháp lý, cung cấp giải
              pháp và tháo gỡ các khó khăn, vướng mắc của doanh nghiệp.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Sứ mệnh HTIC là phụng sự cộng đồng - bảo vệ lợi ích khách hàng, và
              trở thành một chỗ dựa tốt cho tổ chức, cá nhân khi cần luật sư.
              Với đội ngũ nhân sự có kinh nghiệm, nắm vững quy định pháp lý, và
              hiểu nhiều lĩnh vực, HTIC tự tin cung cấp cho khách hàng các dịch
              vụ tư vấn pháp lý toàn diện nhất và hiệu quả nhất.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Trong mọi nỗ lực, HTIC không đơn giản chỉ cung cấp thông tin pháp
              lý mà có cả giải pháp để khách hàng có sự lựa chọn tốt, phù hợp
              nhất. Với mục tiêu nói thật, HTIC luôn muốn khách hàng an tâm từng
              bước pháp định để trở thành tổ chức luật hàng đầu tại Việt Nam. Để
              đạt được điều đó, chúng tôi rất mong muốn nhận được sự ủng hộ của
              quý khách hàng, đối tác.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Vậy nên với thư ngỏ này, chúng tôi rất rất mong muốn được hợp tác.
            </p>
          </div>

          {/* Signature */}
          <div className="mt-6">
            <p className="font-semibold">Chân thành cảm ơn và trân trọng!</p>
            <p className="font-semibold mt-5 mb-0">Luật sư Trần Quốc Hưng</p>
            <p className="text-gray-600">Giám Đốc Điều Hành</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntroductionSection;
