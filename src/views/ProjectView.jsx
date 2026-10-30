import { useTranslation } from 'react-i18next';
import Hero from '../components/ui/Hero';

export default function ProjectView() {
  const { t } = useTranslation();
  return <><Hero title={t('project.heading')} /><section className="mt-8 rounded-2xl border border-brand/40 bg-deep/70 p-8">{t('project.placeholder')}</section></>;
}
