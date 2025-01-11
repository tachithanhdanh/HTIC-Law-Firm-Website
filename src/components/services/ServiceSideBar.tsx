// components/ServiceNavbar.tsx
import { SERVICES } from "@/data/services";
import Link from "next/link";
import { useRouter } from "next/router";

const ServiceNavbar = () => {
  const router = useRouter();
  const currentServiceId = router.pathname.split("/").pop();

  return (
    <div className="border-b border-gray-200">
      <nav className="p-4">
        <h3 className="text-lg font-semibold mb-4 ml-6 text-gray-800">
          Danh sách dịch vụ
        </h3>
        <ul className="flex-col bg-white">
          {SERVICES.map((service, index) => (
            <li key={service.id}>
              <Link
                href={`/services/${service.id}`}
                className={`block px-4 py-2 rounded-lg transition-colors ${
                  currentServiceId === service.id
                    ? "bg-blue-100 text-blue-600"
                    : "hover:bg-gray-100 text-gray-600"
                }`}
              >
                {index + 1}. {service.title}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default ServiceNavbar;
