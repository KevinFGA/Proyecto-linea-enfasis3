
import Hero from '../components/ui/Hero';
import CyberIcon from '../components/ui/CyberIcon';
import {
  courseUnits,
  evaluationItems,
} from '../data/content';

const courseObjectives = [
  'Comprender cómo operan los sistemas operativos y los criterios de seguridad aplicables.',
  'Conocer las amenazas más comunes de los sistemas operativos.',
  'Comprender técnicas para asegurar un sistema operativo.',
];

export default function ProjectView() {
  const totalPercentage = evaluationItems.reduce(
    (total, item) => total + item.percentage,
    0,
  );

  return (
    <>
      <Hero
        label="ACADEMIC / COURSE"
        title="Línea de Énfasis III"
        description="Información académica del curso, unidades de aprendizaje, actividades evaluativas y espacio para el proyecto final."
      />

      <section className="cyber-panel mt-7 rounded-xl p-7">
        <p className="mono text-xs font-bold text-brand">
          UNIREMINGTON / OBJETIVOS
        </p>

        <h2 className="mt-3 text-2xl font-bold text-white">
          Propósito general del curso
        </h2>

        <ul className="mt-6 grid gap-4 md:grid-cols-3">
          {courseObjectives.map((objective) => (
            <li
              key={objective}
              className="rounded-lg border border-[#30453c] bg-[#101d20] p-5"
            >
              <CyberIcon
                name="shield"
                size={25}
                className="mb-4 text-brand"
              />
              <p className="text-sm leading-7 text-[#c5d4d3]">
                {objective}
              </p>
            </li>
          ))}
        </ul>

        <p className="mt-5 text-xs text-[#94a8aa]">
          Fuente: Presentación Clase 1, diapositiva 10.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-bold text-white">
          Plan de estudio
        </h2>

        <div className="cyber-rule mt-4" />

        <div className="mt-6 grid gap-5 md:grid-cols-2">
          {courseUnits.map((unit, index) => (
            <article
              key={unit.title}
              className="cyber-panel rounded-xl p-6"
            >
              <span className="mono text-xs text-brand">
                UNIT_0{index + 1} / {unit.weeks}
              </span>

              <h3 className="mt-3 text-lg font-bold text-white">
                {unit.title}
              </h3>

              <ul className="mt-5 space-y-3">
                {unit.topics.map((topic) => (
                  <li
                    key={topic}
                    className="flex items-start gap-3 text-sm text-[#b6c7c9]"
                  >
                    <CyberIcon
                      name="check"
                      size={16}
                      className="mt-1 shrink-0 text-brand"
                    />
                    <span>{topic}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <p className="mt-4 text-xs text-[#94a8aa]">
          Fuente: Presentación Clase 1, diapositiva 4.
        </p>
      </section>

      <section className="cyber-panel mt-10 overflow-hidden rounded-xl">
        <div className="border-b border-[#30423f] p-6">
          <p className="mono text-xs text-brand">
            EVALUATION / SCHEDULE
          </p>

          <h2 className="mt-2 text-2xl font-bold text-white">
            Actividades evaluativas
          </h2>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full min-w-[480px] text-left text-sm">
            <thead className="bg-[#17251f] text-brand">
              <tr>
                <th scope="col" className="px-6 py-4">
                  Actividad
                </th>
                <th scope="col" className="px-6 py-4">
                  Semana
                </th>
                <th scope="col" className="px-6 py-4">
                  Ponderación
                </th>
              </tr>
            </thead>

            <tbody>
              {evaluationItems.map((item) => (
                <tr
                  key={item.name}
                  className="border-t border-[#2c3a3b]"
                >
                  <td className="px-6 py-4 text-white">
                    {item.name}
                  </td>
                  <td className="px-6 py-4 text-[#b7c9cb]">
                    {item.week}
                  </td>
                  <td className="px-6 py-4 font-bold text-brand">
                    {item.percentage}%
                  </td>
                </tr>
              ))}
            </tbody>

            <tfoot className="border-t border-[#49604d] bg-[#17251f]">
              <tr>
                <th scope="row" colSpan={2} className="px-6 py-4 text-white">
                  Total
                </th>
                <td className="px-6 py-4 font-bold text-brand">
                  {totalPercentage}%
                </td>
              </tr>
            </tfoot>
          </table>
        </div>

        <p className="p-5 text-xs text-[#94a8aa]">
          Fuente: Presentación Clase 1, diapositiva 3.
          La programación debe contrastarse con las indicaciones
          vigentes del docente.
        </p>
      </section>

      <section className="cyber-panel mt-10 rounded-xl p-7">
        <p className="mono text-xs text-brand">
          FINAL PROJECT / WORKSPACE
        </p>

        <div className="mt-4 flex items-start gap-4">
          <CyberIcon
            name="folder"
            size={30}
            className="shrink-0 text-brand"
          />

          <div>
            <h2 className="text-2xl font-bold text-white">
              Proyecto final
            </h2>

            <p className="mt-3 text-sm leading-7 text-[#b8c9c9]">
              Espacio destinado a documentar el proyecto académico:
              planteamiento del problema, objetivos, metodología,
              desarrollo, resultados y conclusiones.
            </p>

            <p className="mt-3 text-sm leading-7 text-[#b8c9c9]">
              Los trabajos deben respetar las condiciones del curso,
              especialmente la originalidad, las referencias académicas
              y las normas APA o IEEE indicadas en clase.
            </p>

            <p className="mt-3 text-xs text-[#94a8aa]">
              Fuente: Presentación Clase 1, diapositivas 6–7.
              La estructura propuesta para documentar el proyecto
              es una sugerencia de organización de esta web.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
