
import CyberIcon from './CyberIcon';

export default function Hero({
  title,
  description,
  children,
  label = 'SYSTEM / SECTION',
}) {
  return (
    <section className="cyber-panel relative overflow-hidden rounded-xl px-7 py-11 sm:px-12 sm:py-14">
      <div
        aria-hidden="true"
        className="absolute -right-16 -top-32 h-80 w-80 rounded-full border border-brand/10 shadow-[0_0_120px_rgba(165,255,70,.09)]"
      />

      <div className="relative">
        <span className="cyber-chip">
          <CyberIcon name="terminal" size={14} />
          {label}
        </span>

        <h1 className="mt-7 max-w-4xl text-4xl font-extrabold leading-[1.12] tracking-[-.035em] text-white sm:text-5xl">
          {title}
        </h1>

        {description && (
          <p className="mt-5 max-w-2xl text-base leading-8 text-[#adbdc3]">
            {description}
          </p>
        )}

        {children}
      </div>
    </section>
  );
}
