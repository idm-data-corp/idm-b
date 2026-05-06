import { lazy, Suspense } from 'react';
import { Outlet, ScrollRestoration } from 'react-router-dom';
import Header from '../../components/Header';
import BreadcrumbNav from '../../components/BreadcrumbNav';
import './LegalLayout.css';

const Footer = lazy(() => import('../../components/Footer'));

export default function LegalLayout() {
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
