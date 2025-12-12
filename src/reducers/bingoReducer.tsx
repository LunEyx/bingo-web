import { type BingoAction, type BingoState } from '@/types/bingoTypes'

export const bingoInitialState = {
  isDrawnList: [],
  remainingNumbers: Array.from({ length: 99 }, (_, i) => i + 1),
  recentDrawnNumbers: [],
}

export const bingoReducer = (
  state: BingoState,
  action: BingoAction,
): BingoState => {
  let newIsDrawnList
  let newRemainingNumbers
  let newRecentDrawnNumbers

  switch (action.type) {
    case 'DRAW_NUMBER':
      if (state.isDrawnList[action.payload.number - 1]) {
        return state
      }
      newIsDrawnList = [...state.isDrawnList]
      newIsDrawnList[action.payload.number - 1] = true
      newRemainingNumbers = state.remainingNumbers.filter(
        (num) => num !== action.payload.number,
      )
      newRecentDrawnNumbers = [
        ...state.recentDrawnNumbers,
        action.payload.number,
      ]
      if (newRecentDrawnNumbers.length > 5) {
        newRecentDrawnNumbers.shift()
      }

      return {
        ...state,
        isDrawnList: newIsDrawnList,
        remainingNumbers: newRemainingNumbers,
        recentDrawnNumbers: newRecentDrawnNumbers,
      }
    default:
      return state
  }
}
