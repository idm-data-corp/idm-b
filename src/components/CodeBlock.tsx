import { useState } from 'react';
import './CodeBlock.css';

type Tab = { label: string; language: string; code: string };

type Props = {
  /* If a single sample, pass `code` + optional `language` and `label`.
     For multi-language samples, pass `tabs`. */
  code?: string;
  language?: string;
  label?: string;
  tabs?: Tab[];
};

export default function CodeBlock(props: Props) {
  const tabs: Tab[] = props.tabs
    ? props.tabs
    : [{
        label: props.label ?? props.language ?? 'Code',
        language: props.language ?? 'shell',
        code: (props.code ?? '').trim(),
      }];

  const [activeIdx, setActiveIdx] = useState(0);
  const [copied, setCopied] = useState(false);
  const active = tabs[activeIdx];

  async function copy() {
    try {
      await navigator.clipboard.writeText(active.code);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1500);
    } catch {
      /* clipboard unavailable - silent */
    }
  }

  return (
    <div className="cb">
      <div className="cb-bar">
        <div className="cb-tabs" role="tablist" aria-label="Code samples">
          {tabs.map((t, i) => (
            <button
              key={t.label}
              type="button"
              role="tab"
              aria-selected={i === activeIdx}
              tabIndex={i === activeIdx ? 0 : -1}
              className={`cb-tab ${i === activeIdx ? 'is-active' : ''}`}
              onClick={() => setActiveIdx(i)}
            >
              {t.label}
            </button>
          ))}
        </div>
        <button type="button" className="cb-copy" onClick={copy} aria-label="Copy code">
          {copied ? 'Copied' : 'Copy'}
        </button>
      </div>
      <pre className="cb-pre" aria-label={`${active.language} sample`}>
        <code className={`language-${active.language}`}>{active.code}</code>
      </pre>
    </div>
  );
}
