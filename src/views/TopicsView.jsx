import { useTranslation } from 'react-i18next';
import Hero from '../components/ui/Hero';
import ItemGrid from '../components/ui/ItemGrid';
import { topicItems } from '../data/content';

export default function TopicsView() {
  const { t } = useTranslation();
  return <><Hero title={t('topics.heading')} /><ItemGrid items={topicItems} /></>;
}
