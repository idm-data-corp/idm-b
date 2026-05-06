import SolutionPage from '../_shared/SolutionPage';
import { findRoute, PATHS } from '../../../lib/routes';
import { marketplaces } from '../../../content/solutions/marketplaces';

export default function Page() {
  return <SolutionPage route={findRoute(PATHS.solutionsMarketplaces)!} content={marketplaces} />;
}
