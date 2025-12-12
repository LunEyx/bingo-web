import { Center, Flex } from 'styled-system/jsx'
import BingoCard from './components/bingo/BingoCard'
import DrawnList from './components/display/DrawnList'
import BingoProvider from './providers/BingoProvider'

const App = () => {
  const numbers = Array.from({ length: 25 }, (_, i) => i + 1)

  return (
    <BingoProvider>
      <Flex flexDir="row">
        <DrawnList />
        <Center height="100vh" w="100vw">
          <BingoCard numbers={numbers} />
        </Center>
      </Flex>
    </BingoProvider>
  )
}

export default App
