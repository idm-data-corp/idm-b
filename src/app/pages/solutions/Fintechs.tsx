import SolutionPage from '../_shared/SolutionPage';
import { findRoute, PATHS } from '../../../lib/routes';
import { fintechs } from '../../../content/solutions/fintechs';

export default function Page() {
  return <SolutionPage route={findRoute(PATHS.solutionsFintechs)!} content={fintechs} />;
}
