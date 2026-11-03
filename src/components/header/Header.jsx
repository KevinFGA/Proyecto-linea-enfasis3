import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import CyberIcon from '../ui/CyberIcon';
import NavLinks from './NavLinks';

export default function Header() {
  const { t, i18n } = useTranslation();

  return (
    <>
      <header className="border-b border-[#293740] bg-[#080d13]/95">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-5 py-4 lg:px-8">
          <Link
            to="/"
            className="group flex items-center gap-3"
            aria-label={t('brand.title')}
          >
            <span className="flex h-11 w-11 items-center justify-center rounded-lg border border-brand/45 bg-brand/10 text-brand">
              <CyberIcon name="shield" size={24} />
            </span>

            <span className="flex flex-col leading-tight">
              <span className="mono text-[13px] font-bold tracking-[.12em] text-white">
                CYBER<span className="text-brand">{'//'}</span>LAB
              </span>

              <span className="mono mt-1 text-[10px] tracking-widest text-[#8fa0a8]">
                {t('brand.title')}
              </span>
            </span>
          </Link>

          <div className="flex items-center gap-5">
            <span className="mono hidden items-center gap-2 text-[10px] text-[#9caeb0] sm:flex">
              <span className="h-2 w-2 rounded-full bg-brand shadow-[0_0_10px_#a5ff46]" />
              {t('brand.status')}
            </span>

            <div className="mono flex items-center gap-1 rounded-md border border-[#2b3e44] bg-[#101922] p-1 text-xs">
              {['es', 'en'].map((language) => (
                <button
                  key={language}
                  type="button"
                  lang={language}
                  aria-pressed={i18n.language === language}
                  onClick={() => i18n.changeLanguage(language)}
                  className={`rounded px-3 py-1.5 font-bold transition ${
                    i18n.language === language
                      ? 'bg-brand text-[#10190c]'
                      : 'text-[#9aa9ad] hover:text-brand'
                  }`}
                >
                  {language.toUpperCase()}
                </button>
              ))}
            </div>
          </div>
        </div>
      </header>

      <NavLinks />
    </>
  );
}
