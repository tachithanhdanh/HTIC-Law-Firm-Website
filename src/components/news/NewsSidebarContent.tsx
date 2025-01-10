import React from "react";
import Image from "next/image";

type RelatedNews = {
  id: string;
  title: string;
  image: string;
};

type FeaturedService = {
  id: string;
  icon: string;
  name: string;
};

type NewsSidebarContentProps = {
  relatedNews: RelatedNews[];
  featuredServices: FeaturedService[];
};

const NewsSidebarContent: React.FC<NewsSidebarContentProps> = ({
  relatedNews,
  featuredServices,
}) => {
  return (
    <div className="space-y-12">
      {/* Related News Section */}
      <div>
        <h2 className="text-lg font-bold text-gray-800 mb-4">
          Các Tin Tức Liên Quan
        </h2>
        <div className="space-y-4">
          {relatedNews.map((news) => (
            <div key={news.id} className="flex items-center space-x-4">
              <Image
                src={news.image}
                alt={news.title}
                width={60}
                height={60}
                className="rounded object-cover"
              />
              <p className="text-sm text-gray-800 font-semibold hover:text-blue-500 cursor-pointer">
                {news.title}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Featured Services Section */}
      <div>
        <h2 className="text-lg font-bold text-gray-800 mb-4">
          Các Dịch Vụ Tiêu Biểu
        </h2>
        <div className="space-y-4">
          {featuredServices.map((service) => (
            <div
              key={service.id}
              className="flex items-center justify-between bg-gray-50 p-3 rounded-lg shadow hover:bg-gray-100 cursor-pointer"
            >
              <div className="flex items-center space-x-4">
                <Image
                  src={service.icon}
                  alt={service.name}
                  width={40}
                  height={40}
                  className="rounded"
                />
                <p className="text-sm text-gray-800 font-medium">
                  {service.name}
                </p>
              </div>
              <span className="text-blue-500 text-lg font-semibold">→</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewsSidebarContent;
