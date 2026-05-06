import SubProductPage from '../_shared/SubProductPage';
import { findRoute } from '../../../lib/routes';
import { walletsCrossBorder } from '../../../content/wallets/cross-border';

export default function Page() {
  return <SubProductPage route={findRoute('/wallets/cross-border')!} content={walletsCrossBorder} />;
}
