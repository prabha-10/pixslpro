import { notFound } from 'next/navigation';
import Interactions from '../../Interactions';
import HeroScale from '../HeroScale';
import { PROJECTS } from '../data';
import { caseStudyMarkup } from '../case-study';
import '../case-study.css';

export const dynamicParams = false;

export function generateStaticParams() {
  return Object.keys(PROJECTS).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const p = PROJECTS[slug];
  if (!p) return {};
  const title = `${p.title} | Pixsl Studio`;
  return {
    title,
    description: p.sub,
    alternates: { canonical: `/projects/${slug}` },
    openGraph: {
      title,
      description: p.sub,
      url: `https://pixsl.pro/projects/${slug}`,
      siteName: 'Pixsl Studio',
      locale: 'en_US',
      type: 'article',
    },
    twitter: { card: 'summary', title, description: p.sub },
  };
}

// Same rendering strategy as the landing page: server-rendered markup string,
// with <Interactions /> wiring the reveal observer and contact-form pills.
export default async function ProjectPage({ params }) {
  const { slug } = await params;
  if (!PROJECTS[slug]) notFound();
  const html = caseStudyMarkup(slug);
  return (
    <>
      <div dangerouslySetInnerHTML={{ __html: html }} />
      <Interactions markup={html} />
      <HeroScale />
    </>
  );
}
