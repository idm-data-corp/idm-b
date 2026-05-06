import SubProductPage from '../_shared/SubProductPage';
import { findRoute } from '../../../lib/routes';
import { dataLake } from '../../../content/data/lake';

export default function Page() {
  return <SubProductPage route={findRoute('/data/lake')!} content={dataLake} />;
}
