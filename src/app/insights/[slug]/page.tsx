import InsightArticle from '@/components/InsightArticle';
import { getInsight, insights } from '@/content/insights';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return insights.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = getInsight(slug);
  if (!article) return { title: 'Insights | MOU Solutions' };

  return {
    title: `${article.title.en} | MOU Solutions`,
    description: article.description.en,
    alternates: { canonical: `/insights/${article.slug}` },
    openGraph: {
      title: article.title.en,
      description: article.description.en,
      type: 'article',
      publishedTime: article.date,
      authors: [article.author.name],
    },
  };
}

export default async function Page({ params }: Props) {
  const { slug } = await params;
  const article = getInsight(slug);
  if (!article) notFound();

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title.en,
    description: article.description.en,
    datePublished: article.date,
    dateModified: article.date,
    inLanguage: 'en',
    author: {
      '@type': 'Person',
      name: article.author.name,
      jobTitle: article.author.role.en,
    },
    publisher: {
      '@type': 'Organization',
      name: 'MOU Solutions',
      legalName: 'MOU Solutions S.A.S.',
    },
    image: article.image,
    mainEntityOfPage: `/insights/${article.slug}`,
  };

  return (
    <>
      <script type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <InsightArticle slug={slug} />
    </>
  );
}
