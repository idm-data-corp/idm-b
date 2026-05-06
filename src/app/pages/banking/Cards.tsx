import SubProductPage from '../_shared/SubProductPage';
import { findRoute } from '../../../lib/routes';
import { bankingCards } from '../../../content/banking/cards';

export default function Page() {
  return <SubProductPage route={findRoute('/banking/cards')!} content={bankingCards} />;
}
