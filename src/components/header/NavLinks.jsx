import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { navigationItems } from '../../data/navigation';

export default function NavLinks() {
  const { t } = useTranslation();
  return (
    <div className="sticky top-0 z-20 border-b border-brand/40 bg-deep/95 backdrop-blur-lg">
      <nav aria-label="Principal" className="mx-auto flex max-w-6xl flex-wrap justify-center gap-2 px-3 py-3">
        {navigationItems.map(({ key, path, icon }) => (
          <NavLink key={key} to={path} end={path === '/'} className={({ isActive }) => `flex min-w-32 items-center justify-center gap-2 rounded-xl border px-4 py-3 font-bold transition hover:-translate-y-0.5 hover:border-brand sm:min-w-40 ${isActive ? 'border-brand bg-brand text-deep' : 'border-brand/15 text-brand-soft hover:bg-brand/10'}`}>
            <span aria-hidden="true">{icon}</span>{t(`navigation.${key}`)}
          </NavLink>
        ))}
      </nav>
    </div>
  );
}
