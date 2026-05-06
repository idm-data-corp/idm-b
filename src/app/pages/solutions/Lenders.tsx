import SolutionPage from '../_shared/SolutionPage';
import { findRoute, PATHS } from '../../../lib/routes';
import { lenders } from '../../../content/solutions/lenders';

export default function Page() {
  return <SolutionPage route={findRoute(PATHS.solutionsLenders)!} content={lenders} />;
}
