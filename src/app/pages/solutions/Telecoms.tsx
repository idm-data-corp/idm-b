import SolutionPage from '../_shared/SolutionPage';
import { findRoute, PATHS } from '../../../lib/routes';
import { telecoms } from '../../../content/solutions/telecoms';

export default function Page() {
  return <SolutionPage route={findRoute(PATHS.solutionsTelecoms)!} content={telecoms} />;
}
