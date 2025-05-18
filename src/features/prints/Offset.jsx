import { useQuery } from "@tanstack/react-query";
import { getOffset } from "../../services/api";
import Spinner from "../../ui/Spinner";


function Offset() {

     const {
    data: offsetPrints,
    isLoading,
    error,
  } = useQuery({
    queryKey: ['offsetservices'],
    queryFn: getOffset,
  });

  if (isLoading) return <Spinner />;
  if (error)
    return (
      <div className="text-center py-10 text-red-500">
        خطا در دریافت داده‌ها
      </div>
    );

  return (
    <div className="p-4">
      <div className="flex flex-wrap gap-3">
        {offsetPrints?.map((service) => (
          <button 
            key={service.id}
            className="bg-gray-100 px-4 py-2 rounded-lg"
          >
            {service.name}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Offset;