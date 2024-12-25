import React from "react";
import ServiceCard from "./OtherServiceCard";

const OtherServices = () => {
  const serviceCards = [
    {
      image: "/services/tu-van-giay-phep-other.png",
      title: "Tư Vấn Giấy Phép",
      line1: "Giấy Phép Kinh Doanh Lữ Hoành Quốc Tế",
      line2: "Visa Doanh Nghiệp Cho Người Nước Ngoài",
      line3: "Cấp Giấy Phép Cho Nhà Thầu Nước Ngoài",
      line4: "Công Bố Lưu Hành Mỹ Phẩm",
    },
    {
      image: "/services/doanh-nghiep-dau-tu-other.png",
      title: "Doanh Nghiệp - Đầu Tư",
      line1: "Thành Lập Công Ty TNHH Một Thành Viên",
      line2: "Thủ Tục Đăng Ký Tạm Ngừng Hoạt Động",
      line3: "Thay Đổi Trụ Sở Công Ty Hoạt Động",
      line4: "Thành Lập Công Ty TNHH Hai Thành Viên",
    },
    {
      image: "/services/thu-tuc-hanh-chinh-other.png",
      title: "Thủ Tục Hành Chính",
      line1: "Thủ Tục Nguồn Nước Ngoài Nhận Con Nuôi",
      line2: "Thủ Tục Xin Cấp Giấy Phép Trên Lãnh Thổ",
      line3: "Thủ Tục Cấp Phiếu Lý Lịch Tư Pháp",
      line4: "Thủ Tục Công Chứng Hợp Đồng Chuyển Nhượng",
    },
  ];
  return (
    <section className="py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex gap-5">
          <div className="h-10 w-1 bg-blue-500 rounded-3xl"></div>
          <h2 className="text-3xl font-bold text-gray-800 mb-8">
            Các dịch vụ khác
          </h2>
        </div>
        <div className="grid grid-cols-3 gap-10 px-5">
          {serviceCards.map((card, index) => (
            <ServiceCard
              key={index}
              image={card.image}
              title={card.title}
              line1={card.line1}
              line2={card.line2}
              line3={card.line3}
              line4={card.line4}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default OtherServices;
