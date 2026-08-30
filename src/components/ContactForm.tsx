'use client';

import { FormEvent, useState } from 'react';
import { CONTACT_MAIL, CONTACT_REASON_KEYS } from '@/lib/contact';
import { useI18n } from '@/i18n/LanguageProvider';

export default function ContactForm() {
  const { t } = useI18n();
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);

    if (String(data.get('website') || '').trim()) {
      setStatus('sent');
      form.reset();
      return;
    }

    const reasonKey = String(data.get('reason') || '');
    const reasonLabel =
      reasonKey in t.contact.reasons ? t.contact.reasons[reasonKey as keyof typeof t.contact.reasons] : reasonKey;
    const firstName = String(data.get('firstName') || '').trim();
    const lastName = String(data.get('lastName') || '').trim();
    const email = String(data.get('email') || '').trim();

    setStatus('sending');

    try {
      const res = await fetch(`https://formsubmit.co/ajax/${CONTACT_MAIL}`, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          _subject: `MOU — ${reasonLabel}`,
          _template: 'table',
          _captcha: 'false',
          _replyto: email,
          name: `${firstName} ${lastName}`,
          email,
          Motivo: reasonLabel,
          Nombre: firstName,
          Apellido: lastName,
          Correo: email,
          Telefono: String(data.get('phone') || '').trim() || '—',
          Empresa: String(data.get('company') || '').trim(),
          Mensaje: String(data.get('message') || '').trim() || '—',
        }),
      });

      const json = (await res.json().catch(() => null)) as { success?: boolean | string; message?: string } | null;
      const ok = json?.success === true || json?.success === 'true';
      const pendingConfirm = /confirm|activate/i.test(String(json?.message || ''));

      if (!res.ok || (!ok && !pendingConfirm)) {
        throw new Error('send-failed');
      }

      setStatus('sent');
      form.reset();
    } catch {
      setStatus('error');
    }
  };

  if (status === 'sent') {
    return (
      <div className='contact-form__sent'>
        <h3>{t.contact.sentTitle}</h3>
        <p>{t.contact.sentBody}</p>
      </div>
    );
  }

  return (
    <form className='contact-form' onSubmit={onSubmit}>
      <input
        className='contact-form__honey'
        name='website'
        type='text'
        tabIndex={-1}
        autoComplete='off'
        hidden
        aria-hidden='true'
      />

      <label>
        {t.contact.reason} *
        <select name='reason' required defaultValue=''>
          <option value='' disabled>
            {t.contact.reasons.placeholder}
          </option>
          {CONTACT_REASON_KEYS.map((key) => (
            <option key={key} value={key}>
              {t.contact.reasons[key]}
            </option>
          ))}
        </select>
      </label>

      <div className='contact-form__row'>
        <label>
          {t.contact.firstName} *
          <input name='firstName' type='text' autoComplete='given-name' required />
        </label>
        <label>
          {t.contact.lastName} *
          <input name='lastName' type='text' autoComplete='family-name' required />
        </label>
      </div>

      <label>
        {t.contact.email} *
        <input name='email' type='email' autoComplete='email' required />
      </label>

      <label>
        {t.contact.phone}
        <input name='phone' type='tel' autoComplete='tel' />
      </label>

      <label>
        {t.contact.company} *
        <input name='company' type='text' autoComplete='organization' required />
      </label>

      <label>
        {t.contact.message}
        <textarea name='message' rows={5} />
      </label>

      <label className='contact-form__check'>
        <input name='consent' type='checkbox' required />
        <span>{t.contact.consent}</span>
      </label>

      {status === 'error' ? (
        <p className='contact-form__error' role='alert'>
          {t.contact.error}{' '}
          <a href={`mailto:${CONTACT_MAIL}`}>{CONTACT_MAIL}</a>
        </p>
      ) : null}

      <button className='button button--accent' type='submit' disabled={status === 'sending'}>
        {status === 'sending' ? t.contact.sending : t.contact.submit}
      </button>
    </form>
  );
}
