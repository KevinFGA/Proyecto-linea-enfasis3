
import { useState } from 'react';
import Hero from '../components/ui/Hero';
import LearningCard from '../components/ui/LearningCard';
import { conceptItems } from '../data/content';

export default function ConceptsView() {
  const [search, setSearch] = useState('');

  const normalizedSearch = search.toLocaleLowerCase('es').trim();

  const filteredItems = conceptItems.filter((item) => {
    const content = [
      item.title,
      item.description,
      item.category,
      ...item.points,
    ]
      .join(' ')
      .toLocaleLowerCase('es');

    return content.includes(normalizedSearch);
  });

  return (
    <>
      <Hero
        label="ACADEMIC / CONCEPTS"
        title="Glosario de ciberseguridad"
        description="Consulta los principales conceptos de seguridad de la información, gestión de riesgos e inteligencia artificial."
      />

      <section className="mt-8">
        <label
          htmlFor="concept-search"
          className="mono block text-xs font-bold tracking-wider text-brand"
        >
          BUSCAR CONCEPTO
        </label>

        <input
          id="concept-search"
          type="search"
          value={search}
          onChange={(event) => setSearch(event.target.value)}
          placeholder="Ejemplo: SGSI, riesgo, inteligencia artificial..."
          className="mt-3 w-full rounded-lg border border-[#365346] bg-[#111c25] px-5 py-4 text-white outline-none placeholder:text-[#82959d] focus:border-brand"
        />

        <p className="mono mt-3 text-xs text-[#94a9aa]">
          {filteredItems.length} CONCEPTOS ENCONTRADOS
        </p>
      </section>

      {filteredItems.length > 0 ? (
        <section
          className="mt-7 grid gap-5 md:grid-cols-2 xl:grid-cols-3"
          aria-label="Resultados del glosario"
        >
          {filteredItems.map((item, index) => (
            <LearningCard
              key={item.id}
              item={item}
              index={index}
            />
          ))}
        </section>
      ) : (
        <div className="cyber-panel mt-7 rounded-lg p-8 text-center text-[#bbcacd]">
          No se encontraron conceptos con esa búsqueda.
        </div>
      )}
    </>
  );
}
