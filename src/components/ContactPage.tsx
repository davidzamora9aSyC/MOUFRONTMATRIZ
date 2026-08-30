'use client';

import ContactForm from '@/components/ContactForm';
import { useI18n } from '@/i18n/LanguageProvider';
import { CONTACT_MAIL } from '@/lib/contact';
import Image from 'next/image';
import Link from 'next/link';

export default function ContactPage() {
  const { t } = useI18n();

  return (
    <main className='contact-page'>
      <section className='contact-hero'>
        <div className='contact-hero__media' aria-hidden='true'>
          <Image src='/images/process-ready.png' alt='' fill sizes='100vw' priority />
        </div>
        <div className='contact-hero__shade' aria-hidden='true' />
        <div className='contact-hero__inner'>
          <p className='contact-hero__crumb'>
            <Link href='/'>{t.contact.crumbHome}</Link>
            <span aria-hidden='true'>›</span>
            {t.contact.crumb}
          </p>
          <h1>{t.contact.title}</h1>
          <p className='contact-hero__hq'>{t.contact.hqLabel}</p>
          <p className='contact-hero__address'>
            <svg viewBox='0 0 24 24' aria-hidden='true'>
              <path
                fill='currentColor'
                d='M12 2a7 7 0 0 0-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 0 0-7-7Zm0 9.5A2.5 2.5 0 1 1 12 6a2.5 2.5 0 0 1 0 5.5Z'
              />
            </svg>
            {t.contact.hqAddress}
          </p>
          <p className='contact-hero__free'>{t.contact.freeTitle}</p>
        </div>
      </section>

      <section className='contact-panel' data-header='light'>
        <div className='contact-panel__copy'>
          <p className='eyebrow eyebrow--accent'>{t.contact.formEyebrow}</p>
          <h2>{t.contact.formTitle}</h2>
          <p>{t.contact.formLead}</p>
          <a className='contact-mail' href={`mailto:${CONTACT_MAIL}`}>
            {CONTACT_MAIL}
          </a>
          <aside className='contact-free'>
            <strong>{t.contact.freeLabel}</strong>
            <p>
              {t.contact.freeTitle} {t.contact.freeBody}
            </p>
          </aside>
        </div>
        <ContactForm />
      </section>

      <section className='contact-where' data-header='light'>
        <p className='eyebrow'>{t.contact.whereEyebrow}</p>
        <h2>{t.contact.whereTitle}</h2>
        <p>{t.contact.whereLead}</p>
      </section>
    </main>
  );
}
