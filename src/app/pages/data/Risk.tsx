import SubProductPage from '../_shared/SubProductPage';
import { findRoute } from '../../../lib/routes';
import { dataRisk } from '../../../content/data/risk';

export default function Page() {
  return <SubProductPage route={findRoute('/data/risk')!} content={dataRisk} />;
}
