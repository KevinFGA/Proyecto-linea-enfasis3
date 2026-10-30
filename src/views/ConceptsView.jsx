import { useTranslation } from 'react-i18next';
import Hero from '../components/ui/Hero';
import ItemGrid from '../components/ui/ItemGrid';
import { conceptItems } from '../data/content';

export default function ConceptsView() {
  const { t } = useTranslation();
  return <><Hero title={t('concepts.heading')} /><ItemGrid items={conceptItems} /></>;
}
