import { useState } from 'react';
import { Chat, Close } from './icons';
import './ChatWidget.css';

export default function ChatWidget() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {open && (
        <div className="cw-bubble" role="dialog" aria-label="Chat with IDMB">
          <button
            className="cw-bubble-close"
            aria-label="Dismiss chat"
            onClick={() => setOpen(false)}
          >
            <Close size={16} />
            <span>Close</span>
          </button>
          <p className="cw-bubble-text">Hi - looking to launch a bank, a wallet or a data product? We can help.</p>
        </div>
      )}
      <button
        className="cw-fab"
        aria-label={open ? 'Close chat' : 'Open chat'}
        onClick={() => setOpen((v) => !v)}
      >
        <Chat size={24} />
      </button>
    </>
  );
}
