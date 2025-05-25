/*import { useQuery } from "@tanstack/react-query";
import { getBoardServices } from "../services/api";
import Spinner from "./Spinner";
import { useNavigate } from "react-router-dom";

function Board() {
  const navigate = useNavigate();
  const {
    data: boardServices,
    isLoading,
    error,
  } = useQuery({
    queryKey: ['printingservices'],
    queryFn: getBoardServices,
  });

  if (isLoading) return <Spinner />;
  if (error)
    return (
      <div className="text-center py-10 text-red-500">
        خطا در دریافت داده‌ها
      </div>
    );

  function handleServiceClick(service) {

    const servicePaths = {
      'خدمات لیزر و حکاکی': '/lazer-services',
      'خدمات برش': '/cut-services',
      'خدمات تابلو': '/board-services',
    };
    
    const path = servicePaths[service.name];
    navigate(path, { 
      state: { 
        serviceId: service.id 
      } 
    });
  };

  return (
    <div className="p-4">
      <div className="flex flex-wrap gap-3">
        {boardServices?.map((service) => (
          <button 
            key={service.id}
            className="bg-gray-100 px-4 py-2 rounded-lg"
            onClick={() => handleServiceClick(service)}
          >
            {service.name}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Board;*/