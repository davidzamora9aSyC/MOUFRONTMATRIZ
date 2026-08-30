'use client';

import BrandCarousel from '@/components/BrandCarousel';
import Manifesto from '@/components/Manifesto';
import ProcessScroll from '@/components/ProcessScroll';
import { useI18n } from '@/i18n/LanguageProvider';
import Image from 'next/image';
import Link from 'next/link';

export default function HomePage() {
  const { t } = useI18n();

  const industries = [
    {
      index: '01',
      title: t.home.healthTitle,
      brand: 'MeuDoc',
      href: '/industries/healthcare',
      description: t.home.healthDesc,
    },
    {
      index: '02',
      title: t.home.financeTitle,
      brand: 'MEU Aliado',
      href: '/industries/finance',
      description: t.home.financeDesc,
    },
    {
      index: '03',
      title: t.home.autoTitle,
      brand: 'Distrecol',
      href: '/industries/automotive',
      description: t.home.autoDesc,
    },
  ];

  return (
    <main>
      <section className='hero' id='inicio'>
        <div className='hero__aurora' aria-hidden='true' />
        <div className='hero__grain' aria-hidden='true' />
        <div className='hero__inner'>
          <div className='hero__copy'>
            <p className='eyebrow eyebrow--light hero__eyebrow'>{t.home.eyebrow}</p>
            <h1>
              {t.home.h1a}
              <span>{t.home.h1b}</span>
            </h1>
            <p className='hero__lead'>{t.home.lead}</p>
            <div className='hero__actions'>
              <a className='button button--light' href='#compania'>
                {t.home.cta}
                <span aria-hidden='true'>↓</span>
              </a>
              <a className='text-link text-link--light' href='#marcas'>
                {t.home.help}
              </a>
            </div>
          </div>
        </div>
      </section>

      <ProcessScroll />

      <section className='industries section' id='sectores' aria-labelledby='industries-title'>
        <div className='section__intro section__intro--split' data-reveal>
          <div>
            <p className='eyebrow eyebrow--light'>{t.home.industriesEyebrow}</p>
            <h2 id='industries-title'>{t.home.industriesTitle}</h2>
          </div>
          <p>{t.home.industriesLead}</p>
        </div>
        <div className='industries__grid'>
          {industries.map((item) => (
            <Link
              key={item.title}
              className={`industry-card industry-card--${item.index}`}
              href={item.href}
              data-reveal
            >
              <small>{item.index}</small>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <span>
                {item.brand}
                <i aria-hidden='true'>→</i>
              </span>
            </Link>
          ))}
        </div>
      </section>

      <div className='rail' aria-hidden='true'>
        <div className='rail__track'>
          {[...t.rail, ...t.rail].map((item, index) => (
            <span key={`${item}-${index}`}>{item}</span>
          ))}
        </div>
      </div>

      <Manifesto />

      <div className='surface'>
        <section className='capabilities section' id='capacidades' data-header='light'>
          <div className='section__intro section__intro--split' data-reveal>
            <div>
              <p className='eyebrow'>{t.home.capabilitiesEyebrow}</p>
              <h2>{t.home.capabilitiesTitle}</h2>
            </div>
            <p>{t.home.capabilitiesLead}</p>
          </div>
          <div className='capabilities__grid'>
            {t.capabilities.map((item) => (
              <article key={item.index} data-reveal>
                <span>{item.index}</span>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </article>
            ))}
          </div>
        </section>
      </div>

      <BrandCarousel eyebrow={t.home.brandsEyebrow} title={t.home.brandsTitle} />

      <section className='careers-band' id='carreras' data-header='light' aria-labelledby='careers-title'>
        <div className='careers-band__copy' data-reveal>
          <p className='eyebrow eyebrow--accent'>{t.careers.kicker}</p>
          <h2 id='careers-title'>{t.careers.title}</h2>
          <p>{t.careers.bandLead}</p>
          <Link className='button button--outline' href='/careers'>
            {t.careers.cta}
            <span aria-hidden='true'>→</span>
          </Link>
        </div>
        <div className='careers-band__visual'>
          <Image
            src='/images/process-ready.png'
            alt=''
            fill
            sizes='100vw'
            priority={false}
          />
        </div>
      </section>

      <section className='closing' id='contacto'>
        <div className='closing__inner'>
          <p className='eyebrow eyebrow--light' data-reveal>
            {t.home.closingEyebrow}
          </p>
          <h2 data-reveal>
            {t.home.closingTitleA}
            <span>{t.home.closingTitleB}</span>
          </h2>
          <p className='closing__lead' data-reveal>
            {t.home.closingLead}
          </p>
          <Link className='button button--light closing__cta' href='/contact' data-reveal>
            {t.nav.contact}
            <span aria-hidden='true'>↗</span>
          </Link>
        </div>
      </section>
    </main>
  );
}
