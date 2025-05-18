import { useNavigate } from "react-router-dom";

function Dashboard() {
  const navigate = useNavigate();
  
  const serviceCategories = [
    {
      title: "خدمات چاپ",
      icon: "🖨️",
      color: "bg-blue-100 border-blue-300",
      path: "/print-services"
    },
    {
      title: "سایت و سئو",
      icon: "💻",
      color: "bg-purple-100 border-purple-300",
      path: "/web-design" 
    },
    {
      title: "سوشال مدیا",
      icon: "📱",
      color: "bg-green-100 border-green-300",
      path: "/social-media" 
    },
    {
      title: "خدمات تابلو و لیزر",
      icon: "🚧",
      color: "bg-red-100 border-red-300",
      path: "/board" 
    },
    {
      title: "طراحی گرافیک",
      icon: "🎨",
      color: "bg-yellow-100 border-yellow-300",
      path: "/graphic-design" 
    },
    {
      title: "عکاسی و فیلمبرداری",
      icon: "📷",
      color: "bg-indigo-100 border-indigo-300",
      path: "/photography" 
    }
  ];

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-center mb-8">داشبورد</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {serviceCategories.map((category, index) => (
          <div 
            key={index}
            className={`${category.color} border-2 rounded-lg p-5 shadow-md hover:shadow-lg transition-shadow flex flex-col items-center`}
          >
            <div className="flex items-center mb-4">
              <span className="text-2xl mr-3">{category.icon}</span>
              <h2 className="text-xl font-bold">{category.title}</h2>
            </div>
            
            <button 
              onClick={() => navigate(category.path)}
              className="mt-auto w-full py-2 bg-white rounded-lg border border-gray-300 hover:bg-gray-50 transition"
            >
              مشاهده جزئیات
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Dashboard;