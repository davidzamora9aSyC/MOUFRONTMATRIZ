'use client';

import { useI18n } from '@/i18n/LanguageProvider';
import Link from 'next/link';

export default function CareersPage() {
  const { t } = useI18n();

  return (
    <main className='inner-page'>
      <section className='careers-page' data-header='light' aria-labelledby='careers-page-title'>
        <p className='eyebrow eyebrow--accent'>{t.careers.kicker}</p>
        <h1 id='careers-page-title'>{t.careers.title}</h1>
        <p>{t.careers.lead}</p>
        <p>{t.careers.body}</p>
        <Link className='button button--outline' href='/contact'>
          {t.nav.contact}
          <span aria-hidden='true'>↗</span>
        </Link>
      </section>
    </main>
  );
}
