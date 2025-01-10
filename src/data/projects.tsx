import { Article } from "@/components/common/PaginatedArticleList";
import { getStaticImagePath } from "@/utils";

type Project = Article;

export const featuredProjects: Project[] = [
  {
    id: "1",
    image: "/projects/hoat-dong-tu-van-dau-tu.png",
    title: "Hoạt Động Tư Vấn Đầu Tư",
    date: "18/05/2022",
    description: [
      [
        {
          text: "Lĩnh vực Tư vấn đầu tư luôn là thế mạnh của HTIC, cho đến nay chúng tôi đã tư vấn cho hàng chục dự án đầu tư bao gồm khách hàng ngoài nước (tư vấn đầu tư nước ngoài) và các nhà đầu tư trong nước.",
          isBold: false,
        },
      ],
      [
        {
          text: "Các dự án tiêu biểu như: Thành lập dự án đầu tư tại Việt Nam; Đầu tư vào các Khu công nghiệp, Mua bán - sáp nhập doanh nghiệp (M&A)...",
          isBold: false,
        },
      ],
    ],
  },
  {
    id: "2",
    image: "/projects/xin-giay-xac-nhan-attp.png",
    title: "Xin Giấy Xác Nhận ATTP Đối Với Thực Phẩm Chức Năng",
    date: "18/05/2022",
    description: [
      [
        {
          text: "Khách hàng là Công ty TNHH ABC Việt Nam hoạt động kinh doanh chủ yếu liên quan đến lĩnh vực truyền thông, tổ chức sự kiện.",
          isBold: false,
        },
      ],
      [
        {
          text: "Ngoài ra, Công ty ABC có mối quan hệ mật thiết mạnh trên mảng truyền thông, marketing của mình để mở rộng kinh doanh thị trường bán lẻ các sản phẩm thực phẩm bảo vệ sức khỏe (“thực phẩm chức năng”) do Công ty nhập khẩu trực tiếp từ Hàn Quốc.",
          isBold: false,
        },
      ],
    ],
  },
];

