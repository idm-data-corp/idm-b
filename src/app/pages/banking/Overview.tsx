import PillarOverview from '../_shared/PillarOverview';
import { findRoute } from '../../../lib/routes';
import { bankingOverview } from '../../../content/banking/overview';

export default function BankingOverview() {
  return <PillarOverview route={findRoute('/banking')!} content={bankingOverview} />;
}
