'use client';

import { useI18n } from '@/i18n/LanguageProvider';
import Image from 'next/image';
import Link from 'next/link';

export default function WhyPage() {
  const { t } = useI18n();

  return (
    <main className='story-page'>
      <section className='contact-hero'>
        <div className='contact-hero__media' aria-hidden='true'>
          <Image src='/images/process-build.png' alt='' fill sizes='100vw' priority />
        </div>
        <div className='contact-hero__shade' aria-hidden='true' />
        <div className='contact-hero__inner'>
          <p className='contact-hero__crumb'>
            <Link href='/'>{t.contact.crumbHome}</Link>
            <span aria-hidden='true'>›</span>
            {t.why.eyebrow}
          </p>
          <h1>{t.why.title}</h1>
          <p className='story-hero__lead'>{t.why.lead}</p>
        </div>
      </section>

      <section className='story-body' data-header='light'>
        <div className='story-body__intro' data-reveal>
          <p className='eyebrow'>{t.why.eyebrow}</p>
          <p>{t.why.p1}</p>
          <p>{t.why.p2}</p>
        </div>

        <div className='story-body__grid'>
          {t.why.pillars.map((item, index) => (
            <article key={item.title} data-reveal>
              <small>0{index + 1}</small>
              <h2>{item.title}</h2>
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
