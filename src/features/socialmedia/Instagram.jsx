import { useQuery } from "@tanstack/react-query";
import Spinner from "../../ui/Spinner";
import { useNavigate } from 'react-router-dom';
import { getInstagramServices } from "../../server/services/api";


function Instagram() {
  const navigate = useNavigate();

  const {
    data: services,
    isLoading,
    error,
  } = useQuery({
    queryKey: ['instagramservices'],
    queryFn: getInstagramServices,
  });

  if (isLoading) return <Spinner />;
  if (error) return <div className="text-center py-10 text-red-500">خطا در دریافت خدمات</div>;

  const toPathMap = {
    'کارت ویزیت': '/visitcard',
    'تراکت': '/tracket',
    'سربرگ': '/header',
    'بروشور': '/brochure',
    'ست اداری': '/officeset',
    'لیبل': '/lable',
    'بگ کاغذی': '/paperbag',
    'فولدر': '/folder',
    'ظرف غذا': '/food',
    'پوستر': '/poster',
    'فاکتور': '/factor',
    'پاکت': '/packet'
  };

  function handleServiceClick(service) {
    const path = toPathMap[service.name];
    if (path) {
      navigate(path);
    } else {
      navigate('*');
    }
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-6">خدمات یوتیوب و آپارات</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {services?.map((service) => (
          <div
            key={service.id}
            onClick={() => handleServiceClick(service)}
            className="bg-white p-4 rounded-lg shadow hover:shadow-md transition cursor-pointer"
          >
            <h3 className="font-semibold text-lg">{service.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Instagram;