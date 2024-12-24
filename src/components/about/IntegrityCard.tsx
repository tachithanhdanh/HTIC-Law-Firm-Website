import Image from "next/image";
import { getStaticImagePath } from "@/utils";

interface IntegrityCardProps {
  index: number;
  title: string;
  subtitle: string;
  description: DescriptionSegment[];
  icon: string;
}

// Define the type for each text segment
interface DescriptionSegment {
  text: string; // The actual text content
  isBold: boolean; // Whether this segment should be bold
}

const IntegrityCard = (value: IntegrityCardProps) => {
  return (
    <div
      key={value.index}
      className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center"
    >
      <Image
        src={getStaticImagePath(value.icon)}
        alt={value.title}
        width={80}
        height={80}
        className="mb-4 object-contain"
      />
      <h3 className="text-lg font-semibold text-gray-800">{value.title}</h3>
      <p className="text-stone-500 text-sm">{value.subtitle}</p>
      {/* Description with Bold Text */}
      <p className="text-gray-700 text-sm mt-2">
        {value.description.map((part, index) =>
          part.isBold ? (
            <strong key={index} className="font-bold">
              {part.text}
            </strong>
          ) : (
            <span key={index}>{part.text}</span>
          )
        )}
      </p>
    </div>
  );
};

export default IntegrityCard;
