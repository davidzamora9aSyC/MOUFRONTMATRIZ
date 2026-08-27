import BrandMark from '@/components/BrandMark';
import BrandShowcase from '@/components/BrandShowcase';
import FounderCard from '@/components/FounderCard';
import SiteHeader from '@/components/SiteHeader';

const founders = [
  {
    index: '01',
    name: 'Julian Herrera',
    role: 'CEO & Co-founder',
    image: '/images/julian-herrera.png',
    imagePosition: '50% 20%',
    profile:
      'Economista de la Universidad de los Andes. Lidera la visión estratégica, el desarrollo de negocio y las relaciones corporativas de MOU Solutions.',
  },
  {
    index: '02',
    name: 'David Zamora',
    role: 'CTO & Co-founder',
    image: '/images/david-zamora.png',
    imagePosition: '50% 18%',
    profile:
      'Ingeniero de Sistemas de la Universidad de los Andes. Lidera la arquitectura tecnológica, la automatización y el desarrollo de producto.',
  },
];

const brands = [
  {
    number: '01',
    name: 'MeuDoc',
    category: 'Salud digital',
    description:
      'Un ecosistema que conecta personas y profesionales de la salud, facilita el acceso a citas y ayuda a digitalizar la operación de consultorios, clínicas y programas empresariales.',
    logo: '/images/meudoc-logo.png',
    logoAlt: 'Símbolo de MeuDoc',
    href: 'https://meudoc.co',
    domain: 'meudoc.co',
    tone: 'health' as const,
    services: [
      'Búsqueda y agendamiento de profesionales',
      'Herramientas de operación para consultas y clínicas',
      'Automatización de atención y comunicación',
      'Bienestar y salud preventiva para empresas',
    ],
  },
  {
    number: '02',
    name: 'MEU Aliado',
    category: 'Inteligencia financiera',
    description:
      'Soluciones para comprender y organizar las finanzas, acompañar decisiones empresariales y convertir información financiera en planes de acción claros.',
    logo: '/images/meu-aliado-logo.png',
    logoAlt: 'Logotipo de MEU Aliado',
    href: 'https://www.meu-aliado.com',
    domain: 'meu-aliado.com',
    tone: 'finance' as const,
    services: [
      'Educación y simulación financiera para personas',
      'Dirección de innovación financiera para empresas',
      'Planeación de caja, modelos e indicadores',
      'Ingeniería financiera para organizaciones de salud',
    ],
  },
];

