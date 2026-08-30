import WhyPage from '@/components/WhyPage';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Why MOU | MOU Solutions',
  description:
    'MOU Solutions is a Colombian technology company. We bring together strategy, design and software for healthcare, finance and Industry 4.0.',
};

export default function Page() {
  return <WhyPage />;
}
