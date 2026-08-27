import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'MOU Solutions | Tecnología para salud y finanzas',
  description:
    'Casa matriz de MeuDoc y MEU Aliado. Creamos soluciones tecnológicas para mejorar decisiones y operaciones en salud y finanzas.',
  openGraph: {
    title: 'MOU Solutions',
    description: 'Tecnología para decisiones que importan en salud y finanzas.',
    type: 'website',
    locale: 'es_CO',
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang='es'>
      <body>{children}</body>
    </html>
  );
}
