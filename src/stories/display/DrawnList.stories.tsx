import type { Meta, StoryObj } from '@storybook/react-vite'
import DrawnList from '@/components/display/DrawnList'

const meta = {
  component: DrawnList,
  tags: ['autodocs'],
} satisfies Meta<typeof DrawnList>

export default meta

type Story = StoryObj<typeof DrawnList>

export const Default: Story = {}
