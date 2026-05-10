import type { Meta, StoryObj } from '@storybook/react';
import Button from './Button';

const meta: Meta<typeof Button> = {
  title: 'Primitives/Button',
  component: Button,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'IDMB CTA button. Renders as `<Link>` for in-app routes, `<a target="_blank">` for outbound URLs, `<button>` when no href is supplied. The trailing arrow auto-flips to the external variant for outbound URLs.',
      },
    },
  },
  argTypes: {
    variant: { control: 'select', options: ['primary', 'secondary', 'tertiary', 'ghost'] },
    size: { control: 'inline-radio', options: ['md', 'lg'] },
    hideArrow: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    variant: 'primary',
    href: '/banking',
    children: 'Start building on IDMB',
  },
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    href: '/wallets',
    children: 'Open the wallets sandbox',
  },
};

export const Tertiary: Story = {
  args: {
    variant: 'tertiary',
    href: 'mailto:sales@idm-b.com',
    children: 'Talk to sales',
  },
};

export const Ghost: Story = {
  args: {
    variant: 'ghost',
    href: '/data',
    children: 'See how it works',
  },
};

export const Large: Story = {
  args: {
    variant: 'primary',
    size: 'lg',
    href: '/banking',
    children: 'Start building on IDMB',
  },
};

export const ExternalAutoArrow: Story = {
  args: {
    variant: 'primary',
    href: 'https://developers.idm-b.com',
    children: 'Open the developer portal',
  },
  parameters: {
    docs: { description: { story: 'Outbound URLs render with `ArrowUpRight` and `target="_blank"`.' } },
  },
};

export const NoArrow: Story = {
  args: {
    variant: 'primary',
    href: '/banking',
    hideArrow: true,
    children: 'Start building',
  },
};
