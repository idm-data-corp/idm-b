import { Outlet, ScrollRestoration } from 'react-router-dom';
import Header from '../../components/Header';

export default function ErrorLayout() {
  return (
    <>
      <Header />
      <main id="main">
        <Outlet />
      </main>
      <ScrollRestoration />
    </>
  );
}
