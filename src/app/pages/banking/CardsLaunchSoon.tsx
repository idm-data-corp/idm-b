import ProductLaunchSoon from '../_shared/ProductLaunchSoon';
import { findRoute } from '../../../lib/routes';

/* Card issuing is roadmapped but not yet generally available, so the
   /banking/cards URL renders this lightweight launch-soon page instead of
   the full SubProductPage marketing layout. */

export default function Page() {
  return (
    <ProductLaunchSoon
      route={findRoute('/banking/cards')!}
      product="Card issuing"
      description={
        'IDMB Card issuing brings branded debit, credit and prepaid cards on Visa and Mastercard rails into the IDMB platform. The module is in active development and not yet available to general customers.'
      }
      capabilities={[
        'Virtual and physical card issuing on Visa and Mastercard rails',
        'Programmable authorisation engine wired into the IDMB ledger',
        'In-house 3-D Secure, dispute lifecycle and chargeback workflows',
        'BIN sponsorship and programme management for licensed institutions',
      ]}
      enquirySubject="Early access: IDMB Card issuing"
    />
  );
}
