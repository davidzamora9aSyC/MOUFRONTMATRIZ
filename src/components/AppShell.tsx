'use client';

import { LanguageProvider } from '@/i18n/LanguageProvider';
import ScrollProvider from './ScrollProvider';
import SiteFooter from './SiteFooter';
import SiteHeader from './SiteHeader';

export default function AppShell({ children }: { children: React.ReactNode }) {
  return (
    <LanguageProvider>
      <ScrollProvider>
        <SiteHeader />
        {children}
        <SiteFooter />
      </ScrollProvider>
    </LanguageProvider>
  );
}
