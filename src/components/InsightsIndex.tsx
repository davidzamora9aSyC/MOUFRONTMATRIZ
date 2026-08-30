'use client';

import { insights, insightCopy } from '@/content/insights';
import { useI18n } from '@/i18n/LanguageProvider';
import Image from 'next/image';
import Link from 'next/link';

function formatDate(iso: string, locale: 'es' | 'en') {
  return new Intl.DateTimeFormat(locale === 'es' ? 'es-CO' : 'en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  }).format(new Date(`${iso}T12:00:00`));
}

export default function InsightsIndex() {
  const { t, locale } = useI18n();
  const articles = insights.map((item) => insightCopy(item, locale));
  const featured = articles[0];
  const rest = articles.slice(1);

  return (
    <main className='story-page insights-page'>
      <section className='insights-hero'>
        <div className='insights-hero__inner'>
          <p className='contact-hero__crumb'>
            <Link href='/'>{t.contact.crumbHome}</Link>
            <span aria-hidden='true'>›</span>
            {t.insights.crumb}
          </p>
          <p className='eyebrow eyebrow--light'>{t.insights.eyebrow}</p>
          <h1>{t.insights.title}</h1>
          <p className='insights-hero__lead'>{t.insights.lead}</p>
        </div>
      </section>

      <section className='insights-library' data-header='light'>
        <p className='eyebrow'>{t.insights.fromLibrary}</p>
        <h2 className='insights-library__title'>{t.insights.libraryTitle}</h2>

        {featured ? (
          <Link className='insight-featured' href={`/insights/${featured.slug}`} data-reveal>
            <div className='insight-featured__media'>
              <Image src={featured.image} alt='' fill sizes='(max-width: 820px) 100vw, 56vw' priority />
            </div>
            <div className='insight-featured__copy'>
              <p className='insight-card__meta'>
                <span>{t.insights.featured}</span>
                <span>{featured.category}</span>
              </p>
              <h3>{featured.title}</h3>
              <p>{featured.excerpt}</p>
              <p className='insight-card__byline'>
                {featured.authorName}
                <span aria-hidden='true'>·</span>
                {formatDate(featured.date, locale)}
                <span aria-hidden='true'>·</span>
                {featured.minutes} {t.insights.minutes}
              </p>
              <span className='insight-card__read'>
                {t.insights.read}
                <i aria-hidden='true'>→</i>
              </span>
            </div>
          </Link>
        ) : null}

        <div className='insights-grid'>
          {rest.map((item) => (
            <Link key={item.slug} className='insight-card' href={`/insights/${item.slug}`} data-reveal>
              <div className='insight-card__media'>
                <Image src={item.image} alt='' fill sizes='(max-width: 820px) 100vw, 33vw' />
              </div>
              <p className='insight-card__meta'>
                <span>{item.category}</span>
              </p>
              <h3>{item.title}</h3>
              <p>{item.excerpt}</p>
              <p className='insight-card__byline'>
                {formatDate(item.date, locale)}
                <span aria-hidden='true'>·</span>
                {item.minutes} {t.insights.minutes}
              </p>
            </Link>
          ))}
        </div>

        <div className='story-body__cta' data-reveal>
          <h2 className='story-body__heading'>{t.insights.ctaTitle}</h2>
          <p className='story-cta__lead'>{t.insights.ctaLead}</p>
          <Link className='button button--accent' href='/contact'>
            {t.nav.contact}
            <span aria-hidden='true'>↗</span>
          </Link>
        </div>
      </section>
    </main>
  );
}
