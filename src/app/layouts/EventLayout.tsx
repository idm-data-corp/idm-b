import { lazy, Suspense } from 'react';
import { Outlet, ScrollRestoration } from 'react-router-dom';
import Header from '../../components/Header';
import BreadcrumbNav from '../../components/BreadcrumbNav';

const Footer = lazy(() => import('../../components/Footer'));

export default function EventLayout() {
  return (
    <>
      <Header />
      <BreadcrumbNav />
      <main id="main">
        <Outlet />
      </main>
      <Suspense fallback={null}>
        <Footer />
      </Suspense>
      <ScrollRestoration />
    </>
  );
}
