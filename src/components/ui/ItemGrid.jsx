export default function ItemGrid({ items }) {
  return <section className="mt-7 grid gap-5 sm:grid-cols-2 lg:grid-cols-3" aria-label="Contenido">{items.map((item) => <article key={item} className="rounded-2xl border border-brand/40 bg-gradient-to-br from-panel to-deep p-7 text-lg font-bold transition hover:-translate-y-1 hover:border-brand">{item}</article>)}</section>;
}
