import { Box, Center } from 'styled-system/jsx'
import { Card } from '@/components/ui'
import BingoCell from './BingoCell'

interface BingoCardProps {
  numbers: number[]
}

const BingoCard = (props: BingoCardProps) => {
  const { numbers } = props

  return (
    <Card.Root w="24rem">
      <Card.Header>
        <Card.Title>Bingo Card</Card.Title>
        <Card.Description>A simple bingo card.</Card.Description>
      </Card.Header>
      <Card.Body>
        <Center
          w="full"
          h="full"
          display="flex"
          flexWrap="wrap"
          justifyContent="center"
          alignItems="center"
        >
          {Array.from({ length: 5 }).map((_, rowIndex) => (
            <Box
              key={rowIndex}
              w="full"
              display="flex"
              justifyContent="center"
              gap={2}
              pb={2}
            >
              {Array.from({ length: 5 }).map((_, colIndex) => (
                <BingoCell
                  key={colIndex}
                  number={numbers[rowIndex * 5 + colIndex]}
                />
              ))}
            </Box>
          ))}
        </Center>
      </Card.Body>
    </Card.Root>
  )
}

export default BingoCard
