'use client';

import { useI18n } from '@/i18n/LanguageProvider';
import Image from 'next/image';
import Link from 'next/link';

export type IndustryKey = 'healthcare' | 'finance' | 'automotive';

const media: Record<IndustryKey, string> = {
  healthcare: '/images/process-ready.png',
  finance: '/images/process-build.png',
  automotive: '/images/process-chaos.png',
};

const brands: Record<IndustryKey, string> = {
  healthcare: 'https://meudoc.co',
  finance: 'https://www.meu-aliado.com',
  automotive: 'https://distrecol.com/',
};

export default function IndustryPage({ industry }: { industry: IndustryKey }) {
  const { t } = useI18n();
  const copy = t[industry];

  return (
    <main className='story-page'>
      <section className='contact-hero'>
        <div className='contact-hero__media' aria-hidden='true'>
          <Image src={media[industry]} alt='' fill sizes='100vw' priority />
        </div>
        <div className='contact-hero__shade' aria-hidden='true' />
        <div className='contact-hero__inner'>
          <p className='contact-hero__crumb'>
            <Link href='/'>{t.contact.crumbHome}</Link>
            <span aria-hidden='true'>›</span>
            {copy.eyebrow}
          </p>
          <p className='contact-hero__hq'>{copy.kicker}</p>
          <h1>{copy.title}</h1>
          <p className='story-hero__lead'>{copy.lead}</p>
        </div>
      </section>

      <section className='story-body' data-header='light'>
        <div className='story-body__intro' data-reveal>
          <p className='eyebrow'>{copy.eyebrow}</p>
          <p>{copy.intro}</p>
        </div>

        <h2 className='story-body__heading' data-reveal>
          {copy.needsTitle}
        </h2>
        <div className='story-body__grid story-body__grid--four'>
          {copy.needs.map((item, index) => (
            <article key={item.title} data-reveal>
              <small>0{index + 1}</small>
              <h3>{item.title}</h3>
              <p>{item.body}</p>
            </article>
          ))}
        </div>

        <h2 className='story-body__heading' data-reveal>
          {copy.whatTitle}
        </h2>
        <div className='story-body__grid story-body__grid--four'>
          {copy.pillars.map((item, index) => (
            <article key={item.title} data-reveal>
              <small>0{index + 1}</small>
              <h3>{item.title}</h3>
              <p>{item.body}</p>
            </article>
          ))}
        </div>

        <div className='story-why' data-reveal>
          <p className='eyebrow eyebrow--accent'>{copy.whyTitle}</p>
          <p>{copy.whyBody}</p>
        </div>

        <div className='story-body__cta' data-reveal>
          <h2 className='story-body__heading'>{copy.ctaTitle}</h2>
          <p className='story-cta__lead'>{copy.ctaLead}</p>
          <div className='story-body__cta-row'>
            <a className='button button--outline' href={brands[industry]} target='_blank' rel='noreferrer'>
              {copy.visit}
              <span aria-hidden='true'>↗</span>
            </a>
            <Link className='button button--accent' href='/contact'>
              {t.nav.contact}
              <span aria-hidden='true'>↗</span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
