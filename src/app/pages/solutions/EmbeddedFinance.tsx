import SolutionPage from '../_shared/SolutionPage';
import { findRoute, PATHS } from '../../../lib/routes';
import { embeddedFinance } from '../../../content/solutions/embedded-finance';

export default function Page() {
  return <SolutionPage route={findRoute(PATHS.solutionsEmbedded)!} content={embeddedFinance} />;
}
