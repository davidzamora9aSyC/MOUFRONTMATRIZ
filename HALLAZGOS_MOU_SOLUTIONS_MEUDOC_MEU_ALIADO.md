# Documento maestro de hallazgos: MOU Solutions, MeuDoc y MEU Aliado

**Fecha del levantamiento:** 26 de agosto de 2026, hora de Colombia  
**Objetivo:** dejar una base de conocimiento verificable para construir posteriormente el sitio web matriz de **MOU Solutions**, presentando a **MeuDoc** y **MEU Aliado** como sus dos marcas y a **Julian Herrera** y **David Zamora** como cofundadores.

> Este documento diferencia entre: (1) lo publicado en producción, (2) lo implementado en código, (3) demos o funcionalidades parciales y (4) propuestas de roadmap. Esa distinción es importante para no convertir una pantalla, un mockup o una idea futura en una promesa comercial.

---

## 1. Resumen ejecutivo

### MOU Solutions

La evidencia local identifica a **MOU SOLUTIONS S.A.S.** como la sociedad constituida detrás de MEU Aliado:

- Razón social: **MOU SOLUTIONS S.A.S.**
- NIT publicado en el frontend de MEU Aliado: **901935902-1**
- Domicilio publicado: **Fusagasugá, Cundinamarca, Colombia**
- Constitución reportada por una fuente empresarial externa: **19 de marzo de 2025**
- Actividad económica reportada externamente: CIIU 6619, otras actividades auxiliares de servicios financieros.

Para el futuro sitio matriz, la arquitectura de marca solicitada por el usuario puede expresarse así:

> **MOU Solutions es una compañía colombiana de tecnología y servicios que construye soluciones para dos ámbitos esenciales: salud y finanzas. A través de MeuDoc transforma el acceso, la operación y el bienestar en salud; a través de MEU Aliado ayuda a personas y empresas a comprender, organizar y mejorar sus decisiones financieras.**

Esta frase es una síntesis estratégica propuesta, no un texto existente literalmente en los repositorios.

### Las dos marcas

| Marca | Ámbito | Audiencias principales | Propuesta central encontrada |
|---|---|---|---|
| **MeuDoc** | Healthtech / salud digital | Pacientes, profesionales, clínicas, empresas y comunidad de salud | Encontrar y agendar especialistas; digitalizar la operación clínica; automatizar atención y agenda; ofrecer bienestar corporativo y comunidad profesional. |
| **MEU Aliado** | Fintech, educación y dirección financiera | Personas, PYMEs, organizaciones de salud, constructoras y ecosistemas empresariales regionales | Comparar y organizar productos financieros; educación y asesoría; dirección de innovación financiera; tesorería, analítica e ingeniería financiera sectorial. |

### Fundadores

- **Julian Herrera — CEO & Co-founder.** Economista de la Universidad de los Andes y estudiante de maestría PEG en Economía, según el sitio de MeuDoc. Lidera visión estratégica, comercial y relaciones corporativas. En MEU Aliado también aparece como responsable de Dirección General y de la línea de Dirección de Innovación Financiera.
- **David Zamora — CTO & Co-founder.** El sitio de MeuDoc lo presenta como Ingeniero de Sistemas de la Universidad de los Andes y líder de arquitectura tecnológica y desarrollo de producto. En fuentes públicas aparece el nombre completo **David Ernesto Zamora Cortes**.

**Corrección de nombre:** la evidencia encontrada usa **David Zamora**, no “David Xamora”.

---

## 2. Fuentes inspeccionadas y nivel de evidencia

### Fuentes locales principales

1. `../MEUSALUD/AGENTS.md`
   - Explica la arquitectura general de MeuDoc.
   - Confirma que el nombre histórico de carpeta/repositorio es MeuSalud, pero el dominio y la marca principal son **MeuDoc**.
   - Indica que el frontend público principal está en Next.js.

2. `../migracion-seo/meusalud-public-next`
   - Frontend público Next.js de MeuDoc.
   - Commit más reciente visible al momento del análisis: `49752c24f538cdc2ea74a636c84074168684d65b`, del 25 de julio de 2026.
   - Contiene páginas comerciales, búsqueda pública, agendamiento, contenido, MeuRed, precios, bienestar empresarial y proxies de API.

3. `../MEUSALUD/Front_MeuSalud`
   - Frontend React autenticado/histórico que continúa atendiendo los portales de pacientes, profesionales, clínicas, empresas, administración y comercial.

4. `../MEUSALUD`
   - Backend distribuido en microservicios de MeuDoc.

5. `../MeuAliado/moufront3`
   - Frontend React de MEU Aliado.
   - Commit más reciente visible: `a281cb04fc0e00054b2246c40e7d04c78417a27c`, del 25 de julio de 2026.
   - Incluye oferta para personas y empresas, documentos legales, portafolio comercial, simuladores, dashboards y verticales sectoriales.

### Fuentes públicas consultadas

