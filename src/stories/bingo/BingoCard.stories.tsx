import type { Meta, StoryObj } from '@storybook/react-vite'
import BingoCard from '@/components/bingo/BingoCard'

const meta = {
  component: BingoCard,
  tags: ['autodocs'],
} satisfies Meta<typeof BingoCard>

export default meta

type Story = StoryObj<typeof BingoCard>

export const Default: Story = {}
