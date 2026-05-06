import PillarOverview from '../_shared/PillarOverview';
import { findRoute } from '../../../lib/routes';
import { dataOverview } from '../../../content/data/overview';

export default function DataOverview() {
  return <PillarOverview route={findRoute('/data')!} content={dataOverview} />;
}
