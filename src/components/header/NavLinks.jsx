import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { navigationItems } from '../../data/navigation';
import CyberIcon from '../ui/CyberIcon';

export default function NavLinks() {
  const { t } = useTranslation();

  return (
    <div className="sticky top-0 z-30 border-b border-[#24343c] bg-[#0b1119]/95 backdrop-blur-xl">
      <nav
        aria-label="Principal"
        className="mx-auto flex max-w-7xl gap-1 overflow-x-auto px-3 py-2 sm:px-5 lg:px-8"
      >
        {navigationItems.map(({ key, path, icon }) => (
          <NavLink
            key={key}
            to={path}
            end={path === '/'}
            className={({ isActive }) =>
              `mono flex shrink-0 items-center gap-2 rounded-md border-b-2 px-3 py-3 text-[11px] font-bold uppercase tracking-[.07em] transition sm:px-5 ${
                isActive
                  ? 'border-brand bg-[#17251e] text-brand'
                  : 'border-transparent text-[#9ba9b1] hover:bg-[#152028] hover:text-brand'
              }`
            }
          >
            <CyberIcon name={icon} size={16} />
            {t(`navigation.${key}`)}
          </NavLink>
        ))}
      </nav>
    </div>
  );
}
