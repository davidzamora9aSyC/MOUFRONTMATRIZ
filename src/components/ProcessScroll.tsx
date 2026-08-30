'use client';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { useI18n } from '@/i18n/LanguageProvider';

const frames = [
  '/images/process-chaos.png',
  '/images/process-build.png',
  '/images/process-ready.png',
];

function slideVisibility(index: number, progress: number, count: number) {
  if (count <= 1) return 1;
  const x = progress * (count - 1);
  const dist = Math.abs(x - index);
  const hold = 0.36;
  const fadeEnd = 0.64;
  if (dist <= hold) return 1;
  if (dist >= fadeEnd) return 0;
  const u = (dist - hold) / (fadeEnd - hold);
  return 1 - u * u * (3 - 2 * u);
}

export default function ProcessScroll() {
  const { t } = useI18n();
  const trackRef = useRef<HTMLDivElement>(null);
  const slidesRef = useRef<(HTMLElement | null)[]>([]);
  const activeRef = useRef(0);
  const [active, setActive] = useState(0);
  const [reduced, setReduced] = useState(false);
  const steps = t.process.steps;

  useEffect(() => {
    const media = window.matchMedia('(prefers-reduced-motion: reduce)');
    const syncReduced = () => setReduced(media.matches);
    syncReduced();
    media.addEventListener('change', syncReduced);

    const apply = (progress: number) => {
      const count = slidesRef.current.length;
      slidesRef.current.forEach((el, index) => {
        if (!el) return;
        const vis = slideVisibility(index, progress, count);
        const outgoing = progress * (count - 1) > index;
        el.style.opacity = String(vis);
        el.style.transform = `translate3d(0, ${(1 - vis) * (outgoing ? -48 : 56)}px, 0) scale(${0.96 + vis * 0.04})`;
        el.style.visibility = vis < 0.02 ? 'hidden' : 'visible';
        el.setAttribute('aria-hidden', vis < 0.2 ? 'true' : 'false');
      });
      const nextActive = Math.round(progress * (count - 1));
      if (nextActive !== activeRef.current) {
        activeRef.current = nextActive;
        setActive(nextActive);
      }
    };

    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const el = trackRef.current;
        if (!el || media.matches) {
          ticking = false;
          return;
        }
        const total = Math.max(1, el.offsetHeight - window.innerHeight);
        apply(Math.min(1, Math.max(0, -el.getBoundingClientRect().top / total)));
        ticking = false;
      });
    };

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll, { passive: true });
    return () => {
      media.removeEventListener('change', syncReduced);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);

  return (
    <section className='process' id='procesos' aria-labelledby='process-title'>
      <h2 id='process-title' className='visually-hidden'>
        {t.process.title}
      </h2>

      <div className={`process-stage${reduced ? ' is-static' : ''}`} ref={trackRef}>
        <div className='process-stage__pin'>
          {steps.map((step, index) => (
            <article
              key={step.title}
              ref={(node) => {
                slidesRef.current[index] = node;
              }}
              className={`process-slide process-slide--${index}`}
              aria-hidden={index !== 0}
            >
              <div className='process-slide__copy'>
                <p className='eyebrow eyebrow--light'>{t.process.eyebrow}</p>
                <small>0{index + 1}</small>
                <h3>{step.title}</h3>
                <p>{step.body}</p>
              </div>
              <div className='process-slide__visual'>
                <div className='process-orb'>
                  <Image src={frames[index]} alt='' fill sizes='(max-width: 820px) 70vw, 520px' />
                </div>
              </div>
            </article>
          ))}

          <div className='process-stage__progress' aria-hidden='true'>
            {steps.map((step, index) => (
              <span key={step.title} className={index === active ? 'is-on' : undefined}>
                0{index + 1}
              </span>
            ))}
          </div>
        </div>
      </div>

      <aside className='process-advisory' data-reveal>
        <p className='eyebrow eyebrow--light'>{t.process.advisoryEyebrow}</p>
        <h3>{t.process.advisoryTitle}</h3>
        <p>{t.process.advisoryLead}</p>
        <ul>
          {t.process.advisoryPoints.map((item) => (
            <li key={item.title}>
              <strong>{item.title}</strong>
              <span>{item.body}</span>
            </li>
          ))}
        </ul>
      </aside>
    </section>
  );
}
