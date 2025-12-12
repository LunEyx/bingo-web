import type { Meta, StoryObj } from '@storybook/react-vite'
import DrawButton from '@/components/display/DrawButton'

const meta = {
  component: DrawButton,
  tags: ['autodocs'],
} satisfies Meta<typeof DrawButton>

export default meta

type Story = StoryObj<typeof DrawButton>

export const Default: Story = {
  args: {},
}
