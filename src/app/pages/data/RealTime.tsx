import SubProductPage from '../_shared/SubProductPage';
import { findRoute } from '../../../lib/routes';
import { dataRealTime } from '../../../content/data/real-time';

export default function Page() {
  return <SubProductPage route={findRoute('/data/real-time')!} content={dataRealTime} />;
}
