import SubProductPage from '../_shared/SubProductPage';
import { findRoute } from '../../../lib/routes';
import { bankingTreasury } from '../../../content/banking/treasury';

export default function Page() {
  return <SubProductPage route={findRoute('/banking/treasury')!} content={bankingTreasury} />;
}
