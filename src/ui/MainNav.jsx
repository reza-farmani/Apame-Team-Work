import { NavLink } from 'react-router-dom';

function MainNav() {
  return (
    <nav className="rtl">
      <ul className="flex list-none p-0 m-0 gap-4 px-4 py-3">
        {[
          { to: '/dashboard',  text: 'خانه' },
          { to: '/print-services',  text: 'خدمات چاپ' },
          { to: '/web-design',  text: 'سایت و سئو' },
          { to: '/social-media',  text: 'سوشال مدیا' },
          { to: '/board',  text: 'خدمات تابلو و لیزر' },
          { to: '/graphic-design',  text: 'طراحی گرفیک' },
          { to: '/photography',  text: 'عکاسی و فیلمبرداری' },
        ].map((item) => (
          <li key={item.to} className="flex items-center">
            <NavLink
              to={item.to}
              className={({ isActive }) =>
                `flex items-center no-underline p-2 rounded transition-colors ${
                  isActive ? 'bg-gray-200 font-bold text-gray-800' : 'text-gray-600 hover:bg-gray-100'
                }`
              }
            >
              <span>{item.text}</span>
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default MainNav;