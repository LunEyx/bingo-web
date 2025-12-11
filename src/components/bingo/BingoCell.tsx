import { Center } from 'styled-system/jsx'
import { Card, Text } from '@/components/ui'

interface BingoCellProps {
  number: number
}

const BingoCell = (props: BingoCellProps) => {
  const { number } = props

  return (
    <Card.Root w="4rem" h="4rem">
      <Card.Body w="full" h="full" p="0">
        <Center w="full" h="full">
          <Text>{number}</Text>
        </Center>
      </Card.Body>
    </Card.Root>
  )
}

export default BingoCell
