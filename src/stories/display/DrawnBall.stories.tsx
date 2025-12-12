import type { Meta, StoryObj } from '@storybook/react-vite'
import DrawnBall from '@/components/display/DrawnBall'

const meta = {
  component: DrawnBall,
  tags: ['autodocs'],
} satisfies Meta<typeof DrawnBall>

export default meta

type Story = StoryObj<typeof DrawnBall>

export const Default: Story = {
  args: {
    w: '4rem',
    number: 42,
    isDrawn: true,
  },
}
