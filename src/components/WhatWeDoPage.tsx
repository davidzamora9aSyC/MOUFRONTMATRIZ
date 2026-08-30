'use client';

import { useI18n } from '@/i18n/LanguageProvider';
import Image from 'next/image';
import Link from 'next/link';

export default function WhatWeDoPage() {
  const { t } = useI18n();

  return (
    <main className='story-page'>
      <section className='contact-hero'>
        <div className='contact-hero__media' aria-hidden='true'>
          <Image src='/images/process-ready.png' alt='' fill sizes='100vw' priority />
        </div>
        <div className='contact-hero__shade' aria-hidden='true' />
        <div className='contact-hero__inner'>
          <p className='contact-hero__crumb'>
            <Link href='/'>{t.contact.crumbHome}</Link>
            <span aria-hidden='true'>›</span>
            {t.whatWeDo.eyebrow}
          </p>
          <h1>{t.whatWeDo.title}</h1>
          <p className='story-hero__lead'>{t.whatWeDo.lead}</p>
        </div>
      </section>

      <section className='story-body' data-header='light'>
        <div className='story-body__intro' data-reveal>
          <p className='eyebrow'>{t.whatWeDo.eyebrow}</p>
          <p>{t.whatWeDo.p1}</p>
          <p>{t.whatWeDo.p2}</p>
        </div>

        <h2 className='story-body__heading' data-reveal>
          {t.whatWeDo.areasTitle}
        </h2>
        <div className='story-body__grid'>
          {t.whatWeDo.areas.map((item, index) => (
            <Link key={item.title} className='story-area' href={item.href} data-reveal>
              <small>0{index + 1}</small>
              <h3>{item.title}</h3>
              <p>{item.body}</p>
              <span>
                {item.brand}
                <i aria-hidden='true'>→</i>
              </span>
            </Link>
          ))}
        </div>

        <h2 className='story-body__heading' data-reveal>
          {t.whatWeDo.howTitle}
        </h2>
        <div className='story-body__grid story-body__grid--four'>
          {t.capabilities.map((item) => (
            <article key={item.index} data-reveal>
              <small>{item.index}</small>
              <h3>{item.title}</h3>
              <p>{item.body}</p>
            </article>
          ))}
        </div>

        <div className='story-body__cta' data-reveal>
          <Link className='button button--outline' href='/contact'>
            {t.nav.contact}
            <span aria-hidden='true'>↗</span>
          </Link>
        </div>
      </section>
    </main>
  );
}
