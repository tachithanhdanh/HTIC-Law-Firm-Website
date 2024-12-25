import React from "react";

export type NewsItem = {
  date: string;
  title: string;
};

type NewsGridProps = {
  data: NewsItem[];
};

const NewsGrid: React.FC<NewsGridProps> = ({ data }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 p-6">
      {data.map((news, index) => (
        <div key={index} className="border-b border-gray-200 pb-2">
          <div className="flex items-center gap-x-4">
            <p className="text-sm text-gray-500 m-0">{news.date}</p>
            <a
              href="#"
              className="font-semibold hover:text-blue-500 transition text-sm"
            >
              {news.title}
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default NewsGrid;
