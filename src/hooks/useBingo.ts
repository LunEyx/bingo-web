import { BingoDispatchContext, BingoContext } from '@/contexts/BingoContext'
import { useContext } from 'react'

export const useBingoState = () => {
  const context = useContext(BingoContext)

  if (context === undefined) {
    throw new Error('useBingoState must be used within a BingoProvider')
  }

  return context
}

export const useBingoDispatch = () => {
  const context = useContext(BingoDispatchContext)

  if (context === undefined) {
    throw new Error('useBingoDispatch must be used within a BingoProvider')
  }

  return context
}
