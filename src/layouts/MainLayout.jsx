
import { Outlet } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Header from '../components/header/Header';
import CyberIcon from '../components/ui/CyberIcon';

export default function MainLayout() {
  const { t } = useTranslation();

  return (
    <div className="cyber-shell flex min-h-screen flex-col">
      <Header />

      <main className="mx-auto w-full max-w-7xl flex-1 px-5 py-9 lg:px-8">
        <Outlet />
      </main>

      <footer className="mt-12 border-t border-[#293840] bg-[#080d13] px-5 py-7">
        <div className="mono mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-3 text-[11px] tracking-wider text-[#83999c]">
          <span className="flex items-center gap-2">
            <CyberIcon
              name="shield"
              size={15}
              className="text-brand"
            />
            CYBER
            <span className="text-brand">{'//'}</span>
            LAB · {t('footer')}
          </span>

          <span className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-brand" />
            {t('brand.status')}
          </span>
        </div>
      </footer>
    </div>
  );
}
