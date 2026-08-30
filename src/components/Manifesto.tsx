'use client';

import { useEffect, useRef, useState } from 'react';
import { useI18n } from '@/i18n/LanguageProvider';

export default function Manifesto() {
  const { t } = useI18n();
  const sectionRef = useRef<HTMLElement>(null);
  const [progress, setProgress] = useState(0);
  const [reduced, setReduced] = useState(false);
  const words = t.home.manifesto.split(' ');

  useEffect(() => {
    const media = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReduced(media.matches);
    if (media.matches) {
      setProgress(1);
      return;
    }

    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const el = sectionRef.current;
        if (!el) {
          ticking = false;
          return;
        }
        const rect = el.getBoundingClientRect();
        const total = Math.max(1, el.offsetHeight - window.innerHeight);
        setProgress(Math.min(1, Math.max(0, -rect.top / total)));
        ticking = false;
      });
    };

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <section className='manifesto' id='compania' ref={sectionRef} aria-labelledby='manifesto-title'>
      <div className='manifesto__sticky'>
        <p className='eyebrow eyebrow--light'>{t.home.manifestoEyebrow}</p>
        <h2 id='manifesto-title' className='visually-hidden'>
          {t.home.manifesto}
        </h2>
        <p className='manifesto__text'>
          {words.map((word, index) => {
            const start = index / words.length;
            const local = reduced ? 1 : Math.min(1, Math.max(0, (progress - start) * 3.2));
            return (
              <span key={`${word}-${index}`} style={{ opacity: 0.24 + local * 0.76 }}>
                {word}{' '}
              </span>
            );
          })}
        </p>
      </div>
    </section>
  );
}
