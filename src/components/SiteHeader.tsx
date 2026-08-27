import BrandMark from './BrandMark';

const links = [
  { label: 'Compañía', href: '#compania' },
  { label: 'Fundadores', href: '#fundadores' },
  { label: 'Marcas', href: '#marcas' },
];

export default function SiteHeader() {
  return (
    <header className='site-header'>
      <div className='site-header__inner'>
        <a className='site-header__brand' href='#inicio' aria-label='MOU Solutions, volver al inicio'>
          <BrandMark />
        </a>
        <nav className='site-header__nav' aria-label='Navegación principal'>
          {links.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>
        <a className='button button--small button--dark' href='#marcas'>
          Conocer las marcas
          <span aria-hidden='true'>↗</span>
        </a>
      </div>
    </header>
  );
}
