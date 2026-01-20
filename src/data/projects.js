export const projects = [
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
    demoUrl: null, // Asumimos que no hay demo pública activa por ahora
    videoUrl: '/videos/prontoclick.mp4', // Archivo en public/videos/
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
  }
]
