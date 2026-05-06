import CustomerStoryPage from '../_shared/CustomerStoryPage';
import { findRoute } from '../../../lib/routes';
import { paywave } from '../../../content/customers/paywave';

export default function Page() {
  return <CustomerStoryPage route={findRoute('/customers/paywave')!} content={paywave} />;
}
