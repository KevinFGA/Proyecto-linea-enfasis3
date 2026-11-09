
export const sourceDocuments = {
  class: {
    title: 'Presentación Clase 1 — Seguridad de la Información y Sistemas Operativos',
    type: 'Presentación académica',
    edition: 'Línea de Énfasis III — UNIREMINGTON',
  },
  iso27001: {
    title: 'ISO/IEC 27001:2022',
    type: 'Norma de requisitos del SGSI',
    edition: 'Edición 2022',
  },
  iso27002: {
    title: 'GTC-ISO/IEC 27002',
    type: 'Guía de controles de seguridad',
    edition: 'ICONTEC 2015 — basada en ISO/IEC 27002:2013',
  },
  singularity: {
    title: 'Singularidad Tecnológica',
    type: 'Material académico',
    edition: 'Inteligencia artificial, ciberseguridad y riesgos',
  },
};

export const topicItems = [
  {
    id: 'information-security',
    category: 'Fundamentos',
    title: 'Seguridad de la información',
    description:
      'La información constituye un activo fundamental. Su protección requiere medidas técnicas, organizacionales y humanas que respondan a los riesgos de una organización.',
    points: [
      'Importancia de la información como activo.',
      'Amenazas en entornos digitales y conectados.',
      'Protección de información física y digital.',
      'Responsabilidad de toda la organización.',
    ],
    source: 'class',
    pages: '19–24',
  },
  {
    id: 'operating-systems',
    category: 'Sistemas operativos',
    title: 'Seguridad en sistemas operativos',
    description:
      'El curso propone conocer cómo operan los sistemas operativos, identificar sus amenazas y comprender las técnicas para protegerlos.',
    points: [
      'Seguridad y protección de sistemas.',
      'Control de acceso a recursos y servicios.',
      'Amenazas, intrusos y mecanismos de detección.',
      'Modelos de protección y cifrado de datos.',
    ],
    source: 'class',
    pages: '4 y 10',
  },
  {
    id: 'iso27001',
    category: 'Normativa',
    title: 'ISO/IEC 27001:2022',
    description:
      'Establece requisitos para crear, implementar, mantener y mejorar un Sistema de Gestión de Seguridad de la Información (SGSI).',
    points: [
      'Contexto y partes interesadas.',
      'Liderazgo, políticas y responsabilidades.',
      'Evaluación y tratamiento de riesgos.',
      'Seguimiento, auditoría y mejora continua.',
    ],
    source: 'iso27001',
    pages: '3–14',
  },
  {
    id: 'iso27002',
    category: 'Normativa',
    title: 'Controles de ISO/IEC 27002',
    description:
      'La guía colombiana de 2015 explica controles de seguridad y orientaciones para seleccionarlos e implementarlos según los riesgos identificados.',
    points: [
      'Políticas de seguridad y gestión de activos.',
      'Control de acceso y criptografía.',
      'Seguridad operacional y de comunicaciones.',
      'Gestión de incidentes y continuidad.',
    ],
    source: 'iso27002',
    pages: '5–8, 12–13',
  },
  {
    id: 'iso-annex',
    category: 'Normativa',
    title: 'Controles del Anexo A de 2022',
    description:
      'El Anexo A de ISO/IEC 27001:2022 organiza controles de referencia en cuatro categorías. Su aplicación se considera dentro del tratamiento de riesgos.',
    points: [
      'Controles organizacionales.',
      'Controles de personas.',
      'Controles físicos.',
      'Controles tecnológicos.',
    ],
    source: 'iso27001',
    pages: '15–27',
  },
  {
    id: 'singularity',
    category: 'Inteligencia artificial',
    title: 'Singularidad tecnológica',
    description:
      'Hipótesis sobre un posible futuro en el que la inteligencia artificial alcance o supere capacidades cognitivas humanas y pueda mejorar su propio diseño.',
    points: [
      'Desarrollo acelerado de capacidades de IA.',
      'Inteligencia artificial especializada (ANI).',
      'Inteligencia artificial general (AGI).',
      'Superinteligencia artificial (ASI).',
    ],
    source: 'singularity',
    pages: '2–5',
  },
  {
    id: 'ai-threats',
    category: 'Inteligencia artificial',
    title: 'Riesgos de ciberseguridad asociados con IA',
    description:
      'La IA introduce nuevos escenarios de riesgo relacionados con suplantación, automatización, manipulación de datos y sistemas de decisión.',
    points: [
      'Campañas de phishing personalizadas.',
      'Deepfakes y suplantación de identidad.',
      'Envenenamiento de datos de entrenamiento.',
      'Robo de modelos y desinformación.',
    ],
    source: 'singularity',
    pages: '6–7',
  },
  {
    id: 'ai-governance',
    category: 'Gestión de riesgos',
    title: 'Gobierno y supervisión de IA',
    description:
      'El material académico propone gestionar los riesgos de la inteligencia artificial mediante supervisión, auditoría y políticas de protección.',
    points: [
      'Gobierno corporativo de IA.',
      'Supervisión humana en decisiones críticas.',
      'Auditorías y monitoreo de modelos.',
      'Formación ética y técnica de usuarios.',
    ],
    source: 'singularity',
    pages: '7–8',
  },
];

