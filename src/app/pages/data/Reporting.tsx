import SubProductPage from '../_shared/SubProductPage';
import { findRoute } from '../../../lib/routes';
import { dataReporting } from '../../../content/data/reporting';

export default function Page() {
  return <SubProductPage route={findRoute('/data/reporting')!} content={dataReporting} />;
}
