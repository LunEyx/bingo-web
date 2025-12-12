import type { BingoAction } from '@/types/bingoTypes'

export const draw = (number: number): BingoAction => ({
  type: 'DRAW_NUMBER',
  payload: { number },
})