export default function Home() {
  return (
    <main>
      <SiteHeader />

      <section className='hero' id='inicio'>
        <div className='hero__grain' aria-hidden='true' />
        <div className='hero__inner'>
          <div className='hero__copy'>
            <p className='eyebrow eyebrow--light'>Casa matriz · Colombia</p>
            <h1>
              Tecnología para
              <span>decisiones que importan.</span>
            </h1>
            <p className='hero__lead'>
              Construimos soluciones digitales que hacen más simples las decisiones y operaciones en dos ámbitos
              esenciales: salud y finanzas.
            </p>
            <div className='hero__actions'>
              <a className='button button--light' href='#marcas'>
                Explorar nuestras marcas
                <span aria-hidden='true'>↓</span>
              </a>
              <a className='text-link text-link--light' href='#compania'>
                Conocer MOU Solutions
              </a>
            </div>
          </div>

          <div className='hero__composition' aria-label='MOU Solutions conecta salud y finanzas'>
            <div className='hero__monogram'>
              <span>M</span>
            </div>
            <div className='hero__ring hero__ring--one' aria-hidden='true' />
            <div className='hero__ring hero__ring--two' aria-hidden='true' />
            <div className='hero__label hero__label--health'>
              <small>01</small>
              <strong>Salud</strong>
              <span>MeuDoc</span>
            </div>
            <div className='hero__label hero__label--finance'>
              <small>02</small>
              <strong>Finanzas</strong>
              <span>MEU Aliado</span>
            </div>
          </div>
        </div>
        <div className='hero__footer'>
          <span>MOU Solutions S.A.S.</span>
          <span>Fusagasugá · Cundinamarca</span>
          <span className='hero__scroll'>Desplázate para descubrir <i aria-hidden='true'>↓</i></span>
        </div>
      </section>

      <section className='company section' id='compania'>
        <div className='section__intro'>
          <p className='eyebrow'>Una compañía, dos ecosistemas</p>
          <h2>Convertimos información compleja en experiencias claras.</h2>
        </div>
        <div className='company__grid'>
          <p className='company__statement'>
            MOU Solutions es una compañía colombiana de tecnología y servicios. Integramos estrategia, diseño y
            desarrollo de software para construir productos útiles, cercanos y preparados para crecer.
          </p>
          <div className='company__principles'>
            <article>
              <span>01</span>
              <h3>Tecnología útil</h3>
              <p>Productos pensados para resolver necesidades reales y acompañar el trabajo cotidiano.</p>
            </article>
            <article>
              <span>02</span>
              <h3>Decisiones con claridad</h3>
              <p>Datos y automatización convertidos en acciones comprensibles para personas y organizaciones.</p>
            </article>
          </div>
        </div>
      </section>

      <section className='location section section--compact' aria-labelledby='location-title'>
        <div className='location__card'>
          <div className='location__map' aria-hidden='true'>
            <span className='location__route location__route--one' />
            <span className='location__route location__route--two' />
            <span className='location__pin'><i /></span>
            <span className='location__coordinates'>4.3372° N · 74.3638° W</span>
          </div>
          <div className='location__content'>
            <p className='eyebrow'>Nuestra sede</p>
            <h2 id='location-title'>Construimos desde Fusagasugá para Colombia.</h2>
            <address>
              Cra. 8 # 5-59, Oficina 506<br />
              Fusagasugá, Cundinamarca<br />
              Colombia
            </address>
          </div>
        </div>
      </section>

      <section className='founders section' id='fundadores'>
        <div className='section__intro section__intro--split'>
          <div>
            <p className='eyebrow'>Fundadores</p>
            <h2>Negocio y tecnología, en la misma mesa.</h2>
          </div>
          <p>
            Dos perfiles complementarios unidos por una convicción: la tecnología crea valor cuando entiende a las
            personas y mejora la forma en que toman decisiones.
          </p>
        </div>
        <div className='founders__grid'>
          {founders.map((founder) => (
            <FounderCard key={founder.name} {...founder} />
          ))}
          <aside className='founders__note'>
            <span className='founders__note-mark'>MOU</span>
            <p>Estrategia financiera, arquitectura tecnológica y desarrollo de producto bajo una misma visión.</p>
          </aside>
        </div>
      </section>

      <section className='brands section' id='marcas'>
        <div className='section__intro section__intro--split'>
          <div>
            <p className='eyebrow'>Nuestras marcas</p>
            <h2>Dos maneras de crear impacto.</h2>
          </div>
          <p>
            Cada marca responde a un sector distinto, pero ambas comparten el mismo principio: simplificar lo complejo
            con tecnología y acompañamiento.
          </p>
        </div>
        <div className='brands__list'>
          {brands.map((brand) => (
            <BrandShowcase key={brand.name} {...brand} />
          ))}
        </div>
      </section>

      <section className='closing'>
        <div className='closing__inner'>
          <p className='eyebrow eyebrow--light'>MOU Solutions</p>
          <h2>Construimos el sistema.<br />Las marcas crean el impacto.</h2>
          <div className='closing__links'>
            <a href='https://meudoc.co' target='_blank' rel='noreferrer'>
              MeuDoc <span aria-hidden='true'>↗</span>
            </a>
            <a href='https://www.meu-aliado.com' target='_blank' rel='noreferrer'>
              MEU Aliado <span aria-hidden='true'>↗</span>
            </a>
          </div>
        </div>
      </section>

      <footer className='footer'>
        <BrandMark inverse />
        <p>MOU Solutions S.A.S. · Fusagasugá, Colombia</p>
        <p>© {new Date().getFullYear()} MOU Solutions</p>
      </footer>
    </main>
  );
}
