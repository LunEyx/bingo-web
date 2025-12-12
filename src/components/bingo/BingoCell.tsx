import { Center } from 'styled-system/jsx'
import { Card, Text } from '@/components/ui'
import { useBingoState } from '@/hooks/useBingo'

interface BingoCellProps {
  number: number
}

const BingoCell = (props: BingoCellProps) => {
  const { number } = props
  const bingoState = useBingoState()

  return (
    <Card.Root
      w="4rem"
      aspectRatio={1}
      variant={bingoState.isDrawnList[number - 1] ? 'subtle' : 'outline'}
    >
      <Card.Body w="full" h="full" p="0">
        <Center w="full" h="full">
          <Text>{number}</Text>
        </Center>
      </Card.Body>
    </Card.Root>
  )
}

export default BingoCell
