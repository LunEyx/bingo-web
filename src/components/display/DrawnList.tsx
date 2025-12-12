import { Divider } from 'styled-system/jsx'
import { Card } from '@/components/ui'
import RecentDrawnList from './RecentDrawnList'
import DrawnBall from './DrawnBall'
import DrawButton from './DrawButton'
import { useBingoState } from '@/hooks/useBingo'

const DrawnList = (props: Card.RootProps) => {
  const { ...cardRootProps } = props
  const bingoState = useBingoState()
  return (
    <Card.Root maxW="24rem" maxH="100vh" overflowY="auto" {...cardRootProps}>
      <Card.Header>
        <DrawButton />
        <RecentDrawnList />
      </Card.Header>
      <Divider />
      <Card.Body
        p={4}
        display="flex"
        flexWrap="wrap"
        flexDir="row"
        justifyContent="left"
        alignItems="center"
      >
        {Array.from({ length: 99 }).map((_, index) => (
          <DrawnBall
            key={index}
            w="20%"
            number={index + 1}
            isDrawn={bingoState.isDrawnList[index]}
          />
        ))}
      </Card.Body>
    </Card.Root>
  )
}

export default DrawnList
