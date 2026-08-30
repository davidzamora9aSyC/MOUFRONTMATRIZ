import IndustryPage from '@/components/IndustryPage';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Healthcare | MOU Solutions',
  description:
    'MOU organises access, clinical operations and wellbeing. MeuDoc is the digital health brand of MOU Solutions.',
};

export default function Page() {
  return <IndustryPage industry='healthcare' />;
}
