import { useBingoDispatch, useBingoState } from '@/hooks/useBingo'
import { Button } from '../ui'
import { draw } from '@/actions/bingoAction'

const DrawButton = () => {
  const bingoState = useBingoState()
  const dispatch = useBingoDispatch()

  const onClick = () => {
    const newNumber =
      bingoState.remainingNumbers[
        Math.floor(Math.random() * bingoState.remainingNumbers.length)
      ]
    dispatch(draw(newNumber))
  }
  return (
    <Button variant="surface" onClick={onClick}>
      Draw
    </Button>
  )
}

export default DrawButton
