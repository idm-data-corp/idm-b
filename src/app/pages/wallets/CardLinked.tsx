import SubProductPage from '../_shared/SubProductPage';
import { findRoute } from '../../../lib/routes';
import { walletsCardLinked } from '../../../content/wallets/card-linked';

export default function Page() {
  return <SubProductPage route={findRoute('/wallets/card-linked')!} content={walletsCardLinked} />;
}
