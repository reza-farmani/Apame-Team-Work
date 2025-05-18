import { useQuery } from "@tanstack/react-query";
import { getPrintingServices } from "../services/api";
import Spinner from "./Spinner";
import { useNavigate } from "react-router-dom";

function Print() {
  const navigate = useNavigate();
  const {
    data: prints,
    isLoading,
    error,
  } = useQuery({
    queryKey: ['printingservices'],
    queryFn: getPrintingServices,
  });

  if (isLoading) return <Spinner />;
  if (error)
    return (
      <div className="text-center py-10 text-red-500">
        خطا در دریافت داده‌ها
      </div>
    );

   function handleServiceClick(serviceId) {

    navigate("/offset-services", { 
      state: { 
        serviceId: serviceId 
      } 
    });
  };

  return (
    <div className="p-4">
      <div className="flex flex-wrap gap-3">
        {prints?.map((service) => (
          <button 
            key={service.id}
            className="bg-gray-100 px-4 py-2 rounded-lg"
            onClick={() => handleServiceClick(service.id)}
          >
            {service.name}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Print;