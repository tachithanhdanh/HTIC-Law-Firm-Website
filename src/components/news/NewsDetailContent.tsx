import React from "react";
import Image from "next/image";
import { Article } from "../common/PaginatedArticleList";

type NewsDetailContentProps = {
  article: Article;
};

const NewsDetailContent: React.FC<NewsDetailContentProps> = ({ article }) => {
  return (
    <div className="max-w-4xl mx-auto py-8 px-4">
      {/* Tiêu đề bài viết */}
      <h1 className="text-3xl font-bold text-gray-800 mb-2">{article.title}</h1>

      {/* Ngày đăng */}
      <p className="text-sm text-gray-500 mb-6">{article.date}</p>

      {/* Ảnh bài viết */}
      <div className="mb-6">
        <Image
          src={article.image}
          alt={article.title}
          width={800}
          height={400}
          className="w-full h-auto rounded-lg object-cover"
        />
      </div>

      {/* Nội dung bài viết */}
      <div className="prose max-w-none text-gray-800">
        {article.description.map((paragraph, index) => (
          <div key={index} className="mb-2">
            {paragraph.map((part, partIndex) => (
              <span key={partIndex} className={part.isBold ? "font-bold" : ""}>
                {part.text}
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewsDetailContent;
