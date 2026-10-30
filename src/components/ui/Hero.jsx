export default function Hero({ title, description, children }) {
  return (
    <section className="rounded-3xl border border-brand/40 bg-gradient-to-br from-panel to-background px-6 py-12 text-center shadow-2xl sm:px-10 sm:py-16">
      <h1 className="mx-auto max-w-4xl text-4xl font-extrabold leading-tight sm:text-6xl">{title}</h1>
      {description && <p className="mx-auto mt-6 max-w-3xl text-lg text-brand-soft">{description}</p>}
      {children}
    </section>
  );
}
