'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useI18n } from '@/i18n/LanguageProvider';
import BrandMark from './BrandMark';

const menu = [
  { key: 'why' as const, href: '/why-mou' },
  { key: 'whatWeDo' as const, href: '/what-we-do' },
  { key: 'whatWeThink' as const, href: '/insights' },
  { key: 'whoWeAre' as const, href: '/who-we-are' },
  { key: 'careers' as const, href: '/careers' },
  
  
];

export default function SiteHeader() {
  const { t, locale, setLocale } = useI18n();
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.classList.toggle('nav-open', open);
    return () => document.body.classList.remove('nav-open');
  }, [open]);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  return (
    <header className='site-header'>
      <div className='site-header__inner'>
        <Link className='site-header__brand' href='/' aria-label='MOU Solutions' onClick={() => setOpen(false)}>
          <BrandMark />
        </Link>

        <div className='site-header__tools'>
          <div className='lang-switch' role='group' aria-label={t.lang.label}>
            <button type='button' aria-pressed={locale === 'es'} onClick={() => setLocale('es')}>
              {t.lang.es}
            </button>
            <span aria-hidden='true'>/</span>
            <button type='button' aria-pressed={locale === 'en'} onClick={() => setLocale('en')}>
              {t.lang.en}
            </button>
          </div>
          <Link className='button button--small button--ghost site-header__cta' href='/contact'>
            {t.nav.contact}
            <span aria-hidden='true'>↗</span>
          </Link>
          <button
            className='nav-toggle'
            type='button'
            aria-expanded={open}
            aria-controls='site-menu'
            onClick={() => setOpen((value) => !value)}
          >
            <span className='visually-hidden'>{open ? t.nav.close : t.nav.open}</span>
            <i />
            <i />
          </button>
        </div>
      </div>

      <div className={`site-menu${open ? ' is-open' : ''}`} id='site-menu'>
        <nav aria-label={t.nav.menu}>
          {menu.map((item) => (
            <Link key={item.href} href={item.href} onClick={() => setOpen(false)}>
              {t.nav[item.key]}
            </Link>
          ))}
          <Link href='/industries/healthcare' onClick={() => setOpen(false)}>
            {t.footer.healthcare}
          </Link>
          <Link href='/industries/finance' onClick={() => setOpen(false)}>
            {t.footer.finance}
          </Link>
          <Link href='/industries/automotive' onClick={() => setOpen(false)}>
            {t.footer.automotive}
          </Link>
        </nav>
      </div>
    </header>
  );
}
