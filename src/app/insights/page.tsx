import InsightsIndex from '@/components/InsightsIndex';
import { insights } from '@/content/insights';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Insights | MOU Solutions',
  description:
    'MOU Solutions insights on technology adoption, intergenerational handoff, AI implementation mistakes and advisory disconnected from operations.',
  alternates: { canonical: '/insights' },
  openGraph: {
    title: 'Insights | MOU Solutions',
    description:
      'Articles on adoption, AI, advisory and industry: process first, then automation.',
    type: 'website',
  },
};

export default function Page() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Insights | MOU Solutions',
    description:
      'MOU Solutions insights on technology adoption, intergenerational handoff and artificial intelligence.',
    url: '/insights',
    hasPart: insights.map((item) => ({
      '@type': 'Article',
      headline: item.title.en,
      datePublished: item.date,
      url: `/insights/${item.slug}`,
    })),
  };

  return (
    <>
      <script type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <InsightsIndex />
    </>
  );
}
