'use client';

import { usePathname } from 'next/navigation';
import { useEffect } from 'react';

export default function ScrollProvider({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  useEffect(() => {
    try {
      history.scrollRestoration = 'manual';
    } catch {
      /* ignore */
    }

    const goTop = () => window.scrollTo(0, 0);
    goTop();
    window.addEventListener('pageshow', goTop);
    return () => window.removeEventListener('pageshow', goTop);
  }, []);

  useEffect(() => {
    const html = document.documentElement;
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    let ticking = false;
    const isHome = pathname === '/';
    const darkHero =
      isHome ||
      pathname === '/contact' ||
      pathname === '/why-mou' ||
      pathname === '/who-we-are' ||
      pathname === '/what-we-do' ||
      pathname.startsWith('/industries') ||
      pathname.startsWith('/insights');

    const update = () => {
      const y = window.scrollY;
      const hero = document.getElementById('inicio');
      const heroH = hero?.offsetHeight || window.innerHeight;
      const docH = Math.max(1, html.scrollHeight - window.innerHeight);
      html.style.setProperty('--hero-p', String(hero && isHome ? Math.min(1, y / heroH) : 0));
      html.style.setProperty('--page-p', String(y / docH));
      html.classList.toggle('is-scrolled', y > 12);
      ticking = false;
    };

    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(update);
    };

    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll, { passive: true });

    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-in');
            revealObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -8% 0px' },
    );

    document.querySelectorAll('[data-reveal]').forEach((el) => {
      if (reduced) {
        el.classList.add('is-in');
        return;
      }
      revealObserver.observe(el);
    });

    const visibleLights = new Set<Element>();
    const lightObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) visibleLights.add(entry.target);
          else visibleLights.delete(entry.target);
        });
        if (darkHero) html.classList.toggle('header-light', visibleLights.size > 0);
      },
      { rootMargin: '-80px 0px -72% 0px', threshold: 0 },
    );

    window.scrollTo(0, 0);

    if (darkHero) {
      html.classList.remove('header-light');
      document.querySelectorAll('[data-header="light"]').forEach((el) => lightObserver.observe(el));
    } else {
      html.classList.add('header-light');
    }

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      revealObserver.disconnect();
      lightObserver.disconnect();
    };
  }, [pathname]);

  return (
    <>
      <div className='scroll-progress' aria-hidden='true' />
      {children}
    </>
  );
}
