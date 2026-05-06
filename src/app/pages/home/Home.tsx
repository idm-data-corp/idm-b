import { lazy, Suspense } from 'react';
import Hero from '../../../components/Hero';
import { usePageMeta } from '../../../lib/seo';
import { findRoute } from '../../../lib/routes';

const Recommended = lazy(() => import('../../../components/Recommended'));
const SmarterBusiness = lazy(() => import('../../../components/SmarterBusiness'));
const EventBanner = lazy(() => import('../../../components/EventBanner'));
const EnterpriseTech = lazy(() => import('../../../components/EnterpriseTech'));
const Training = lazy(() => import('../../../components/Training'));
const StayConnected = lazy(() => import('../../../components/StayConnected'));

function SectionPlaceholder({ height }: { height: number }) {
  return <div aria-hidden style={{ minHeight: height }} />;
}

export default function Home() {
  const meta = findRoute('/')!;
  usePageMeta({
    title: meta.title,
    description: meta.description,
    canonical: '/',
  });

  return (
    <>
      <Hero />
      <Suspense fallback={<SectionPlaceholder height={300} />}>
        <Recommended />
        <SmarterBusiness />
        <EventBanner />
        <EnterpriseTech />
        <Training />
        <StayConnected />
      </Suspense>
    </>
  );
}
