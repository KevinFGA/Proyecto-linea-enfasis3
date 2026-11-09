
import Hero from '../components/ui/Hero';
import LearningCard from '../components/ui/LearningCard';
import { caseItems } from '../data/content';

export default function CasesView() {
  return (
    <>
      <Hero
        label="ACADEMIC / LABORATORY"
        title="Laboratorio de casos prácticos"
        description="Aplica los fundamentos de ciberseguridad mediante escenarios educativos de análisis, prevención y gestión de riesgos."
      />

      <div className="mt-7 rounded-lg border border-[#456342] bg-[#15271e] px-6 py-5">
        <p className="mono text-xs font-bold tracking-wider text-brand">
          LABORATORIO ACADÉMICO / USO RESPONSABLE
        </p>

        <p className="mt-2 text-sm leading-7 text-[#c4d3c9]">
          Estos ejercicios son propuestas de aprendizaje basadas en
          los documentos del curso. Deben resolverse mediante análisis,
          buenas prácticas y actividades en entornos autorizados.
        </p>
      </div>

      <section
        className="mt-7 grid gap-5 md:grid-cols-2 xl:grid-cols-3"
        aria-label="Ejercicios prácticos"
      >
        {caseItems.map((item, index) => (
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
