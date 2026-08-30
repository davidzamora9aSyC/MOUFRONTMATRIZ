import IndustryPage from '@/components/IndustryPage';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Finance | MOU Solutions',
  description:
    'MOU turns financial information into decisions. MEU Aliado organises products, treasury and direction for people, SMEs and organisations.',
};

export default function Page() {
  return <IndustryPage industry='finance' />;
}
