import type { Meta, StoryObj } from '@storybook/react';
import ProductHero from './ProductHero';

const meta: Meta<typeof ProductHero> = {
  title: 'Modules/ProductHero',
  component: ProductHero,
  tags: ['autodocs'],
  argTypes: {
    variant: { control: 'inline-radio', options: ['split', 'visual-left', 'centered'] },
    tone:    { control: 'inline-radio', options: ['plain', 'tinted'] },
  },
};

export default meta;
type Story = StoryObj<typeof ProductHero>;

const baseArgs = {
  eyebrow: 'IDMB Banking',
  title: <>Banking infrastructure,<br />exposed as APIs</>,
  lede:
    'Issue accounts and cards, run a real-time ledger and connect to the payment rails licensed banks operate on. Every module composable, every event observable.',
  primary:   { label: 'Start building on IDMB',  href: '/banking' },
  secondary: { label: 'Talk to our banking team', href: 'mailto:sales@idm-b.com' },
};

function PlaceholderVisual() {
  return (
    <svg viewBox="0 0 600 460" preserveAspectRatio="xMidYMid slice">
      <defs>
        <linearGradient id="ph-bg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#edf5ff" />
          <stop offset="1" stopColor="#dbeafe" />
        </linearGradient>
      </defs>
      <rect width="600" height="460" fill="url(#ph-bg)" />
      <rect x="80" y="120" width="440" height="220" rx="10" fill="#0f62fe" opacity=".15" />
      <rect x="120" y="160" width="360" height="14" rx="2" fill="#0043ce" />
      <rect x="120" y="190" width="240" height="8"  rx="2" fill="#0043ce" opacity=".5" />
      <rect x="120" y="210" width="180" height="8"  rx="2" fill="#0043ce" opacity=".4" />
      <rect x="120" y="240" width="320" height="60" rx="6" fill="#fff" stroke="#a6c8ff" />
    </svg>
  );
}

export const Split: Story = {
  args: {
    ...baseArgs,
    variant: 'split',
    tone: 'plain',
    visual: <PlaceholderVisual />,
  },
};

export const VisualLeft: Story = {
  args: {
    ...baseArgs,
    variant: 'visual-left',
    tone: 'tinted',
    visual: <PlaceholderVisual />,
  },
};

export const Centered: Story = {
  args: {
    ...baseArgs,
    variant: 'centered',
    tone: 'plain',
    visual: <PlaceholderVisual />,
  },
};

export const CenteredNoVisual: Story = {
  args: {
    ...baseArgs,
    variant: 'centered',
    tone: 'tinted',
  },
};
