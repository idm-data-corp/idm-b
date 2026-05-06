import SolutionPage from '../_shared/SolutionPage';
import { findRoute, PATHS } from '../../../lib/routes';
import { banks } from '../../../content/solutions/banks';

export default function Page() {
  return <SolutionPage route={findRoute(PATHS.solutionsBanks)!} content={banks} />;
}
