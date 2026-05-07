import type { StorybookConfig } from '@storybook/react-vite';

/* IDMB Storybook config - points at component-level *.stories.tsx files
   colocated with the modules they document. Uses our existing Vite config. */
const config: StorybookConfig = {
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  stories: [
    '../src/components/**/*.stories.@(ts|tsx)',
    '../src/app/**/*.stories.@(ts|tsx)',
  ],
  addons: [
    '@storybook/addon-essentials',
  ],
  docs: {
    autodocs: 'tag',
  },
  core: {
    disableTelemetry: true,
  },
  typescript: {
    reactDocgen: 'react-docgen-typescript',
  },
};

export default config;
