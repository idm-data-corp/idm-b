import CustomerStoryPage from '../_shared/CustomerStoryPage';
import { findRoute } from '../../../lib/routes';
import { northbank } from '../../../content/customers/northbank';

export default function Page() {
  return <CustomerStoryPage route={findRoute('/customers/northbank')!} content={northbank} />;
}
