import { getBoardServices, getGraphicServices, getMotionServices, getPrintingServices, getShootingServices, getSocialMediaServices, getWebServices } from '../server/services/api';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';

function MainNav() {
  const [hoveredItem, setHoveredItem] = useState(null);

  const { data: printingServices = [] } = useQuery({
    queryKey: ['printingServices'],
    queryFn: getPrintingServices,
  });

  const printingSubItems = printingServices.map(service => ({
    to: `${service.sub}`, 
    text: service.name,
  }));

  const { data: boardServices = [] } = useQuery({
    queryKey: ['boardServices'],
    queryFn: getBoardServices,
  });

  const boardSubItems = boardServices.map(service => ({
    to: `${service.sub}`, 
    text: service.name,
  }));

    const { data: graphicServices = [] } = useQuery({ 
      queryKey: ['graphicservices'],
      queryFn: getGraphicServices,
    });

  const graphicSubItems = graphicServices.map(service => ({
     to: `${service.sub}`, 
     text: service.name,
   }));

     const { data: shootingServices = [] } = useQuery({
       queryKey: ['shootingservices'],
       queryFn: getShootingServices,
     });

   const shootingSubItems = shootingServices.map(service => ({
      to: `${service.sub}`, 
      text: service.name,
     }));

    const { data: socialServices = [] } = useQuery({
       queryKey: ['socialmediaservices'],
       queryFn: getSocialMediaServices,
    });

    const socialMediaSubItems = socialServices.map(service => ({
      to: `${service.sub}`, 
      text: service.name,
     }));

     const { data: webServices = [] } = useQuery({
       queryKey: ['webservices'],
       queryFn: getWebServices,
      });

     const webSubItems = webServices.map(service => ({
       to: `${service.sub}`, 
       text: service.name,
      }));

     const { data: motionServices = [] } = useQuery({
      queryKey: ['motionservices'],
      queryFn: getMotionServices,
      });

     const motionSubItems = motionServices.map(service => ({
       to: `${service.sub}`, 
       text: service.name,
      }));

  const navItems = [
    { 
      to: '/dashboard', 
      text: 'خانه',
      subItems: [],
      click: true
    },
    { 
      text: 'خدمات چاپ',
      subItems: printingSubItems,
      click: false
    },
    { 
      text: 'سایت و سئو',
      subItems: webSubItems,
      click: false
    },
    { 
      to: '/social-media', 
      text: 'سوشال مدیا',
      subItems: socialMediaSubItems,
      click: false
    },
    { 
      text: ' تابلو و لیزر',
      subItems: boardSubItems,
      click: false
    },
    { 
      text: 'طراحی گرافیک',
      subItems: graphicSubItems,
      click: false
    },
    { 
      text: 'عکاسی و فیلمبرداری',
      subItems: shootingSubItems,
      click: false
    },
    { 
      to: '/p', 
      text: 'موشن گرافی',
      subItems: motionSubItems,
      click: false
    },
    { 
      to: '/ph', 
      text: 'مقالات',
      subItems: [],
      click: true
    },
    { 
      to: '/pho', 
      text: 'درباره ی ما',
      subItems: [],
      click: true
    }
  ];

  return (
    <nav className="">
      <div className='w-[73%] h-16 rounded-b-2xl bg-[#A9C7E1] m-auto flex items-center justify-evenly'>
      <ul className="flex list-none p-0 m-0 gap-7 px-4 py-4">
        {navItems.map((item) => (
          <li 
            key={item.to || item.text} 
            className="flex items-center relative"
            onMouseEnter={() => setHoveredItem(item.to || item.text)}
            onMouseLeave={() => setHoveredItem(null)}
          >
            {item.click ? (
              <NavLink
                to={item.to}
                className={({ isActive }) =>
                  `flex items-center no-underline py-1 px-2 rounded-xl transition-colors fontBold justify-center pt-2 duration-300 ${
                    isActive ? 'bg-gray-200 font-bold text-[#040911] navbar-hover-shadow' : 'text-[#040911] hover:bg-[#eef4f9] hover:navbar-hover-shadow'
                  }`
                }
              >
                <span className='fontBold flex items-center justify-center pt-2 duration-300'>{item.text}</span>
              </NavLink>
            ) : (
              <div
                className={`flex items-center px-[6px] py-[6px] rounded cursor-pointer duration-300 ${
                  hoveredItem === (item.to || item.text) ? 'text-gray-800 hover:bg-[#eef4f9] rounded-2xl' : 'text-[#040911]'
                }`}
              >
                <span className='fontBold flex items-center justify-center pt-2 duration-300'>{item.text}</span>
                {item.subItems.length > 0 && (
                  <svg 
                    className="w-4 h-4 mr-1 transition-transform duration-200"
                    style={{ transform: hoveredItem === (item.to || item.text) ? 'rotate(180deg)' : 'rotate(0deg)' }}
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                )}
              </div>
            )}

            {hoveredItem === (item.to || item.text) && item.subItems.length > 0 && (
              <div className={`absolute ${
                   item.text === "عکاسی و فیلمبرداری" ? "top-[110%]" : "top-[100%]"
                  } w-56 bg-[#dde9f3] border border-gray-200 rounded-md shadow-lg z-50 py-1`}
                  style={{
                  transform: item.text === "عکاسی و فیلمبرداری" ? "translateY(-5px)" : "none"
                 }}>
                {item.subItems.map((subItem) => (
                  <NavLink
                    key={subItem.to}
                    to={subItem.to}
                    className={({ isActive }) =>
                      `block px-4 py-2 no-underline transition-colors ${
                        isActive ? 'bg-blue-50 text-blue-600 font-medium' : 'text-gray-700 hover:bg-[#ffffff]'
                      }`
                    }
                  >
                    {subItem.text}
                  </NavLink>
                ))}
              </div>
            )}
          </li>
        ))}
      </ul>
      </div>
    </nav>
  );
}

export default MainNav;
