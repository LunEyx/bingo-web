import { type BingoAction, type BingoState } from '@/types/bingoTypes'

export const bingoInitialState = {
  isDrawnList: [],
  remainingNumbers: Array.from({ length: 99 }, (_, i) => i + 1),
  recentDrawnNumbers: [],
  bingoCards: [],
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
    case 'RESET_GAME':
      return bingoInitialState
    case 'ADD_NEW_BINGO_CARD':
      if (state.bingoCards.length >= 4) {
        return state
      }

      return {
        ...state,
        bingoCards: [
          ...state.bingoCards,
          Array.from({ length: 99 }, (_, i) => i + 1)
            .sort(() => Math.random() - 0.5)
            .slice(0, 25),
        ],
      }

    default:
      return state
  }
}
