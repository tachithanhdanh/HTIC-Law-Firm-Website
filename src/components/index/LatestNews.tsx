const LatestNews = () => {
  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="flex justify-center items-center mb-8">
          {/* Title */}
          <h2 className="text-3xl font-bold text-gray-800 flex-grow text-center">
            Tin Tức Mới
          </h2>

          {/* "Xem thêm" Button */}
          <a
            href="#"
            className="text-blue-500 hover:underline flex items-center ml-auto"
          >
            Xem thêm
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-4 h-4 ml-1"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </a>
        </div>

        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-white rounded-lg shadow p-6">
          {/* Left Column */}
          <div>
            <ul className="space-y-4">
              {[
                {
                  date: "18/05/2022",
                  title: "7 Trường hợp không được cấp sổ đỏ năm 2024",
                },
                {
                  date: "18/05/2022",
                  title: "Quy định về sinh trắc học khi chuyển khoản",
                },
                {
                  date: "18/05/2022",
                  title:
                    "Quốc tịch nước ngoài có được mua nhà ở Việt Nam không",
                },
                {
                  date: "18/05/2022",
                  title: "Thuê mua nhà ở xã hội theo luật nhà ở 2023",
                },
              ].map((news, index) => (
                <li
                  key={index}
                  className="border-b border-gray-200 pb-2 last:border-none"
                >
                  <div className="flex items-center gap-x-4">
                    <p className="text-sm text-gray-500 m-0">{news.date}</p>
                    <a
                      href="#"
                      className="font-semibold hover:text-blue-500 transition text-sm"
                    >
                      {news.title}
                    </a>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Column */}
          <div>
            <ul className="space-y-4">
              {[
                {
                  date: "18/05/2022",
                  title: "Tiếp tục giảm 2% thuế GTGT (VAT) tới cuối năm 2024",
                },
                {
                  date: "18/05/2022",
                  title: "Đăng ký mã số thuế cá nhân: Hồ sơ & Thủ tục cần biết",
                },
                {
                  date: "18/05/2022",
                  title:
                    "Thuế tối thiểu toàn cầu và những doanh nghiệp Việt Nam cần biết",
                },
                {
                  date: "18/05/2022",
                  title:
                    "Thuế tối thiểu toàn cầu và những doanh nghiệp Việt Nam cần biết",
                },
              ].map((news, index) => (
                <li
                  key={index}
                  className="border-b border-gray-200 pb-2 last:border-none"
                >
                  <div className="flex items-center gap-x-4">
                    <p className="text-sm text-gray-500 m-0">{news.date}</p>
                    <a
                      href="#"
                      className="font-semibold hover:text-blue-500 transition text-sm"
                    >
                      {news.title}
                    </a>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LatestNews;
