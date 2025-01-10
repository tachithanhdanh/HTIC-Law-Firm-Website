import Image from "next/image";
import { useState } from "react";
import ViewMoreButton from "../common/ViewMoreButton";
import { getStaticImagePath } from "@/utils";
import { Article } from "./PaginatedArticleList";

type FeaturedContentProps = {
  contentList: Article[];
  headerTitle: string;
};

const ITEMS_PER_PAGE = 2; // Số lượng content hiển thị mỗi lần

const FeaturedContent: React.FC<FeaturedContentProps> = ({
  contentList,
  headerTitle,
}) => {
  const [search, setSearch] = useState("");
  const [visibleItems, setVisibleItems] = useState(ITEMS_PER_PAGE);

  const filteredContentList = contentList.filter((project) =>
    project.title.toLowerCase().includes(search.toLowerCase())
  );

  const handleViewMore = () => {
    setVisibleItems((prevVisibleItems) => prevVisibleItems + ITEMS_PER_PAGE);
  };

  return (
    <section className="max-w-7xl mx-auto px-4">
      <div className="flex justify-between items-center mb-8">
        {/* Section Header */}
        <div className="flex items-center space-x-2">
          <span className="h-8 w-1 bg-blue-500"></span>
          <h2 className="text-2xl font-semibold text-gray-800 font-roboto">
            {headerTitle}
          </h2>
        </div>
        <div className="relative w-5/12">
          <input
            type="text"
            placeholder="Tìm Kiếm"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full py-2 px-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            title="Search"
            type="submit"
            className="absolute top-2 right-4 text-gray-500 hover:text-blue-500"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Project List */}
      <div className="grid grid-cols-1 gap-8">
        {filteredContentList.slice(0, visibleItems).map((project, index) => (
          <div
            key={index}
            className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center"
          >
            {/* Image */}
            <div
              className={`col-span-12 md:col-span-6 ${
                index % 2 !== 0 ? "md:order-2" : ""
              }`}
            >
              <Image
                src={getStaticImagePath(project.image)}
                alt={project.title}
                width={500}
                height={300}
                className="object-cover w-full rounded-lg"
              />
            </div>

            {/* Text */}
            <div
              className={`col-span-12 md:col-span-6 ${
                index % 2 !== 0 ? "md:order-1" : ""
              } p-6`}
            >
              <h3 className="text-sm font-bold text-gray-800 mb-2">
                {project.title}
              </h3>
              <p className="text-xs text-gray-500 mb-2">{project.date}</p>
              {project.description.map((paragraph, paragraphIndex) => (
                <p
                  key={paragraphIndex}
                  className="text-sm text-gray-700 mt-0 mb-2"
                >
                  {paragraph.map((part, partIndex) => (
                    <span
                      key={partIndex}
                      className={part.isBold ? "font-bold" : ""}
                    >
                      {part.text}
                    </span>
                  ))}
                </p>
              ))}
            </div>
          </div>
        ))}
      </div>

      {visibleItems < filteredContentList.length && (
        <div className="flex justify-center mt-8">
          <ViewMoreButton isWhite={false} onClick={handleViewMore} />
        </div>
      )}
    </section>
  );
};

export default FeaturedContent;
