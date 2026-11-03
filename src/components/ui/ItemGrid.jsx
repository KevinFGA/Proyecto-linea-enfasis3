import CyberIcon from './CyberIcon';

export default function ItemGrid({
  items,
  prefix = 'MODULE',
}) {
  return (
    <section
      className="mt-7 grid gap-5 md:grid-cols-2 lg:grid-cols-3"
      aria-label="Contenido"
    >
      {items.map((item, index) => (
        <article
          key={`${prefix}-${index}`}
          className="cyber-panel group relative overflow-hidden rounded-xl p-7 transition duration-200 hover:-translate-y-1 hover:border-brand/65"
        >
          <div className="flex items-start justify-between">
           <span className="mono text-[11px] font-bold tracking-[.16em] text-brand">
            {prefix} {'//'} {String(index + 1).padStart(2, '0')}
           </span>

            <CyberIcon
              name="terminal"
              size={20}
              className="text-[#678174] transition group-hover:text-brand"
            />
          </div>

          <div className="mt-9 h-[1px] bg-gradient-to-r from-brand/60 via-[#365042] to-transparent" />

          <h2 className="mt-6 text-xl font-bold text-white">
            {item}
          </h2>

          <p className="mono mt-5 text-[11px] text-[#85999c]">
            &gt; ACCESS_GRANTED
            <span className="ml-1 text-brand">_</span>
          </p>
        </article>
      ))}
    </section>
  );
}