- [MeuDoc](https://meudoc.co/)
- [MeuDoc para profesionales](https://meudoc.co/profesionales)
- [MeuDoc para empresas](https://meudoc.co/empresas)
- [Planes y precios de MeuDoc](https://meudoc.co/planes-y-precios)
- [MeuDoc Premium](https://meudoc.co/meudoc-premium)
- [MeuAssistant](https://meudoc.co/meu-assistant)
- [Quiénes somos — MeuDoc](https://meudoc.co/quienes-somos)
- [MEU Aliado](https://www.meu-aliado.com/)
- Consulta pública empresarial sobre MOU Solutions y resultados de Cámara de Comercio encontrados mediante búsqueda web.

El sitio público de MeuDoc fue legible y coincidió en gran medida con el frontend Next local. El dominio de MEU Aliado respondió con el título “Meu Aliado”, pero el extractor web no devolvió contenido de sus rutas; por eso el análisis de esa marca se fundamenta principalmente en el repositorio local y sus documentos comerciales exportados.

---

## 3. MeuDoc: identidad y posicionamiento

### Qué es

MeuDoc se presenta como una **plataforma de salud en Colombia** que conecta pacientes con profesionales verificados y clínicas aliadas, a la vez que ofrece software de operación y crecimiento para profesionales, centros médicos y empresas.

La frase pública más consistente es:

> “Salud inteligente para Colombia”.

La misión publicada consiste en reducir la brecha entre pacientes y especialistas mediante tecnología accesible, segura y centrada en la experiencia humana.

### Audiencias

El frontend público organiza la experiencia alrededor de tres segmentos visibles:

1. **Personas/pacientes.**
2. **Profesionales y centros de salud.**
3. **Empresas y sus colaboradores.**

Además, MeuDoc contiene **MeuRed**, una comunidad especializada para doctores, investigadores, estudiantes y entidades.

### Modelo de producto observado

- Marketplace/directorio y agendamiento para pacientes.
- SaaS B2B por suscripción para profesionales y clínicas.
- Agentes y automatizaciones con IA como complemento de suscripción.
- Planes de bienestar y salud laboral por empleado para empresas.
- Comunidad profesional y contenidos para fortalecer adquisición, confianza y retención.

---

## 4. MeuDoc para personas y pacientes

### Servicios públicos claramente visibles

- **Búsqueda de profesionales de la salud** por especialidad, ciudad y modalidad.
- **Directorio de especialistas** con perfiles individuales.
- **Perfiles verificados**, reseñas y nivel de confianza.
- **Disponibilidad en tiempo real**.
- **Reserva de citas sin llamadas**.
- **Agendamiento presencial u online**, según la oferta del profesional.
- **Confirmaciones y recordatorios automáticos**, incluidos canales como WhatsApp y correo en distintos flujos.
- **Reserva gratuita para el paciente**, sin costos añadidos por el acto de reservar, según `public/llms.txt`.
- Consulta de **clínicas aliadas**.
- Búsqueda por **especialidad, ciudad y enfermedad**, apoyada por páginas SEO dinámicas.
- **Mapa de especialistas**.
- **Preguntas y respuestas** para orientación pública.
- **Blog para pacientes** y hub de contenidos.

### Flujo de cita

El frontend Next contiene un flujo completo de páginas públicas:

1. Búsqueda.
2. Resultados.
3. Perfil del profesional.
4. Selección de disponibilidad.
5. Formulario de cita.
6. Avisos y consentimiento.
7. Confirmación y pantalla de éxito.
8. Confirmación de asistencia y recordatorios.

### Portal autenticado del paciente

El frontend React conserva rutas para:

- Historial de citas y consultas.
- Detalle de consulta.
- Mensajes.
- Perfil y datos personales.
- Configuración de la cuenta.
- Gestión de citas.
- Pausas activas y sesiones guiadas.
- Dependientes/familiares, inferido por APIs de dependientes y el diseño de círculos.

### Círculos de bienestar y prevención

El home público presenta una propuesta de **red de bienestar**:

- Crear círculos con familiares y amigos.
- Nodos o grados de conexión.
- Retos semanales y rachas.
- Hábitos preventivos compartidos.
- Métricas agregadas de bienestar, sin compartir historias clínicas.

La propia página etiqueta parte de esta interfaz como **demo interactiva**. Por tanto, conviene presentarla en la web matriz como “módulo de prevención y bienestar en desarrollo/beta” hasta confirmar su operación real de extremo a extremo.

---

## 5. MeuDoc para profesionales independientes

### Propuesta de valor

MeuDoc busca ayudar a profesionales a **atraer pacientes, digitalizar la consulta, reducir trabajo administrativo y automatizar la relación con el paciente**.

### Capacidades encontradas

- Perfil profesional verificado y presencia en el directorio.
- Reseñas/opiniones verificadas y gestión de reputación.
- Agenda diaria, semanal y multiagenda.
- Reserva web 24/7.
- Widget de agendamiento para sitios externos.
- Disponibilidad y horarios de trabajo.
- Varias direcciones, sedes y agendas.
- Recordatorios por correo y WhatsApp.
- Confirmación, cancelación y reagendamiento.
- Lista de espera inteligente.
- Panel de recepción para secretaria/equipo.
- Portal del paciente.
- Formularios de preconsulta y documentación.
- Pagos en línea y anticipados.
- Mensajería interna con pacientes.
- Campañas de correo segmentadas.
- Analítica de ocupación, reservas, reputación, ingresos y campañas.
- Reportes de citas, eficiencia, ingresos y gastos.
- Gestión de pacientes y detalle de paciente.
- Atención del día y sesiones de consulta.
- Episodios e historia clínica.
- Notas médicas y recetas digitales.
- Plantillas clínicas y plantillas de episodios.
- Documentación y firma del profesional.
- Diseños de impresión.
- Paquetes de servicios y presupuestos.
- Facturación electrónica, documentos, resoluciones, importación CSV e integración.
- Teleconsulta/telemedicina, incluida en Premium y anunciada como próxima en planes inferiores.
- Historia clínica digital interoperable.
- Formatos odontológicos y de especialidades dentales, mencionados en `public/llms.txt`.
- RIPS para reportes de salud, mencionado en `public/llms.txt`.
- Gestión de usuarios, roles, permisos y políticas de acceso.
- Exportación de datos, privacidad, autenticación y MFA.

### MeuDoc Premium

MeuDoc Premium reúne las capacidades de crecimiento y operación clínica en una plataforma:

- Agenda inteligente y sincronización de sedes/calendarios.
- Teleconsultas.
- Portal del paciente.
- Formularios y documentos preconsulta.
- Pagos anticipados.
- Comunicación omnicanal.
- Confirmaciones, campañas y seguimiento.
- Analítica y reporting.
- Visibilidad y reputación digital.
- Recordatorios para reducir ausencias.
- Integración con MeuAssistant.

### MeuAssistant WhatsApp

Es un agente conversacional integrado con MeuDoc para atender por WhatsApp:

- Disponibilidad 24/7.
- Respuesta a preguntas frecuentes: precio, modalidad, seguros aceptados y otros datos configurados.
- Consulta de disponibilidad en tiempo real.
- Agendamiento automático.
- Confirmaciones.
- Recordatorios.
- Cancelaciones y reagendamientos.
- Sincronización inmediata con la agenda de MeuDoc.
- Bandeja/experiencia de WhatsApp IA visible en el portal profesional.

La página comercial anuncia activación “en menos de 48 horas”; este plazo debe validarse operacionalmente antes de reutilizarlo en el sitio matriz.

### Planes profesionales publicados al 26 de agosto de 2026

| Plan | Precio mensual publicado | Enfoque | Elementos destacados |
|---|---:|---|---|
| Básico | COP $129.000 | Presencia y reservas | Perfil, reportes básicos, agenda, email, pagos, 10 facturas/mes y 20 conversaciones de WhatsApp Agent/mes. |
| Plus | COP $179.000 | Automatización operativa | Básico + WhatsApp, recepción, lista de espera e historia clínica. |
| Premium | COP $279.000 | Operación omnicanal | Plus + campañas de hasta 6.000 contactos, HC interoperable y telemedicina. |

La página ofrece facturación mensual o anual con **12 % de descuento anual** y también menciona una prueba gratuita de hasta dos meses. Precios, impuestos, límites y vigencia deben confirmarse antes de publicarlos en el nuevo sitio.

### Planes MeuAssistant publicados

| Capacidad | Mensual | Precio mostrado para anual por mes |
|---|---:|---:|
| 2.500 mensajes | COP $160.000 | COP $128.000 |
| 5.000 mensajes | COP $175.000 | COP $140.000 |
| 10.000 mensajes | COP $245.000 | COP $196.000 |

Los precios anuales equivalen matemáticamente a **20 % de descuento**, aunque el selector de la página dice “30 % dto.”. Esta inconsistencia debe corregirse.

---

## 6. MeuDoc para clínicas y centros médicos

### Propuesta de valor

Digitalizar y coordinar operaciones con múltiples profesionales, agendas y sedes.

### Capacidades encontradas

- Calendario multiagenda y multisede.
- Gestión de pacientes y episodios clínicos.
- Historia clínica y documentación.
- Mensajería y comunicación omnicanal.
- Panel de recepción y equipos administrativos.
- Roles, usuarios y permisos.
- Facturación electrónica y pagos centralizados.
- Reportes de reservas, reputación, eficiencia, citas, ingresos y gastos.
- Lista de espera.
- Widgets de agendamiento.
- Campañas automatizadas.
- WhatsApp Business/MeuAssistant.
- Integraciones clínicas, incluidas referencias a HL7/FHIR.
- Arquitectura multi-tenant y multi-país en el nivel Enterprise publicado.

### Planes para centros publicados

| Plan | Precio mensual publicado | Enfoque |
|---|---:|---|
| Core | COP $549.000 | Hasta 10 agendas, permisos por rol, dashboard, pagos/contabilidad básica y soporte prioritario. |
| Growth | COP $799.000 | Core + espera inteligente, HL7/FHIR y marketing con IA. |
| Enterprise | Cotización | Multi-tenant/multi-país, SLA publicado de 99,9 %, monitoreo, cuenta clave e integraciones personalizadas. |

Estos precios aparecen en el código local. La captura web analizada priorizó la tabla de especialistas; por eso deben verificarse nuevamente en producción antes de una publicación matriz.

---

## 7. MeuDoc para empresas y bienestar corporativo

### Propuesta de valor

Un ecosistema de salud laboral que combina bienestar preventivo, medicina virtual, psicología y analítica organizacional con asignación flexible de planes por colaborador.

### Servicios y capacidades

- Pausas activas guiadas con IA.
- Recordatorios de pausas.
- Metas diarias y semanales por organización.
- Seguimiento de adopción.
- Detección de sedentarismo prolongado y alertas.
- Wellness Score.
- Medicina virtual.
- Psicología.
- Incapacidades digitales.
- Descuentos con especialistas.
- Atención prioritaria según plan.
- Dashboard empresarial.
- Analítica organizacional por uso, adopción y áreas.
- Afiliación, invitación y administración de colaboradores.
- Reportes y resumen empresarial.
- Copagos.
- Salud laboral.
- Notificaciones.
- Facturación y pagos empresariales.
- Usuarios, preferencias, dispositivos, autenticación y ajustes corporativos.

### Planes empresariales encontrados

1. **Gratuito:** pausas activas IA, Wellness Score, dashboard y gestión de empleados afiliados.
2. **Básico:** medicina virtual, psicología, incapacidades, descuentos y analítica básica.
3. **Plus:** mayor número de sesiones por bloque, beneficios Plus y prioridad parcial.
4. **Premium:** cobertura flexible/personalizada, gestor dedicado y atención prioritaria.

### Precios por empleado encontrados en el código

| Tamaño de empresa | Gratuito | Básico | Plus | Premium |
|---|---:|---:|---:|---:|
| 2–9 empleados | $0 | $33.000 | $45.000 | $50.000 |
| 10–50 | $0 | $28.000 | $40.000 | $45.000 |
| 51–250 | $0 | $25.000 | $38.000 | $40.000 |
| 250+ | $0 | $20.000 | $35.000 | $38.000 |

La empresa puede mezclar planes entre empleados. Medicina virtual y psicología se calculan por bloques de 10 colaboradores. La cobertura puede aumentar por antigüedad según una nota interna. Todo esto debe someterse a validación comercial y clínica antes de reproducirse.

---

## 8. MeuRed: comunidad profesional del ecosistema MeuDoc

### Qué propone

MeuRed es una red especializada para:

- Doctores.
- Investigadores.
- Estudiantes.
- Empresas y entidades del sector.

Su propósito es compartir conocimiento, discutir casos e ideas, repasar conceptos, recibir retroalimentación, encontrar empleo, descubrir eventos y conectar con colegas y pacientes dentro del ecosistema.

### Funcionalidades con soporte técnico encontrado

- Login/registro y selección de acceso al producto MeuRed.
- Onboarding de perfil.
- Feed con categorías y publicaciones.
- Crear publicaciones.
- Detalle de post.
- Comentarios.
- Votos.
- Guardados/bookmarks.
- Compartir enlaces.
- Perfil propio y perfil de colegas.
- Red de amigos/conexiones.
- Sugerencias y envío de solicitudes.
- Vacantes: listado, detalle, guardar y postular.
- Eventos: listado, detalle y RSVP.
- Configuración de privacidad y algunos toggles.
- Notificaciones y progreso/XP visibles en el frontend.

### Estado real según los documentos internos

El archivo `docs/meured/IMPLEMENTATION_STATUS.md` marca como “hecho” buena parte de feed, posts, empleos, eventos y red. Sin embargo, otros documentos de la misma carpeta todavía describen algunas pantallas como mock o parciales. Esto indica documentación desincronizada.

Pendientes claros:

- Edición completa de perfil.
- Listado, aceptación y rechazo de solicitudes de amistad por falta de endpoint completo.
- Algunas configuraciones.
- Verificación de persistencia real de ciertas acciones del feed.
- Separar con claridad funciones productivas, beta y gamificación de demostración.

### Aliados mostrados

La página de profesionales muestra logotipos y textos para:

- **SURA**, descrito como aliado.
- **Facultad de Medicina de la Universidad de los Andes**, mostrada como integrador académico.

Estas relaciones y el derecho de uso público de las marcas deben confirmarse documentalmente antes de destacarlas en la web matriz.

---

## 9. Contenido, educación e investigación en MeuDoc

El ecosistema contiene:

- Blog para pacientes.
- Blog para médicos.
- Content hub.
- Educación financiera vinculada a profesionales/comunidad.
- Preguntas y respuestas.
- Directrices de opiniones.
- Política de contenido para IA.
- Política IA y páginas de privacidad.
- Empleos.
- Relación con inversionistas.

El home llama a los contenidos “Artículos recientes del Grupo de Investigaciones MeuDoc”. Si se desea formalizar ese nombre como grupo de investigación, conviene verificar su existencia, responsables, metodología editorial y credenciales.

---

## 10. Seguridad, cumplimiento y arquitectura de MeuDoc

### Arquitectura visible

- **Next.js 15** para la web pública y SEO, ejecutándose en el puerto 3001 en desarrollo.
- **React/Vite** para portales autenticados y dashboards.
- Next utiliza `rewrites` para delegar rutas autenticadas al frontend React.
- Dominio público: `meudoc.co`.
- Aplicación autenticada: `app.meudoc.co`, según configuración.
- API/gateway: `api.meudoc.co`.
- Gateway/BFF obligatorio entre los frontends y microservicios.
- Autenticación JWT RS256 y autorización por rol.
- PostgreSQL compartido con esquemas separados por microservicio mediante Prisma multiSchema.
- RabbitMQ para comunicación por eventos.
- Meilisearch para búsqueda y MinIO para objetos/imágenes, según la composición local.
- Despliegue con Docker Compose, Cloudflared e Infisical.
- Infraestructura de producción indicada en servidores macOS y Windows.

### Microservicios encontrados

- Autenticación.
- Gateway/BFF.
- Usuarios.
- Doctores.
- Clínicas.
- Citas.
- Disponibilidad.
- Servicios clínicos/comerciales.
- Comunicación.
- Consentimientos.
- Pagos.
- Suscripciones.
- Analítica.
- Analítica empresarial.
- Cuidado/planes empresariales.
- Empleadores.
- Facturación.
- Imágenes.
- Búsqueda.
- Recordatorios.
- Plantillas.
- Mensajes.
- Preguntas.
- Reseñas.
- Soporte.
- Bienestar.
- Interoperabilidad.
- Asistente de IA.
- Varios servicios separados para MeuRed: perfil, contenido, feed, grafo, eventos y empleos.

### Afirmaciones públicas de seguridad

El sitio y `llms.txt` mencionan:

- Ley 1581 de 2012 / Habeas Data.
- TLS 1.3 en tránsito.
- AES-256 en reposo.
- Infraestructura en servidores propios.
- Referencias a ISO/IEC 27001.
- En una página se describe a MeuDoc como encargado del tratamiento, mientras clínicas y especialistas serían responsables de los datos.

No se inspeccionaron certificados, auditorías ni contratos. Por tanto, en el sitio matriz se debería usar “diseñado con controles alineados a…” o una redacción aprobada legalmente, salvo que exista certificación vigente y verificable.

---

## 11. Historia y métricas publicadas de MeuDoc

### Historia publicada

- 2024: inicio del proyecto en Bogotá, asociado narrativamente al Centro de Emprendimiento de la Universidad de los Andes.
- 2026: primeros especialistas y lanzamiento de agendamiento en Bogotá, Medellín y Cali.
- 2026: infraestructura propia y protección de datos.
- 2026: MeuAssistant y expansión.
- Marzo de 2026: acompañamiento estratégico de Sigmabi Ventures SAS.

### Métricas que aparecen en producción

- Más de 100 profesionales afiliados en dos países.
- Cobertura en 3 ciudades.
- 84 % de satisfacción promedio de pacientes.
- 4,8 de valoración.
- Reducción de ausencias de 38 %.
- Diferentes páginas dicen “más de 50”, “más de 60” o “más de 100” especialistas.

Estas cifras no cuentan en el código con una ficha metodológica o fuente auditable. Deben confirmarse y fecharse antes de llevarlas al sitio matriz.

---

## 12. MEU Aliado: identidad y posicionamiento

### Qué es según el frontend

MEU Aliado se describe como un **auxiliar financiero dentro del ecosistema fintech**, orientado a transformar la forma en que personas y empresas gestionan productos y decisiones financieras.

Su misión publicada combina:

- Acceso y comprensión de productos financieros.
- Centralización de información.
- Intermediación tecnológica y transparente.
- Finanzas abiertas.
- Conexión entre usuarios y entidades financieras.
- Educación financiera.
- Soluciones de dirección y analítica para empresas.

### Identidad legal

Los documentos de MEU Aliado declaran expresamente:

> “MEU Aliado Empresas es marca comercial de MOU SOLUTIONS S.A.S.”

El frontend institucional publica:

- MOU SOLUTIONS S.A.S.
- NIT 901935902-1.
- Cra. 8 #5-59 Oficina 506, Fusagasugá.
- `www.meu-aliado.com`.

### Audiencias

1. Personas que quieren comparar, simular, adquirir u organizar productos financieros.
2. Personas que requieren planeación financiera o asesoría de inversión.
3. Empresas que necesitan dirección financiera sin equipo de tiempo completo.
4. Empresas que requieren tesorería, simulación de caja o proyectos de corporate finance.
5. Organizaciones de salud que requieren analítica e ingeniería financiera.
6. Constructoras e inmobiliarias, como vertical en diseño.
7. Empresas de Sumapaz vinculables a un consejo empresarial regional.

---

## 13. MEU Aliado para personas

### Propuesta general

“Compara, elige y gestiona tus productos financieros en un solo lugar”.

### Productos y funcionalidades presentados

#### MisCDTs

- Comparador/simulador de CDT.
- Comparación anunciada de tasas de bancos en Colombia.
- Plazos y tasas.
- Acompañamiento para formularios y apertura.
- Gestión de vencimientos y renovaciones.
- Alertas.
- Seguimiento de movimientos.
- Asesoría personalizada.

#### MisFICs

- Simulador de Fondos de Inversión Colectiva.
- Centralización de fondos actuales.
- Indicadores de rentabilidad y riesgo.
- Comparación por horizonte, perfil y entidad.
- Recomendaciones personalizadas.
- Apertura/traslado digital con acompañamiento.
- Alertas de tasa, metas y vencimientos.
- Reportes PDF/Excel anunciados.

#### MiPensión

- Diagnóstico de fondos obligatorios y voluntarios.
- Proyección por aportes, rentabilidad e inflación.
- Alertas de aportes.
- Comparación entre fondos privados y Colpensiones.
- Traslados acompañados.
- Fondos voluntarios y consideraciones tributarias.
- Reportes de planeación del retiro.

#### Finanzas abiertas / “Vincula tus finanzas”

- Conexión y centralización de información de varias entidades.
- Resumen y categorización automática de gastos.
- Gestión del consentimiento para compartir datos.
- Revocación de acceso.
- Presentación de MEU como posible tercero receptor de datos.

Esta sección contiene textos residuales de otra entidad financiera, incluidos teléfonos y referencias a Bancolombia/“MeuBancos”. No se debe considerar lista para publicación legal ni usar como prueba de integraciones reales.

#### Valor360

- Planeación financiera personal.
- Estrategia financiera a la medida.
- Asesoría de portafolios de inversión.
- Conferencias y talleres empresariales de bienestar financiero.
- Preparación de metas, información y dudas para sesiones con asesores.

#### Sueldo Inteligente

La pantalla propone recepción de giros/remesas y abono automático en una “Cuenta de MEU”. El flujo parece un prototipo o contenido adaptado de banca tradicional y no hay evidencia suficiente de una cuenta financiera propia o integración operativa. No debe publicitarse como servicio activo sin validación jurídica, contractual y técnica.

#### Educación y contenido

- Blog de actualidad.
- Bienestar y sostenibilidad.
- Educación financiera.
- Innovación.
- Negocios.
- Tendencias.

#### Cuenta y dashboard

- Registro e inicio de sesión.
- MFA.
- Perfil progresivo.
- Panel para “administrar tu dinero”.
- Vista agregada/conglomerado, movimientos, distribución y rendimientos.

La existencia de pantallas y servicios API no prueba que todas las conexiones a entidades financieras estén activas en producción.

---

## 14. MEU Aliado para empresas

### Oferta principal

La home empresarial resume tres líneas:

1. **Dirección de Innovación Financiera.**
2. **Gestión de tesorería/caja.**
3. **Beneficios corporativos y bienestar financiero.**

También organiza verticales para **Salud**, **Construcción** y una oferta **Corporativa/transversal**.

### Dirección de Innovación Financiera

Es la línea B2B más desarrollada y documentada. También aparece con nombres anteriores como “Dirección Financiera Externa” o “CFO Fraccional”.

#### Propuesta

Acceso flexible y recurrente a dirección financiera de alto nivel sin contratar un equipo permanente. Incluye reuniones, reportes, indicadores, modelos y apoyo en decisiones.

#### Ruta comercial propuesta

1. Diagnóstico financiero ejecutivo.
2. Acompañamiento mensual.
3. Proyectos financieros especializados.

#### Capacidades recurrentes

- Dashboard financiero.
- Seguimiento de ingresos, costos y márgenes.
- Flujo de caja.
- Presupuesto y forecast.
- Modelos financieros.
- KPIs estratégicos.
- Rentabilidad.
- Evaluación de proyectos y expansión.
- Apoyo en financiación.
- Preparación de información para inversionistas.
- Participación en comités/reuniones estratégicas.

#### Planes mensuales publicados

| Plan | Inversión mensual | Dedicación | Enfoque |
|---|---:|---:|---|
| Essential | COP $2.000.000 | 4–6 horas/mes | Visibilidad básica, dashboard, caja y reunión mensual. |
| Growth | COP $3.500.000 | 8–12 horas/mes | Planeación, forecast, modelo, KPIs, rentabilidad y dos reuniones. |
| Strategic | COP $6.000.000 | 16–24 horas/mes | Expansión, proyectos, financiación, inversionistas y prioridad. |

#### Exclusiones de los planes

Los archivos de datos indican que no están incluidos de forma ordinaria:

- Contabilidad.
- Declaraciones tributarias.
- Revisoría fiscal.
- Auditoría.
- Nómina.
- Servicios jurídicos.
- Implementación de software contable.
- Gestión operativa de cartera.
- Registro de transacciones contables.

Sin embargo, el portafolio PDF los muestra como servicios complementarios “bajo solicitud”. Debe aclararse si los presta un aliado, quién contrata y quién responde por ellos.

### Diagnóstico financiero

Se presenta una metodología propia llamada **F.I.N.A.N.Z.A.S. 360®** con:

- Entendimiento del negocio.
- Visión de gerencia.
- Revisión gradual de información.
- Hallazgos, riesgos y oportunidades.
- Roadmap preliminar.
- NDA y compromisos de confidencialidad.
- Posible transición a acompañamiento continuo.

Existe una contradicción: la landing habla de una evaluación inicial **sin costo**, mientras la guía insiste en que no se vende un “diagnóstico gratuito” aislado. Se requiere una definición comercial única.

### Proyectos especializados y precios de referencia

| Servicio | Precio desde |
|---|---:|
| Diseño de indicadores gerenciales | COP $1.000.000 |
| Modelación financiera especializada | COP $1.500.000 |
| Valoración de empresas | COP $2.000.000 |
| Estudios de mercado | COP $2.000.000 |
| Business Plan | COP $2.500.000 |
| Preparación para levantamiento de capital | COP $3.000.000 |
| Evaluación financiera de adquisiciones | COP $3.500.000 |
| Due diligence financiero | COP $4.000.000 |
| Coberturas financieras | Personalizado |
| Gestión de portafolios | Desde COP $150.000.000 |

Los archivos especifican entregables posibles en Excel, PDF, PowerPoint y Word. Los precios son referenciales y varían por complejidad, tamaño y disponibilidad de información.

### Gestión de caja y tesorería

- Simulador de escenarios de caja.
- Proyecciones con eventos aleatorios/Monte Carlo.
- Sensibilidad a tasas y ventas.
- Alertas de zona de riesgo.
- Comparación entre operación sin planeación y gestión estructurada.
- Manejo estratégico de excedentes.
- Construcción de colchones financieros.
- Acompañamiento hacia Dirección de Innovación Financiera.

### Servicios complementarios destacados

- Automatización de clientes y agendas.
- Facturación electrónica.
- Contabilidad y registros, por solicitud/aliados.
- Declaraciones tributarias.
- Revisoría fiscal y auditoría.
- Nómina y soporte jurídico.
- Software contable.
- Gestión de cartera.

### Alianza con Open Options

El portafolio presenta a **Open Options** como empresa aliada para:

- Planeación estratégica y OKRs.
- Gobierno corporativo.
- Indicadores de gestión.
- Fuerza de ventas.
- Investigación de mercados.
- Posicionamiento y mercadeo.
- Assessment, coaching y desarrollo de competencias.
- Remuneración y cultura.

La redacción local dice que MEU Aliado actúa como interlocutor comercial y Open Options presta directamente la consultoría correspondiente. Esta relación debe conservar esa claridad para evitar confusión de responsabilidades.

---

## 15. Ingeniería Financiera para Organizaciones de Salud

Esta es una vertical especializada de MEU Aliado, diferente del software clínico de MeuDoc.

### Cliente objetivo declarado

- IPS privadas y clínicas especializadas.
- 150–500 empleados.
- 2–10 sedes.
- Facturación anual ideal declarada de COP $30.000 a $120.000 millones.
- Equipos con dirección financiera, ERP y sistema clínico, pero con datos fragmentados.

### Capacidades ofrecidas

- Observabilidad financiera y fuente única de verdad.
- Integración de datos de ERP, HIS, contabilidad, facturación y hojas de cálculo.
- Inteligencia analítica.
- Forecast y escenarios.
- Riesgo de liquidez, cartera, concentración, rentabilidad y sostenibilidad.
- Automatización de procesos y análisis.
- Gobierno de datos.
- Transferencia de conocimiento y capacitación.
- Comité ejecutivo y roadmap mensual.

### Ejemplos publicados

- Forecast de caja.
- Modelo de recaudo.
- Modelo de glosas.
- Rentabilidad por servicio.
- Stress testing.
- Simulación de escenarios.
- Optimización presupuestal.
- Alertas financieras.
- Motor de indicadores.
- Dashboards ejecutivos.
- Integraciones de datos.
- Modelos predictivos.
- IA aplicada al análisis financiero.

### Metodología

Se presenta como **Healthcare Financial Engineering Framework™**, con cinco etapas: Ver, Entender, Decidir, Ejecutar y Evolucionar.

No se encontraron casos de estudio auditables ni resultados cuantificados de clientes en esta vertical. La web matriz debería presentarla como capacidad/oferta especializada, evitando resultados garantizados.

---

## 16. Otras verticales e iniciativas de MEU Aliado

### Construcción

La vertical está explícitamente descrita como **en diseño/próximamente**:

- Proyección de caja por obra.
- Detección de desviaciones de margen.
- Priorización de cobranza de avances.
- Inteligencia financiera para constructoras, desarrolladores e inmobiliarias.

### Gestión de aportes — en desarrollo

- Cotización pensional inteligente.
- Cumplimiento normativo.
- Historial por colaborador.
- Alertas de fechas, nómina y cambios regulatorios.
- Panel para RR. HH. y finanzas.
- Roadmap con piloto empresarial pendiente.

El código la marca en 45 % de avance; esa cifra es interna y no debería trasladarse automáticamente al sitio matriz.

### Trámites digitales — en desarrollo

- Formularios y flujos guiados.
- Validación documental.
- Historial centralizado.
- Firma digital anunciada.
- Seguimiento de estados.
- Trazabilidad y auditoría.
- Integraciones futuras.

El código la marca en 35 % de avance.

### Consejo Empresarial de Sumapaz (CEZ)

El frontend contiene un micrositio completo para una iniciativa regional con:

- Representación empresarial provincial.
- Mesas de salud, construcción, turismo y agroindustria.
- Compras y negocios entre miembros.
- Boletines e información para decisiones.
- Capítulo “Fusagasugá Plateada” sobre economía plateada.
- Afiliación Starter, Empresa y Fundador.
- Asamblea, junta, mesas sectoriales y secretaría técnica.
- Noticias, alianzas, miembros y agenda de eventos.

Los textos indican que **MEU Aliado apoyaría como secretaría técnica sin voto**, aportando cifras, reportes y seguimiento. También aclaran que varias cifras son metas de primer año, no resultados consolidados. Antes de mostrar el CEZ como unidad de MOU Solutions, se debe confirmar su constitución, gobierno, miembros y relación jurídica.

---

## 17. Arquitectura técnica observada en MEU Aliado

- React 18 con Create React App.
- React Router.
- Tailwind CSS.
- Auth0 y flujos PKCE/MFA.
- Servicios de autenticación, usuario y notificaciones.
- Dashboards y formularios de perfil.
- Simuladores financieros en frontend.
- Analítica de Vercel y Speed Insights.
- Generación de sitemap.
- Scripts con Puppeteer para exportar portafolios, NDA y metodologías a PDF.
- Sitio bilingüe en varias secciones empresariales.

El repositorio contiene carpetas `build` y `node_modules`, lo que sugiere un proyecto desplegable, pero varias pantallas conservan contenidos de plantilla, enlaces no conectados, metadatos por defecto y promesas que requieren backend o alianzas no demostradas.

---

## 18. Equipo y narrativa corporativa común

### Julian Herrera

Información consistente entre ambos proyectos:

- CEO & Co-founder.
- Economista, Universidad de los Andes.
- Maestría PEG en Economía en curso, según MeuDoc.
- Experiencia/interés en finanzas, modelación cuantitativa, fintech y relaciones corporativas.
- Liderazgo estratégico y comercial.
- Responsable visible de Dirección de Innovación Financiera de MEU Aliado.
- Experiencia publicada de seis años en dirección financiera de Lh Inversiones Acuarios Ltda.
- Experiencia en relaciones con inversionistas, financiación alternativa, Python, Power BI y Bloomberg, según el portafolio de MEU Aliado.

### David Zamora

- CTO & Co-founder.
- Ingeniero de Sistemas, Universidad de los Andes.
- Lidera arquitectura tecnológica y desarrollo de producto.
- Enfoque en automatización, IA y flujos de trabajo.
- Su perfil público consultado respalda relación con MeuDoc y formación técnica/IA.

### Texto sugerido para la web matriz

> **MOU Solutions fue fundada por Julian Herrera y David Zamora, dos emprendedores de la Universidad de los Andes que combinan estrategia financiera, desarrollo tecnológico y automatización. Julian lidera la visión de negocio y las relaciones corporativas; David lidera la arquitectura tecnológica y el desarrollo de producto. Juntos construyen soluciones digitales para mejorar decisiones y operaciones en salud y finanzas.**

Este texto sintetiza información encontrada. Conviene que ambos fundadores lo aprueben antes de publicarlo.

---

## 19. Arquitectura recomendada para el futuro sitio de MOU Solutions

### Objetivo del sitio

No duplicar los sitios de producto. La web matriz debe explicar con claridad:

1. Qué es MOU Solutions.
2. Qué problema común resuelve.
3. Cuáles son sus dos marcas.
4. A quién sirve cada marca.
5. Quiénes son sus fundadores.
6. Cómo contactar o entrar a cada ecosistema.

### Mapa recomendado

#### Inicio

- Hero: “Tecnología para decisiones que importan”.
- Breve presentación de MOU Solutions.
- Dos grandes tarjetas: MeuDoc y MEU Aliado.
- Ámbitos: salud y finanzas.
- Fundadores.
- CTA dual: “Conocer MeuDoc” / “Conocer MEU Aliado”.

#### Nosotros

- Historia de MOU Solutions.
- Misión y visión de la casa matriz.
- Julian Herrera y David Zamora.
- Principios: tecnología útil, confianza, automatización responsable y decisiones basadas en datos.

#### MeuDoc

- Resumen para pacientes.
- Resumen para profesionales y clínicas.
- Resumen para empresas.
- Productos destacados: MeuDoc Premium, MeuAssistant y MeuRed.
- Botón externo a `meudoc.co`.

#### MEU Aliado

- Resumen para personas.
- Dirección de Innovación Financiera.
- Gestión de caja.
- Ingeniería financiera sectorial.
- Servicios en desarrollo claramente etiquetados.
- Botón externo a `meu-aliado.com`.

#### Contacto

- Contacto corporativo de MOU Solutions.
- Contactos separados por marca.
- Alianzas, prensa, inversión y comercial.

### Mensajes cortos sugeridos

**Titular de MOU Solutions**  
“Creamos tecnología que convierte información en mejores decisiones.”

**MeuDoc**  
“Salud digital para conectar personas, profesionales, clínicas y empresas.”

**MEU Aliado**  
“Inteligencia financiera para organizar, comparar y decidir con claridad.”

**Fundadores**  
“Estrategia financiera y tecnología trabajando como un solo equipo.”

---

## 20. Hallazgos críticos que deben resolverse antes de publicar la web matriz

### Identidad y marca

1. La carpeta y varios assets todavía dicen **MeuSalud**, pero la marca pública correcta es **MeuDoc**.
2. Confirmar si ambas marcas pertenecen jurídicamente a MOU Solutions y cómo debe expresarse esa titularidad en textos legales.
3. Definir si se escribirá **MEU Aliado**, **Meu Aliado** o **MEU aliado**; el código usa varias formas.
4. MeuRed debe aparecer como producto/comunidad de MeuDoc, no como una tercera marca matriz, salvo decisión distinta.

### Fechas y métricas

5. MeuDoc dice inicio en 2024, mientras una página para inversionistas usa 2025 como año de fundación.
6. Las páginas alternan entre más de 50, 60, 100 o 100+ especialistas.
7. Validar “dos países”, “3 ciudades”, 84 % de satisfacción, 4,8 de valoración y -38 % de ausencias.
8. Diferenciar métricas de mockup —por ejemplo 72 % de adopción o -18 % de sedentarismo— de métricas reales.
9. La frase “conecta miles de personas” no tiene respaldo visible en una métrica pública.

### Seguridad y cumplimiento

10. Verificar si MeuDoc posee una **certificación ISO/IEC 27001** vigente o solo aplica prácticas alineadas al estándar.
11. Verificar afirmaciones de TLS 1.3, AES-256, KMS, GuardDuty, CloudTrail, Shield Advanced y backups georreplicados.
12. Confirmar autorización para mostrar logotipos y llamar “aliados” a SURA, Uniandes, Sigmabi Ventures, Open Options y otras entidades.
13. Revisar las afirmaciones de MEU Aliado como auxiliar financiero, intermediario, tercero receptor de datos y actor de finanzas abiertas con asesoría jurídica especializada.
14. No presentar MEU Aliado como entidad vigilada, banco, captador de fondos o titular de cuentas si no corresponde.
15. Revisar textos sobre Defensor del Consumidor Financiero y Ley 1712 de 2014; algunas obligaciones pueden no aplicar de la forma escrita a una sociedad privada no vigilada.

### Producto y precios

16. Corregir el descuento anual de MeuAssistant: el texto dice 30 %, los números representan 20 %.
17. Unificar si el diagnóstico financiero de MEU Aliado es gratuito, una evaluación inicial sin costo o un servicio pago.
18. Confirmar vigencia de todos los precios de MeuDoc, MeuAssistant, planes empresariales y MEU Aliado.
19. Confirmar límites de mensajes, conversaciones, facturas, contactos y sesiones.
20. Distinguir “telemedicina próxima” de “telemedicina incluida”.
21. Verificar disponibilidad real de historia clínica interoperable, RIPS, odontología, facturación e integraciones HL7/FHIR.

### Funcionalidades en beta o prototipo

22. Etiquetar círculos de bienestar, gamificación y algunas métricas de prevención como beta/demo si todavía no son productivas.
23. Revisar la documentación desincronizada de MeuRed y comprobar cada flujo end-to-end.
24. No anunciar Sueldo Inteligente, cuenta MEU, giros/remesas, acceso a todos los bancos o apertura de productos hasta contar con integraciones y marco jurídico.
25. Eliminar referencias residuales a Bancolombia, MeuBancos y teléfonos ajenos en “Vincula tus finanzas”.
26. Marcar Construcción, Gestión de aportes y Trámites digitales como roadmap.
27. Confirmar si el Consejo Empresarial de Sumapaz existe formalmente o es una propuesta en etapa fundacional.

### Contacto y consistencia editorial

28. MEU Aliado usa al menos dos teléfonos: `+57 321 321 3635` y `+57 322 908 0554`.
29. Aparecen correos personales y corporativos; definir cuáles deben ser públicos.
30. MeuDoc usa `comunicaciones@meudoc.co` y `partners@mousolution.com`; confirmar el dominio corporativo correcto, incluido si debe ser `mousolutions.com`.
31. Corregir rutas/typos como `/profesionales/pricios`.
32. Actualizar metadatos por defecto de Create React App en el manifest de MEU Aliado.
33. Revisar ortografía, codificación UTF-8, tildes y textos en inglés/español.

---

## 21. Inventario de afirmaciones seguras para una primera versión del sitio matriz

Estas afirmaciones están suficientemente respaldadas por múltiples archivos y/o sitios públicos:

- MOU Solutions desarrolla soluciones digitales en salud y finanzas.
- MeuDoc es la marca de salud digital.
- MEU Aliado es la marca financiera y de acompañamiento empresarial.
- Julian Herrera y David Zamora son cofundadores.
- MeuDoc conecta pacientes con profesionales y permite buscar y agendar citas.
- MeuDoc ofrece software de agenda, operación, comunicación y analítica para profesionales y clínicas.
- MeuAssistant automatiza atención y agendamiento por WhatsApp.
- MeuDoc cuenta con una oferta de bienestar corporativo.
- MeuRed es una comunidad del ecosistema de salud.
- MEU Aliado ofrece educación y herramientas de simulación financiera.
- MEU Aliado ofrece Dirección de Innovación Financiera, gestión de caja y proyectos especializados para empresas.
- MEU Aliado desarrolla una vertical de ingeniería financiera para organizaciones de salud.
- Ambas marcas combinan tecnología, automatización y análisis de datos.

### Afirmaciones que requieren validación antes de publicarse

- Certificaciones formales.
- Cantidad exacta de usuarios, especialistas, países, ciudades o clientes.
- Porcentajes de impacto o satisfacción.
- Alianzas institucionales.
- Integraciones con bancos, aseguradoras o sistemas clínicos.
- Servicios sujetos a vigilancia o regulación financiera/sanitaria.
- Precios y descuentos.
- Productos todavía en desarrollo.

---

## 22. Conclusión estratégica

MOU Solutions tiene una narrativa matriz coherente: **usar tecnología para transformar información compleja en decisiones y operaciones más simples**. MeuDoc aplica esa idea a la salud; MEU Aliado la aplica a las finanzas.

La fortaleza del portafolio no está en enumerar cada pantalla. Está en mostrar dos ecosistemas complementarios:

- **MeuDoc:** acceso a salud, operación clínica, automatización, bienestar y comunidad profesional.
- **MEU Aliado:** organización financiera personal, dirección financiera empresarial, analítica, tesorería y capacidades sectoriales.

El futuro sitio debe ser sobrio y corporativo, con una página corta por marca y enlaces hacia sus sitios especializados. También debería etiquetar con rigor lo que está disponible, en beta o en desarrollo. Eso permitirá presentar una casa matriz ambiciosa sin arriesgar confianza mediante métricas, alianzas, certificaciones o servicios aún no verificados.

---

## 23. Rutas y archivos locales de referencia rápida

### MeuDoc

- `../MEUSALUD/AGENTS.md`
- `../migracion-seo/meusalud-public-next/src/app/page.tsx`
- `../migracion-seo/meusalud-public-next/src/app/quienes-somos/page.tsx`
- `../migracion-seo/meusalud-public-next/src/app/profesionales/page.tsx`
- `../migracion-seo/meusalud-public-next/src/app/empresas/page.tsx`
- `../migracion-seo/meusalud-public-next/src/app/meudoc-premium/page.tsx`
- `../migracion-seo/meusalud-public-next/src/app/meu-assistant/page.tsx`
- `../migracion-seo/meusalud-public-next/src/data/pricingPlans.ts`
- `../migracion-seo/meusalud-public-next/src/data/enterprisePlans.ts`
- `../migracion-seo/meusalud-public-next/docs/meured/IMPLEMENTATION_STATUS.md`
- `../MEUSALUD/Front_MeuSalud/src/app/routes.tsx`

### MEU Aliado

- `../MeuAliado/moufront3/src/App.js`
- `../MeuAliado/moufront3/src/pages/QuienesSomos.js`
- `../MeuAliado/moufront3/src/data/cfoFraccionalData.js`
- `../MeuAliado/moufront3/src/data/cfoFraccionalTranslations.js`
- `../MeuAliado/moufront3/src/data/financialIntelligenceHealthcare.js`
- `../MeuAliado/moufront3/src/data/empresasTranslations.js`
- `../MeuAliado/moufront3/src/data/empresasProductosProximamente.js`
- `../MeuAliado/moufront3/src/data/institutionalPages.js`
- `../MeuAliado/moufront3/public/portafolio-direccion-de-innovacion-financiera.pdf`
- `../MeuAliado/moufront3/public/metodologia-diagnostico-financiero.pdf`

