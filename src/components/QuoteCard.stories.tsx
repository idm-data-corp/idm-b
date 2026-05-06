import type { Meta, StoryObj } from '@storybook/react';
import QuoteCard from './QuoteCard';

const meta: Meta<typeof QuoteCard> = {
  title: 'Modules/QuoteCard',
  component: QuoteCard,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof QuoteCard>;

export const Default: Story = {
  args: {
    quote:
      'We migrated two billion dollars of customer deposits onto the IDMB core in a single weekend, with zero customer-facing outages. The ledger has not blinked.',
    attribution: { name: 'Aisha Mensah', role: 'CTO', company: 'Northbank' },
    cta: { label: 'Read the customer story', href: '/customers/northbank' },
  },
};

export const NoCTA: Story = {
  args: {
    quote:
      'IDMB Wallets gave us multi-currency balances, instant transfers and tap-to-pay cards in a single integration.',
    attribution: { name: 'Daniel Okello', role: 'VP Product', company: 'Paywave' },
  },
};
