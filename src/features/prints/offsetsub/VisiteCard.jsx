import { useQuery } from "@tanstack/react-query";
import { getVisitCard } from "../../../server/services/api";
import Spinner from "../../../ui/Spinner";

function VisitCard() {

  const {
    data: options,
    isLoading,
    error,
  } = useQuery({
    queryKey: ['visitCard'],
    queryFn: getVisitCard,
  });

  if (isLoading) return <Spinner />;
  if (error) return <div className="text-center py-10 text-red-500">خطا در دریافت داده ها</div>;

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-6">گزینه‌های کارت ویزیت</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {options?.map((option) => (
          <div
            key={option.id}
            className="bg-white p-4 rounded-lg shadow hover:shadow-md transition"
          >
            <h3 className="font-semibold text-lg">{option.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default VisitCard;