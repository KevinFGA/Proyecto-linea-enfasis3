import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Hero from '../components/ui/Hero';

export default function HomeView() {
  const { t } = useTranslation();
  return <Hero title={t('home.heading')} description={t('home.description')}><div className="mt-8 flex flex-wrap justify-center gap-4"><Link className="rounded-xl bg-brand px-6 py-3 font-bold text-deep transition hover:-translate-y-0.5" to="/temas">{t('home.explore')}</Link><Link className="rounded-xl border border-brand px-6 py-3 font-bold text-brand-soft transition hover:-translate-y-0.5" to="/proyecto">{t('home.project')}</Link></div></Hero>;
}
