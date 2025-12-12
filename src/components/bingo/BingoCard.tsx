import { Box, Center } from 'styled-system/jsx'
import { Button, Card } from '@/components/ui'
import BingoCell from './BingoCell'
import { useBingoDispatch, useBingoState } from '@/hooks/useBingo'
import { addNewBingoCard } from '@/actions/bingoAction'

interface BingoCardProps extends Card.RootProps {
  index: number
}

const BingoCard = (props: BingoCardProps) => {
  const { index, ...cardProps } = props
  const bingoState = useBingoState()
  const dispatch = useBingoDispatch()

  const onClick = () => {
    dispatch(addNewBingoCard())
  }

  return (
    <Card.Root
      w="24rem"
      h="50vh"
      minW={{ md: '24rem' }}
      maxW={{ mdDown: '100%' }}
      minH="50vh"
      {...cardProps}
    >
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
          {bingoState.bingoCards.length <= index && (
            <Button
              disabled={bingoState.bingoCards.length < index}
              onClick={onClick}
            >
              Add New Card
            </Button>
          )}
          {bingoState.bingoCards.length > index &&
            Array.from({ length: 5 }).map((_, rowIndex) => (
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
                    number={
                      bingoState.bingoCards[index][rowIndex * 5 + colIndex]
                    }
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
