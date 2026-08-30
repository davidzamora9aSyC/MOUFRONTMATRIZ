'use client';

import Image from 'next/image';
import Link from 'next/link';

type BrandItem = {
  name: string;
  href: string;
  logo?: string;
};

const brands: BrandItem[] = [
  { name: 'MeuDoc', logo: '/images/meudoc-logo.png', href: 'https://meudoc.co' },
  { name: 'MEU Aliado', logo: '/images/meu-aliado-logo.png', href: 'https://www.meu-aliado.com' },
  { name: 'MOU', logo: '/images/mou-logo.png', href: '/' },
  { name: 'Distrecol', href: 'https://distrecol.com/' },
];

function Connector() {
  return (
    <span className='brand-marquee__link' aria-hidden='true'>
      <i />
      <i />
      <i />
    </span>
  );
}

function MarqueeRow({ reverse = false }: { reverse?: boolean }) {
  const sequence = [...brands, ...brands, ...brands, ...brands];

  return (
    <div className={`brand-marquee${reverse ? ' brand-marquee--reverse' : ''}`}>
      <div className='brand-marquee__track'>
        {sequence.map((brand, index) => (
          <span className='brand-marquee__unit' key={`${brand.name}-${index}`}>
            <Link
              className='brand-marquee__item'
              href={brand.href}
              target={brand.href.startsWith('http') ? '_blank' : undefined}
              rel={brand.href.startsWith('http') ? 'noreferrer' : undefined}
            >
              {brand.logo ? (
                <Image src={brand.logo} alt={brand.name} width={160} height={64} />
              ) : (
                <strong>{brand.name}</strong>
              )}
            </Link>
            <Connector />
          </span>
        ))}
      </div>
    </div>
  );
}

export default function BrandCarousel({
  eyebrow,
  title,
}: {
  eyebrow: string;
  title: string;
}) {
  return (
    <section className='brand-carousel' id='marcas'>
      <div className='brand-carousel__intro' data-reveal>
        <p className='eyebrow eyebrow--light'>{eyebrow}</p>
        <h2>{title}</h2>
      </div>
      <MarqueeRow />
      <MarqueeRow reverse />
    </section>
  );
}
