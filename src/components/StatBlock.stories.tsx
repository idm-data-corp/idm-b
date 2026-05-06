import type { Meta, StoryObj } from '@storybook/react';
import StatBlock from './StatBlock';

const stats = [
  { value: 'USD 2.1B', label: 'in customer deposits migrated to the IDMB ledger without a single outage' },
  { value: '99.99%',   label: 'platform availability across our regulated regions in 2025' },
  { value: '< 200ms',  label: 'median end-to-end ledger write across the banking core' },
  { value: 'PCI DSS L1', label: 'and SOC 2 Type II certified, audited every year' },
];

const meta: Meta<typeof StatBlock> = {
  title: 'Modules/StatBlock',
  component: StatBlock,
  tags: ['autodocs'],
  argTypes: {
    variant: { control: 'inline-radio', options: ['cards', 'inline', 'rail'] },
    bg:      { control: 'inline-radio', options: ['default', 'alt', 'dark'] },
  },
  args: {
    eyebrow: 'Real production numbers',
    heading: 'Banks run on IDMB',
    intro: 'A snapshot from the IDMB platform across customers in production today.',
    stats,
    bg: 'alt',
  },
};

export default meta;
type Story = StoryObj<typeof StatBlock>;

export const Cards: Story    = { args: { variant: 'cards', bg: 'alt' } };
export const Inline: Story   = { args: { variant: 'inline', bg: 'default' } };
export const Rail: Story     = { args: { variant: 'rail', bg: 'default' } };
export const RailDark: Story = { args: { variant: 'rail', bg: 'dark' } };
