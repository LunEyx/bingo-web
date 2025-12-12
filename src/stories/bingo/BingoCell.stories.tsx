import type { Meta, StoryObj } from '@storybook/react-vite'
import BingoCell from '@/components/bingo/BingoCell'

const meta = {
  component: BingoCell,
  tags: ['autodocs'],
} satisfies Meta<typeof BingoCell>

export default meta

type Story = StoryObj<typeof BingoCell>

export const Default: Story = {
  args: {
    number: 42,
    isFlag: false,
  },
}
