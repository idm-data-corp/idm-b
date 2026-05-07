import { lazy, Suspense } from 'react';
import Hero from '../../../components/Hero';
import { usePageMeta } from '../../../lib/seo';
import { findRoute } from '../../../lib/routes';

const Recommended = lazy(() => import('../../../components/Recommended'));
const EventBanner = lazy(() => import('../../../components/EventBanner'));
const EnterpriseTech = lazy(() => import('../../../components/EnterpriseTech'));
const StayConnected = lazy(() => import('../../../components/StayConnected'));

/* SmarterBusiness ('Smarter money. Real results.') and Training are
   temporarily hidden until we have real customer outcomes and a published
   training programme. Restore the imports + render to bring them back. */

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
        <EventBanner />
        <EnterpriseTech />
        <StayConnected />
      </Suspense>
    </>
  );
}
