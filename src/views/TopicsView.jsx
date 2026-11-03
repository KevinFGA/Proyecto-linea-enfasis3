import { useTranslation } from 'react-i18next';
import Hero from '../components/ui/Hero';
import ItemGrid from '../components/ui/ItemGrid';
import { topicItems } from '../data/content';

export default function TopicsView() {
  const { t } = useTranslation();

  return (
    <>
      <Hero
        label="SYSTEM / 01 · TOPICS"
        title={t('topics.heading')}
        description={t('topics.description')}
      />
      <ItemGrid prefix="TOPICS" items={topicItems} />
    </>
  );
}
