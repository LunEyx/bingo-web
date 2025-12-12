import type { Preview } from '@storybook/react-vite'
import BingoProvider from '../src/providers/BingoProvider'

import '../src/index.css'

const preview: Preview = {
  decorators: [
    (Story) => (
      <BingoProvider>
        <Story />
      </BingoProvider>
    ),
  ],
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },

    a11y: {
      // 'todo' - show a11y violations in the test UI only
      // 'error' - fail CI on a11y violations
      // 'off' - skip a11y checks entirely
      test: 'todo',
    },
  },
}

export default preview
