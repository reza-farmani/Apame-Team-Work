/*import { useQuery } from "@tanstack/react-query";
import { getSocialMediaServices } from "../services/api";
import Spinner from "./Spinner";

function SocialMedia() {
  const {
    data: socialServices,
    isLoading,
    error,
  } = useQuery({
    queryKey: ['socialmediaservices'],
    queryFn: getSocialMediaServices,
  });

  if (isLoading) return <Spinner />;
  if (error)
    return (
      <div className="text-center py-10 text-red-500">
        خطا در دریافت داده‌ها
      </div>
    );

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-6 text-center">سوشیال مدیا</h2>
      
      <div className="border rounded-lg overflow-hidden">

        <div className="flex bg-gray-100 font-medium p-3 border-b">
          <div className="flex-1 text-right">خدمات</div>
        </div>
        

        <div className="divide-y">
          {socialServices?.map((service) => (
            <div key={service.id} className="flex p-3 hover:bg-gray-50">
              <div className="flex-1 text-right">{service.name}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default SocialMedia;*/