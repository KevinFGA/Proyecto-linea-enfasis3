
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  es: {
    translation: {
      brand: {
        title: 'LÍNEA DE ÉNFASIS III',
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
        eyebrow: 'UNIREMINGTON / LÍNEA DE ÉNFASIS III',
        headlineFirst: 'Aprende a proteger',
        headlineAccent: 'el mundo digital.',
        description:
          'Explora la seguridad de la información, los sistemas operativos, las normas ISO/IEC 27001 y 27002, la inteligencia artificial y la gestión de riesgos mediante contenidos académicos y casos prácticos.',

        explore: 'Explorar temas',
        project: 'Ver proyecto',

        badge1: 'SEGURIDAD DE LA INFORMACIÓN',
        badge2: 'CIBERSEGURIDAD Y HACKING ÉTICO',

        modulesTag: 'RUTAS DE APRENDIZAJE',
        modulesTitle: 'Explora el contenido',
        viewModule: 'VER SECCIÓN',

        features: [
          {
            title: 'Temas de estudio',
            description:
              'Explora los fundamentos de seguridad, normas ISO, sistemas operativos e inteligencia artificial.',
          },
          {
            title: 'Conceptos clave',
            description:
              'Comprende la confidencialidad, integridad, disponibilidad, SGSI, riesgos y tipos de inteligencia artificial.',
          },
          {
            title: 'Casos prácticos',
            description:
              'Aplica tus conocimientos en escenarios educativos de seguridad, prevención de amenazas y gestión de riesgos.',
          },
        ],
      },

      terminal: {
        label: 'Simulación visual de terminal de ciberseguridad',
        initializing: 'Inicializando entorno académico...',
        network: 'Entorno de aprendizaje conectado',
        encryption: 'Controles de seguridad habilitados',
        firewall: 'Exploración segura activa',
        ready: 'SISTEMA LISTO PARA APRENDER',
      },

      topics: {
        heading: 'Temas de ciberseguridad',
        description:
          'Estudia los fundamentos de seguridad de la información, sistemas operativos, ISO/IEC 27001:2022, controles ISO/IEC 27002 y singularidad tecnológica.',
        search: 'Buscar tema',
        category: 'Seleccionar categoría',
        all: 'Todos',
        details: 'Explorar contenido',
        hideDetails: 'Ocultar detalles',
      },

      concepts: {
        heading: 'Glosario de ciberseguridad',
        description:
          'Consulta conceptos fundamentales de seguridad, información, sistemas, gestión de riesgos, controles de acceso e inteligencia artificial.',
        search: 'Buscar concepto',
        searchPlaceholder:
          'Ejemplo: SGSI, riesgo, inteligencia artificial...',
        noResults: 'No se encontraron conceptos con esa búsqueda.',
        results: 'Conceptos encontrados',
      },

      cases: {
        heading: 'Laboratorio de casos prácticos',
        description:
          'Aplica los fundamentos de ciberseguridad mediante escenarios educativos de análisis, prevención, protección y gestión de riesgos.',
        warningTitle: 'LABORATORIO ACADÉMICO / USO RESPONSABLE',
        warningDescription:
          'Estos ejercicios tienen fines educativos y deben desarrollarse en entornos autorizados, respetando las buenas prácticas de seguridad.',
      },

      project: {
        heading: 'Línea de Énfasis III',
        description:
          'Consulta los objetivos del curso, las unidades académicas, las actividades evaluativas y el espacio destinado al proyecto final.',

        subheading: 'Proyecto final',

        placeholder:
          'Espacio para documentar el planteamiento del problema, objetivos, metodología, desarrollo, resultados y conclusiones del proyecto.',

        objectivesTitle: 'Propósito general del curso',
        unitsTitle: 'Plan de estudio',
        evaluationsTitle: 'Actividades evaluativas',
        finalTitle: 'Proyecto académico final',

        objectives: [
          'Comprender cómo operan los sistemas operativos y los criterios de seguridad aplicables.',
          'Identificar las amenazas más comunes de los sistemas operativos.',
          'Comprender las técnicas necesarias para proteger los sistemas operativos.',
        ],
      },

      learning: {
        mainPoints: 'Puntos principales',
        source: 'Fuente documental',
        pages: 'Páginas',
        explore: 'Explorar contenido',
        collapse: 'Ocultar detalles',
      },

      sources: {
        class:
          'Presentación Clase 1 — Seguridad de la Información y Sistemas Operativos',
        iso27001: 'ISO/IEC 27001:2022',
        iso27002: 'GTC-ISO/IEC 27002 — ICONTEC 2015',
        singularity: 'Singularidad Tecnológica',
      },

      footer: 'PORTAL ACADÉMICO DE CIBERSEGURIDAD',

      notFound: {
        heading: 'Página no encontrada',
        action: 'Volver al inicio',
      },
    },
  },

  en: {
    translation: {
      brand: {
        title: 'FOCUS AREA III',
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
        eyebrow: 'UNIREMINGTON / FOCUS AREA III',
        headlineFirst: 'Learn to protect',
        headlineAccent: 'the digital world.',
        description:
          'Explore information security, operating systems, ISO/IEC 27001 and 27002 standards, artificial intelligence and risk management through academic content and practical cases.',

        explore: 'Explore topics',
        project: 'View project',

        badge1: 'INFORMATION SECURITY',
        badge2: 'CYBERSECURITY AND ETHICAL HACKING',

        modulesTag: 'LEARNING PATHS',
        modulesTitle: 'Explore the content',
        viewModule: 'VIEW SECTION',

        features: [
          {
            title: 'Study topics',
            description:
              'Explore security fundamentals, ISO standards, operating systems and artificial intelligence.',
          },
          {
            title: 'Key concepts',
            description:
              'Understand confidentiality, integrity, availability, ISMS, risks and types of artificial intelligence.',
          },
          {
            title: 'Practical cases',
            description:
              'Apply your knowledge to educational scenarios involving security, threat prevention and risk management.',
          },
        ],
      },

      terminal: {
        label: 'Cybersecurity terminal visual simulation',
        initializing: 'Initializing academic environment...',
        network: 'Learning environment connected',
        encryption: 'Security controls enabled',
        firewall: 'Safe exploration active',
        ready: 'SYSTEM READY TO LEARN',
      },

      topics: {
        heading: 'Cybersecurity topics',
        description:
          'Study information security fundamentals, operating systems, ISO/IEC 27001:2022, ISO/IEC 27002 controls and technological singularity.',
        search: 'Search topic',
        category: 'Select category',
        all: 'All',
        details: 'Explore content',
        hideDetails: 'Hide details',
      },

      concepts: {
        heading: 'Cybersecurity glossary',
        description:
          'Explore fundamental concepts of security, information, systems, risk management, access controls and artificial intelligence.',
        search: 'Search concept',
        searchPlaceholder:
          'Example: ISMS, risk, artificial intelligence...',
        noResults: 'No concepts matched your search.',
        results: 'Concepts found',
      },

      cases: {
        heading: 'Practical case laboratory',
        description:
          'Apply cybersecurity fundamentals through educational scenarios involving analysis, prevention, protection and risk management.',
        warningTitle: 'ACADEMIC LABORATORY / RESPONSIBLE USE',
        warningDescription:
          'These exercises are for educational purposes and must be carried out in authorized environments following security best practices.',
      },

      project: {
        heading: 'Focus Area III',
        description:
          'Explore the course objectives, academic units, assessment activities and final project workspace.',

        subheading: 'Final project',

        placeholder:
          'Workspace for documenting the problem statement, objectives, methodology, development, results and conclusions.',

        objectivesTitle: 'General course objectives',
        unitsTitle: 'Course syllabus',
        evaluationsTitle: 'Assessment activities',
        finalTitle: 'Final academic project',

        objectives: [
          'Understand how operating systems work and the applicable security criteria.',
          'Identify the most common threats affecting operating systems.',
          'Understand techniques for securing operating systems.',
        ],
      },

      learning: {
        mainPoints: 'Main points',
        source: 'Document source',
        pages: 'Pages',
        explore: 'Explore content',
        collapse: 'Hide details',
      },

      sources: {
        class:
          'Class 1 Presentation — Information Security and Operating Systems',
        iso27001: 'ISO/IEC 27001:2022',
        iso27002: 'GTC-ISO/IEC 27002 — ICONTEC 2015',
        singularity: 'Technological Singularity',
      },

      footer: 'CYBERSECURITY ACADEMIC PORTAL',

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
  supportedLngs: ['es', 'en'],
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
