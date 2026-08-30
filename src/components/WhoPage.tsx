'use client';

import FounderCard from '@/components/FounderCard';
import { useI18n } from '@/i18n/LanguageProvider';
import Image from 'next/image';
import Link from 'next/link';

export default function WhoPage() {
  const { t } = useI18n();

  return (
    <main className='story-page'>
      <section className='contact-hero'>
        <div className='contact-hero__media' aria-hidden='true'>
          <Image src='/images/process-chaos.png' alt='' fill sizes='100vw' priority />
        </div>
        <div className='contact-hero__shade' aria-hidden='true' />
        <div className='contact-hero__inner'>
          <p className='contact-hero__crumb'>
            <Link href='/'>{t.contact.crumbHome}</Link>
            <span aria-hidden='true'>›</span>
            {t.who.eyebrow}
          </p>
          <h1>{t.who.title}</h1>
          <p className='story-hero__lead'>{t.who.lead}</p>
        </div>
      </section>

      <section className='story-body' data-header='light'>
        <div className='founders__grid who-grid'>
          <FounderCard
            index='01'
            name='Julian Herrera'
            role={t.who.julianRole}
            profile={t.who.julianProfile}
            portrait={t.who.portrait}
            image='/images/julian-herrera.png'
          />
          <FounderCard
            index='02'
            name='David Zamora'
            role={t.who.davidRole}
            profile={t.who.davidProfile}
            portrait={t.who.portrait}
            image='/images/david-zamora.png'
            imagePosition='50% 18%'
          />
          <aside className='founders__note' data-reveal>
            <span className='founders__note-mark' aria-hidden='true'>
              ”
            </span>
            <p>{t.who.note}</p>
          </aside>
        </div>

        <h2 className='story-body__heading' data-reveal>
          {t.who.mvTitle}
        </h2>
        <div className='story-body__grid'>
          <article data-reveal>
            <small>01</small>
            <h3>{t.who.missionLabel}</h3>
            <p>{t.who.mission}</p>
          </article>
          <article data-reveal>
            <small>02</small>
            <h3>{t.who.visionLabel}</h3>
            <p>{t.who.vision}</p>
          </article>
          <article data-reveal>
            <small>03</small>
            <h3>{t.who.valueLabel}</h3>
            <p>{t.who.value}</p>
          </article>
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
