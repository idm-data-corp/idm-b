import type { Meta, StoryObj } from '@storybook/react';
import HowItWorks from './HowItWorks';

const steps = [
  { title: 'Open accounts',       desc: 'Customer, merchant or treasury accounts in any supported currency.' },
  { title: 'Post entries',        desc: 'Atomic double-entry posts with idempotency keys and structured metadata.' },
  { title: 'Reserve & settle',    desc: 'Hold funds, expire holds, settle in real time or batch.' },
  { title: 'Stream & reconcile',  desc: 'Subscribe to events; reconcile balances and movements continuously.' },
];

const meta: Meta<typeof HowItWorks> = {
  title: 'Modules/HowItWorks',
  component: HowItWorks,
  tags: ['autodocs'],
  argTypes: {
    variant: { control: 'inline-radio', options: ['rail', 'circles', 'connected'] },
    bg:      { control: 'inline-radio', options: ['default', 'alt'] },
  },
  args: {
    heading: 'How it works',
    intro: 'Four primitives, applied consistently, replace the bulk of a legacy core.',
    steps,
  },
};

export default meta;
type Story = StoryObj<typeof HowItWorks>;

export const Rail: Story      = { args: { variant: 'rail',      bg: 'default' } };
export const Circles: Story   = { args: { variant: 'circles',   bg: 'alt' } };
export const Connected: Story = { args: { variant: 'connected', bg: 'default' } };
