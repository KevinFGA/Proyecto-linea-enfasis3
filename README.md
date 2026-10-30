# Línea de Énfasis 3 — React + Vite

Migración de la plantilla académica suministrada (cinco páginas HTML + CSS) a React 19, Vite, Tailwind CSS 4 y React Router 7. Se conservan los textos originales y los colores de la plantilla. La interfaz inicial está en español; se incluye traducción base al inglés.

## Requisitos

- Node.js **22 o superior**
- npm
- Visual Studio Code (recomendado)

## Instalación

```bash
npm install
cp .env.example .env  # Windows PowerShell: Copy-Item .env.example .env
npm run dev
```

Abre la URL que indique Vite (normalmente `http://localhost:5173`). No abras `index.html` directamente: Vite necesita un servidor de desarrollo.

## Comandos

```bash
npm run dev           # Desarrollo
npm run build         # Generar dist/
npm run preview       # Vista previa de producción
npm run lint          # ESLint
npm test              # Pruebas unitarias
npm run test:coverage # Cobertura
```

## Dónde editar

- `src/data/content.js`: tarjetas de temas, conceptos y casos.
- `src/plugins/i18n.js`: encabezados, botones, traducciones y texto del proyecto.
- `src/views/`: las cinco páginas.
- `src/components/`: cabecera, menú, hero y tarjetas reutilizables.
- `src/styles.css`: paleta de colores mediante Tailwind 4 `@theme`.
- `src/router.jsx`: rutas, navegación y carga diferida por página.
- `src/plugins/axios.js`: cliente HTTP preparado para integrar un backend.

## Estándares

Basado en [Stack Frontend — Asincode SAS](https://github.com/asincode-sas/wiki/wiki/Stack-Frontend): código en inglés, carpetas kebab-case, componentes PascalCase, utilidades camelCase, comillas simples, Vite, React, Router, Tailwind 4, Axios, i18next, Zod, Vitest, ESLint y configuración de CI/Husky. La página original no ofrece contenido académico detallado: las unidades, conceptos y casos siguen como marcadores editables.

**Nota:** la configuración de Axios y Zod queda disponible para un backend futuro; no se inventaron APIs ni formularios inexistentes. La aplicación usa rutas SPA: para desplegarla hay que redirigir las rutas no encontradas hacia `index.html`.
