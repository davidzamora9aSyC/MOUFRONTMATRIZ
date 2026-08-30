import type { Locale } from '@/i18n/dictionaries';

type Copy = { es: string; en: string };

export type InsightArticle = {
  slug: string;
  date: string;
  minutes: number;
  image: string;
  category: Copy;
  footerTitle: Copy;
  title: Copy;
  excerpt: Copy;
  description: Copy;
  author: { name: string; role: Copy };
  related: string[];
  industryHref?: string;
  sections: { heading: Copy; paragraphs: Copy[] }[];
};

const loc = (es: string, en: string): Copy => ({ es, en });

export const insights: InsightArticle[] = [
  {
    slug: 'errores-frecuentes-adopcion-inteligencia-artificial',
    date: '2026-08-18',
    minutes: 7,
    image: '/images/process-chaos.png',
    category: loc('Adopción de IA', 'AI adoption'),
    footerTitle: loc('Errores al adoptar IA', 'Mistakes when adopting AI'),
    title: loc(
      'Cinco errores frecuentes al adoptar inteligencia artificial en la empresa',
      'Five frequent mistakes when adopting AI in the company',
    ),
    excerpt: loc(
      'La IA no falla porque sea nueva. Falla cuando se enciende sobre un flujo que nadie puede explicar.',
      'AI does not fail because it is new. It fails when it is switched on over a flow nobody can explain.',
    ),
    description: loc(
      'Errores habituales al adoptar IA en empresas: automatizar el desorden, copiar casos de otro sector, saltarse al equipo y medir el piloto en vez del trabajo real.',
      'Common mistakes when adopting AI in companies: automating disorder, copying another sector’s case, skipping the team and measuring the pilot instead of real work.',
    ),
    author: {
      name: 'David Zamora',
      role: loc('CTO & Co-founder', 'CTO & Co-founder'),
    },
    related: [
      'consultoria-desconectada-de-la-tecnologia',
      'industria-4-0-sin-adopcion-en-planta',
      'empalme-intergeneracional-y-tecnologia',
    ],
    sections: [
      {
        heading: loc('El problema no es el modelo', 'The problem is not the model'),
        paragraphs: [
          loc(
            'En muchas mesas de dirección la conversación empieza por la herramienta: un asistente, un copilot, un agente. Es comprensible. El mercado bombardea con demos que parecen resolver el trabajo de un área entera. Lo que suele faltar es una pregunta previa: ¿quién decide hoy, con qué dato y en qué momento del flujo?',
            'In many boardrooms the conversation starts with the tool: an assistant, a copilot, an agent. That is understandable. The market bombards companies with demos that look as if they could replace an entire function. What is usually missing is a prior question: who decides today, with what data, and at which point in the flow?',
          ),
          loc(
            'En MOU partimos de una regla simple: primero el proceso, después la IA. No es un eslogan de prudencia. Es la única forma de que la automatización reduzca fricción en lugar de multiplicar excepciones. Un modelo entrenado sobre un flujo confuso replica el confuso a mayor velocidad.',
            'At MOU we start from a simple rule: process first, then AI. It is not a slogan of caution. It is the only way automation reduces friction instead of multiplying exceptions. A model trained on a confused flow replicates that confusion at greater speed.',
          ),
        ],
      },
      {
        heading: loc('Los cinco errores que más vemos', 'The five mistakes we see most'),
        paragraphs: [
          loc(
            'El primero es automatizar el desorden: conectar un agente de WhatsApp, un clasificador o un tablero predictivo sin haber acordado qué entra, qué sale y quién responde cuando el caso no cabe en la plantilla. El segundo es copiar el caso de otro sector —una clínica no es una tesorería, una planta no es un consultorio— y esperar el mismo resultado.',
            'The first is automating disorder: wiring a WhatsApp agent, a classifier or a predictive dashboard without agreeing what comes in, what goes out and who answers when the case does not fit the template. The second is copying another sector’s case — a clinic is not a treasury, a plant is not a practice — and expecting the same result.',
          ),
          loc(
            'El tercero es comprar la licencia y dejar la adopción para “después del go-live”. El cuarto es medir el piloto (¿funcionó la demo?) y no el trabajo (¿se dejó de reenviar el mismo caso por tres canales?). El quinto es saltarse a quienes llevan años en el oficio: si la herramienta no cabe en su turno, no hay adopción, hay resistencia justificada.',
            'The third is buying the licence and leaving adoption for “after go-live”. The fourth is measuring the pilot (did the demo work?) and not the work (did we stop forwarding the same case across three channels?). The fifth is skipping the people who have been in the trade for years: if the tool does not fit their shift, there is no adoption — there is justified resistance.',
          ),
        ],
      },
      {
        heading: loc('Qué sí conviene hacer', 'What is worth doing instead'),
        paragraphs: [
          loc(
            'Antes de encender cualquier capa de IA, conviene levantar el flujo con quien opera: excepciones, handoffs, datos que no existen y datos que existen pero nadie usa. Ese diagnóstico —en MOU, el inicial es gratuito— no retrasa la innovación. Evita pagar dos veces: una por la herramienta y otra por rehacer el proceso.',
            'Before switching on any AI layer, map the flow with the people who operate it: exceptions, handoffs, data that does not exist and data that exists but nobody uses. That diagnosis — at MOU the initial one is free — does not delay innovation. It avoids paying twice: once for the tool and again to redo the process.',
          ),
          loc(
            'Cuando el flujo es claro, la IA deja de ser un piloto aislado. Pasa a ser una acción comprensible: confirmar, clasificar, alertar, resumir. En salud, finanzas o planta, el criterio es el mismo. La tecnología crea valor cuando entiende a las personas y mejora la forma en que deciden.',
            'When the flow is clear, AI stops being an isolated pilot. It becomes a comprehensible action: confirm, classify, alert, summarise. In healthcare, finance or the plant, the judgement is the same. Technology creates value when it understands people and improves how they decide.',
          ),
        ],
      },
    ],
  },
  {
    slug: 'empalme-intergeneracional-y-tecnologia',
    date: '2026-08-04',
    minutes: 6,
    image: '/images/process-build.png',
    category: loc('Organización', 'Organisation'),
    footerTitle: loc('Empalme intergeneracional', 'Intergenerational handoff'),
    title: loc(
      'Empalme intergeneracional: por qué la tecnología se atasca entre oficios',
      'Intergenerational handoff: why technology stalls between crafts',
    ),
    excerpt: loc(
      'No es un conflicto de edades. Es un flujo donde conviven criterio acumulado y herramientas nuevas, sin un puente.',
      'It is not a conflict of ages. It is a flow where accumulated judgement and new tools coexist — without a bridge.',
    ),
    description: loc(
      'Cómo el empalme intergeneracional frena la adopción tecnológica en empresas colombianas y qué se necesita para que el oficio y las herramientas nuevas compartan el mismo flujo.',
      'How intergenerational overlap stalls technology adoption in Colombian companies, and what it takes for craft and new tools to share the same flow.',
    ),
    author: {
      name: 'Julian Herrera',
      role: loc('CEO & Co-founder', 'CEO & Co-founder'),
    },
    related: [
      'errores-frecuentes-adopcion-inteligencia-artificial',
      'bombardeo-de-propuestas-tecnologicas',
      'industria-4-0-sin-adopcion-en-planta',
    ],
    sections: [
      {
        heading: loc('Lo que se llama “resistencia” suele ser oficio', 'What is called “resistance” is often craft'),
        paragraphs: [
          loc(
            'En una clínica, una tesorería o una bodega de autopartes conviven personas que llevan décadas decidiendo con la cabeza y personas que llegan con tableros, automatizaciones y atajos digitales. El roce no es cultural en abstracto. Es operativo: dos formas de saber cuándo un caso está listo, y ningún mapa compartido.',
            'In a clinic, a treasury or an auto-parts warehouse, people who have decided with their heads for decades sit next to people who arrive with dashboards, automations and digital shortcuts. The friction is not cultural in the abstract. It is operational: two ways of knowing when a case is ready, and no shared map.',
          ),
          loc(
            'Llamar a eso “resistencia al cambio” es cómodo y casi siempre inexacto. Quien conoce las excepciones —el paciente que no cabe en la especialidad, el proveedor que se atrasa, el lote que no cuadra— no va a abandonar su criterio porque un piloto lo pida. Si la herramienta no absorbe esa excepción, el oficio gana. Y debería.',
            'Calling that “resistance to change” is convenient and almost always inaccurate. Anyone who knows the exceptions — the patient who does not fit the specialty, the supplier who is late, the batch that does not add up — will not abandon that judgement because a pilot asks them to. If the tool does not absorb the exception, the craft wins. And it should.',
          ),
        ],
      },
      {
        heading: loc('El puente no es un curso', 'The bridge is not a course'),
        paragraphs: [
          loc(
            'Muchas empresas responden con capacitación: una mañana de plataforma, un manual, un champion interno. Sirve si el flujo ya está claro. Si no, el curso enseña botones sobre un trabajo que sigue ocurriendo en WhatsApp, en papel o “como siempre se ha hecho”. El empalme intergeneracional se resuelve en el proceso, no en la inducción.',
            'Many companies answer with training: a morning on the platform, a manual, an internal champion. That helps if the flow is already clear. If it is not, the course teaches buttons on top of work that still happens on WhatsApp, on paper or “the way we have always done it”. The intergenerational handoff is solved in the process, not in onboarding.',
          ),
          loc(
            'Eso implica sentar en la misma mesa a quien opera y a quien propone la capa digital. No para “convencer”. Para escribir quién decide, qué dato entra y cómo se mide el trabajo real. En MOU eso es la primera línea de adopción: asesoría y seguimiento, no un recorte automático de personas.',
            'That means sitting the person who operates and the person who proposes the digital layer at the same table. Not to “persuade”. To write down who decides, what data comes in and how real work is measured. At MOU that is the first line of adoption: advisory and follow-through, not an automatic headcount cut.',
          ),
        ],
      },
      {
        heading: loc('Qué cambia cuando el flujo es uno', 'What changes when there is one flow'),
        paragraphs: [
          loc(
            'Cuando el oficio y la herramienta comparten el mismo camino, la conversación deja de ser generacional. Pasa a ser de calidad: menos retrabajo, menos excepciones invisibles, menos “yo ya lo tenía en mi cuaderno”. El bienestar del equipo no es un anexo de recursos humanos. Es la condición para que la tecnología se use.',
            'When craft and tool share the same path, the conversation stops being generational. It becomes one of quality: less rework, fewer invisible exceptions, less “I already had it in my notebook”. Team wellbeing is not an HR annex. It is the condition for the technology to be used.',
          ),
          loc(
            'No hay una receta única para salud, finanzas o planta. Hay un criterio: no desplazar a quien sabe, y no romanticizar el cuaderno. El empalme es un diseño de proceso. Si ese diseño no existe, ninguna licencia lo va a inventar.',
            'There is no single recipe for healthcare, finance or the plant. There is a judgement: do not displace the people who know, and do not romanticise the notebook. The handoff is process design. If that design does not exist, no licence will invent it.',
          ),
        ],
      },
    ],
  },
  {
    slug: 'consultoria-desconectada-de-la-tecnologia',
    date: '2026-07-21',
    minutes: 6,
    image: '/images/process-ready.png',
    category: loc('Consultoría', 'Advisory'),
    footerTitle: loc('Consultoría sin implementación', 'Advisory without implementation'),
    title: loc(
      'Cuando la consultoría termina en un PDF y la tecnología, en otro contrato',
      'When advisory ends in a PDF and technology in another contract',
    ),
    excerpt: loc(
      'El hueco entre el diagnóstico y el software es donde se pierde el dinero, el tiempo y la confianza del equipo.',
      'The gap between diagnosis and software is where money, time and the team’s trust are lost.',
    ),
    description: loc(
      'Por qué los servicios consultivos desconectados de la implementación tecnológica no resuelven la operación, y cómo unir diagnóstico, producto y seguimiento.',
      'Why advisory services disconnected from technology implementation fail to fix operations, and how to join diagnosis, product and follow-through.',
    ),
    author: {
      name: 'Julian Herrera',
      role: loc('CEO & Co-founder', 'CEO & Co-founder'),
    },
    related: [
      'errores-frecuentes-adopcion-inteligencia-artificial',
      'bombardeo-de-propuestas-tecnologicas',
      'digitalizar-la-clinica-sin-ordenar-el-proceso',
    ],
    industryHref: '/what-we-do',
    sections: [
      {
        heading: loc('Dos proveedores, un mismo vacío', 'Two vendors, one gap'),
        paragraphs: [
          loc(
            'Es un patrón conocido: una firma entrega un mapa de procesos, una matriz de riesgos y una lista de iniciativas. Meses después, otra firma —o un equipo interno— intenta traducir ese documento a un sistema. En el medio se evaporan las excepciones, los dueños de cada paso y el sentido de urgencia que tenía el diagnóstico.',
            'It is a familiar pattern: a firm delivers a process map, a risk matrix and a list of initiatives. Months later another firm — or an internal team — tries to translate that document into a system. In between, the exceptions, the owners of each step and the urgency the diagnosis once had all evaporate.',
          ),
          loc(
            'La empresa queda con dos artefactos que no se hablan: un PDF que ya nadie abre y un software que no refleja el trabajo. No es mala fe. Es una cadena partida. Quien diagnostica no construye; quien construye no estuvo en la mesa donde se acordó qué importaba.',
            'The company is left with two artefacts that do not talk to each other: a PDF nobody opens anymore and software that does not reflect the work. It is not bad faith. It is a broken chain. Those who diagnose do not build; those who build were not in the room where it was agreed what mattered.',
          ),
        ],
      },
      {
        heading: loc('Por qué duele más que un sobrecosto', 'Why it hurts more than a cost overrun'),
        paragraphs: [
          loc(
            'El costo visible es doble contratación. El costo real es el equipo: ya se le pidió tiempo para entrevistas, ya se le prometió que “esto va a ordenar el día a día”, y luego se le entrega una herramienta que no cabe en el turno. La siguiente iniciativa empieza con menos crédito interno. Eso no se recupera con un nuevo slide de kickoff.',
            'The visible cost is paying twice. The real cost is the team: they already gave time for interviews, they were already promised that “this will put the day-to-day in order”, and then they are handed a tool that does not fit the shift. The next initiative starts with less internal credit. That is not recovered with a new kickoff slide.',
          ),
          loc(
            'En salud y en finanzas el patrón es especialmente costoso. Una clínica no puede pausar la agenda mientras dos proveedores se coordinan. Una PYME no puede sostener dirección financiera en un informe trimestral y operación en un Excel paralelo. El sistema tiene que ser el mismo lugar donde se decide.',
            'In healthcare and finance the pattern is especially expensive. A clinic cannot pause the calendar while two vendors coordinate. An SME cannot sustain financial direction in a quarterly report and operations in a parallel spreadsheet. The system has to be the same place where decisions are made.',
          ),
        ],
      },
      {
        heading: loc('Una sola línea: diagnosticar, construir, seguir', 'One line: diagnose, build, follow through'),
        paragraphs: [
          loc(
            'MOU se diseña como esa línea. El holding ordena el sistema; las marcas —MeuDoc, MEU Aliado— y los casos de planta como Distrecol lo llevan a sector. No vendemos un módulo genérico ni un informe que se agota en la entrega. El diagnóstico inicial es gratuito precisamente para saber si vale la pena seguir juntos.',
            'MOU is designed as that line. The holding company orders the system; the brands — MeuDoc, MEU Aliado — and plant cases such as Distrecol take it into the sector. We do not sell a generic module or a report that expires at delivery. The initial diagnosis is free precisely so we can see whether it is worth continuing together.',
          ),
          loc(
            'Si la consultoría no puede señalar el botón, el campo o el mensaje que cambia el trabajo mañana, no es adopción: es literatura de procesos. La tecnología, sin ese criterio, es solo otra capa. Las empresas no necesitan más capas. Necesitan un flujo que se pueda usar.',
            'If advisory cannot point to the button, the field or the message that changes tomorrow’s work, it is not adoption: it is process literature. Technology without that judgement is just another layer. Companies do not need more layers. They need a flow they can use.',
          ),
        ],
      },
    ],
  },
  {
    slug: 'bombardeo-de-propuestas-tecnologicas',
    date: '2026-07-07',
    minutes: 5,
    image: '/images/process-chaos.png',
    category: loc('Estrategia', 'Strategy'),
    footerTitle: loc('Bombardeo de propuestas tech', 'Tech-proposal overload'),
    title: loc(
      'Bombardeo de propuestas tecnológicas: cómo decidir sin comprar el ruido',
      'Tech-proposal overload: how to decide without buying the noise',
    ),
    excerpt: loc(
      'El mercado no peca de falta de herramientas. Peca de falta de un criterio para decir que no.',
      'The market does not lack tools. It lacks a criterion for saying no.',
    ),
    description: loc(
      'Cómo las empresas pueden filtrar el bombardeo de propuestas tecnológicas y elegir adopción, asesoría y seguimiento en lugar de otro piloto aislado.',
      'How companies can filter tech-proposal overload and choose adoption, advisory and follow-through instead of another isolated pilot.',
    ),
    author: {
      name: 'Julian Herrera',
      role: loc('CEO & Co-founder', 'CEO & Co-founder'),
    },
    related: [
      'consultoria-desconectada-de-la-tecnologia',
      'errores-frecuentes-adopcion-inteligencia-artificial',
      'empalme-intergeneracional-y-tecnologia',
    ],
    sections: [
      {
        heading: loc('Más catálogo, menos operación', 'More catalogue, less operation'),
        paragraphs: [
          loc(
            'Cualquier gerente de una clínica, una PYME o una operación logística recibe, en un trimestre, más demos de las que puede evaluar con rigor. Cada una promete eficiencia, IA y “transformación”. El costo de decir que sí es visible. El de decir que no, también: miedo a quedarse atrás.',
            'Any manager in a clinic, an SME or a logistics operation receives, in a single quarter, more demos than they can evaluate with rigour. Each one promises efficiency, AI and “transformation”. The cost of saying yes is visible. So is the cost of saying no: the fear of being left behind.',
          ),
          loc(
            'Ese bombardeo no es neutro. Fragmenta la atención del equipo, multiplica logins y deja pilotos sin dueño. Cuando llega la siguiente propuesta, ya no hay crédito interno. El desorden no viene de “no innovar”. Viene de innovar sin un filtro.',
            'That overload is not neutral. It fragments the team’s attention, multiplies logins and leaves pilots without an owner. By the time the next proposal arrives, internal credit is gone. The disorder does not come from “not innovating”. It comes from innovating without a filter.',
          ),
        ],
      },
      {
        heading: loc('Un filtro de tres preguntas', 'A filter of three questions'),
        paragraphs: [
          loc(
            'Antes de agendar otra demo, tres preguntas bastan. ¿Qué decisión concreta mejora esta semana, no este año? ¿Quién en el turno va a usarla, y qué deja de hacer? ¿Cómo sabremos, en 30 días, que el trabajo cambió —no que la licencia está activa?',
            'Before booking another demo, three questions are enough. Which concrete decision does this improve this week, not this year? Who on the shift will use it, and what will they stop doing? How will we know, in 30 days, that the work changed — not that the licence is active?',
          ),
          loc(
            'Si el proveedor no puede responder sin un slide de arquitectura, no está listo para su operación. Si su propio equipo no puede responder, el problema no es el proveedor: es que aún no hay proceso. En ese caso, la compra adelanta un conflicto.',
            'If the vendor cannot answer without an architecture slide, they are not ready for your operation. If your own team cannot answer, the problem is not the vendor: it is that there is still no process. In that case, the purchase brings a conflict forward.',
          ),
        ],
      },
      {
        heading: loc('Primera línea, no más vitrina', 'A first line, not another shop window'),
        paragraphs: [
          loc(
            'MOU existe para ser esa primera línea: adopción, asesoría y seguimiento. No una vitrina más. El holding no duplica los sitios de producto; explica el sistema. MeuDoc, MEU Aliado y el trabajo con Distrecol aplican el mismo filtro a sectores distintos.',
            'MOU exists to be that first line: adoption, advisory and follow-through. Not another shop window. The holding company does not duplicate product sites; it explains the system. MeuDoc, MEU Aliado and the work with Distrecol apply the same filter to different sectors.',
          ),
          loc(
            'Decir que no a diez propuestas es, a menudo, la decisión más productiva del año. Decir que sí a una, con proceso y dueño, es la que cambia el trabajo. El ruido se compra caro. El criterio, no.',
            'Saying no to ten proposals is often the most productive decision of the year. Saying yes to one, with a process and an owner, is the one that changes the work. Noise is expensive to buy. Judgement is not.',
          ),
        ],
      },
    ],
  },
  {
    slug: 'digitalizar-la-clinica-sin-ordenar-el-proceso',
    date: '2026-06-16',
    minutes: 6,
    image: '/images/process-ready.png',
    category: loc('Salud', 'Healthcare'),
    footerTitle: loc('Digitalizar la clínica', 'Digitising the clinic'),
    title: loc(
      'Digitalizar la clínica sin ordenar el proceso: el software que nadie abre',
      'Digitising the clinic without ordering the process: software nobody opens',
    ),
    excerpt: loc(
      'Agenda, WhatsApp, historia y reportes en islas. El problema no es falta de pantallas: es falta de un camino.',
      'Scheduling, WhatsApp, records and reporting in silos. The problem is not a lack of screens: it is a lack of a path.',
    ),
    description: loc(
      'Por qué digitalizar una clínica o un consultorio falla cuando agenda, WhatsApp e historia no comparten flujo, y cómo abordarlo desde MOU y MeuDoc.',
      'Why digitising a clinic or practice fails when scheduling, WhatsApp and records do not share a flow, and how MOU and MeuDoc approach it.',
    ),
    author: {
      name: 'David Zamora',
      role: loc('CTO & Co-founder', 'CTO & Co-founder'),
    },
    related: [
      'consultoria-desconectada-de-la-tecnologia',
      'errores-frecuentes-adopcion-inteligencia-artificial',
      'finanzas-que-no-llegan-al-comite',
    ],
    industryHref: '/industries/healthcare',
    sections: [
      {
        heading: loc('Cuatro sistemas, un paciente', 'Four systems, one patient'),
        paragraphs: [
          loc(
            'El paciente escribe por WhatsApp, la recepción anota en un cuaderno o en un calendario, el profesional documenta en otro lugar y la clínica reporta como puede. Cada pieza puede estar “digitalizada” y, aun así, la atención no tiene un flujo. Digitalizar islas no es digitalizar la operación.',
            'The patient writes on WhatsApp, reception notes it in a notebook or a calendar, the professional documents somewhere else and the clinic reports as best it can. Each piece can be “digitised” and care still has no flow. Digitising silos is not digitising the operation.',
          ),
          loc(
            'Eso se nota en lo cotidiano: confirmaciones que no llegan, reagendos que no se reflejan, historias que no viajan, programas de bienestar empresarial que nadie usa. El profesional independiente pierde el tiempo en admin. El centro médico no escala. La empresa que pagó salud ocupacional no ve adopción.',
            'You see it in the everyday: confirmations that do not arrive, reschedules that do not show up, records that do not travel, corporate wellbeing programmes nobody uses. The independent professional loses time to admin. The medical centre does not scale. The company that paid for occupational health sees no adoption.',
          ),
        ],
      },
      {
        heading: loc('Qué hay que resolver antes del módulo', 'What to solve before the module'),
        paragraphs: [
          loc(
            'Antes de comprar otro módulo conviene acordar el camino: cómo se busca al profesional, cómo se agenda —presencial u online—, quién confirma, qué pasa cuando el paciente no llega, dónde queda la nota clínica y cómo un mensaje de WhatsApp deja de ser un hilo paralelo.',
            'Before buying another module, agree the path: how the professional is found, how booking works — in person or online — who confirms, what happens when the patient does not show, where the clinical note lives and how a WhatsApp message stops being a parallel thread.',
          ),
          loc(
            'MeuDoc, la marca de salud digital de MOU, está construida sobre ese camino: perfiles y agendamiento, operación de consultorio y clínica, asistencia de atención sincronizada con la agenda, y bienestar empresarial que se pueda medir. No es un catálogo de pantallas. Es un flujo que el paciente y el equipo pueden usar.',
            'MeuDoc, the digital health brand of MOU, is built on that path: profiles and booking, practice and clinic operations, care assistance synced with the calendar, and corporate wellbeing that can be measured. It is not a catalogue of screens. It is a flow the patient and the team can use.',
          ),
        ],
      },
      {
        heading: loc('Diagnóstico, no un tour del producto', 'Diagnosis, not a product tour'),
        paragraphs: [
          loc(
            'Si tu operación todavía vive en chats y planillas, el siguiente paso no es un tour de funcionalidades. Es sentarse a ver el flujo real. En MOU ese diagnóstico inicial no tiene costo. Sirve para saber si tiene sentido seguir —con MeuDoc o con un diseño a la medida— o si aún no hay proceso que digitalizar.',
            'If your operation still lives in chats and spreadsheets, the next step is not a feature tour. It is sitting down to look at the real flow. At MOU that initial diagnosis has no cost. It is there to see whether it makes sense to continue — with MeuDoc or with a tailored design — or whether there is not yet a process to digitise.',
          ),
        ],
      },
    ],
  },
  {
    slug: 'finanzas-que-no-llegan-al-comite',
    date: '2026-05-26',
    minutes: 6,
    image: '/images/process-build.png',
    category: loc('Finanzas', 'Finance'),
    footerTitle: loc('Finanzas que no se usan', 'Finance that is not used'),
    title: loc(
      'Dirección financiera sin datos que se usen: el tablero que no llega al comité',
      'Financial direction without data people use: the dashboard that never reaches the committee',
    ),
    excerpt: loc(
      'Ingresos, costos y forecast existen. Si no cambian una decisión en la mesa, son archivo, no dirección.',
      'Revenue, costs and forecasts exist. If they do not change a decision at the table, they are archive, not direction.',
    ),
    description: loc(
      'Por qué las PYMEs y organizaciones acumulan reportes financieros que no alimentan el comité, y cómo la dirección financiera de MEU Aliado convierte números en decisiones.',
      'Why SMEs and organisations accumulate financial reports that never feed the committee, and how MEU Aliado’s financial direction turns numbers into decisions.',
    ),
    author: {
      name: 'Julian Herrera',
      role: loc('CEO & Co-founder', 'CEO & Co-founder'),
    },
    related: [
      'consultoria-desconectada-de-la-tecnologia',
      'digitalizar-la-clinica-sin-ordenar-el-proceso',
      'bombardeo-de-propuestas-tecnologicas',
    ],
    industryHref: '/industries/finance',
    sections: [
      {
        heading: loc('El Excel no es el enemigo', 'The spreadsheet is not the enemy'),
        paragraphs: [
          loc(
            'Muchas empresas ya “tienen números”: un contador, un ERP, exportaciones a hoja de cálculo, un tablero que se armó en un proyecto y nadie actualiza. El problema no es la ausencia de dato. Es que el dato no llega a la decisión: la caja se conoce tarde, el margen se discute con retraso, la financiación se improvisa.',
            'Many companies already “have numbers”: an accountant, an ERP, spreadsheet exports, a dashboard built in a project that nobody updates. The problem is not the absence of data. It is that the data does not reach the decision: cash is known too late, margin is discussed with a lag, financing is improvised.',
          ),
          loc(
            'Una PYME rara vez puede sostener un área financiera de tiempo completo. Una organización de salud, además, mezcla operación clínica con números que no dialogan. En ambos casos se contrata un informe —o se compra un software— y se espera que la dirección aparezca sola. No aparece.',
            'An SME can rarely sustain a full-time finance function. A health organisation, moreover, mixes clinical operations with numbers that do not talk to each other. In both cases a report is commissioned — or software is bought — and financial direction is expected to appear on its own. It does not.',
          ),
        ],
      },
      {
        heading: loc('Dirección es reunión, no archivo', 'Direction is a meeting, not a file'),
        paragraphs: [
          loc(
            'La dirección financiera útil es recurrente: dashboard que se mira, caja que se proyecta, KPIs que caben en un comité, modelos cuando hay que evaluar un proyecto. No es un PDF de cierre. Es una conversación con dueño, con excepciones y con la siguiente decisión encima de la mesa.',
            'Useful financial direction is recurring: a dashboard that is actually looked at, cash that is projected, KPIs that fit in a committee, models when a project must be evaluated. It is not a closing PDF. It is a conversation with an owner, with exceptions and with the next decision on the table.',
          ),
          loc(
            'MEU Aliado, marca comercial de MOU Solutions, está pensada para esa capa: claridad para personas que comparan productos, dirección de innovación financiera para empresas, tesorería y, en salud, ingeniería financiera distinta del software clínico de MeuDoc. Dos problemas distintos. Un mismo holding.',
            'MEU Aliado, a commercial brand of MOU Solutions, is built for that layer: clarity for people comparing products, financial-innovation leadership for companies, treasury and, in healthcare, financial engineering distinct from MeuDoc’s clinical software. Two different problems. One holding company.',
          ),
        ],
      },
      {
        heading: loc('Empezar por la decisión, no por el tablero', 'Start with the decision, not the dashboard'),
        paragraphs: [
          loc(
            'Si el comité no puede nombrar la decisión que el número debería cambiar este mes, no hace falta otro tablero. Hace falta sentarse a ver caja, margen y el flujo de quién reporta qué. Ese diagnóstico inicial, en MOU, es gratuito. El software y el acompañamiento vienen después, si el proceso existe.',
            'If the committee cannot name the decision the number should change this month, another dashboard is not what you need. You need to sit down and look at cash, margin and the flow of who reports what. That initial diagnosis, at MOU, is free. Software and support come after, if the process exists.',
          ),
        ],
      },
    ],
  },
  {
    slug: 'industria-4-0-sin-adopcion-en-planta',
    date: '2026-05-05',
    minutes: 6,
    image: '/images/process-chaos.png',
    category: loc('Industria 4.0', 'Industry 4.0'),
    footerTitle: loc('Industria 4.0 sin adopción', 'Industry 4.0 without adoption'),
    title: loc(
      'Industria 4.0 sin adopción: sensores, tableros y el turno que no los usa',
      'Industry 4.0 without adoption: sensors, dashboards and the shift that does not use them',
    ),
    excerpt: loc(
      'La planta no se transforma en la demo. Se transforma si el dato de bodega cambia una decisión de compras o de despacho.',
      'The plant is not transformed in the demo. It is transformed if warehouse data changes a purchasing or dispatch decision.',
    ),
    description: loc(
      'Por qué los pilotos de Industria 4.0 no se adoptan en planta y logística, y cómo MOU aborda el caso Distrecol: proceso primero, después automatización.',
      'Why Industry 4.0 pilots fail to be adopted on the plant floor and in logistics, and how MOU approaches the Distrecol case: process first, then automation.',
    ),
    author: {
      name: 'David Zamora',
      role: loc('CTO & Co-founder', 'CTO & Co-founder'),
    },
    related: [
      'empalme-intergeneracional-y-tecnologia',
      'errores-frecuentes-adopcion-inteligencia-artificial',
      'consultoria-desconectada-de-la-tecnologia',
    ],
    industryHref: '/industries/automotive',
    sections: [
      {
        heading: loc('El piloto en el rincón', 'The pilot in the corner'),
        paragraphs: [
          loc(
            'En distribución de autopartes y en logística es habitual ver un tablero que se inauguró con foto y un proceso que sigue en papel, en WhatsApp o en la cabeza de quien lleva veinte años en bodega. No es que la 4.0 “no sirva”. Es que se encendió sin un flujo: entradas, salidas, calidad y quién decide con ese dato.',
            'In auto-parts distribution and logistics it is common to see a dashboard unveiled with a photograph and a process that still lives on paper, on WhatsApp or in the head of someone who has been in the warehouse for twenty years. It is not that 4.0 “does not work”. It is that it was switched on without a flow: inbound, outbound, quality and who decides with that data.',
          ),
          loc(
            'Sin ese mapa, el sensor es decorativo. El dato no sale de la bodega. Compras, despacho y servicio siguen improvisando. La siguiente inversión en automatización hereda el escepticismo del turno. Con razón.',
            'Without that map, the sensor is decorative. The data never leaves the warehouse. Purchasing, dispatch and service keep improvising. The next automation investment inherits the shift’s scepticism. Rightly so.',
          ),
        ],
      },
      {
        heading: loc('Distrecol no es un catálogo: es una operación', 'Distrecol is not a catalogue: it is an operation'),
        paragraphs: [
          loc(
            'Distrecol es un distribuidor de autopartes con oficio concreto. MOU no vende las partes. Construye el sistema 4.0 alrededor de esa operación: diagnóstico del flujo, herramientas de planta y datos alineadas a inventario y despacho reales, adopción con quien opera, seguimiento después del go-live.',
            'Distrecol is an auto-parts distributor with a concrete craft. MOU does not sell the parts. We build the 4.0 system around that operation: diagnosing the flow, plant and data tools aligned with real inventory and dispatch, adoption with the people who operate, follow-through after go-live.',
          ),
          loc(
            'El mismo criterio sirve a otras redes de distribución y plantas que conviven con desorden y empalme de generaciones. No se trata de copiar un recetario de “smart factory”. Se trata de que el turno use el sistema. Si no lo usa, no hay 4.0. Hay capex.',
            'The same judgement serves other distribution networks and plants that live with disorder and a generational handoff. It is not about copying a “smart factory” playbook. It is about the shift using the system. If they do not use it, there is no 4.0. There is capex.',
          ),
        ],
      },
      {
        heading: loc('Proceso primero, después la automatización', 'Process first, then automation'),
        paragraphs: [
          loc(
            'IA o sensores sobre un flujo confuso multiplican el desorden. El orden de trabajo de MOU es deliberado: levantar quién decide y qué dato entra; diseñar la capa digital a la medida; acompañar la adopción; medir uso y ajustar. El diagnóstico inicial es gratuito. La automatización, cuando el proceso ya se puede nombrar.',
            'AI or sensors on a confused flow multiply the mess. MOU’s order of work is deliberate: map who decides and what data comes in; design the digital layer to fit; support adoption; measure usage and adjust. The initial diagnosis is free. Automation comes when the process can already be named.',
          ),
        ],
      },
    ],
  },
];

export function getInsight(slug: string) {
  return insights.find((item) => item.slug === slug);
}

export function insightCopy(article: InsightArticle, locale: Locale) {
  return {
    slug: article.slug,
    date: article.date,
    minutes: article.minutes,
    image: article.image,
    industryHref: article.industryHref,
    related: article.related,
    authorName: article.author.name,
    authorRole: article.author.role[locale],
    category: article.category[locale],
    footerTitle: article.footerTitle[locale],
    title: article.title[locale],
    excerpt: article.excerpt[locale],
    description: article.description[locale],
    sections: article.sections.map((section) => ({
      heading: section.heading[locale],
      paragraphs: section.paragraphs.map((paragraph) => paragraph[locale]),
    })),
  };
}

export function relatedInsights(slug: string, locale: Locale) {
  const current = getInsight(slug);
  const slugs = current?.related ?? insights.filter((item) => item.slug !== slug).slice(0, 3).map((item) => item.slug);
  return slugs
    .map((item) => getInsight(item))
    .filter((item): item is InsightArticle => Boolean(item))
    .map((item) => insightCopy(item, locale));
}
