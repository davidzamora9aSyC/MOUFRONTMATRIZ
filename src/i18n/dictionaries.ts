export type Locale = 'es' | 'en';

export const dictionaries = {
  es: {
    lang: { es: 'ES', en: 'EN', label: 'Idioma' },
    nav: {
      why: 'Por qué MOU',
      whatWeDo: 'Qué hacemos',
      whatWeThink: 'Insights',
      whoWeAre: 'Quiénes somos',
      careers: 'Carreras',
      contact: 'Conversemos',
      open: 'Abrir menú',
      close: 'Cerrar menú',
      menu: 'Menú',
    },
    home: {
      eyebrow: 'Hub de innovación',
      h1a: 'Un hub de innovación',
      h1b: 'para empresas.',
      lead: 'En una era de bombardeo de propuestas tecnológicas, desorden y empalmes intergeneracionales, somos la primera línea de adopción, asesoría y seguimiento que las empresas necesitan.',
      cta: 'Conocer MOU',
      help: 'Ver cómo podemos ayudar',
      scroll: 'Desplázate para descubrir',
      industriesEyebrow: 'Sectores',
      industriesTitle: 'Impulsa tu industria hacia adelante.',
      industriesLead:
        'Del consultorio a la tesorería, aplicamos conocimiento de sector para construir soluciones que responden a lo que ocurre hoy y preparan lo que viene.',
      healthTitle: 'Salud',
      healthDesc:
        'Acceso, operación clínica, automatización y bienestar para personas, profesionales y empresas.',
      financeTitle: 'Finanzas',
      financeDesc:
        'Educación, dirección financiera y analítica para organizar, comparar y decidir con claridad.',
      autoTitle: 'Automotriz',
      autoDesc:
        'Desarrollo e implementación de tecnología 4.0 junto a Distrecol: procesos, datos y operación de planta con más orden.',
      manifestoEyebrow: 'Una compañía, dos ecosistemas',
      manifesto:
        'Nuestra combinación de expertise en salud y finanzas, arquitectura tecnológica y una visión de producto compartida permite a personas y organizaciones decidir con más claridad.',
      capabilitiesEyebrow: 'Capacidades',
      capabilitiesTitle: 'Creamos valor real con expertise a la medida.',
      capabilitiesLead:
        'Integramos estrategia, diseño y desarrollo de software para construir productos útiles, cercanos y preparados para crecer.',
      brandsEyebrow: 'Nuestras marcas',
      brandsTitle: 'Descubre cómo ayudamos a marcas y organizaciones.',
      brandsLead:
        'Cada marca responde a un sector distinto, pero ambas comparten el mismo principio: simplificar lo complejo con tecnología y acompañamiento.',
      closingEyebrow: 'MOU Solutions',
      closingTitleA: 'Construye el siguiente',
      closingTitleB: 'paso con nosotros.',
      closingLead: '¿Tienes una pregunta? Escríbenos. Construimos el sistema; las marcas crean el impacto.',
      visit: 'Visitar',
    },
    process: {
      eyebrow: 'Procesos primero',
      title: 'Primero el proceso. Después la IA.',
      steps: [
        {
          title: 'El desorden de adoptar IA sin base',
          body: 'Muchas empresas encienden herramientas de IA sin operación, datos ni responsabilidades claras. El resultado es ruido, no capacidad.',
        },
        {
          title: 'Construimos el proceso',
          body: 'Antes de automatizar, ordenamos el flujo: quién decide, qué dato entra, qué sale y cómo se mide el trabajo cotidiano.',
        },
        {
          title: 'IA cuando la empresa está lista',
          body: 'Con el proceso en pie, la automatización deja de ser un experimento y se convierte en una capa útil sobre el trabajo real.',
        },
      ],
      advisoryEyebrow: 'Consultoría',
      advisoryTitle: 'Estrategia y tecnología, con criterio.',
      advisoryLead:
        'Ofrecemos un servicio consultivo para que las empresas evalúen opciones, sopesen costos y decidan con claridad. Buscamos más productividad y mejor bienestar para los equipos; no recortes automáticos ni desplazamiento de personas.',
      advisoryPoints: [
        {
          title: 'A la vanguardia, con base',
          body: 'Ayudamos a incorporar tecnología nueva sin perder de vista la operación real.',
        },
        {
          title: 'Costos y decisión',
          body: 'Sopesamos inversión, riesgo y retorno para elegir lo que sí conviene implementar.',
        },
        {
          title: 'Productividad y personas',
          body: 'El foco es que el trabajo mejore para la empresa y para quienes lo hacen.',
        },
      ],
    },
    capabilities: [
      {
        index: '01',
        title: 'Expertise de industria',
        body: 'Equipos que combinan salud digital e inteligencia financiera para construir soluciones alineadas con cada operación.',
      },
      {
        index: '02',
        title: 'Producto y arquitectura',
        body: 'Diseño, ingeniería y desarrollo de software para crear sistemas útiles, cercanos y preparados para crecer.',
      },
      {
        index: '03',
        title: 'Automatización e IA',
        body: 'Datos y automatización convertidos en acciones comprensibles para personas, clínicas y empresas.',
      },
      {
        index: '04',
        title: 'Consultoría en estrategia y tecnología',
        body: 'Acompañamos decisiones de adopción: vanguardia, costos y productividad, con bienestar para los equipos.',
      },
    ],
    brands: {
      meudocCategory: 'Salud digital',
      meudocAudiences: 'Personas, profesionales, clínicas y empresas',
      meudocDesc:
        'Un ecosistema que conecta personas y profesionales de la salud, facilita el acceso a citas y ayuda a digitalizar la operación de consultorios, clínicas y programas empresariales.',
      meudocServices: [
        'Búsqueda y agendamiento de profesionales',
        'Herramientas de operación para consultas y clínicas',
        'Automatización de atención y comunicación',
        'Bienestar y salud preventiva para empresas',
      ],
      aliadoCategory: 'Inteligencia financiera',
      aliadoAudiences: 'Personas, PYMEs y organizaciones de salud',
      aliadoDesc:
        'Soluciones para comprender y organizar las finanzas, acompañar decisiones empresariales y convertir información financiera en planes de acción claros.',
      aliadoServices: [
        'Educación y simulación financiera para personas',
        'Dirección de innovación financiera para empresas',
        'Planeación de caja, modelos e indicadores',
        'Ingeniería financiera para organizaciones de salud',
      ],
    },
    rail: [
      'Salud digital',
      'Operación clínica',
      'Bienestar corporativo',
      'Dirección financiera',
      'Tesorería',
      'Ingeniería financiera',
      'Automatización',
      'Producto digital',
    ],
    who: {
      eyebrow: 'Quiénes somos',
      title: 'Negocio y tecnología, en la misma mesa.',
      lead: 'MOU Solutions fue fundada por dos emprendedores de la Universidad de los Andes. Julian lidera la visión de negocio y las relaciones corporativas; David lidera la arquitectura tecnológica y el desarrollo de producto.',
      note: 'Estrategia financiera, arquitectura tecnológica y desarrollo de producto bajo una misma visión.',
      julianRole: 'CEO & Co-founder',
      julianProfile:
        'Economista de la Universidad de los Andes. Lidera la visión estratégica, el desarrollo de negocio y las relaciones corporativas de MOU Solutions.',
      davidRole: 'CTO & Co-founder',
      davidProfile:
        'Ingeniero de Sistemas de la Universidad de los Andes. Lidera la arquitectura tecnológica, la automatización y el desarrollo de producto.',
      portrait: 'Retrato de',
      mvTitle: 'Misión, visión y valor',
      missionLabel: 'Misión',
      mission:
        'Ser la primera línea de adopción, asesoría y seguimiento que las empresas necesitan: tecnología útil para decidir y operar con más claridad.',
      visionLabel: 'Visión',
      vision:
        'Empresas que incorporan tecnología con proceso, criterio y bienestar para sus equipos. Primero el flujo de trabajo; después la automatización y la IA.',
      valueLabel: 'Valor al sector empresarial',
      value:
        'Acompañamos a la organización a sopesar costos, riesgo y productividad. El diagnóstico inicial es gratuito. No buscamos recortes automáticos ni desplazar personas: buscamos mejor trabajo para la empresa y para quien lo hace.',
    },
    why: {
      eyebrow: 'Por qué MOU',
      title: 'Tecnología útil para decisiones que importan.',
      lead: 'Construimos productos digitales en salud y finanzas para que personas y organizaciones puedan actuar con más claridad.',
      p1: 'MOU Solutions es una compañía colombiana de tecnología y servicios. Integramos estrategia, diseño y desarrollo de software para crear sistemas cercanos, útiles y preparados para crecer.',
      p2: 'No duplicamos los sitios de producto: la casa matriz explica el sistema. MeuDoc aplica esa idea a la salud; MEU Aliado, a las finanzas. Con Distrecol, llevamos el mismo criterio a la industria 4.0.',
      pillarsTitle: 'Lo que nos diferencia',
      pillars: [
        {
          title: 'Primero el proceso',
          body: 'Antes de encender IA u otra herramienta, ordenamos el flujo: quién decide, qué dato entra y cómo se mide el trabajo real.',
        },
        {
          title: 'Marcas con oficio de sector',
          body: 'MeuDoc, MEU Aliado y Distrecol no son un catálogo genérico: cada una responde a una operación concreta.',
        },
        {
          title: 'Consultoría con criterio',
          body: 'Ayudamos a sopesar costos, riesgo y productividad, con bienestar para los equipos; no recortes automáticos.',
        },
      ],
    },
    whatWeDo: {
      eyebrow: 'Qué hacemos',
      title: 'Dos ecosistemas. Una misma forma de construir.',
      lead: 'Desarrollamos software, automatización y acompañamiento para simplificar operaciones complejas.',
      p1: 'Integramos estrategia, diseño y desarrollo de software. El holding ordena el sistema; las marcas lo llevan a cada sector.',
      p2: 'Primero el proceso. Después la automatización y la IA, cuando la empresa ya tiene un flujo claro: quién decide, qué dato entra y cómo se mide el trabajo.',
      areasTitle: 'Dónde lo aplicamos',
      areas: [
        {
          title: 'Salud',
          brand: 'MeuDoc',
          body: 'Acceso, operación clínica, automatización de la atención y bienestar para personas, profesionales y empresas.',
          href: '/industries/healthcare',
        },
        {
          title: 'Finanzas',
          brand: 'MEU Aliado',
          body: 'Educación, dirección financiera y analítica para organizar, comparar y decidir con claridad.',
          href: '/industries/finance',
        },
        {
          title: 'Logística y automotriz',
          brand: 'Distrecol',
          body: 'Tecnología 4.0 para planta, datos y operación: primero el proceso, después la automatización.',
          href: '/industries/automotive',
        },
      ],
      howTitle: 'Cómo lo construimos',
    },
    think: {
      eyebrow: 'Insights',
      title: 'Claridad antes que ruido.',
      lead: 'Nuestra perspectiva se sostiene en una idea simple: la tecnología crea valor cuando entiende a las personas y mejora la forma en que deciden.',
      items: [
        {
          title: 'Tecnología al servicio de la operación',
          body: 'Los productos deben resolver el trabajo cotidiano, no añadir otra capa de complejidad.',
        },
        {
          title: 'Datos que se pueden usar',
          body: 'La información solo importa si se convierte en una acción comprensible para quien decide.',
        },
        {
          title: 'Automatización responsable',
          body: 'La IA y la automatización tienen sentido cuando reducen fricción y respetan el contexto de cada sector.',
        },
      ],
    },
    insights: {
      crumb: 'Insights',
      eyebrow: 'Perspectivas',
      title: 'Insights',
      lead: 'Aprendemos de la fricción real de las empresas: empalme entre generaciones, IA encendida demasiado pronto, consultoría que no llega al sistema. Siete artículos para decidir con más criterio.',
      fromLibrary: 'De nuestra biblioteca',
      libraryTitle: 'Problemas de adopción, no catálogos de herramientas.',
      featured: 'Destacado',
      read: 'Leer artículo',
      related: 'También en Insights',
      minutes: 'min de lectura',
      industryLink: 'Ver cómo lo abordamos en el sector',
      ctaTitle: '¿Te suena este problema?',
      ctaLead: 'El diagnóstico inicial es gratuito. Cuéntanos tu operación y te respondemos para evaluar el siguiente paso.',
    },
    careers: {
      eyebrow: 'Carreras',
      kicker: 'Construye tu futuro',
      title: 'Crece tu impacto con nosotros.',
      lead: 'Si buscas el siguiente paso, queremos conocer perfiles que combinen rigor, oficio y cercanía.',
      bandLead: '¿Buscas el siguiente paso en tu carrera? Conoce cómo sumarte al equipo.',
      body: 'Nuestra sede está en Fusagasugá, Colombia, pero el trabajo se gestiona de forma virtual: no hace falta desplazarse hasta allá. No publicamos vacantes genéricas: si te interesa sumarte a producto, tecnología o negocio, escríbenos.',
      cta: 'Únete al equipo',
    },
    healthcare: {
      eyebrow: 'Industrias',
      title: 'Healthcare',
      kicker: 'MeuDoc',
      lead: 'Desde MOU ordenamos el acceso, la operación clínica y el bienestar. MeuDoc es la marca que lleva ese sistema a pacientes, profesionales, clínicas y empresas.',
      intro:
        'En salud el problema rara vez es “falta una app”. Es agenda rota, mensajes sueltos, documentación que no viaja y programas de bienestar que nadie usa. MOU construye el flujo; MeuDoc lo opera.',
      needsTitle: 'Qué hay que resolver',
      needs: [
        {
          title: 'Acceso a la atención',
          body: 'Encontrar un profesional verificado y agendar —presencial u online— sin perderse entre directorios y WhatsApp informales.',
        },
        {
          title: 'Consultorio saturado de admin',
          body: 'El independiente pierde tiempo en confirmaciones, reagendos y papelería. Eso no se resuelve con más herramientas sueltas.',
        },
        {
          title: 'Clínica sin un flujo digital',
          body: 'Agenda, historia, comunicación y reportes conviven en islas. La operación no escala si el dato no entra y sale por el mismo camino.',
        },
        {
          title: 'Bienestar laboral sin adopción',
          body: 'Las empresas contratan salud ocupacional que no se usa. Hace falta medicina virtual, psicología y lectura de quién sí entra al programa.',
        },
      ],
      whatTitle: 'Cómo lo resolvemos desde MOU',
      pillars: [
        {
          title: 'Búsqueda y agendamiento',
          body: 'Perfiles, especialidad, ciudad y modalidad, con confirmaciones y recordatorios automáticos —el primer paso del ecosistema MeuDoc.',
        },
        {
          title: 'Operación clínica',
          body: 'Agenda, documentación y analítica para profesionales y centros, para que la consulta deje de depender de planillas y chats paralelos.',
        },
        {
          title: 'Atención por WhatsApp',
          body: 'MeuAssistant responde, confirma y reagenda sincronizado con la agenda. Menos fricción para el paciente; menos carga para el equipo.',
        },
        {
          title: 'Bienestar para empresas',
          body: 'Planes de salud laboral por colaborador, medicina virtual y seguimiento de adopción. No es un catálogo: es un programa que se puede medir.',
        },
      ],
      whyTitle: 'Por qué MOU en salud',
      whyBody:
        'No vendemos un módulo genérico. Integramos producto, automatización y acompañamiento bajo MeuDoc, la marca de salud digital de MOU. El diagnóstico inicial de tu operación es gratuito.',
      ctaTitle: 'Ordenemos la atención juntos',
      ctaLead: 'Cuéntanos si eres profesional, clínica o empresa. Te respondemos para evaluar el siguiente paso.',
      visit: 'Visitar meudoc.co',
    },
    finance: {
      eyebrow: 'Industrias',
      title: 'Finanzas',
      kicker: 'MEU Aliado',
      lead: 'Desde MOU convertimos información financiera en decisiones. MEU Aliado es la marca que organiza productos, tesorería y dirección para personas, PYMEs y organizaciones.',
      intro:
        'El dolor no es “falta un Excel”. Es no comparar productos, no ver la caja, no tener dirección financiera continua y no poder explicar un número en comité. MOU construye el sistema; MEU Aliado lo lleva al día a día.',
      needsTitle: 'Qué hay que resolver',
      needs: [
        {
          title: 'Productos financieros dispersos',
          body: 'CDT, fondos, pensión y obligaciones viven en entidades distintas. Sin un lugar para comparar y seguir vencimientos, se decide tarde o a ciegas.',
        },
        {
          title: 'Empresa sin dirección financiera',
          body: 'Muchas PYMEs no pueden sostener un equipo de tiempo completo. Necesitan reuniones, indicadores y modelos, no un informe suelto al cierre del año.',
        },
        {
          title: 'Caja que no alimenta la decisión',
          body: 'Ingresos, costos y forecast existen, pero no se usan en comité. Sin tesorería visible, la expansión y la financiación se improvisan.',
        },
        {
          title: 'Salud que opera sin ingeniería financiera',
          body: 'Clínicas y organizaciones de salud mezclan operación clínica con números que no dialogan. Hace falta analítica e ingeniería financiera de sector, distinta al software clínico.',
        },
      ],
      whatTitle: 'Cómo lo resolvemos desde MOU',
      pillars: [
        {
          title: 'Claridad para personas',
          body: 'Comparar, simular y organizar productos financieros —con educación y seguimiento— para que la siguiente decisión no dependa de un comercial aislado.',
        },
        {
          title: 'Dirección de innovación financiera',
          body: 'Acompañamiento recurrente tipo dirección financiera: dashboard, márgenes, presupuesto, KPIs y apoyo en comités, sin armar un área permanente de un día para otro.',
        },
        {
          title: 'Tesorería y modelos',
          body: 'Flujo de caja, forecast y evaluación de proyectos para que la caja deje de ser una sorpresa y pase a ser un instrumento de decisión.',
        },
        {
          title: 'Ingeniería financiera en salud',
          body: 'Vertical de MEU Aliado para organizaciones de salud: analítica y estructura financiera. Complementa a MeuDoc; no lo sustituye.',
        },
      ],
      whyTitle: 'Por qué MOU en finanzas',
      whyBody:
        'MEU Aliado Empresas es marca comercial de MOU Solutions. No somos un banco ni un software genérico de contabilidad: somos la capa de claridad y acompañamiento. El diagnóstico inicial es gratuito.',
      ctaTitle: 'Pongamos números sobre la mesa',
      ctaLead: 'Cuéntanos si eres persona, PYME u organización. Evaluamos juntos si tiene sentido seguir.',
      visit: 'Visitar MEU Aliado',
    },
    automotive: {
      eyebrow: 'Industrias',
      title: 'Automotriz y logística',
      kicker: 'Distrecol',
      lead: 'Desde MOU llevamos Industria 4.0 a operaciones reales de autopartes y logística. Distrecol es el caso en planta: primero el proceso, después la automatización.',
      intro:
        'En distribución y taller conviven operación tradicional, herramientas nuevas y equipos de distintas generaciones. El riesgo no es comprar tecnología: es encenderla sin un flujo. MOU es la primera línea de adopción, asesoría y seguimiento.',
      needsTitle: 'Qué hay que resolver',
      needs: [
        {
          title: 'Proceso y herramienta desconectados',
          body: 'Se compra software de planta o de inventario y el trabajo real sigue en papel, WhatsApp o “como siempre se ha hecho”.',
        },
        {
          title: 'Datos que no salen de la bodega',
          body: 'Entradas, salidas y calidad existen, pero no alimentan una decisión de compras, despacho o servicio. Sin ese mapa, la 4.0 es decorativa.',
        },
        {
          title: 'Pilotos que no se adoptan',
          body: 'Un tablero o un robot de proceso queda en un rincón. Falta acompañar el empalme intergeneracional para que se use en el turno, no solo en la demo.',
        },
        {
          title: 'Automatizar demasiado pronto',
          body: 'IA o sensores sobre un flujo confuso multiplican el desorden. Hay que diagnosticar quién decide, qué dato entra y cómo se mide el trabajo.',
        },
      ],
      whatTitle: 'Cómo lo resolvemos desde MOU',
      pillars: [
        {
          title: 'Diagnóstico de la operación',
          body: 'Levantamos el flujo de Distrecol —y de operaciones similares— antes de encender cualquier capa digital. El diagnóstico inicial es gratuito.',
        },
        {
          title: 'Tecnología 4.0 a la medida',
          body: 'Diseñamos e implementamos herramientas de planta, datos y automatización alineadas a autopartes, inventario y despacho reales, no a un catálogo genérico.',
        },
        {
          title: 'Adopción en el equipo',
          body: 'Acompañamos a quien lleva años en el oficio y a quien llega con herramientas nuevas, para que el sistema se use en el día a día.',
        },
        {
          title: 'Seguimiento, no un hito',
          body: 'Medimos uso y ajustamos el flujo. La implementación se sostiene cuando hay asesoría después del go-live, no solo una entrega de software.',
        },
      ],
      whyTitle: 'Por qué MOU en automotriz',
      whyBody:
        'Distrecol es un distribuidor de autopartes con operación concreta. MOU no vende las partes: construye el sistema 4.0 alrededor de esa operación. El mismo criterio aplica a logística y planta que convivan con desorden y empalme de generaciones.',
      ctaTitle: 'Llevemos 4.0 a tu operación',
      ctaLead: 'Si tu planta o tu red de distribución se parece a ese desorden, conversemos. Distrecol muestra el camino en autopartes.',
      visit: 'Ver Distrecol',
    },
    contact: {
      crumbHome: 'Inicio',
      crumb: 'Contacto',
      title: 'Contacto',
      hqLabel: 'Sede principal',
      hqAddress: 'Cra. 8 # 5-59, Oficina 506, Fusagasugá, Cundinamarca, Colombia',
      formEyebrow: 'Contacto',
      formTitle: 'Hablemos',
      formLead:
        'El diagnóstico inicial es gratuito. Cuéntanos tu caso y te respondemos a partners@mousolution.com para evaluar juntos el siguiente paso.',
      freeLabel: 'Sin costo',
      freeTitle: 'El diagnóstico inicial es gratuito.',
      freeBody:
        'La primera revisión de tu operación no tiene costo. Sirve para entender el proceso, el riesgo y si tiene sentido seguir juntos.',
      reason: 'Motivo de la consulta',
      reasons: {
        placeholder: 'Selecciona una opción',
        advisory: 'Consultoría en estrategia y tecnología',
        health: 'Integraciones en el sector de la salud',
        custom: 'Desarrollo a la medida',
        finance: 'Integraciones en el sector financiero',
        auto: 'Soluciones para sector logístico y automotriz — Industria 4.0',
        hr: 'Soluciones para RH',
        accounting: 'Soluciones en contabilidad y toma de decisiones',
        governance: 'Gobernanza empresarial y empalmes intergeneracionales',
        other: 'Otro',
      },
      firstName: 'Nombre',
      lastName: 'Apellido',
      email: 'Correo',
      phone: 'Teléfono',
      company: 'Empresa',
      message: 'Mensaje',
      consent: 'Acepto que MOU Solutions use estos datos únicamente para responder a mi consulta.',
      submit: 'Enviar',
      sending: 'Enviando…',
      sentTitle: 'Mensaje enviado.',
      sentBody: 'Llegó a partners@mousolution.com. Te respondemos a la brevedad al correo que nos dejaste.',
      error: 'No pudimos enviar el mensaje. Inténtalo de nuevo o escríbenos a',
      whereEyebrow: 'Dónde estamos',
      whereTitle: 'Sede en Fusagasugá. Trabajo virtual.',
      whereLead:
        'La oficina está en Cundinamarca, Colombia. Los proyectos y el acompañamiento se gestionan de forma remota: no es necesario ir hasta Fusagasugá para trabajar con nosotros.',
    },
    footer: {
      company: 'Compañía',
      industries: 'Industrias',
      brands: 'Marcas',
      healthcare: 'Healthcare',
      finance: 'Finanzas',
      automotive: 'Automotriz',
      contact: 'Contacto',
      articles: 'Artículos',
      articlesLink: 'Ver artículos',
      addressLabel: 'Sede',
      rights: 'Todos los derechos reservados',
      legal: 'MOU Solutions S.A.S. · NIT 901935902-1',
    },
  },
  en: {
    lang: { es: 'ES', en: 'EN', label: 'Language' },
    nav: {
      why: 'Why MOU',
      whatWeDo: 'What We Do',
      whatWeThink: 'Insights',
      whoWeAre: 'Who We Are',
      careers: 'Careers',
      contact: 'Get in touch',
      open: 'Open menu',
      close: 'Close menu',
      menu: 'Menu',
    },
    home: {
      eyebrow: 'Innovation hub',
      h1a: 'An innovation hub',
      h1b: 'for companies.',
      lead: 'In an era of tech-proposal overload, disorder and intergenerational overlap, we are the first line of adoption, advisory and follow-through that companies need.',
      cta: 'Get to know MOU',
      help: 'See how we can help',
      scroll: 'Scroll to discover',
      industriesEyebrow: 'Industries',
      industriesTitle: 'Move your industry forward.',
      industriesLead:
        'From the clinic to the treasury, we apply sector knowledge to build solutions for what is happening today — and what comes next.',
      healthTitle: 'Healthcare',
      healthDesc:
        'Access, clinical operations, automation and wellbeing for people, professionals and companies.',
      financeTitle: 'Finance',
      financeDesc:
        'Education, financial leadership and analytics to organise, compare and decide with clarity.',
      autoTitle: 'Automotive',
      autoDesc:
        'Industry 4.0 development and implementation with Distrecol: plant processes, data and operations with more order.',
      manifestoEyebrow: 'One company, two ecosystems',
      manifesto:
        'Our combination of healthcare and finance expertise, technology architecture and a shared product vision helps people and organisations decide with more clarity.',
      capabilitiesEyebrow: 'Capabilities',
      capabilitiesTitle: 'Create real value with tailored expertise.',
      capabilitiesLead:
        'We bring together strategy, design and software development to build useful, human products that are ready to grow.',
      brandsEyebrow: 'Our brands',
      brandsTitle: 'Discover how we help brands and organisations.',
      brandsLead:
        'Each brand serves a different sector, but both share the same principle: simplify the complex with technology and support.',
      closingEyebrow: 'MOU Solutions',
      closingTitleA: 'Build the next',
      closingTitleB: 'step with us.',
      closingLead: 'Have a question? Drop us a line. We build the system; the brands create the impact.',
      visit: 'Visit',
    },
    process: {
      eyebrow: 'Process first',
      title: 'Process first. AI second.',
      steps: [
        {
          title: 'The disorder of adopting AI too soon',
          body: 'Many companies switch on AI tools without operations, data or clear ownership. The result is noise, not capability.',
        },
        {
          title: 'We build the process',
          body: 'Before we automate, we order the flow: who decides, what data comes in, what goes out, and how everyday work is measured.',
        },
        {
          title: 'AI when the company is ready',
          body: 'Once the process stands, automation stops being an experiment and becomes a useful layer on top of real work.',
        },
      ],
      advisoryEyebrow: 'Advisory',
      advisoryTitle: 'Strategy and technology, with judgement.',
      advisoryLead:
        'We offer advisory support so companies can weigh options, costs and risk, then choose with clarity. The aim is higher productivity and better wellbeing for teams — not automatic cuts or displacing people.',
      advisoryPoints: [
        {
          title: 'Ahead, with a foundation',
          body: 'We help adopt new technology without losing sight of the real operation.',
        },
        {
          title: 'Costs and decision',
          body: 'We weigh investment, risk and return to choose what is worth implementing.',
        },
        {
          title: 'Productivity and people',
          body: 'The focus is better work for the company and for the people who do it.',
        },
      ],
    },
    capabilities: [
      {
        index: '01',
        title: 'Industry expertise',
        body: 'Teams that combine digital health and financial intelligence to build solutions aligned with each operation.',
      },
      {
        index: '02',
        title: 'Product and architecture',
        body: 'Design, engineering and software development to create useful systems that are ready to scale.',
      },
      {
        index: '03',
        title: 'Automation and AI',
        body: 'Data and automation turned into actions that people, clinics and companies can understand.',
      },
      {
        index: '04',
        title: 'Strategy and technology advisory',
        body: 'We support adoption decisions: staying current, weighing costs and raising productivity, with wellbeing for teams.',
      },
    ],
    brands: {
      meudocCategory: 'Digital health',
      meudocAudiences: 'People, professionals, clinics and companies',
      meudocDesc:
        'An ecosystem that connects people and health professionals, makes booking easier and helps digitalise practices, clinics and corporate programmes.',
      meudocServices: [
        'Search and booking for professionals',
        'Operations tools for practices and clinics',
        'Care and communication automation',
        'Preventive wellbeing for companies',
      ],
      aliadoCategory: 'Financial intelligence',
      aliadoAudiences: 'People, SMEs and healthcare organisations',
      aliadoDesc:
        'Solutions to understand and organise finances, support business decisions and turn financial information into clear action plans.',
      aliadoServices: [
        'Financial education and simulation for people',
        'Financial innovation leadership for companies',
        'Cash planning, models and indicators',
        'Financial engineering for healthcare organisations',
      ],
    },
    rail: [
      'Digital health',
      'Clinical operations',
      'Corporate wellbeing',
      'Financial leadership',
      'Treasury',
      'Financial engineering',
      'Automation',
      'Digital product',
    ],
    who: {
      eyebrow: 'Who we are',
      title: 'Business and technology at the same table.',
      lead: 'MOU Solutions was founded by two Universidad de los Andes entrepreneurs. Julian leads business vision and corporate relationships; David leads technology architecture and product development.',
      note: 'Financial strategy, technology architecture and product development under one vision.',
      julianRole: 'CEO & Co-founder',
      julianProfile:
        'Economist from Universidad de los Andes. He leads MOU Solutions’ strategic vision, business development and corporate relationships.',
      davidRole: 'CTO & Co-founder',
      davidProfile:
        'Systems Engineer from Universidad de los Andes. He leads technology architecture, automation and product development.',
      portrait: 'Portrait of',
      mvTitle: 'Mission, vision and value',
      missionLabel: 'Mission',
      mission:
        'To be the first line of adoption, advisory and follow-through that companies need: useful technology to decide and operate with more clarity.',
      visionLabel: 'Vision',
      vision:
        'Companies that adopt technology with process, judgement and wellbeing for their teams. The work flow first; then automation and AI.',
      valueLabel: 'Value for business',
      value:
        'We help organisations weigh costs, risk and productivity. The initial diagnosis is free. We do not seek automatic cuts or displacing people: we seek better work for the company and for those who do it.',
    },
    why: {
      eyebrow: 'Why MOU',
      title: 'Useful technology for decisions that matter.',
      lead: 'We build digital products in healthcare and finance so people and organisations can act with more clarity.',
      p1: 'MOU Solutions is a Colombian technology and services company. We integrate strategy, design and software development to create useful, human systems that are ready to grow.',
      p2: 'We do not duplicate product sites: the holding company explains the system. MeuDoc applies that idea to healthcare; MEU Aliado, to finance. With Distrecol, we bring the same judgement to Industry 4.0.',
      pillarsTitle: 'What sets us apart',
      pillars: [
        {
          title: 'Process first',
          body: 'Before we switch on AI or any other tool, we order the flow: who decides, what data comes in and how real work is measured.',
        },
        {
          title: 'Brands with sector craft',
          body: 'MeuDoc, MEU Aliado and Distrecol are not a generic catalogue: each one answers a concrete operation.',
        },
        {
          title: 'Advisory with judgement',
          body: 'We help weigh costs, risk and productivity, with wellbeing for teams — not automatic cuts.',
        },
      ],
    },
    whatWeDo: {
      eyebrow: 'What we do',
      title: 'Two ecosystems. One way of building.',
      lead: 'We develop software, automation and support to simplify complex operations.',
      p1: 'We bring together strategy, design and software development. The holding company orders the system; the brands take it into each sector.',
      p2: 'Process first. Then automation and AI, once the company has a clear flow: who decides, what data comes in and how work is measured.',
      areasTitle: 'Where we apply it',
      areas: [
        {
          title: 'Healthcare',
          brand: 'MeuDoc',
          body: 'Access, clinical operations, care automation and wellbeing for people, professionals and companies.',
          href: '/industries/healthcare',
        },
        {
          title: 'Finance',
          brand: 'MEU Aliado',
          body: 'Education, financial leadership and analytics to organise, compare and decide with clarity.',
          href: '/industries/finance',
        },
        {
          title: 'Logistics and automotive',
          brand: 'Distrecol',
          body: 'Industry 4.0 for plant, data and operations: process first, then automation.',
          href: '/industries/automotive',
        },
      ],
      howTitle: 'How we build it',
    },
    think: {
      eyebrow: 'Insights',
      title: 'Clarity before noise.',
      lead: 'Our perspective rests on a simple idea: technology creates value when it understands people and improves how they decide.',
      items: [
        {
          title: 'Technology in service of the operation',
          body: 'Products should solve everyday work, not add another layer of complexity.',
        },
        {
          title: 'Data people can use',
          body: 'Information only matters if it becomes an action the decision-maker can understand.',
        },
        {
          title: 'Responsible automation',
          body: 'AI and automation make sense when they reduce friction and respect the context of each sector.',
        },
      ],
    },
    insights: {
      crumb: 'Insights',
      eyebrow: 'Perspectives',
      title: 'Insights',
      lead: 'We write from the real friction companies live with: intergenerational overlap, AI switched on too early, advisory that never reaches the system. Seven articles to decide with more judgement.',
      fromLibrary: 'From our library',
      libraryTitle: 'Adoption problems, not tool catalogues.',
      featured: 'Featured',
      read: 'Read article',
      related: 'Also in Insights',
      minutes: 'min read',
      industryLink: 'See how we approach this in the sector',
      ctaTitle: 'Does this problem sound familiar?',
      ctaLead: 'The initial diagnosis is free. Tell us about your operation and we will get back to you to weigh the next step.',
    },
    careers: {
      eyebrow: 'Careers',
      kicker: 'Build your future',
      title: 'Grow your impact with us.',
      lead: 'If you are looking for the next step, we want to meet people who combine craft, rigour and care.',
      bandLead: 'Searching for the next step in your career? Learn more about joining our team.',
      body: 'Our office is in Fusagasugá, Colombia, but the work is managed remotely: there is no need to travel there. We do not post generic openings: if you want to join product, technology or business, write to us.',
      cta: 'Join our team',
    },
    healthcare: {
      eyebrow: 'Industries',
      title: 'Healthcare',
      kicker: 'MeuDoc',
      lead: 'From MOU we organise access, clinical operations and wellbeing. MeuDoc is the brand that takes that system to patients, professionals, clinics and companies.',
      intro:
        'In healthcare the problem is rarely “we need an app”. It is a broken calendar, scattered messages, documentation that does not travel, and wellbeing programmes nobody uses. MOU builds the flow; MeuDoc runs it.',
      needsTitle: 'What needs solving',
      needs: [
        {
          title: 'Access to care',
          body: 'Finding a verified professional and booking — in person or online — without getting lost in directories and informal WhatsApp threads.',
        },
        {
          title: 'A practice buried in admin',
          body: 'Independents lose time on confirmations, reschedules and paperwork. More disconnected tools will not fix that.',
        },
        {
          title: 'A clinic without a digital flow',
          body: 'Scheduling, records, communication and reporting live in silos. Operations do not scale if data does not enter and leave on the same path.',
        },
        {
          title: 'Workplace wellbeing without adoption',
          body: 'Companies buy occupational health that is not used. They need virtual care, psychology and a read on who actually joins the programme.',
        },
      ],
      whatTitle: 'How we solve it from MOU',
      pillars: [
        {
          title: 'Search and booking',
          body: 'Profiles, specialty, city and modality, with automatic confirmations and reminders — the first step of the MeuDoc ecosystem.',
        },
        {
          title: 'Clinical operations',
          body: 'Scheduling, documentation and analytics for professionals and centres, so the consult no longer depends on spreadsheets and parallel chats.',
        },
        {
          title: 'WhatsApp care',
          body: 'MeuAssistant answers, confirms and reschedules in sync with the calendar. Less friction for the patient; less load for the team.',
        },
        {
          title: 'Wellbeing for companies',
          body: 'Occupational health plans per employee, virtual care and adoption tracking. Not a catalogue: a programme you can measure.',
        },
      ],
      whyTitle: 'Why MOU in healthcare',
      whyBody:
        'We do not sell a generic module. We integrate product, automation and support under MeuDoc, the digital health brand of MOU. The initial diagnosis of your operation is free.',
      ctaTitle: 'Let’s put care in order',
      ctaLead: 'Tell us if you are a professional, a clinic or a company. We will get back to you to weigh the next step.',
      visit: 'Visit meudoc.co',
    },
    finance: {
      eyebrow: 'Industries',
      title: 'Finance',
      kicker: 'MEU Aliado',
      lead: 'From MOU we turn financial information into decisions. MEU Aliado is the brand that organises products, treasury and direction for people, SMEs and organisations.',
      intro:
        'The pain is not “we need another spreadsheet”. It is not comparing products, not seeing cash, not having ongoing financial direction, and not being able to explain a number in committee. MOU builds the system; MEU Aliado takes it into daily work.',
      needsTitle: 'What needs solving',
      needs: [
        {
          title: 'Scattered financial products',
          body: 'CDs, funds, pensions and obligations live at different institutions. Without one place to compare and track maturities, people decide late or blind.',
        },
        {
          title: 'A company without financial direction',
          body: 'Many SMEs cannot sustain a full-time team. They need meetings, indicators and models — not a one-off report at year end.',
        },
        {
          title: 'Cash that does not feed the decision',
          body: 'Revenue, costs and forecasts exist, but they are not used in committee. Without visible treasury, expansion and financing are improvised.',
        },
        {
          title: 'Healthcare operations without financial engineering',
          body: 'Clinics mix clinical operations with numbers that do not talk to each other. They need sector financial analytics — distinct from clinical software.',
        },
      ],
      whatTitle: 'How we solve it from MOU',
      pillars: [
        {
          title: 'Clarity for people',
          body: 'Compare, simulate and organise financial products — with education and follow-through — so the next decision does not depend on a single salesperson.',
        },
        {
          title: 'Financial innovation leadership',
          body: 'Recurring financial-direction support: dashboard, margins, budget, KPIs and committee work, without standing up a permanent team overnight.',
        },
        {
          title: 'Treasury and models',
          body: 'Cash flow, forecasting and project evaluation so cash stops being a surprise and becomes an instrument for decisions.',
        },
        {
          title: 'Financial engineering in healthcare',
          body: 'A MEU Aliado vertical for health organisations: analytics and financial structure. It complements MeuDoc; it does not replace it.',
        },
      ],
      whyTitle: 'Why MOU in finance',
      whyBody:
        'MEU Aliado Empresas is a commercial brand of MOU Solutions. We are not a bank or a generic accounting tool: we are the layer of clarity and support. The initial diagnosis is free.',
      ctaTitle: 'Let’s put the numbers on the table',
      ctaLead: 'Tell us if you are an individual, an SME or an organisation. We will weigh together whether it makes sense to continue.',
      visit: 'Visit MEU Aliado',
    },
    automotive: {
      eyebrow: 'Industries',
      title: 'Automotive and logistics',
      kicker: 'Distrecol',
      lead: 'From MOU we bring Industry 4.0 into real auto-parts and logistics operations. Distrecol is the plant case: process first, then automation.',
      intro:
        'In distribution and the shop floor, traditional work, new tools and intergenerational teams sit side by side. The risk is not buying technology — it is switching it on without a flow. MOU is the first line of adoption, advisory and follow-through.',
      needsTitle: 'What needs solving',
      needs: [
        {
          title: 'Process and tool disconnected',
          body: 'Plant or inventory software is purchased, and the real work stays on paper, WhatsApp or “the way we have always done it”.',
        },
        {
          title: 'Data that never leaves the warehouse',
          body: 'Inbound, outbound and quality exist, but they do not feed a purchasing, dispatch or service decision. Without that map, 4.0 is decoration.',
        },
        {
          title: 'Pilots that are not adopted',
          body: 'A dashboard or a process robot sits in a corner. The intergenerational handoff has to be supported so it is used on the shift, not only in the demo.',
        },
        {
          title: 'Automating too early',
          body: 'AI or sensors on a confused flow multiply the mess. Diagnose who decides, what data comes in and how the work is measured first.',
        },
      ],
      whatTitle: 'How we solve it from MOU',
      pillars: [
        {
          title: 'Operation diagnosis',
          body: 'We map Distrecol’s flow — and similar operations — before switching on any digital layer. The initial diagnosis is free.',
        },
        {
          title: 'Industry 4.0, tailored',
          body: 'We design and implement plant, data and automation tools aligned with real auto-parts, inventory and dispatch — not a generic catalogue.',
        },
        {
          title: 'Team adoption',
          body: 'We support the people who have been in the trade for years and those who arrive with new tools, so the system is used day to day.',
        },
        {
          title: 'Follow-through, not a milestone',
          body: 'We measure usage and adjust the flow. Implementation holds when advisory continues after go-live, not only after a software handover.',
        },
      ],
      whyTitle: 'Why MOU in automotive',
      whyBody:
        'Distrecol is an auto-parts distributor with a concrete operation. MOU does not sell the parts: we build the 4.0 system around that operation. The same judgement applies to logistics and plants living with disorder and a generational handoff.',
      ctaTitle: 'Let’s take 4.0 into your operation',
      ctaLead: 'If your plant or distribution network looks like that disorder, let’s talk. Distrecol shows the path in auto parts.',
      visit: 'See Distrecol',
    },
    contact: {
      crumbHome: 'Home',
      crumb: 'Contact',
      title: 'Contact us',
      hqLabel: 'Headquarters',
      hqAddress: 'Cra. 8 # 5-59, Office 506, Fusagasugá, Cundinamarca, Colombia',
      formEyebrow: 'Contact',
      formTitle: 'Let’s get in touch',
      formLead:
        'The initial diagnosis is free. Tell us about your case and we will reply from partners@mousolution.com to weigh the next step together.',
      freeLabel: 'No charge',
      freeTitle: 'The initial diagnosis is free.',
      freeBody:
        'The first review of your operation has no cost. It is to understand the process, the risk and whether it makes sense to continue together.',
      reason: 'Reason for inquiry',
      reasons: {
        placeholder: 'Please select',
        advisory: 'Strategy and technology advisory',
        health: 'Healthcare sector integrations',
        custom: 'Custom development',
        finance: 'Financial sector integrations',
        auto: 'Solutions for logistics and automotive — Industry 4.0',
        hr: 'HR solutions',
        accounting: 'Accounting and decision-making solutions',
        governance: 'Corporate governance and intergenerational handoff',
        other: 'Other',
      },
      firstName: 'First name',
      lastName: 'Last name',
      email: 'Email address',
      phone: 'Phone number',
      company: 'Company',
      message: 'Message',
      consent: 'I agree that MOU Solutions may use this information only to reply to my enquiry.',
      submit: 'Submit',
      sending: 'Sending…',
      sentTitle: 'Message sent.',
      sentBody: 'It was delivered to partners@mousolution.com. We will reply shortly to the email you left us.',
      error: 'We could not send the message. Try again or write to',
      whereEyebrow: 'Where we work',
      whereTitle: 'Office in Fusagasugá. Remote work.',
      whereLead:
        'The office is in Cundinamarca, Colombia. Projects and support are managed remotely: you do not need to travel to Fusagasugá to work with us.',
    },
    footer: {
      company: 'Company',
      industries: 'Industries',
      brands: 'Brands',
      healthcare: 'Healthcare',
      finance: 'Finance',
      automotive: 'Automotive',
      contact: 'Contact',
      articles: 'Articles',
      articlesLink: 'See articles',
      addressLabel: 'Office',
      rights: 'All rights reserved',
      legal: 'MOU Solutions S.A.S. · Tax ID 901935902-1',
    },
  },
} as const;
