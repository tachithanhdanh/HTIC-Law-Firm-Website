import { Article } from "@/components/common/PaginatedArticleList";

export const relatedNews = [
  {
    id: "1",
    title: "7 Trường hợp không được cấp sổ đỏ năm 2024",
    image: "/images/news1.jpg",
  },
  {
    id: "2",
    title: "Điểm mới dự thảo luật thuế thu nhập doanh nghiệp",
    image: "/images/news2.jpg",
  },
  {
    id: "3",
    title: "Đăng ký mã số thuế cá nhân: hồ sơ cần biết",
    image: "/images/news3.jpg",
  },
  // Thêm các tin khác...
];

export const featuredServices = [
  {
    id: "1",
    icon: "/icons/service1.png",
    name: "Doanh Nghiệp Và Đầu Tư",
  },
  {
    id: "2",
    icon: "/icons/service2.png",
    name: "Pháp Lý Bất Động Sản",
  },
  {
    id: "3",
    icon: "/icons/service3.png",
    name: "Thuế - Bảo Hiểm",
  },
  // Thêm các dịch vụ khác...
];

export const exampleArticle: Article = {
  id: "1",
  image: "/news/legal_reform.png",
  title:
    "Cải Cách Luật Pháp Tại Việt Nam: Thúc Đẩy Phát Triển Kinh Tế - Xã Hội",
  date: "10/01/2023",
  description: [
    // Mở đầu
    [
      {
        text: "Trong bối cảnh toàn cầu hóa ngày càng sâu rộng, cải cách luật pháp đóng vai trò quan trọng trong việc định hướng phát triển kinh tế - xã hội tại Việt Nam.",
        isBold: false,
      },
      {
        text: " Đặc biệt, những thay đổi trong lĩnh vực pháp lý đã góp phần tạo môi trường thuận lợi hơn cho các nhà đầu tư và bảo vệ quyền lợi của người dân.",
        isBold: false,
      },
    ],

    // 1. Cải Cách Về Luật Đầu Tư
    [{ text: "1. Cải Cách Về Luật Đầu Tư", isBold: true }],
    [
      {
        text: "Luật Đầu tư 2020 và các nghị định liên quan đã tạo điều kiện thuận lợi hơn cho các doanh nghiệp trong và ngoài nước.",
        isBold: false,
      },
      {
        text: " Cụ thể, các thủ tục hành chính đã được đơn giản hóa, giảm bớt thời gian xử lý hồ sơ và nâng cao tính minh bạch của các quy trình cấp phép.",
        isBold: false,
      },
    ],
    [
      {
        text: "Ngoài ra, việc mở rộng danh mục các lĩnh vực được ưu đãi đầu tư đã khuyến khích các doanh nghiệp đẩy mạnh hoạt động tại Việt Nam, đặc biệt trong các ngành công nghệ cao và năng lượng tái tạo.",
        isBold: false,
      },
    ],

    // 2. Tăng Cường Pháp Lý Về Quyền Sở Hữu Đất Đai
    [{ text: "2. Tăng Cường Pháp Lý Về Quyền Sở Hữu Đất Đai", isBold: true }],
    [
      {
        text: "Trong thời gian gần đây, Việt Nam đã tăng cường khung pháp lý liên quan đến quyền sử dụng đất, đảm bảo quyền lợi cho người dân và nhà đầu tư.",
        isBold: false,
      },
      {
        text: " Luật Đất đai sửa đổi hiện đang được thảo luận nhằm giải quyết các vấn đề như tranh chấp đất đai, quyền sở hữu của người nước ngoài, và quản lý tài nguyên đất hiệu quả hơn.",
        isBold: false,
      },
    ],

    // 3. Phòng Chống Tham Nhũng
    [{ text: "3. Phòng Chống Tham Nhũng", isBold: true }],
    [
      {
        text: "Chống tham nhũng là một trong những ưu tiên hàng đầu trong chiến lược cải cách luật pháp tại Việt Nam. Luật Phòng, chống tham nhũng sửa đổi đã tăng cường các biện pháp giám sát, minh bạch tài sản, và xử lý nghiêm các hành vi sai phạm.",
        isBold: false,
      },
    ],
    [
      {
        text: "Ngoài ra, việc ứng dụng công nghệ trong quản lý nhà nước cũng giúp nâng cao hiệu quả và hạn chế tình trạng lạm dụng quyền lực.",
        isBold: false,
      },
    ],

    // 4. Tăng Cường Quyền Con Người
    [{ text: "4. Tăng Cường Quyền Con Người", isBold: true }],
    [
      {
        text: "Việt Nam đang không ngừng hoàn thiện hệ thống luật pháp nhằm bảo vệ quyền con người và quyền công dân.",
        isBold: false,
      },
      {
        text: " Các luật như Luật Hôn nhân và Gia đình, Luật Trẻ em đã được điều chỉnh để phù hợp với các tiêu chuẩn quốc tế.",
        isBold: false,
      },
    ],
    [
      {
        text: "Bên cạnh đó, luật pháp cũng chú trọng đến quyền lợi của các nhóm yếu thế trong xã hội như phụ nữ, trẻ em và người khuyết tật.",
        isBold: false,
      },
    ],

    // 5. Đẩy Mạnh Hội Nhập Quốc Tế
    [{ text: "5. Đẩy Mạnh Hội Nhập Quốc Tế", isBold: true }],
    [
      {
        text: "Việt Nam đã ký kết nhiều hiệp định thương mại tự do (FTA) thế hệ mới, đòi hỏi luật pháp nội địa phải tương thích với các quy định quốc tế.",
        isBold: false,
      },
      {
        text: " Điều này không chỉ thúc đẩy xuất khẩu mà còn bảo vệ quyền lợi của doanh nghiệp và người lao động trong các tranh chấp thương mại quốc tế.",
        isBold: false,
      },
    ],
    [
      {
        text: "Các điều chỉnh luật pháp trong lĩnh vực thương mại, sở hữu trí tuệ và cạnh tranh đã tạo nền tảng vững chắc cho Việt Nam hội nhập sâu rộng hơn vào nền kinh tế toàn cầu.",
        isBold: false,
      },
    ],

    // 6. Hướng Tới Tương Lai
    [{ text: "6. Hướng Tới Tương Lai", isBold: true }],
    [
      {
        text: "Việc cải cách luật pháp là một quá trình liên tục và đòi hỏi sự phối hợp chặt chẽ giữa các cơ quan lập pháp, hành pháp và tư pháp.",
        isBold: false,
      },
      {
        text: " Với tầm nhìn chiến lược, Việt Nam đang từng bước xây dựng một hệ thống pháp luật hiện đại, minh bạch, và công bằng, đáp ứng nhu cầu phát triển trong thời đại mới.",
        isBold: false,
      },
    ],
  ],
};

