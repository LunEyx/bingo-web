import type { BingoAction } from '@/types/bingoTypes'

export const draw = (number: number): BingoAction => ({
  type: 'DRAW_NUMBER',
  payload: { number },
})

export const reset = (): BingoAction => ({
  type: 'RESET_GAME',
})

export const addNewBingoCard = (): BingoAction => ({
  type: 'ADD_NEW_BINGO_CARD',
})
