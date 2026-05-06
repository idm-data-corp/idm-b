import type { Meta, StoryObj } from '@storybook/react';
import CTASection from './CTASection';

const meta: Meta<typeof CTASection> = {
  title: 'Modules/CTASection',
  component: CTASection,
  tags: ['autodocs'],
  argTypes: {
    tone: { control: 'inline-radio', options: ['dark', 'light'] },
  },
};

export default meta;
type Story = StoryObj<typeof CTASection>;

export const Dark: Story = {
  args: {
    heading: 'Ready to launch a real-time bank on IDMB?',
    subheading:
      'Open a free sandbox, post your first ledger entry in minutes, or talk to our banking team about a production deployment.',
    primary:   { label: 'Open the sandbox',     href: '/developers/sandbox' },
    secondary: { label: 'Talk to banking team', href: 'mailto:sales@idmb.com' },
    tone: 'dark',
  },
};

export const Light: Story = {
  args: {
    heading: 'Connect IDMB Data to your warehouse in minutes',
    subheading: 'Snowflake, BigQuery, Databricks or your own object store.',
    primary:   { label: 'Read the data docs',     href: '/developers/docs' },
    secondary: { label: 'Talk to the data team',  href: 'mailto:sales@idmb.com' },
    tone: 'light',
  },
};

export const PrimaryOnly: Story = {
  args: {
    heading: 'Pass your next regulator return on autopilot',
    primary:   { label: 'Talk to compliance team', href: 'mailto:sales@idmb.com' },
    tone: 'dark',
  },
};
