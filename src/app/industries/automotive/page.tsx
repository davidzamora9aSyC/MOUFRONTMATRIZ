import IndustryPage from '@/components/IndustryPage';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Automotive | MOU Solutions',
  description:
    'MOU brings Industry 4.0 into auto-parts and logistics operations. Distrecol is the plant case: process first, then automation.',
};

export default function Page() {
  return <IndustryPage industry='automotive' />;
}
