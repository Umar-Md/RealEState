import { notFound } from 'next/navigation';
import { insights } from '@/data/insights';
import InsightArticle from '@/components/insights/InsightArticle';

export const dynamicParams = false;
export function generateStaticParams() {
  return insights.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const article = insights.find((item) => item.slug === slug);
  if (!article) return {};
  return {
    title: article.title,
    description: article.description,
    alternates: { canonical: `/insights/${article.slug}` },
    openGraph: {
      type: 'article', title: article.title, description: article.description,
      url: `/insights/${article.slug}`, images: [{ url: `${process.env.NEXT_PUBLIC_BASE_PATH || ''}${article.image}`, alt: article.alt }],
      publishedTime: `${article.published}T09:00:00+05:30`, modifiedTime: `${article.updated}T09:00:00+05:30`, authors: [article.author],
    },
    twitter: { card: 'summary_large_image', title: article.title, description: article.description, images: [`${process.env.NEXT_PUBLIC_BASE_PATH || ''}${article.image}`] },
  };
}

export default async function InsightPage({ params }) {
  const { slug } = await params;
  const article = insights.find((item) => item.slug === slug);
  if (!article) notFound();
  return <InsightArticle article={article} />;
}