export const conceptItems = [
  {
    id: 'security',
    category: 'Fundamentos',
    title: 'Seguridad',
    description:
      'Condición asociada con la protección frente a peligros y con el mantenimiento de los riesgos dentro de niveles considerados aceptables.',
    points: [
      'Prevenir daños o pérdidas.',
      'Identificar situaciones de riesgo.',
      'Aplicar medidas de protección.',
    ],
    source: 'class',
    pages: '11–12',
  },
  {
    id: 'information',
    category: 'Fundamentos',
    title: 'Información',
    description:
      'Conjunto organizado de datos que permite obtener conocimiento y comunicar mensajes relevantes para una persona u organización.',
    points: [
      'Puede expresarse en diferentes formatos.',
      'Tiene valor para las personas y organizaciones.',
      'Requiere protección durante su ciclo de vida.',
    ],
    source: 'class',
    pages: '13–14',
  },
  {
    id: 'system',
    category: 'Fundamentos',
    title: 'Sistema',
    description:
      'Conjunto de componentes relacionados que interactúan para formar una unidad organizada.',
    points: [
      'Integra componentes interdependientes.',
      'Puede incluir elementos físicos o conceptuales.',
      'Su funcionamiento depende de sus relaciones.',
    ],
    source: 'class',
    pages: '15–16',
  },
  {
    id: 'operational',
    category: 'Fundamentos',
    title: 'Operativo',
    description:
      'Se refiere a aquello que está preparado para funcionar o a las acciones organizadas para conseguir un objetivo.',
    points: [
      'Implica ejecución de actividades.',
      'Se relaciona con procedimientos y operaciones.',
      'Persigue resultados determinados.',
    ],
    source: 'class',
    pages: '17–18',
  },
  {
    id: 'cia',
    category: 'Seguridad de la información',
    title: 'Confidencialidad, integridad y disponibilidad',
    description:
      'Son las tres propiedades centrales de la seguridad de la información que un SGSI busca preservar.',
    points: [
      'Confidencialidad: evitar divulgaciones no autorizadas.',
      'Integridad: proteger la exactitud y completitud de la información.',
      'Disponibilidad: asegurar acceso cuando se necesita.',
    ],
    source: 'iso27001',
    pages: '2',
  },
  {
    id: 'isms',
    category: 'Gestión',
    title: 'Sistema de Gestión de Seguridad de la Información',
    description:
      'Conjunto de procesos, políticas y responsabilidades orientados a gestionar de forma sistemática los riesgos de seguridad de la información.',
    points: [
      'Definir contexto, alcance y objetivos.',
      'Evaluar y tratar riesgos.',
      'Medir resultados y realizar auditorías.',
      'Mejorar continuamente.',
    ],
    source: 'iso27001',
    pages: '3–14',
  },
  {
    id: 'risk',
    category: 'Gestión de riesgos',
    title: 'Evaluación y tratamiento de riesgos',
    description:
      'Proceso para identificar riesgos sobre la información, analizar sus posibles consecuencias y probabilidades, priorizarlos y determinar acciones.',
    points: [
      'Identificar riesgos y responsables.',
      'Analizar consecuencias y probabilidad.',
      'Comparar con criterios establecidos.',
      'Seleccionar y documentar tratamientos.',
    ],
    source: 'iso27001',
    pages: '7–8',
  },
  {
    id: 'access',
    category: 'Controles',
    title: 'Control de acceso',
    description:
      'Conjunto de reglas y medidas para limitar el acceso físico o lógico a la información y otros activos según las autorizaciones.',
    points: [
      'Establecer permisos.',
      'Administrar identidades.',
      'Revisar y retirar accesos.',
    ],
    source: 'iso27001',
    pages: '16–17',
  },
  {
    id: 'incident',
    category: 'Controles',
    title: 'Gestión de incidentes',
    description:
      'Preparación, evaluación, respuesta y aprendizaje ante eventos que puedan afectar la seguridad de la información.',
    points: [
      'Definir responsables y procedimientos.',
      'Determinar si un evento es incidente.',
      'Responder y preservar evidencias.',
      'Mejorar los controles tras el incidente.',
    ],
    source: 'iso27001',
    pages: '18',
  },
  {
    id: 'ani',
    category: 'Inteligencia artificial',
    title: 'ANI — Inteligencia artificial especializada',
    description:
      'IA diseñada para tareas concretas. El documento presenta asistentes virtuales, recomendaciones y reconocimiento facial como ejemplos.',
    points: [
      'Enfocada en tareas específicas.',
      'Aplicaciones especializadas.',
      'No equivale a inteligencia general.',
    ],
    source: 'singularity',
    pages: '3 y 5',
  },
  {
    id: 'agi',
    category: 'Inteligencia artificial',
    title: 'AGI — Inteligencia artificial general',
    description:
      'Concepto de IA capaz de aprender y resolver problemas en distintos contextos con una flexibilidad comparable a la inteligencia humana.',
    points: [
      'Capacidad de aprendizaje general.',
      'Aplicación en diferentes contextos.',
      'Presentada en el material como una capacidad aún no alcanzada.',
    ],
    source: 'singularity',
    pages: '4–5',
  },
  {
    id: 'asi',
    category: 'Inteligencia artificial',
    title: 'ASI — Superinteligencia artificial',
    description:
      'Sistema hipotético que superaría las capacidades humanas en razonamiento, creatividad y resolución de problemas complejos.',
    points: [
      'Concepto hipotético.',
      'Capacidades superiores a las humanas.',
      'Relacionado con el debate sobre singularidad tecnológica.',
    ],
    source: 'singularity',
    pages: '4–5',
  },
];

