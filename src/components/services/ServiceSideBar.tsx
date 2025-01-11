// components/ServiceSidebar.tsx
import { SERVICES } from "@/data/services";
import Link from "next/link";
import { useRouter } from "next/router";

const ServiceSidebar = () => {
  const router = useRouter();
  const currentServiceId = router.query.id as string;

  return (
    <div className="w-64 border-r border-gray-200 h-full">
      <nav className="p-4">
        <h3 className="text-lg font-semibold mb-4">Dịch vụ của chúng tôi</h3>
        <ul className="space-y-2">
          {SERVICES.map((service) => (
            <li key={service.id}>
              <Link
                href={`/services/${service.id}`}
                className={`block p-2 rounded-lg transition-colors ${
                  currentServiceId === service.id
                    ? "bg-blue-50 text-blue-600"
                    : "hover:bg-gray-50"
                }`}
              >
                {service.title}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default ServiceSidebar;
