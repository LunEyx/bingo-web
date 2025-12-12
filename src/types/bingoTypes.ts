export interface BingoState {
  isDrawnList: boolean[]
  remainingNumbers: number[]
  recentDrawnNumbers: number[]
}
export type BingoAction = { type: 'DRAW_NUMBER'; payload: { number: number } }
export type BingoDispatch = (action: BingoAction) => void
