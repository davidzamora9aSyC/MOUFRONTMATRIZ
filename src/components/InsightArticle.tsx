'use client';

import { getInsight, insightCopy, relatedInsights } from '@/content/insights';
import { useI18n } from '@/i18n/LanguageProvider';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';

function formatDate(iso: string, locale: 'es' | 'en') {
  return new Intl.DateTimeFormat(locale === 'es' ? 'es-CO' : 'en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  }).format(new Date(`${iso}T12:00:00`));
}

export default function InsightArticle({ slug }: { slug: string }) {
  const { t, locale } = useI18n();
  const raw = getInsight(slug);
  if (!raw) notFound();

  const article = insightCopy(raw, locale);
  const related = relatedInsights(slug, locale);

  return (
    <main className='story-page insight-article'>
      <section className='contact-hero insight-article__hero'>
        <div className='contact-hero__media' aria-hidden='true'>
          <Image src={article.image} alt='' fill sizes='100vw' priority />
        </div>
        <div className='contact-hero__shade' aria-hidden='true' />
        <div className='contact-hero__inner'>
          <p className='contact-hero__crumb'>
            <Link href='/'>{t.contact.crumbHome}</Link>
            <span aria-hidden='true'>›</span>
            <Link href='/insights'>{t.insights.crumb}</Link>
            <span aria-hidden='true'>›</span>
            {article.category}
          </p>
          <p className='contact-hero__hq'>{article.category}</p>
          <h1>{article.title}</h1>
          <p className='story-hero__lead'>{article.excerpt}</p>
          <p className='insight-article__byline'>
            <span>
              {article.authorName}
              <small>{article.authorRole}</small>
            </span>
            <span>
              {formatDate(article.date, locale)}
              <small>
                {article.minutes} {t.insights.minutes}
              </small>
            </span>
          </p>
        </div>
      </section>

      <article className='insight-body' data-header='light'>
        {article.sections.map((section) => (
          <section key={section.heading}>
            <h2>{section.heading}</h2>
            {section.paragraphs.map((paragraph) => (
              <p key={paragraph.slice(0, 48)}>{paragraph}</p>
            ))}
          </section>
        ))}

        {article.industryHref ? (
          <p className='insight-body__more'>
            <Link href={article.industryHref}>{t.insights.industryLink}</Link>
          </p>
        ) : null}

        <div className='insight-body__cta'>
          <h2>{t.insights.ctaTitle}</h2>
          <p>{t.insights.ctaLead}</p>
          <Link className='button button--accent' href='/contact'>
            {t.nav.contact}
            <span aria-hidden='true'>↗</span>
          </Link>
        </div>
      </article>

      {related.length ? (
        <section className='insight-related' data-header='light'>
          <p className='eyebrow'>{t.insights.related}</p>
          <div className='insights-grid insights-grid--related'>
            {related.map((item) => (
              <Link key={item.slug} className='insight-card' href={`/insights/${item.slug}`}>
                <p className='insight-card__meta'>
                  <span>{item.category}</span>
                </p>
                <h3>{item.title}</h3>
                <p>{item.excerpt}</p>
              </Link>
            ))}
          </div>
        </section>
      ) : null}
    </main>
  );
}
