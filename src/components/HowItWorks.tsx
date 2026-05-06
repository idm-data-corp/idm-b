import './HowItWorks.css';

export type Step = {
  title: string;
  desc: string;
};

export type HowItWorksVariant =
  | 'rail'         // default - top-rule per card with mono numerals
  | 'circles'      // numbered circles, looser spacing, vertical stack on mobile
  | 'connected';   // horizontal flow with connector lines between numbered circles

type Props = {
  eyebrow?: string;
  heading?: string;
  intro?: React.ReactNode;
  steps: Step[];
  variant?: HowItWorksVariant;
  bg?: 'default' | 'alt';
};

export default function HowItWorks({
  eyebrow,
  heading,
  intro,
  steps,
  variant = 'rail',
  bg = 'default',
}: Props) {
  return (
    <section
      className={`hw hw-bg-${bg} hw-v-${variant}`}
      aria-labelledby={heading ? 'hw-h' : undefined}
    >
      <div className="container">
        {(eyebrow || heading || intro) && (
          <div className="hw-header">
            {eyebrow && <p className="hw-eyebrow">{eyebrow}</p>}
            {heading && (
              <h2 id="hw-h" className="hw-h">
                {heading}
              </h2>
            )}
            {intro && <p className="hw-intro">{intro}</p>}
          </div>
        )}
        <ol className="hw-steps" data-count={steps.length}>
          {steps.map((s, i) => (
            <li key={s.title} className="hw-step">
              <div className="hw-num" aria-hidden>
                {variant === 'rail'
                  ? String(i + 1).padStart(2, '0')
                  : String(i + 1)}
              </div>
              <h3 className="hw-step-title">{s.title}</h3>
              <p className="hw-step-desc">{s.desc}</p>
              {variant === 'connected' && i < steps.length - 1 && (
                <span className="hw-connector" aria-hidden />
              )}
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