export const caseItems = [
  {
    id: 'risk-assessment',
    category: 'Ejercicio propuesto',
    title: 'Evaluar el riesgo de pérdida de información',
    description:
      'Una organización almacena información importante en un único equipo sin respaldos. Analiza sus riesgos y propone un tratamiento.',
    points: [
      'Identifica el activo y las posibles amenazas.',
      'Determina consecuencias y probabilidad.',
      'Propón controles y un responsable.',
      'Explica cómo comprobarías su eficacia.',
    ],
    source: 'iso27001',
    pages: '7–8 y 11–12',
  },
  {
    id: 'access-control',
    category: 'Ejercicio propuesto',
    title: 'Diseñar controles de acceso',
    description:
      'En una empresa todos los empleados utilizan una misma cuenta para acceder a información sensible. Diseña una alternativa segura.',
    points: [
      'Define perfiles y permisos mínimos necesarios.',
      'Explica la gestión de identidades.',
      'Propón una revisión periódica de accesos.',
      'Establece un proceso para retirar permisos.',
    ],
    source: 'iso27001',
    pages: '16–17',
  },
  {
    id: 'phishing-ai',
    category: 'Ejercicio propuesto',
    title: 'Detectar un intento de phishing con IA',
    description:
      'Un empleado recibe un mensaje convincente que solicita credenciales de forma urgente. Determina cómo verificarlo y reportarlo.',
    points: [
      'Identifica señales de suplantación.',
      'Establece un canal alternativo de verificación.',
      'Evita compartir credenciales.',
      'Propón medidas de sensibilización.',
    ],
    source: 'singularity',
    pages: '6–7',
  },
  {
    id: 'deepfake',
    category: 'Ejercicio propuesto',
    title: 'Gestionar una suplantación mediante deepfake',
    description:
      'Una llamada aparentemente realizada por un directivo solicita una acción crítica. Diseña un procedimiento de validación.',
    points: [
      'Analiza los riesgos de suplantación.',
      'Establece doble verificación de identidad.',
      'Define cuándo escalar un evento.',
      'Documenta las lecciones aprendidas.',
    ],
    source: 'singularity',
    pages: '6–7',
  },
  {
    id: 'incident-response',
    category: 'Ejercicio propuesto',
    title: 'Responder a un incidente de seguridad',
    description:
      'Un equipo presenta actividad anómala y posible compromiso de información. Define el flujo de actuación de la organización.',
    points: [
      'Registrar y evaluar el evento.',
      'Decidir si constituye un incidente.',
      'Ejecutar los procedimientos autorizados.',
      'Preservar evidencia y mejorar controles.',
    ],
    source: 'iso27001',
    pages: '18',
  },
  {
    id: 'backup',
    category: 'Ejercicio propuesto',
    title: 'Diseñar un plan de respaldo',
    description:
      'Un área depende de archivos digitales críticos. Propón controles de respaldo y recuperación para reducir interrupciones.',
    points: [
      'Identifica información y sistemas prioritarios.',
      'Define una política de copias de seguridad.',
      'Establece pruebas periódicas de restauración.',
      'Relaciona la solución con continuidad.',
    ],
    source: 'iso27001',
    pages: '18 y 23–24',
  },
];

