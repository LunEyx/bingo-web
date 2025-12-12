import type { Meta, StoryObj } from '@storybook/react-vite'
import RecentDrawnList from '@/components/display/RecentDrawnList'

const meta = {
  component: RecentDrawnList,
  tags: ['autodocs'],
} satisfies Meta<typeof RecentDrawnList>

export default meta

type Story = StoryObj<typeof RecentDrawnList>

export const Default: Story = {
  args: {
    recentNumbers: [5, 12, 23, 34, 45],
  },
}
