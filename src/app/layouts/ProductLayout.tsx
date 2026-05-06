import { lazy, Suspense, useEffect, useState } from 'react';
import { Outlet, ScrollRestoration, useLocation } from 'react-router-dom';
import Header from '../../components/Header';
import AnnouncementBar from '../../components/AnnouncementBar';
import SubNav from '../../components/SubNav';
import BreadcrumbNav from '../../components/BreadcrumbNav';
import { subNavForPath } from '../../lib/nav';

const Footer = lazy(() => import('../../components/Footer'));
const CookieBanner = lazy(() => import('../../components/CookieBanner'));
const ChatWidget = lazy(() => import('../../components/ChatWidget'));

function useIdleMount(delay = 1500) {
  const [ready, setReady] = useState(false);
  useEffect(() => {
    type RIC = (cb: () => void) => number;
    const idle = (window as unknown as { requestIdleCallback?: RIC }).requestIdleCallback;
    const id = idle ? idle(() => setReady(true)) : window.setTimeout(() => setReady(true), delay);
    return () => {
      const cancel = (window as unknown as { cancelIdleCallback?: (id: number) => void }).cancelIdleCallback;
      if (cancel && idle) cancel(id);
      else window.clearTimeout(id);
    };
  }, [delay]);
  return ready;
}

export default function ProductLayout() {
  const idle = useIdleMount();
  const { pathname } = useLocation();
  const sub = subNavForPath(pathname);

  return (
    <>
      <Header />
      <AnnouncementBar />
      {sub && <SubNav pillar={sub.pillar} items={sub.items} />}
      <BreadcrumbNav />
      <main id="main">
        <Outlet />
      </main>
      <Suspense fallback={null}>
        <Footer />
      </Suspense>
      {idle && (
        <Suspense fallback={null}>
          <CookieBanner />
          <ChatWidget />
        </Suspense>
      )}
      <ScrollRestoration />
    </>
  );
}
