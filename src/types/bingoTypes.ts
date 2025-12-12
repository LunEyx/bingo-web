export interface BingoState {
  isDrawnList: boolean[]
  remainingNumbers: number[]
  recentDrawnNumbers: number[]
  bingoCards: number[][]
}
export type BingoAction =
  | { type: 'DRAW_NUMBER'; payload: { number: number } }
  | { type: 'RESET_GAME' }
  | { type: 'ADD_NEW_BINGO_CARD' }
export type BingoDispatch = (action: BingoAction) => void
