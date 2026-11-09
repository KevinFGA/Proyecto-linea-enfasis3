
import { useState } from 'react';
import Hero from '../components/ui/Hero';
import LearningCard from '../components/ui/LearningCard';
import { topicItems } from '../data/content';

const categories = [
  'Todos',
  'Fundamentos',
  'Sistemas operativos',
  'Normativa',
  'Inteligencia artificial',
  'Gestión de riesgos',
];

export default function TopicsView() {
  const [category, setCategory] = useState('Todos');

  const filteredItems = topicItems.filter(
    (item) => category === 'Todos' || item.category === category,
  );

  return (
    <>
      <Hero
        label="ACADEMIC / TOPICS"
        title="Temas de ciberseguridad"
        description="Explora los fundamentos de seguridad de la información, los sistemas operativos, las normas ISO y los riesgos asociados con la inteligencia artificial."
      />

      <section className="mt-9" aria-label="Filtrar temas">
        <p className="mono mb-4 text-xs font-bold text-brand">
          SELECCIONAR CATEGORÍA
        </p>

        <div className="flex flex-wrap gap-2">
          {categories.map((item) => (
            <button
              key={item}
              type="button"
              aria-pressed={category === item}
              onClick={() => setCategory(item)}
              className={`cyber-btn rounded-md border px-4 py-2 text-sm ${
                category === item
                  ? 'border-brand bg-brand font-bold text-[#07110b]'
                  : 'border-[#35444c] bg-[#131e27] text-[#afc0c5] hover:border-brand'
              }`}
            >
              {item}
            </button>
          ))}
        </div>
      </section>

      <section
        className="mt-7 grid gap-5 md:grid-cols-2 xl:grid-cols-3"
        aria-label="Temas del curso"
      >
        {filteredItems.map((item, index) => (
          <LearningCard
            key={item.id}
            item={item}
            index={index}
          />
        ))}
      </section>
    </>
  );
}
