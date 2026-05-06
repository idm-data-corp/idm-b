import CustomerStoryPage from '../_shared/CustomerStoryPage';
import { findRoute } from '../../../lib/routes';
import { vela } from '../../../content/customers/vela';

export default function Page() {
  return <CustomerStoryPage route={findRoute('/customers/vela')!} content={vela} />;
}
