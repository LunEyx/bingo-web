import { Flex } from 'styled-system/jsx'
import DrawnBall from './DrawnBall'
import { useBingoState } from '@/hooks/useBingo'

const RecentDrawnList = () => {
  const bingoState = useBingoState()
  const recentNumbers = bingoState.recentDrawnNumbers

  return (
    <Flex flexDir="row" gap={2} justifyContent="center" alignItems="center">
      {Array.from({ length: 4 }).map((_, index) => (
        <DrawnBall
          key={index}
          w="15%"
          isDrawn
          opacity={5 - index <= recentNumbers.length ? 1 : 0}
          number={
            5 - index <= recentNumbers.length
              ? recentNumbers[recentNumbers.length - 5 + index]
              : 0
          }
        />
      ))}
      <DrawnBall
        w="40%"
        isDrawn
        number={recentNumbers[recentNumbers.length - 1]}
      />
    </Flex>
  )
}

export default RecentDrawnList
