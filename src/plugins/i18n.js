
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  es: {
    translation: {
      brand: {
        title: 'LÍNEA DE ÉNFASIS 3',
        status: 'SISTEMA EN LÍNEA',
      },
      navigation: {
        home: 'Inicio',
        topics: 'Temas',
        concepts: 'Conceptos',
        cases: 'Casos prácticos',
        project: 'Proyecto',
      },
      home: {
        eyebrow: 'ENTORNO DE APRENDIZAJE // V3.0',
        headlineFirst: 'El futuro se',
        headlineAccent: 'construye seguro.',
        description:
          'Explora la tecnología desde una nueva perspectiva. Un espacio académico con estética de ciberseguridad, pensamiento crítico y aprendizaje aplicado.',
        explore: 'Explorar temas',
        project: 'Ver proyecto',
        badge1: 'APRENDIZAJE ACTIVO',
        badge2: 'HACKING ÉTICO',
        modulesTag: 'RUTAS DE APRENDIZAJE',
        modulesTitle: 'Explora el contenido',
        viewModule: 'VER SECCIÓN',
        features: [
          {
            title: 'Temas de estudio',
            description:
              'Descubre las unidades y áreas de conocimiento de la asignatura.',
          },
          {
            title: 'Conceptos clave',
            description:
              'Fortalece las bases teóricas y comprende las ideas esenciales.',
          },
          {
            title: 'Casos prácticos',
            description:
              'Conecta la teoría con ejercicios y situaciones aplicadas.',
          },
        ],
      },
      terminal: {
        label: 'Simulación visual de terminal de ciberseguridad',
        initializing: 'Inicializando entorno de aprendizaje...',
        network: 'Entorno académico conectado',
        encryption: 'Buenas prácticas habilitadas',
        firewall: 'Exploración segura activa',
        ready: 'SISTEMA LISTO PARA APRENDER',
      },
      topics: {
        heading: 'Temas de la asignatura',
        description:
          'Explora las unidades que componen esta línea de énfasis.',
      },
      concepts: {
        heading: 'Conceptos clave',
        description:
          'Comprende los conocimientos fundamentales de la asignatura.',
      },
      cases: {
        heading: 'Casos prácticos',
        description:
          'Pasa de la teoría a la práctica mediante ejercicios y análisis.',
      },
      project: {
        heading: 'Proyecto — Video tutorial',
        description:
          'Presenta el trabajo final y documenta el proceso de aprendizaje.',
        subheading: 'Área de proyecto',
        placeholder:
          'Espacio editable para agregar el proyecto y el video tutorial.',
      },
      footer: 'PORTAL ACADÉMICO',
      notFound: {
        heading: 'Página no encontrada',
        action: 'Volver al inicio',
      },
    },
  },
  en: {
    translation: {
      brand: {
        title: 'FOCUS AREA 3',
        status: 'SYSTEM ONLINE',
      },
      navigation: {
        home: 'Home',
        topics: 'Topics',
        concepts: 'Concepts',
        cases: 'Practical cases',
        project: 'Project',
      },
      home: {
        eyebrow: 'LEARNING ENVIRONMENT // V3.0',
        headlineFirst: 'Build a more',
        headlineAccent: 'secure future.',
        description:
          'Explore technology from a new perspective. An academic space with a cybersecurity aesthetic, critical thinking and applied learning.',
        explore: 'Explore topics',
        project: 'View project',
        badge1: 'ACTIVE LEARNING',
        badge2: 'ETHICAL HACKING',
        modulesTag: 'LEARNING PATHS',
        modulesTitle: 'Explore the content',
        viewModule: 'VIEW SECTION',
        features: [
          {
            title: 'Study topics',
            description: 'Discover the units and areas of knowledge in the course.',
          },
          {
            title: 'Core concepts',
            description: 'Build your theoretical foundation.',
          },
          {
            title: 'Practical cases',
            description: 'Connect theory to hands-on exercises.',
          },
        ],
      },
      terminal: {
        label: 'Cybersecurity terminal visual simulation',
        initializing: 'Initializing learning environment...',
        network: 'Academic environment connected',
        encryption: 'Best practices enabled',
        firewall: 'Safe exploration active',
        ready: 'SYSTEM READY TO LEARN',
      },
      topics: {
        heading: 'Course topics',
        description: 'Explore the units covered in this focus area.',
      },
      concepts: {
        heading: 'Key concepts',
        description: 'Learn the fundamental concepts of the course.',
      },
      cases: {
        heading: 'Practical cases',
        description: 'Move from theory to practice.',
      },
      project: {
        heading: 'Project — Video tutorial',
        description: 'Showcase the final academic project.',
        subheading: 'Project area',
        placeholder: 'Editable area for the project and video tutorial.',
      },
      footer: 'ACADEMIC PORTAL',
      notFound: {
        heading: 'Page not found',
        action: 'Back to home',
      },
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'es',
  fallbackLng: 'es',
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
