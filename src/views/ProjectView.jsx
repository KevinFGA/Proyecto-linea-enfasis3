
import { useTranslation } from 'react-i18next';
import Hero from '../components/ui/Hero';
import CyberIcon from '../components/ui/CyberIcon';

export default function ProjectView() {
  const { t } = useTranslation();

  return (
    <>
      <Hero
        label="SYSTEM / 04 · PROJECT"
        title={t('project.heading')}
        description={t('project.description')}
      />

      <section className="cyber-panel mt-7 rounded-xl p-8">
        <div className="flex items-center gap-4">
          <span className="flex h-12 w-12 items-center justify-center rounded-lg border border-brand/30 bg-brand/10 text-brand">
            <CyberIcon name="folder" size={25} />
          </span>

          <div>
            <span className="mono text-[11px] tracking-wider text-brand">
              PROJECT / WORKSPACE
            </span>

            <h2 className="mt-1 text-lg font-semibold text-white">
              {t('project.subheading')}
            </h2>
          </div>
        </div>

        <p className="mt-5 border-t border-[#283a40] pt-5 text-[#9cafb6]">
          {t('project.placeholder')}
        </p>
      </section>
    </>
  );
}
