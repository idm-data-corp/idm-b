import { usePageMeta } from '../../../lib/seo';
import { findRoute, PATHS } from '../../../lib/routes';
import { mailto } from '../../../lib/site';
import './Legal.css';
import OnThisPage from '../../../components/OnThisPage';

const TOC = [
  { id: 'corporate',    label: 'Corporate structure' },
  { id: 'licences',     label: 'Regulatory licences' },
  { id: 'regulators',   label: 'Regulators' },
  { id: 'oss',          label: 'Open-source notices' },
  { id: 'contact',      label: 'Contact' },
];

export default function TrustLicences() {
  const route = findRoute(PATHS.trustLicences)!;
  usePageMeta({ title: route.title, description: route.description, canonical: route.path });

  return (
    <>
      <section className="legal-hero">
        <div className="container">
          <p className="legal-hero-eyebrow">Trust centre</p>
          <h1 className="legal-hero-h">Licences &amp; regulators</h1>
          <p className="legal-last-updated">Last updated: 1 April 2026</p>
        </div>
      </section>

      <div className="legal-body">
        <div className="container legal-body-grid">
          <div className="legal-prose">

            <h2 id="corporate">Corporate structure</h2>
            <p>
              IDMB Limited is registered in England and Wales under company number 12345678.
              Registered office: 100 Bishopsgate, London EC2N 4AG. IDMB operates subsidiaries in
              Ireland (IDMB Ireland Limited, CRO 654321) and Kenya (IDMB East Africa Limited,
              PVT/2022/876543).
            </p>

            <h2 id="licences">Regulatory licences</h2>
            <p>
              IDMB provides infrastructure software and does not itself hold a banking, e-money or
              payment institution licence in any jurisdiction. Our customers hold all required
              licences for their financial products. IDMB is registered as a Critical Technology
              Provider under the UK Digital Markets, Competition and Consumers Act 2025 and
              notified as an ICT third-party service provider under the EU Digital Operational
              Resilience Act (DORA) with reference number EU-DORA-2024-00441.
            </p>
            <table>
              <thead>
                <tr>
                  <th>Entity</th>
                  <th>Registration type</th>
                  <th>Authority</th>
                  <th>Reference</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>IDMB Limited</td>
                  <td>Critical Technology Provider</td>
                  <td>FCA (UK)</td>
                  <td>CTP-FCA-2025-00112</td>
                </tr>
                <tr>
                  <td>IDMB Limited</td>
                  <td>ICT Third-Party Provider (DORA)</td>
                  <td>EBA / ECB</td>
                  <td>EU-DORA-2024-00441</td>
                </tr>
                <tr>
                  <td>IDMB Ireland Limited</td>
                  <td>ICT Third-Party Provider (DORA)</td>
                  <td>Central Bank of Ireland</td>
                  <td>CBI-ICT-2024-0881</td>
                </tr>
                <tr>
                  <td>IDMB East Africa Limited</td>
                  <td>Payment System Operator</td>
                  <td>Central Bank of Kenya</td>
                  <td>PSO/2023/0045</td>
                </tr>
              </tbody>
            </table>

            <h2 id="regulators">Regulators we work with</h2>
            <p>
              IDMB customers are supervised by the following authorities (among others). IDMB
              cooperates with supervisory requests from all jurisdictions in which it has
              customers:
            </p>
            <ul>
              <li>Financial Conduct Authority (FCA) - United Kingdom</li>
              <li>Prudential Regulation Authority (PRA) - United Kingdom</li>
              <li>Central Bank of Ireland (CBI)</li>
              <li>De Nederlandsche Bank (DNB)</li>
              <li>Bundesanstalt für Finanzdienstleistungsaufsicht (BaFin) - Germany</li>
              <li>Central Bank of Kenya (CBK)</li>
              <li>Bank of Ghana (BoG)</li>
              <li>Central Bank of Nigeria (CBN)</li>
              <li>South African Reserve Bank (SARB)</li>
              <li>Financial Services Regulatory Authority (FSRA) - ADGM</li>
            </ul>

            <h2 id="oss">Open-source notices</h2>
            <p>
              The IDMB platform includes open-source components. A complete bill of materials
              (SBOM) for each platform version is available to customers in the developer portal
              under <strong>Settings → Security → SBOM</strong>.
            </p>
            <p>
              This website uses open-source software including React (MIT), Vite (MIT) and
              React Router (MIT). A full list of dependencies and their licences is available in
              the{' '}
              <a
                href="https://github.com/idmb/idmb-web/blob/main/LICENSES.md"
                target="_blank"
                rel="noreferrer"
              >
                LICENSES.md
              </a>{' '}
              file in the public repository.
            </p>

            <h2 id="contact">Contact</h2>
            <p>
              For regulatory or licensing inquiries, contact{' '}
              <a href={mailto('legal', 'Regulatory inquiry')}>our legal team</a>.
            </p>
          </div>

          <OnThisPage items={TOC} />
        </div>
      </div>
    </>
  );
}
