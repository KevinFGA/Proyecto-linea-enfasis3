import { useTranslation } from 'react-i18next';
import Hero from '../components/ui/Hero';
import ItemGrid from '../components/ui/ItemGrid';
import { caseItems } from '../data/content';

export default function CasesView() {
  const { t } = useTranslation();

  return (
    <>
      <Hero
        label="SYSTEM / 03 · CASES"
        title={t('cases.heading')}
        description={t('cases.description')}
      />
      <ItemGrid prefix="CASES" items={caseItems} />
    </>
  );
}
