import type { Metadata } from 'next';
import { Instrument_Serif, Inter_Tight } from 'next/font/google';
import AppShell from '@/components/AppShell';
import './globals.css';

const sans = Inter_Tight({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

const serif = Instrument_Serif({
  subsets: ['latin'],
  weight: '400',
  style: ['normal', 'italic'],
  variable: '--font-serif',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'MOU Solutions | Technology for healthcare and finance',
  description:
    'Holding company of MeuDoc and MEU Aliado. We build technology to improve decisions and operations in healthcare, finance and Industry 4.0.',
  icons: {
    icon: '/images/mou-logo.png',
    apple: '/images/mou-logo.png',
  },
  openGraph: {
    title: 'MOU Solutions',
    description: 'Technology for decisions that matter in healthcare and finance.',
    type: 'website',
    locale: 'en_US',
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang='en'>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html:
              "(function(){try{history.scrollRestoration='manual';}catch(e){}if(location.hash){history.replaceState(null,'',location.pathname+location.search);}window.scrollTo(0,0);})();",
          }}
        />
      </head>
      <body className={`${sans.variable} ${serif.variable}`}>
        <AppShell>{children}</AppShell>
      </body>
    </html>
  );
}
