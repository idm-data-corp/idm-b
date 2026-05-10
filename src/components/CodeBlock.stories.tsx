import type { Meta, StoryObj } from '@storybook/react';
import CodeBlock from './CodeBlock';

const meta: Meta<typeof CodeBlock> = {
  title: 'Modules/CodeBlock',
  component: CodeBlock,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
  },
};

export default meta;
type Story = StoryObj<typeof CodeBlock>;

export const Single: Story = {
  args: {
    language: 'shell',
    label: 'cURL',
    code: `curl https://api.idm-b.com/v1/wallets \\
  -H "Authorization: Bearer $IDMB_API_KEY" \\
  -d '{
    "holder_id": "h_001",
    "currency":  "USD",
    "limits":    { "daily": 200000, "per_txn": 50000 }
  }'`,
  },
};

export const MultiTab: Story = {
  args: {
    tabs: [
      {
        label: 'cURL',
        language: 'shell',
        code: `curl https://api.idm-b.com/v1/ledger/entries \\
  -H "Authorization: Bearer $IDMB_API_KEY" \\
  -H "Idempotency-Key: 9f3c-2025-04-12-001" \\
  -d '{
    "currency": "USD",
    "lines": [
      { "account_id": "acc_customer_001", "amount": -1250 },
      { "account_id": "acc_merchant_99",  "amount":  1250 }
    ]
  }'`,
      },
      {
        label: 'Node.js',
        language: 'ts',
        code: `import { IDMB } from '@idmb/sdk';

const idmb = new IDMB({ apiKey: process.env.IDMB_API_KEY! });

await idmb.ledger.entries.create({
  currency: 'USD',
  idempotencyKey: '9f3c-2025-04-12-001',
  lines: [
    { accountId: 'acc_customer_001', amount: -1250 },
    { accountId: 'acc_merchant_99',  amount:  1250 },
  ],
});`,
      },
      {
        label: 'Go',
        language: 'go',
        code: `entry, err := idmb.Ledger.Entries.Create(ctx, &idmb.LedgerEntryParams{
    Currency: "USD",
    Lines: []idmb.LedgerLine{
        {AccountID: "acc_customer_001", Amount: -1250},
        {AccountID: "acc_merchant_99",  Amount:  1250},
    },
})`,
      },
    ],
  },
};
