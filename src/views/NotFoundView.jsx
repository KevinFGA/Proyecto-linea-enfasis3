import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Hero from '../components/ui/Hero';

export default function NotFoundView() {
  const { t } = useTranslation();
  return <Hero title={t('notFound.heading')}><Link className="mt-7 inline-block rounded-xl bg-brand px-6 py-3 font-bold text-deep" to="/">{t('notFound.action')}</Link></Hero>;
}
