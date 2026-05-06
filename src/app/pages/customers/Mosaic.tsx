import CustomerStoryPage from '../_shared/CustomerStoryPage';
import { findRoute } from '../../../lib/routes';
import { mosaic } from '../../../content/customers/mosaic';

export default function Page() {
  return <CustomerStoryPage route={findRoute('/customers/mosaic')!} content={mosaic} />;
}
