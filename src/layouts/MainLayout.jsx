import { Outlet } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Header from '../components/header/Header';

export default function MainLayout() {
  const { t } = useTranslation();
  return <div className="flex min-h-screen flex-col"><Header /><main className="mx-auto w-full max-w-6xl flex-1 px-5 py-12"><Outlet /></main><footer className="mt-12 border-t border-brand/25 px-5 py-8 text-center text-brand-soft">{t('footer')}</footer></div>;
}