export const courseUnits = [
  {
    title: 'Unidad 1 — Fundamentos de seguridad',
    weeks: 'Semanas 1–2',
    topics: [
      'Seguridad de la información.',
      'Diferencia entre seguridad y protección.',
      'Amenazas a la seguridad de un sistema.',
    ],
  },
  {
    title: 'Unidad 2 — Control de acceso y protección',
    weeks: 'Semanas 3–4',
    topics: [
      'Evolución del control de acceso a recursos y servicios.',
      'Situación actual de la seguridad.',
      'Principios de diseño de un sistema de seguridad.',
      'Modelos de protección.',
    ],
  },
  {
    title: 'Unidad 3 — Intrusos y prevención',
    weeks: 'Semana 5',
    topics: [
      'Amenazas en el acceso al sistema.',
      'Intrusos.',
      'Técnicas de prevención y detección de intrusos.',
    ],
  },
  {
    title: 'Unidad 4 — Amenazas y criptografía',
    weeks: 'Semana 6',
    topics: [
      'Tipos de amenazas.',
      'Cifrados de datos.',
      'Actividad evaluativa final.',
    ],
  },
];

export const evaluationItems = [
  { name: 'Primer parcial', week: '2', percentage: 25 },
  { name: 'Segundo parcial', week: '4', percentage: 25 },
  { name: 'Taller 1', week: '1', percentage: 5 },
  { name: 'Taller 2', week: '3', percentage: 10 },
  { name: 'Taller 3', week: '5', percentage: 10 },
  { name: 'Evaluación final', week: '6', percentage: 25 },
];
