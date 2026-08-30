import ContactPage from '@/components/ContactPage';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Get in touch | MOU Solutions',
  description: 'Write to us. Office in Fusagasugá, Cundinamarca. Advisory, MeuDoc, MEU Aliado and Distrecol.',
};

export default function Page() {
  return <ContactPage />;
}
