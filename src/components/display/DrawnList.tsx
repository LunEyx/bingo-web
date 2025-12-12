import { Card } from '@/components/ui'
import DrawnBall from './DrawnBall'
import RecentDrawnList from './RecentDrawnList'
import { Divider } from 'styled-system/jsx'
import DrawButton from './DrawButton'

interface DrawnListProps extends Card.RootProps {
  isDrawnList: boolean[]
}

const DrawnList = (props: DrawnListProps) => {
  const { isDrawnList, ...cardRootProps } = props

  return (
    <Card.Root maxW="24rem" maxH="100vh" overflowY="auto" {...cardRootProps}>
      <Card.Header>
        <DrawButton />
        <RecentDrawnList recentNumbers={[3, 4, 5]} />
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
            isDrawn={isDrawnList[index]}
          />
        ))}
      </Card.Body>
    </Card.Root>
  )
}

export default DrawnList
