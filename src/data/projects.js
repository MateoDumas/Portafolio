export const projects = [
  {
    id: 'billforge',
    title: 'BillForge',
    logoUrl: '/logos/billforge.svg',
    role: 'Backend Engineer',
    description:
      'Infraestructura de facturación SaaS headless con gestión de suscripciones y panel de control.',
    tags: ['Node.js', 'Express', 'PostgreSQL', 'TypeScript', 'Stripe'],
    type: 'backend',
    repoUrl: 'https://github.com/MateoDumas/BillForge',
    demoUrl: 'https://bill-forge-hc2t.vercel.app/',
    videoUrl: null,
    fullDescription: 'BillForge es una infraestructura de facturación headless diseñada para desarrolladores que necesitan control total sobre su lógica de suscripción. Actúa como middleware entre tu aplicación y Stripe, manejando el ciclo de vida de suscripciones, reintentos de cobro y facturación multi-tenant. Incluye un panel de administración para métricas y gestión de clientes.',
    features: [
      'Gestión de Ciclo de Vida de Suscripciones (State Machines)',
      'Arquitectura Multi-Tenant con aislamiento de datos',
      'Sistema de Webhooks y procesamiento en segundo plano',
      'Generación de facturas PDF y gestión de Dunning',
      'Dashboard de métricas y control de acceso RBAC'
    ]
  },
  {
    id: 'backplane',
    title: 'Backplane',
    logoUrl: '/logos/backplane.svg',
    role: 'Backend Architect',
    description: 'Arquitectura de microservicios con patrones de resiliencia y Chaos Engineering.',
    tags: ['Docker', 'Node.js', 'API Gateway', 'Microservices', 'PostgreSQL'],
    type: 'backend',
    repoUrl: 'https://github.com/MateoDumas/Backplane',
    demoUrl: 'https://frontend-92qs.onrender.com/',
    videoUrl: null,
    fullDescription: 'Demo de arquitectura de microservicios lista para producción que implementa patrones avanzados de resiliencia y Chaos Engineering. El sistema está orquestado con Docker Compose y cuenta con un API Gateway centralizado que maneja Rate Limiting y Circuit Breaker. Diseñado para demostrar cómo construir sistemas distribuidos robustos capaces de soportar fallos inyectados intencionalmente.',
    features: [
      'Circuit Breaker y Rate Limiting en API Gateway',
      'Chaos Engineering (Inyección de latencia y fallos)',
      'Idempotencia en transacciones de pago',
      'Orquestación completa con Docker Compose',
      'Dashboard de observabilidad en tiempo real'
    ]
  },
  {
    id: 'sensorflux',
    title: 'SensorFlux',
    logoUrl: '/logos/sensorflux.svg',
    role: 'IoT Engineer',
    description: 'Pipeline de ingesta de datos IoT de alto rendimiento con InfluxDB y visualización.',
    tags: ['Node.js', 'InfluxDB', 'MQTT', 'Docker', 'Grafana'],
    type: 'backend',
    repoUrl: 'https://github.com/MateoDumas/SensorFlux',
    demoUrl: 'https://sensorflux-grafana.onrender.com',
    videoUrl: null,
    fullDescription: 'Sistema de procesamiento de datos IoT diseñado para manejar alta concurrencia de lecturas de sensores. Utiliza el protocolo MQTT para la transmisión ligera de mensajes y almacena series temporales en InfluxDB. Incluye dashboards de Grafana preconfigurados para monitorear temperatura, humedad y métricas de dispositivos en tiempo real.',
    features: [
      'Ingesta de datos vía MQTT/WebSockets',
      'Almacenamiento optimizado en Series Temporales (InfluxDB)',
      'Visualización de datos en tiempo real con Grafana',
      'Alertas automatizadas basadas en umbrales',
      'Contenerización de servicios con Docker'
    ]
  },
  {
    id: 'prontoclick',
    title: 'ProntoClick',
    logoUrl: '/logos/prontoclick.svg',
    role: 'Full Stack Developer',
    description:
      'Plataforma integral de delivery y marketplace con chat en tiempo real y geolocalización.',
    tags: ['Next.js', 'NestJS', 'Prisma', 'PostgreSQL', 'TypeScript'],
    type: 'fullstack',
    repoUrl: 'https://github.com/MateoDumas/ProntoClick',
    demoUrl: 'https://pronto-click.vercel.app',
    videoUrl: '/videos/prontoclick.mp4',
    fullDescription: 'Plataforma Full-Stack de delivery y marketplace construida con una arquitectura moderna y escalable. Este proyecto demuestra mi capacidad para manejar lógica de negocio compleja, autenticación segura y gestión de estado en tiempo real. Integra un backend robusto en NestJS con Prisma ORM y base de datos PostgreSQL. El frontend en Next.js prioriza la velocidad y el SEO. Implementé WebSockets para el chat y geolocalización, solucionando el desafío de la comunicación instantánea entre actores.',
    features: [
      'Chat en tiempo real (WebSockets) - Comunicación fluida',
      'Geolocalización en vivo - Seguimiento de pedidos',
      'Arquitectura MVC/Modular en Backend',
      'Base de datos relacional optimizada (PostgreSQL)',
      'Autenticación y Autorización segura'
    ]
  },
  {
    id: 'holoself',
    title: 'HoloSelf',
    logoUrl: '/logos/HolosSelflogo.jpeg',
    role: 'Frontend Developer',
    description:
      'Catálogo interactivo 3D y de Realidad Aumentada (AR) para visualización de productos en web.',
    tags: ['React', 'Three.js', 'WebXR', 'TypeScript'],
    type: 'frontend',
    repoUrl: 'https://github.com/MateoDumas/HoloSelf',
    demoUrl: 'https://holo-self.vercel.app/',
    videoUrl: '/videos/holoself.mp4',
    fullDescription: 'Aplicación inmersiva que lleva el comercio electrónico al siguiente nivel. Este proyecto destaca mi habilidad para aprender e implementar tecnologías emergentes y complejas como WebXR y Three.js. Permite a los usuarios visualizar productos en 3D con alto detalle y proyectarlos en su entorno real. El desafío principal fue optimizar el rendimiento de los modelos 3D para asegurar una experiencia fluida incluso en dispositivos móviles.',
    features: [
      'Visualización de modelos 3D interactivos',
      'Soporte de Realidad Aumentada (WebXR)',
      'Experiencia inmersiva en el navegador',
      'Optimización de modelos 3D para web',
      'Interfaz de usuario minimalista y moderna'
    ]
  },
  {
    id: 'cyberretro',
    title: 'CyberRetro',
    logoUrl: '/logos/cyberretro.svg',
    role: 'Frontend Developer',
    description:
      'Landing page nostálgica con estética Y2K/90s y efectos visuales modernos con CSS puro.',
    tags: ['HTML5', 'CSS3', 'JavaScript', 'Animations'],
    type: 'frontend',
    repoUrl: 'https://github.com/MateoDumas/CyberRetro',
    demoUrl: 'https://mateodumas.github.io/CyberRetro', // GitHub Pages pattern usually works
    videoUrl: '/videos/cyberretro.mp4',
    fullDescription: 'Un viaje al pasado con la potencia de las tecnologías web modernas. Esta landing page captura la estética única de los años 90 y 2000 (Y2K) utilizando HTML, CSS y JavaScript puro, sin dependencias pesadas. Cuenta con rastros de cursor personalizados, fondos de campos de estrellas, efectos glitch interactivos y una interfaz de usuario retro, todo optimizado para funcionar fluidamente en navegadores actuales y dispositivos móviles.',
    features: [
      'Estética Y2K / Retro auténtica',
      'Efectos glitch y CRT puramente en CSS',
      'Rastro de cursor interactivo',
      'Sin dependencias (Vanilla JS/CSS)',
      'Diseño totalmente responsivo'
    ]
  },
  {
    id: 'bubbleverse',
    title: 'BubbleVerse',
    logoUrl: '/logos/bubbleverse.svg',
    role: 'Frontend Developer',
    description:
      'Playground interactivo que convierte el navegador en un lienzo dinámico de burbujas flotantes.',
    tags: ['Vanilla JS', 'Canvas', 'Interactive', 'DOM Manipulation'],
    type: 'frontend',
    repoUrl: 'https://github.com/MateoDumas/BubbleVerse',
    demoUrl: 'https://mateodumas.github.io/BubbleVerse',
    videoUrl: '/videos/bubbleverse.mp4',
    fullDescription: 'Lienzo web dinámico y experimental construido con JavaScript puro. Permite a los usuarios crear burbujas flotantes que contienen mensajes inspiradores, alternar entre temas visuales de día y noche, y observar interacciones físicas de partículas. Es un proyecto centrado en la creatividad, la manipulación eficiente del DOM y la creación de animaciones fluidas y relajantes.',
    features: [
      'Generación dinámica de elementos DOM',
      'Temas visuales alternables (Día/Noche)',
      'Animaciones físicas fluidas',
      'Interacción creativa con el usuario'
    ]
  },
  {
    id: 'aivio',
    title: 'Aivio AI Backend',
    logoUrl: '/logos/aivio.svg',
    role: 'Backend & ML Engineer',
    description:
      'Plataforma backend de IA con APIs REST y sección de documentación para desarrolladores.',
    tags: ['Node.js', 'Express', 'MongoDB', 'JWT', 'OpenAI API', 'Docs'],
    type: 'backend',
    repoUrl: 'https://github.com/MateoDumas/Aivio',
    demoUrl: 'https://aivio-nu.vercel.app/',
    videoUrl: null,
    fullDescription:
      'Aivio es una plataforma backend orientada a asistentes de IA que centraliza toda la lógica de negocio y la exposición de APIs. Incluye un core de servicios en Node.js y Express para gestionar autenticación, usuarios y sesiones de conversación, así como la integración con modelos de IA externos. Además, cuenta con una sección de documentación propia donde se explican los endpoints, los esquemas de datos y ejemplos de requests/responses, pensada para que otros desarrolladores puedan consumir la API sin fricción. El proyecto pone foco en buenas prácticas de arquitectura, seguridad y estructura de carpetas.',
    features: [
      'API REST organizada en capas (rutas, controladores y servicios)',
      'Integración con modelos de IA mediante OpenAI API',
      'Autenticación y autorización basada en JWT',
      'Persistencia de usuarios y sesiones en MongoDB',
      'Sección de documentación con descripción de endpoints y ejemplos de uso',
      'Configuración lista para deploy en servicios en la nube'
    ]
  },
  {
    id: 'obitdata',
    title: 'ObitData Dashboard',
    logoUrl: '/logos/obitdata.svg',
    role: 'Frontend Developer',
    description: 'Dashboard en tiempo real para visualización de métricas con React + Vite + TypeScript.',
    tags: ['React', 'TypeScript', 'D3.js', 'WebSocket', 'Zustand'],
    type: 'frontend',
    repoUrl: 'https://github.com/MateoDumas/ObitData-Dashboard',
    demoUrl: 'https://mateodumas.github.io/ObitData-Dashboard/',
    videoUrl: '/videos/obitdata.mp4',
    fullDescription: 'Dashboard profesional para monitoreo de datos en tiempo real. Utiliza WebSockets para streaming de datos, D3.js para visualizaciones complejas y Zustand para gestión de estado global. Incluye sistema de alertas configurable, modo oscuro/claro y diseño responsivo.',
    features: [
      'Visualización de datos en tiempo real (WebSockets)',
      'Gráficos interactivos con D3.js',
      'Sistema de alertas configurable',
      'Modo Oscuro / Claro',
      'Exportación de reportes'
    ]
  },
  {
    id: 'pulseboard',
    title: 'PulseBoard PWA',
    logoUrl: '/logos/pulseboard.svg',
    role: 'Frontend Developer',
    description: 'Progressive Web App (PWA) moderna con capacidades offline y actualizaciones en tiempo real.',
    tags: ['React', 'Vite', 'PWA', 'Socket.io', 'Node.js'],
    type: 'frontend',
    repoUrl: 'https://github.com/MateoDumas/PulseBoard-PWA',
    demoUrl: 'https://mateodumas.github.io/PulseBoard-PWA/',
    videoUrl: null,
    fullDescription: 'Aplicación Web Progresiva (PWA) diseñada para funcionar offline y online. Implementa Service Workers para caché avanzado, notificaciones push y sincronización en segundo plano. La interfaz es mobile-first y utiliza Socket.io para actualizaciones instantáneas.',
    features: [
      'PWA con soporte Offline (Service Workers)',
      'Instalable en dispositivos móviles',
      'Actualizaciones en tiempo real con Socket.io',
      'Estrategias de caché avanzadas',
      'Arquitectura escalable con React + Vite'
    ]
  }
]