export const projects: Project[] = [
  {
    id: "3",
    image: getStaticImagePath("/projects/hoat-dong-giai-quyet.png"),
    title: "Hoạt Động Giải Quyết Tranh Chấp Tố Tụng",
    date: "18/05/2022",
    description: [
      [
        { text: "HTIC", isBold: true },
        {
          text: " hiện đang hỗ trợ và tư vấn cho nhiều khách hàng trong việc lập và triển khai nhiều dự án bất động sản và xây dựng lớn tại Việt Nam, cũng như tư vấn nhiều vấn đề liên quan đến đấu thầu và xây dựng trong lĩnh vực này.",
          isBold: false,
        },
      ],
      [
        {
          text: "Bảo vệ quyền lợi hợp pháp thành công cho doanh nghiệp trong vụ kiện người lao động kiện đòi quyền lợi khi sa thải đúng quy định, vụ việc được xét xử ở 02 cấp sơ thẩm và phúc thẩm, khách hàng thắng kiện với tổng giá trị tranh chấp hơn 3 tỷ đồng.",
          isBold: false,
        },
      ],
      [
        {
          text: "Bảo vệ quyền lợi hợp pháp cho Nguyên đơn trong vụ kiện khách hàng đòi nợ hợp đồng từ Công ty F…F.",
          isBold: false,
        },
      ],
      [
        {
          text: "Đại diện và bảo vệ thành công cho một công ty thuộc Tập đoàn nhà nước trong vụ tranh chấp tài sản cầm cố...",
          isBold: false,
        },
      ],
    ],
  },
  {
    id: "4",
    image: getStaticImagePath("/projects/diem-moi-du-thao.png"),
    title: "Điểm Mới Dự Thảo Luật Thuế Thu Nhập Doanh Nghiệp",
    date: "18/05/2022",
    description: [
      [
        {
          text: "Luật Thuế Thu nhập doanh nghiệp luôn là một chủ đề quan trọng, ảnh hưởng trực tiếp đến hoạt động và sự phát triển của doanh nghiệp. Dự thảo Luật Thuế Thu nhập doanh nghiệp mới đưa ra nhiều điều chỉnh và bổ sung đáng chú ý.",
          isBold: false,
        },
      ],
      [
        {
          text: "1. Điều chỉnh thời gian miễn thuế đối với sản phẩm công nghệ mới",
          isBold: true,
        },
      ],
      [
        {
          text: "Trước đây, thời gian miễn thuế đối với thu nhập từ bán sản phẩm làm ra từ công nghệ mới lần đầu tiên áp dụng ở Việt Nam và thu nhập từ bán sản phẩm sản xuất thử nghiệm trong thời gian sản xuất thử nghiệm không được quy định tại Luật Thuế Thu nhập doanh nghiệp số 14/2008/QH12, sửa đổi bởi Luật số 32/2013/QH13. Theo khoản 2 Điều 1 Nghị định 91/2014/NĐ-CP, Chính phủ cho phép miễn thuế tối đa không quá 5 năm kể từ ngày có doanh thu từ bán sản phẩm...",
          isBold: false,
        },
      ],
    ],
  },
  {
    id: "5",
    image: getStaticImagePath("/projects/du-an-tu-van-doanh-nghiep.png"),
    title: "Dự Án Tư Vấn Doanh Nghiệp Tiêu Biểu",
    date: "18/05/2022",
    description: [
      [
        {
          text: "Trong suốt quá trình hoạt động, ",
          isBold: false,
        },
        {
          text: "HTIC",
          isBold: true,
        },
        {
          text: " đã có nhiều thành tích trong tư vấn doanh nghiệp, tư vấn dự án cho khách hàng. Cụ thể là chúng tôi đã tư vấn cho trên 250 khách hàng trong nước, thực hiện trên 100 dự án lớn nhỏ liên quan đến sự phát triển của doanh nghiệp. Dưới đây là một số dự án tiêu biểu trong mảng Tư vấn doanh nghiệp của ",
          isBold: false,
        },
        {
          text: "HTIC",
          isBold: true,
        },
        {
          text: ":",
          isBold: false,
        },
      ],
      [
        {
          text: "- Tư vấn thường xuyên (dịch vụ Phòng pháp chế thuê ngoài) cho hơn 100 doanh nghiệp lớn nhỏ trên khắp cả nước.",
          isBold: false,
        },
      ],
      [
        {
          text: "- Tư vấn và xây dựng hệ thống văn bản quản trị nội bộ cho Công ty cổ phần đầu tư và phát triển Cà Mau.",
          isBold: false,
        },
      ],
      [
        {
          text: "- Tư vấn và xây dựng Quy chế hoạt động cho Quỹ đầu tư và phát triển tỉnh Cà Mau.",
          isBold: false,
        },
      ],
      [
        {
          text: "- Tư vấn xây dựng hệ thống quản trị nội bộ cho Công ty bộ Giáo dục Tâm V…",
          isBold: false,
        },
      ],
    ],
  },
  {
    id: "6",
    image: getStaticImagePath("/projects/dang-ky-ma-so-thue.png"),
    title: "Đăng Ký Mã Số Thuế Cá Nhân: Hồ Sơ & Thủ Tục Cần Biết",
    date: "18/05/2022",
    description: [
      [
        {
          text: "1. MST cá nhân là gì? Những ai phải đăng ký MST cá nhân",
          isBold: true,
        },
      ],
      [
        {
          text: "1.1. MST cá nhân là gì?",
          isBold: true,
        },
      ],
      [
        {
          text: "Theo quy định tại Điều 3 Luật Quản lý thuế số 38/2019/QH14, thuế là khoản thu vào ngân sách Nhà nước bắt buộc mà các tổ chức, cá nhân và hộ gia đình, hộ kinh doanh phải nộp theo quy định.",
          isBold: false,
        },
      ],
      [
        {
          text: "Mã số thuế cá nhân (MST cá nhân) là một dãy số gồm 10 hoặc 13 số, được cơ quan thuế cấp cho người nộp thuế để quản lý các nghĩa vụ thuế của họ. Cụ thể...",
          isBold: false,
        },
      ],
    ],
  },
  {
    id: "7",
    image: getStaticImagePath("/projects/thue-toi-thieu-toan-cau.png"),
    title:
      "Thuế Tối Thiểu Toàn Cầu Và Những Vấn Đề Doanh Nghiệp Việt Nam Cần Biết",
    date: "18/05/2022",
    description: [
      [
        {
          text: "Việt Nam đã thông qua Nghị quyết 107/2023/QH15 nhằm áp dụng thuế tối thiểu toàn cầu đối với các công ty đa quốc gia. Chính sách này không chỉ mở ra những cơ hội mới mà còn đặt ra những thử thách quan trọng cho nền kinh tế và chính sách thuế của Việt Nam.",
          isBold: false,
        },
      ],
      [
        {
          text: "1. HIỂU THẾ NÀO LÀ THUẾ TỐI THIỂU TOÀN CẦU?",
          isBold: true,
        },
      ],
      [
        {
          text: "Thuế thu nhập doanh nghiệp tối thiểu toàn cầu (gọi tắt là THUẾ TỐI THIỂU TOÀN CẦU) là một trong hai trụ cột chính của Chương trình hành động chống xói mòn cơ sở thuế và dịch chuyển lợi nhuận ",
          isBold: false,
        },
        {
          text: "(BASE EROSION AND PROFIT SHIFTING - BEPS)",
          isBold: true,
        },
        {
          text: " do Tổ chức Hợp tác và Phát triển kinh tế ",
          isBold: false,
        },
        {
          text: "(OECD)",
          isBold: true,
        },
        {
          text: " khởi xướng...",
          isBold: false,
        },
      ],
    ],
  },
];
