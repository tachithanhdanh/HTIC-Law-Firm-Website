interface ViewMoreButtonProps {
  isWhite?: boolean;
}

const ViewMoreButton: React.FC<ViewMoreButtonProps> = ({ isWhite = false }) => {
  return (
    <>
      {/* View More Button */}
      {/* Div Bao Ngoài */}
      <div className="flex justify-center items-center h-full mt-10">
        {/* Nút "Xem Thêm" */}
        <button
          className={`w-[348px] px-6 py-2 border font-semibold transition flex items-center justify-center space-x-2 ${
            isWhite
              ? "border-white text-white hover:bg-white hover:text-white"
              : "border-black text-black hover:bg-red-500 hover:text-white"
          }`}
        >
          <span>XEM THÊM</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>
    </>
  );
};

export default ViewMoreButton;
