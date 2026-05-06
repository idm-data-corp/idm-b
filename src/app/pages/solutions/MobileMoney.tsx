import SolutionPage from '../_shared/SolutionPage';
import { findRoute, PATHS } from '../../../lib/routes';
import { mobileMoney } from '../../../content/solutions/mobile-money';

export default function Page() {
  return <SolutionPage route={findRoute(PATHS.solutionsMobileMoney)!} content={mobileMoney} />;
}
