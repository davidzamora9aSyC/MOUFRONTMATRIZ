'use client';

import Link from 'next/link';
import BrandMark from './BrandMark';
import { useI18n } from '@/i18n/LanguageProvider';
import { CONTACT_MAIL } from '@/lib/contact';

export default function SiteFooter() {
  const { t } = useI18n();
  const year = new Date().getFullYear();

  return (
    <footer className='site-footer'>
      <div className='site-footer__grid'>
        <div className='site-footer__brand'>
          <BrandMark inverse />
          <p>{t.footer.legal}</p>
        </div>

        <div>
          <h2>{t.footer.company}</h2>
          <a href='/why-mou'>{t.nav.why}</a>
          <a href='/what-we-do'>{t.nav.whatWeDo}</a>
          <a href='/who-we-are'>{t.nav.whoWeAre}</a>
          <a href='/careers'>{t.nav.careers}</a>
        </div>

        <div>
          <h2>{t.footer.industries}</h2>
          <Link href='/industries/healthcare'>{t.footer.healthcare}</Link>
          <Link href='/industries/finance'>{t.footer.finance}</Link>
          <Link href='/industries/automotive'>{t.footer.automotive}</Link>
        </div>

        <div>
          <h2>{t.footer.articles}</h2>
          <Link href='/insights'>{t.footer.articlesLink}</Link>
        </div>

        <div>
          <h2>{t.footer.brands}</h2>
          <a href='https://meudoc.co' target='_blank' rel='noreferrer'>
            MeuDoc
          </a>
          <a href='https://www.meu-aliado.com' target='_blank' rel='noreferrer'>
            MEU Aliado
          </a>
          <a href='https://distrecol.com/' target='_blank' rel='noreferrer'>
            Distrecol
          </a>
        </div>

        <div>
          <h2>{t.footer.contact}</h2>
          <Link href='/contact'>{t.nav.contact}</Link>
          <a href={`mailto:${CONTACT_MAIL}`}>{CONTACT_MAIL}</a>
          <p className='site-footer__address'>
            <strong>{t.footer.addressLabel}</strong>
            Cra. 8 # 5-59, Oficina 506
            <br />
            Fusagasugá, Cundinamarca
            <br />
            Colombia
          </p>
        </div>
      </div>

      <div className='site-footer__bar'>
        <p>
          © {year} MOU Solutions. {t.footer.rights}
        </p>
        <p>Fusagasugá · Colombia</p>
      </div>
    </footer>
  );
}
