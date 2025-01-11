import Image from "next/image";
import { getStaticImagePath } from "@/utils";
import { SERVICES } from "@/data/services";
import Link from "next/link";

const ServicesSection = () => {
  return (
    <section className="py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex gap-5">
          <div className="h-10 w-1 bg-blue-500 rounded-3xl"></div>
          <h2 className="text-3xl font-bold text-gray-800 mb-8">
            Lĩnh Vực Hoạt Động
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {SERVICES.map((service, index) => (
            <div>
              <Link href={`/services/${service.id}`} key={index}>
                <div className="relative h-60 border-gray-200 border-2 overflow-hidden group">
                  {/* Image as background */}
                  <div className="absolute inset-0 w-full h-full">
                    <Image
                      src={getStaticImagePath(service.image)}
                      alt={service.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
                  </div>

                  <div className="absolute bottom-0 left-0 right-0 p-4 text-center">
                    <h3 className="text-l font-semibold text-white">
                      {service.title}
                    </h3>
                  </div>
                </div>
              </Link>

              <p className="text-gray-600 text-xs font-medium mt-3 px-2">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
