import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  es: { translation: {
    brand: { title: 'LÍNEA DE ÉNFASIS 3', subtitle: 'Aprendizaje · Tecnología · Innovación' },
    navigation: { home: 'Inicio', topics: 'Temas', concepts: 'Conceptos', cases: 'Casos prácticos', project: 'Proyecto' },
    home: { heading: 'Explora, comprende y lleva tus ideas a la práctica', description: 'Sitio académico editable.', explore: 'Explorar temas', project: 'Proyecto final' },
    topics: { heading: 'Temas de la asignatura' }, concepts: { heading: 'Conceptos clave' },
    cases: { heading: 'Casos prácticos' }, project: { heading: 'Proyecto - Video Tutorial', placeholder: 'Espacio para proyecto y video.' },
    footer: 'Portal académico editable', notFound: { heading: 'Página no encontrada', action: 'Volver al inicio' },
  } },
  en: { translation: {
    brand: { title: 'FOCUS AREA 3', subtitle: 'Learning · Technology · Innovation' },
    navigation: { home: 'Home', topics: 'Topics', concepts: 'Concepts', cases: 'Practical cases', project: 'Project' },
    home: { heading: 'Explore, understand and put your ideas into practice', description: 'Editable academic website.', explore: 'Explore topics', project: 'Final project' },
    topics: { heading: 'Course topics' }, concepts: { heading: 'Key concepts' },
    cases: { heading: 'Practical cases' }, project: { heading: 'Project - Video tutorial', placeholder: 'Space for the project and video.' },
    footer: 'Editable academic portal', notFound: { heading: 'Page not found', action: 'Back to home' },
  } },
};

i18n.use(initReactI18next).init({ resources, lng: 'es', fallbackLng: 'es', interpolation: { escapeValue: false } });
export default i18n;
