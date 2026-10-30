import { useTranslation } from 'react-i18next';
import NavLinks from './NavLinks';

export default function Header() {
  const { t, i18n } = useTranslation();
  return (
    <>
      <header className="border-b border-brand/20 px-5 py-8 text-center">
        <div className="mx-auto flex max-w-6xl flex-col items-center">
          <div className="flex h-[70px] w-[70px] items-center justify-center rounded-2xl border border-brand text-3xl font-extrabold text-brand">L3</div>
          <p className="mt-4 text-2xl font-extrabold tracking-wider sm:text-4xl">{t('brand.title')}</p>
          <p className="mt-2 text-brand-soft">{t('brand.subtitle')}</p>
          <div className="mt-4 flex items-center gap-2 text-sm">
            <button type="button" lang="es" aria-pressed={i18n.language === 'es'} className="rounded-lg border border-brand/40 px-3 py-1 text-brand-soft hover:bg-brand/10" onClick={() => i18n.changeLanguage('es')}>ES</button>
            <button type="button" lang="en" aria-pressed={i18n.language === 'en'} className="rounded-lg border border-brand/40 px-3 py-1 text-brand-soft hover:bg-brand/10" onClick={() => i18n.changeLanguage('en')}>EN</button>
          </div>
        </div>
      </header>
      <NavLinks />
    </>
  );
}
