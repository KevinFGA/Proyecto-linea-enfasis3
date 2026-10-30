import { useTranslation } from 'react-i18next';
import Hero from '../components/ui/Hero';
import ItemGrid from '../components/ui/ItemGrid';
import { caseItems } from '../data/content';

export default function CasesView() {
  const { t } = useTranslation();
  return <><Hero title={t('cases.heading')} /><ItemGrid items={caseItems} /></>;
}
