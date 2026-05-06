import type { Preview } from '@storybook/react';
import { MemoryRouter } from 'react-router-dom';

/* Self-hosted IBM Plex — same set as src/main.tsx so stories use the
   production fonts. */
import '@fontsource/ibm-plex-sans/300.css';
import '@fontsource/ibm-plex-sans/400.css';
import '@fontsource/ibm-plex-sans/500.css';
import '@fontsource/ibm-plex-sans/600.css';
import '@fontsource/ibm-plex-sans/700.css';
import '@fontsource/ibm-plex-mono/400.css';
import '@fontsource/ibm-plex-mono/600.css';

import '../src/styles/global.css';
import '../src/styles/buttons.css';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    layout: 'fullscreen',
    backgrounds: {
      default: 'paper',
      values: [
        { name: 'paper', value: '#ffffff' },
        { name: 'alt', value: '#f4f4f4' },
        { name: 'dark', value: '#161616' },
      ],
    },
  },
  decorators: [
    /* Every component that uses <Link> needs a router context. MemoryRouter
       keeps stories self-contained without affecting the browser URL. */
    (Story) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    ),
  ],
};

export default preview;
