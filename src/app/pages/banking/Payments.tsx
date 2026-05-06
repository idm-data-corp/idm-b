import SubProductPage from '../_shared/SubProductPage';
import { findRoute } from '../../../lib/routes';
import { bankingPayments } from '../../../content/banking/payments';

export default function Page() {
  return <SubProductPage route={findRoute('/banking/payments')!} content={bankingPayments} />;
}
