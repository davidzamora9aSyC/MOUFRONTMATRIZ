import Image from 'next/image';

type BrandShowcaseProps = {
  number: string;
  name: string;
  category: string;
  description: string;
  logo: string;
  logoAlt: string;
  href: string;
  domain: string;
  services: string[];
  tone: 'health' | 'finance';
};

export default function BrandShowcase({
  number,
  name,
  category,
  description,
  logo,
  logoAlt,
  href,
  domain,
  services,
  tone,
}: BrandShowcaseProps) {
  return (
    <article className={`brand-showcase brand-showcase--${tone}`}>
      <div className='brand-showcase__visual'>
        <span className='brand-showcase__number'>{number}</span>
        <div className='brand-showcase__logo-frame'>
          <Image src={logo} alt={logoAlt} fill sizes='(min-width: 900px) 28vw, 70vw' />
        </div>
        <span className='brand-showcase__orbit' aria-hidden='true' />
      </div>
      <div className='brand-showcase__content'>
        <p className='eyebrow'>{category}</p>
        <h3>{name}</h3>
        <p className='brand-showcase__description'>{description}</p>
        <ul>
          {services.map((service) => (
            <li key={service}>
              <span aria-hidden='true' />
              {service}
            </li>
          ))}
        </ul>
        <a className='brand-showcase__link' href={href} target='_blank' rel='noreferrer'>
          Visitar {domain}
          <span aria-hidden='true'>↗</span>
        </a>
      </div>
    </article>
  );
}
