import WhoPage from '@/components/WhoPage';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Who we are | MOU Solutions',
  description:
    'MOU Solutions was founded by Julian Herrera and David Zamora. Business and technology at the same table.',
};

export default function Page() {
  return <WhoPage />;
}
