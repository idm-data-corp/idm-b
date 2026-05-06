import SubProductPage from '../_shared/SubProductPage';
import { findRoute } from '../../../lib/routes';
import { walletsMerchant } from '../../../content/wallets/merchant-b2b';

export default function Page() {
  return <SubProductPage route={findRoute('/wallets/merchant-b2b')!} content={walletsMerchant} />;
}
