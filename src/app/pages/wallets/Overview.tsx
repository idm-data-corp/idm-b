import PillarOverview from '../_shared/PillarOverview';
import { findRoute } from '../../../lib/routes';
import { walletsOverview } from '../../../content/wallets/overview';

export default function WalletsOverview() {
  return <PillarOverview route={findRoute('/wallets')!} content={walletsOverview} />;
}
