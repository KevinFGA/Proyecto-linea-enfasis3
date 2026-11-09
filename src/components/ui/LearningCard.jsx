
import { useState } from 'react';
import { sourceDocuments } from '../../data/content';
import CyberIcon from './CyberIcon';

export default function LearningCard({ item, index }) {
  const [expanded, setExpanded] = useState(false);
  const source = sourceDocuments[item.source];
  const detailId = `learning-${item.id}`;

  return (
    <article className="cyber-panel flex h-full flex-col rounded-xl p-6">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <span className="cyber-chip">
          {item.category}
        </span>
        <span className="mono text-xs text-[#8ea3a3]">
          {String(index + 1).padStart(2, '0')}
        </span>
      </div>

      <h2 className="mt-5 text-xl font-bold leading-snug text-white">
        {item.title}
      </h2>

      <p className="mt-3 flex-1 text-sm leading-7 text-[#adbdc3]">
        {item.description}
      </p>

      <button
        type="button"
        aria-expanded={expanded}
        aria-controls={detailId}
        onClick={() => setExpanded((current) => !current)}
        className="mono mt-6 flex w-full items-center justify-between rounded-md border border-[#365346] px-4 py-3 text-left text-xs font-bold text-brand transition hover:bg-brand/10"
      >
        <span>
          {expanded ? 'OCULTAR DETALLES' : 'EXPLORAR CONTENIDO'}
        </span>
        <span aria-hidden="true">
          {expanded ? '−' : '+'}
        </span>
      </button>

      {expanded && (
        <div id={detailId} className="mt-5 border-t border-[#2a3c42] pt-5">
          <h3 className="mono text-xs font-bold tracking-wider text-brand">
            PUNTOS PRINCIPALES
          </h3>

          <ul className="mt-4 space-y-3">
            {item.points.map((point) => (
              <li
                key={point}
                className="flex items-start gap-3 text-sm leading-6 text-[#c5d2d0]"
              >
                <CyberIcon
                  name="check"
                  size={17}
                  className="mt-1 shrink-0 text-brand"
                />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      <div className="mono mt-6 border-t border-[#2a3c42] pt-4 text-[11px] leading-5 text-[#90a4a7]">
        <p className="font-bold text-[#c4d2cd]">
          FUENTE DOCUMENTAL
        </p>
        <p className="mt-1">{source.title}</p>
        <p>Documento: páginas {item.pages}</p>
        <p className="mt-1">{source.edition}</p>
      </div>
    </article>
  );
}