export const featuredNews: Article[] = [
  {
    id: "1",
    image: "/news/thue-mua-nha-o-xa-hoi.png",
    title: "Thuê mua nhà ở xã hội theo luật nhà ở 2023",
    date: "18/05/2022",
    description: [
      [
        {
          text: "Việc thuê mua nhà ở xã hội là một trong những chính sách hỗ trợ của Nhà nước dành cho các đối tượng có nhu cầu về nhà ở nhưng gặp khó khăn về tài chính.",
          isBold: false,
        },
      ],
      [{ text: "1. Nhà Ở Xã Hội Là Gì?", isBold: true }],
      [
        {
          text: " Theo quy định tại Khoản 7 Điều 3 Luật Nhà ở số 65/2014/QH13 và Luật Nhà ở số 27/2023/QH15, nhà ở xã hội là loại nhà ở có sự hỗ trợ từ...",
          isBold: false,
        },
      ],
    ],
  },
  {
    id: "2",
    image: "/news/quy-dinh-sinh-trac-hoc.png",
    title: "Quy định về sinh trắc học khi chuyển khoản",
    date: "18/05/2022",
    description: [
      [
        {
          text: "Từ ngày 1/7/2024, quy định mới của Ngân hàng Nhà nước Việt Nam yêu cầu các giao dịch chuyển tiền trên 10 triệu đồng phải được xác thực bằng sinh trắc học, cụ thể là khuôn mặt và vân tay.",
          isBold: false,
        },
      ],
      [
        {
          text: "Đây là biện pháp nhằm tăng cường bảo mật và giảm thiểu rủi ro lừa đảo, chiếm đoạt tài sản thông qua giao dịch ngân hàng.",
          isBold: false,
        },
      ],
    ],
  },
  {
    id: "3",
    image: "/news/hoat-dong-tu-van-dau-tu.png",
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
    id: "4",
    image: "/news/xin-giay-xac-nhan-attp.png",
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
  {
    id: "5",
    image: "/news/nha-o-ket-hop-kinh-doanh.png",
    title: "Nhà ở kết hợp kinh doanh phải tuân thủ quy định PCCC",
    date: "18/05/2022",
    description: [
      [
        {
          text: "Ngày 24/6/2024, Thủ tướng Chính phủ vừa ra Chỉ thị 19/CT-TTg về tăng cường công tác phòng cháy, chữa cháy đối với nhà ở nhiều tầng, nhiều căn hộ, nhà ở riêng lẻ kết hợp sản xuất, kinh doanh.",
          isBold: false,
        },
      ],
      [{ text: "1. Khái niệm về nhà ở kết hợp kinh doanh:", isBold: true }],
      [
        {
          text: " Nhà ở kết hợp kinh doanh là loại hình nhà ở được sử dụng không...",
          isBold: false,
        },
      ],
    ],
  },
];

// Example Article Data
export const latestNews: Article[] = [
  {
    id: "1",
    image: "/news/article1.png",
    title: "Cấp Giấy Phép Đầu Tư Ra Nước Ngoài",
    date: "18/05/2022",
    description: [
      [
        {
          text: "Trong những năm gần đây, nền kinh tế Việt Nam đã phát triển mạnh mẽ và vững chắc hơn, điều này cũng đồng nghĩa với nhiều nhà đầu tư trong nước mong muốn khám phá cơ hội và mở rộng hoạt động kinh doanh tại các thị trường quốc tế. Đây là một xu hướng đáng chú ý và cần được khuyến khích.",
          isBold: false,
        },
      ],
    ],
  },
  {
    id: "2",
    image: "/news/article2.png",
    title: "Từ 1/9 Chế Độ Thai Sản Cho Lao Động Nam Khi Vợ Sinh Con Có Gì Mới?",
    date: "18/05/2022",
    description: [
      [
        {
          text: "Chế độ thai sản là một trong những chính sách an sinh xã hội quan trọng, không chỉ cho người lao động nữ mà còn hướng đến nam giới khi vợ sinh con. Điều này đảm bảo rằng cả hai giới đều được chia sẻ trách nhiệm gia đình, từ đó nâng cao chất lượng cuộc sống và tạo sự cân bằng trong xã hội.",
          isBold: false,
        },
      ],
    ],
  },
  {
    id: "3",
    image: "/news/article3.png",
    title:
      "Thủ Tục Đăng Ký Thế Chấp Quyền Sử Dụng Đất, Tài Sản Gắn Liền Với Đất",
    date: "18/05/2022",
    description: [
      [
        {
          text: "Ngày nay, trong các giao dịch bất động sản, thế chấp quyền sử dụng đất và tài sản gắn liền là một phần không thể thiếu. Quy trình này nhằm bảo vệ quyền lợi hợp pháp của các bên tham gia và đảm bảo tính minh bạch trong việc vay vốn, đầu tư và các hoạt động kinh doanh liên quan.",
          isBold: false,
        },
      ],
    ],
  },
  {
    id: "4",
    image: "/news/article4.png",
    title: "Dừng Xét Nghiệm COVID-19 Khi Nhập Cảnh Vào Việt Nam Từ 15/5",
    date: "18/05/2022",
    description: [
      [
        {
          text: "Nhằm tạo điều kiện thuận lợi cho hoạt động giao thương và du lịch, Việt Nam đã quyết định ngừng yêu cầu xét nghiệm COVID-19 với người nhập cảnh. Điều này đánh dấu một bước tiến quan trọng trong việc khôi phục nền kinh tế và đảm bảo sự thích nghi trong bối cảnh hậu đại dịch.",
          isBold: false,
        },
      ],
    ],
  },
  {
    id: "5",
    image: "/news/article5.png",
    title:
      "Thay Đổi Thời Gian Học Thực Hành Lái Xe Ô Tô Trên Đường Từ Ngày 15/6/2022",
    date: "18/05/2022",
    description: [
      [
        {
          text: "Từ ngày 15/6, thời gian học thực hành lái xe ô tô trên đường sẽ được điều chỉnh nhằm nâng cao kỹ năng lái xe an toàn. Sự thay đổi này hướng tới việc giảm thiểu rủi ro giao thông và đảm bảo chất lượng đào tạo trong ngành vận tải, đáp ứng tốt hơn nhu cầu thực tế.",
          isBold: false,
        },
      ],
    ],
  },
  {
    id: "6",
    image: "/news/article6.png",
    title: "Những Chính Sách Hỗ Trợ NLĐ Còn Hiệu Lực",
    date: "18/05/2022",
    description: [
      [
        {
          text: "Các chính sách hỗ trợ người lao động như bảo hiểm thất nghiệp, hỗ trợ đào tạo nghề và bảo vệ sức khỏe vẫn đang được triển khai mạnh mẽ. Điều này không chỉ giúp người lao động ổn định cuộc sống mà còn tạo động lực phát triển cho nền kinh tế trong bối cảnh còn nhiều thách thức.",
          isBold: false,
        },
      ],
    ],
  },
  {
    id: "7",
    image: "/news/article7.png",
    title: "Quy Định Mới Hỗ Trợ Doanh Nghiệp Nhỏ Và Vừa",
    date: "18/05/2022",
    description: [
      [
        {
          text: "Với các quy định mới, doanh nghiệp nhỏ và vừa sẽ nhận được sự hỗ trợ lớn hơn về mặt tài chính, thuế và đào tạo. Đây là cơ hội để các doanh nghiệp cải thiện năng lực cạnh tranh, phát triển bền vững và đóng góp tích cực vào nền kinh tế quốc gia trong thời kỳ hội nhập.",
          isBold: false,
        },
      ],
    ],
  },
  {
    id: "8",
    image: "/news/article8.png",
    title:
      "Doanh Nghiệp, Hợp Tác Xã, Hộ Kinh Doanh Được Hỗ Trợ Lãi Suất 2%/Năm",
    date: "18/05/2022",
    description: [
      [
        {
          text: "Theo chính sách mới, các doanh nghiệp, hợp tác xã và hộ kinh doanh đủ điều kiện sẽ được hỗ trợ lãi suất 2%/năm. Chính sách này nhằm giảm bớt gánh nặng tài chính và khuyến khích sự phát triển của các thành phần kinh tế, tạo thêm nhiều cơ hội việc làm.",
          isBold: false,
        },
      ],
    ],
  },
  // Additional custom articles
  {
    id: "9",
    image: "/news/article9.png",
    title: "Công Nghệ Blockchain Đang Thay Đổi Ngành Tài Chính",
    date: "19/05/2022",
    description: [
      [
        {
          text: "Blockchain đã mở ra một kỷ nguyên mới cho ngành tài chính, giúp cải thiện độ minh bạch, bảo mật và tốc độ giao dịch. Công nghệ này không chỉ thay đổi cách thức hoạt động của ngân hàng mà còn tạo cơ hội phát triển cho các lĩnh vực như bảo hiểm, đầu tư và thương mại điện tử.",
          isBold: false,
        },
      ],
    ],
  },
  {
    id: "10",
    image: "/news/article10.png",
    title: "Sự Phát Triển Của AI Trong Đời Sống Hàng Ngày",
    date: "20/05/2022",
    description: [
      [
        {
          text: "Trí tuệ nhân tạo (AI) không chỉ hỗ trợ trong công việc mà còn xuất hiện trong các thiết bị gia đình thông minh, xe tự lái và y học. AI giúp tối ưu hóa quy trình, cải thiện hiệu suất làm việc và nâng cao chất lượng cuộc sống, mở ra một thế giới mới đầy tiềm năng.",
          isBold: false,
        },
      ],
    ],
  },
  {
    id: "11",
    image: "/news/article11.png",
    title: "Bảo Vệ Môi Trường Với Các Sáng Kiến Xanh",
    date: "21/05/2022",
    description: [
      [
        {
          text: "Việt Nam đang đẩy mạnh các sáng kiến xanh nhằm bảo vệ môi trường, như sử dụng năng lượng tái tạo, giảm thiểu rác thải nhựa và phát triển đô thị bền vững. Đây là những bước đi cần thiết để đảm bảo sự cân bằng sinh thái và đối phó với biến đổi khí hậu.",
          isBold: false,
        },
      ],
    ],
  },
  {
    id: "12",
    image: "/news/article12.png",
    title: "Xu Hướng Ứng Dụng IoT Trong Nông Nghiệp",
    date: "22/05/2022",
    description: [
      [
        {
          text: "IoT đã chứng minh tiềm năng lớn trong việc cách mạng hóa nông nghiệp, từ việc giám sát môi trường canh tác đến tự động hóa quy trình tưới tiêu. Công nghệ này giúp nâng cao năng suất, giảm chi phí và mang lại sự chính xác cao trong các hoạt động sản xuất nông nghiệp.",
          isBold: false,
        },
      ],
    ],
  },
  {
    id: "13",
    image: "/news/article13.png",
    title: "Hướng Dẫn Du Lịch An Toàn Hậu COVID-19",
    date: "23/05/2022",
    description: [
      [
        {
          text: "Sau đại dịch, du lịch an toàn trở thành xu hướng hàng đầu với các biện pháp bảo vệ sức khỏe và dịch vụ thân thiện hơn. Các hãng lữ hành đang cung cấp tour du lịch nhỏ gọn, điểm đến ít đông đúc và các dịch vụ linh hoạt nhằm mang lại trải nghiệm an tâm cho du khách.",
          isBold: false,
        },
      ],
    ],
  },
  {
    id: "14",
    image: "/news/article14.png",
    title: "Phát Triển Kinh Tế Số Tại Việt Nam",
    date: "24/05/2022",
    description: [
      [
        {
          text: "Kinh tế số đang trở thành một trong những lĩnh vực phát triển nhanh nhất tại Việt Nam, với sự bùng nổ của thương mại điện tử, fintech và dịch vụ trực tuyến. Điều này không chỉ thúc đẩy tăng trưởng kinh tế mà còn góp phần tạo việc làm và nâng cao chất lượng sống.",
          isBold: false,
        },
      ],
    ],
  },
  {
    id: "15",
    image: "/news/article15.png",
    title: "Giáo Dục Trực Tuyến Trong Thời Đại Số",
    date: "25/05/2022",
    description: [
      [
        {
          text: "Học trực tuyến ngày càng phổ biến và mang lại nhiều lợi ích, từ việc tiết kiệm thời gian đến khả năng học tập mọi lúc, mọi nơi. Các nền tảng giáo dục số cung cấp khóa học đa dạng, giúp học viên dễ dàng tiếp cận kiến thức và phát triển kỹ năng theo nhu cầu.",
          isBold: false,
        },
      ],
    ],
  },
  {
    id: "16",
    image: "/news/article16.png",
    title: "Cải Tiến Dịch Vụ Y Tế Với Công Nghệ Mới",
    date: "26/05/2022",
    description: [
      [
        {
          text: "Công nghệ đang dần cải thiện chất lượng dịch vụ y tế, từ các thiết bị chẩn đoán hiện đại đến hồ sơ y tế điện tử. Những cải tiến này giúp bác sĩ và bệnh nhân dễ dàng truy cập thông tin, tối ưu hóa quy trình điều trị và giảm thiểu sai sót trong y khoa.",
          isBold: false,
        },
      ],
    ],
  },
  {
    id: "17",
    image: "/news/article17.png",
    title: "Phát Triển Hạ Tầng Giao Thông Đô Thị Bền Vững",
    date: "27/05/2022",
    description: [
      [
        {
          text: "Hạ tầng giao thông đô thị đóng vai trò then chốt trong phát triển bền vững, với các dự án đường sắt đô thị, xe buýt công nghệ cao và khu vực đi bộ. Các giải pháp này giúp giảm ùn tắc, ô nhiễm không khí và nâng cao chất lượng cuộc sống đô thị.",
          isBold: false,
        },
      ],
    ],
  },
  {
    id: "18",
    image: "/news/article18.png",
    title: "Tăng Cường Kết Nối Kinh Tế Vùng",
    date: "28/05/2022",
    description: [
      [
        {
          text: "Việc tăng cường kết nối kinh tế vùng sẽ tạo động lực phát triển mạnh mẽ thông qua hệ thống giao thông liên vùng, khu công nghiệp liên kết và chuỗi cung ứng hiện đại. Điều này giúp khai thác tối đa tiềm năng kinh tế và nâng cao năng lực cạnh tranh quốc gia.",
          isBold: false,
        },
      ],
    ],
  },
];
