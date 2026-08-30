import WhatWeDoPage from '@/components/WhatWeDoPage';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'What we do | MOU Solutions',
  description:
    'We build software, automation and support in healthcare, finance and Industry 4.0. Process first; then AI.',
};

export default function Page() {
  return <WhatWeDoPage />;
}
