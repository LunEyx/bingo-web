import { Center, Flex } from 'styled-system/jsx'
import BingoCard from './components/bingo/BingoCard'
import DrawnList from './components/display/DrawnList'

const App = () => {
  const isDrawnList = [false]
  const numbers = Array.from({ length: 25 }, (_, i) => i + 1)

  return (
    <Flex flexDir="row">
      <DrawnList isDrawnList={isDrawnList} />
      <Center height="100vh" w="100vw">
        <BingoCard numbers={numbers} />
      </Center>
    </Flex>
  )
}

export default App
