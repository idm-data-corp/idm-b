import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './app/App';

/* Self-hosted IBM Plex - five Sans weights + two Mono weights, served from
   our origin instead of fonts.googleapis.com. Loaded once, before global
   styles, so the @font-face declarations are present before paint. */
import '@fontsource/ibm-plex-sans/300.css';
import '@fontsource/ibm-plex-sans/400.css';
import '@fontsource/ibm-plex-sans/500.css';
import '@fontsource/ibm-plex-sans/600.css';
import '@fontsource/ibm-plex-sans/700.css';
import '@fontsource/ibm-plex-mono/400.css';
import '@fontsource/ibm-plex-mono/600.css';

import './styles/global.css';
import './styles/buttons.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
