import { createContext } from 'react'
import { type BingoDispatch, type BingoState } from '@/types/bingoTypes'

export const BingoContext = createContext<BingoState | undefined>(undefined)
export const BingoDispatchContext = createContext<BingoDispatch | undefined>(
  undefined,
)
