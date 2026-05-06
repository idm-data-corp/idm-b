import SubProductPage from '../_shared/SubProductPage';
import { findRoute } from '../../../lib/routes';
import { walletsStored } from '../../../content/wallets/stored-value';

export default function Page() {
  return <SubProductPage route={findRoute('/wallets/stored-value')!} content={walletsStored} />;
}
