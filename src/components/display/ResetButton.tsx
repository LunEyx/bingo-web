import { reset } from '@/actions/bingoAction'
import { useBingoDispatch } from '@/hooks/useBingo'
import { Button } from '../ui'

const ResetButton = () => {
  const dispatch = useBingoDispatch()

  const onClick = () => {
    dispatch(reset())
  }

  return <Button onClick={onClick}>Reset</Button>
}

export default ResetButton
