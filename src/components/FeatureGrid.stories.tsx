import type { Meta, StoryObj } from '@storybook/react';
import FeatureGrid from './FeatureGrid';
import {
  IconHybridInfra,
  IconAIModels,
  IconAIProductivity,
  IconSecurity,
  IconAnalytics,
  IconDataMgmt,
} from './icons';

const items = [
  { title: 'Core banking & ledger',     desc: 'Real-time, double-entry ledger. Accounts, balances, holds and reconciliation in a single source of truth.', href: '/banking/core',        icon: IconHybridInfra },
  { title: 'Card issuing & processing', desc: 'Branded debit, credit and prepaid cards on Visa and Mastercard rails with a programmable auth engine.',   href: '/banking/cards',       icon: IconAIModels },
  { title: 'Payments & FX rails',       desc: 'Real-time payments, cross-border settlement and FX in 40+ currencies from one integration.',                href: '/banking/payments',    icon: IconAIProductivity },
  { title: 'Compliance, KYC & AML',     desc: 'Identity verification, transaction monitoring, sanctions screening and regulator-ready reports.',          href: '/banking/compliance',  icon: IconSecurity },
  { title: 'Treasury & liquidity',      desc: 'Settlement accounts, intra-day liquidity and end-of-day reconciliation on one auditable feed.',            href: '/banking/treasury',    icon: IconAnalytics },
  { title: 'Reporting & data',          desc: 'Stream every ledger event into your warehouse. Pre-modelled views for risk, finance and growth.',          href: '/data/reporting',      icon: IconDataMgmt },
];

const meta: Meta<typeof FeatureGrid> = {
  title: 'Modules/FeatureGrid',
  component: FeatureGrid,
  tags: ['autodocs'],
  argTypes: {
    variant: { control: 'inline-radio', options: ['cards', 'numbered', 'horizontal', 'minimal'] },
    columns: { control: 'inline-radio', options: [2, 3, 4] },
    bg:      { control: 'inline-radio', options: ['default', 'alt'] },
  },
  args: {
    eyebrow: 'Modules',
    heading: 'A regulated banking stack, in modules',
    intro: 'Run the whole stack or compose only the parts you need. Every module is independently versioned.',
    items,
    columns: 3,
    bg: 'default',
  },
};

export default meta;
type Story = StoryObj<typeof FeatureGrid>;

export const Cards: Story = {
  args: { variant: 'cards' },
};

export const Numbered: Story = {
  args: { variant: 'numbered' },
};

export const Horizontal: Story = {
  args: { variant: 'horizontal', bg: 'alt' },
};

export const Minimal: Story = {
  args: { variant: 'minimal' },
};

export const FourColumnsCards: Story = {
  args: { variant: 'cards', columns: 4 },
};
