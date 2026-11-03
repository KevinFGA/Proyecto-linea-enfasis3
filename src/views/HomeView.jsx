
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import CyberIcon from '../components/ui/CyberIcon';
import CyberTerminal from '../components/ui/CyberTerminal';

const features = [
  { icon: 'shield', path: '/temas' },
  { icon: 'code', path: '/conceptos' },
  { icon: 'globe', path: '/casos-practicos' },
];

export default function HomeView() {
  const { t } = useTranslation();

  return (
    <>
      <section className="grid items-center gap-10 py-6 lg:grid-cols-2 lg:gap-12 lg:py-12">
        <div>
          <span className="cyber-chip">
            <span className="h-1.5 w-1.5 rounded-full bg-brand" />
            {t('home.eyebrow')}
          </span>

          <h1 className="mt-7 text-[clamp(2.8rem,5vw,5.3rem)] font-black leading-[1.04] tracking-[-.055em] text-white">
            {t('home.headlineFirst')}
            <br />
            <span className="cyber-glow text-brand">
              {t('home.headlineAccent')}
            </span>
          </h1>

          <p className="mt-7 max-w-xl text-base leading-8 text-[#a8b8c0] sm:text-lg">
            {t('home.description')}
          </p>

          <div className="mt-9 flex flex-wrap gap-3">
            <Link
              className="cyber-btn inline-flex items-center gap-3 bg-brand px-6 py-3.5 text-sm font-extrabold text-[#0b160a] hover:bg-[#c3ff7d]"
              to="/temas"
            >
              {t('home.explore')}
              <CyberIcon name="arrow" size={18} />
            </Link>

            <Link
              className="cyber-btn inline-flex items-center gap-3 border border-[#465f53] bg-[#142019] px-6 py-3.5 text-sm font-bold text-white hover:border-brand"
              to="/proyecto"
            >
              <CyberIcon name="terminal" size={18} />
              {t('home.project')}
            </Link>
          </div>

          <div className="mono mt-11 flex flex-wrap gap-6 border-t border-[#2e3e43] pt-6 text-[10px] tracking-[.12em] text-[#94a9aa]">
            <span className="flex items-center gap-2">
              <CyberIcon name="check" size={16} className="text-brand" />
              {t('home.badge1')}
            </span>

            <span className="flex items-center gap-2">
              <CyberIcon name="check" size={16} className="text-brand" />
              {t('home.badge2')}
            </span>
          </div>
        </div>

        <CyberTerminal />
      </section>

      <section className="mt-9">
        <div className="flex items-center justify-between gap-4">
          <div>
            <p className="mono text-xs font-bold tracking-[.16em] text-brand">
              {'//'} {t('home.modulesTag')}
            </p>

            <h2 className="mt-2 text-2xl font-bold text-white sm:text-3xl">
              {t('home.modulesTitle')}
            </h2>
          </div>

          <span className="mono hidden text-[11px] text-[#809397] sm:block">
            01 — 03 / MODULES
          </span>
        </div>

        <div className="cyber-rule mt-5" />

        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {features.map(({ icon, path }, index) => (
            <Link
              key={path}
              to={path}
              className="cyber-panel group rounded-xl p-6 transition hover:-translate-y-1 hover:border-brand/60"
            >
              <div className="flex justify-between">
                <span className="flex h-11 w-11 items-center justify-center rounded-lg border border-[#496852] bg-[#183023] text-brand">
                  <CyberIcon name={icon} size={22} />
                </span>

                <span className="mono text-xs text-[#718689]">
                  0{index + 1}
                </span>
              </div>

              <h3 className="mt-6 text-lg font-bold text-[#f1f5f2]">
                {t(`home.features.${index}.title`)}
              </h3>

              <p className="mt-2 text-sm leading-6 text-[#96a7ad]">
                {t(`home.features.${index}.description`)}
              </p>

              <div className="mono mt-6 flex items-center gap-2 text-[11px] font-bold text-brand">
                {t('home.viewModule')}
                <CyberIcon name="arrow" size={15} />
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
