import SubProductPage from '../_shared/SubProductPage';
import { findRoute } from '../../../lib/routes';
import { bankingCore } from '../../../content/banking/core';

export default function Page() {
  return <SubProductPage route={findRoute('/banking/core')!} content={bankingCore} />;
}
