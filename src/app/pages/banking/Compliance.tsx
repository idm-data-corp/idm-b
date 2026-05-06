import SubProductPage from '../_shared/SubProductPage';
import { findRoute } from '../../../lib/routes';
import { bankingCompliance } from '../../../content/banking/compliance';

export default function Page() {
  return <SubProductPage route={findRoute('/banking/compliance')!} content={bankingCompliance} />;
}
