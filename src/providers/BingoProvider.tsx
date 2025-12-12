import { useReducer } from 'react'
import { BingoContext, BingoDispatchContext } from '@/contexts/BingoContext'
import { bingoInitialState, bingoReducer } from '@/reducers/bingoReducer'

const BingoProvider = (props: { children: React.ReactNode }) => {
  const { children } = props
  const [bingoState, dispatch] = useReducer(bingoReducer, bingoInitialState)

  return (
    <BingoContext value={bingoState}>
      <BingoDispatchContext value={dispatch}>{children}</BingoDispatchContext>
    </BingoContext>
  )
}

export default BingoProvider
