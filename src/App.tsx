import { Flex } from 'styled-system/jsx'
import BingoCard from './components/bingo/BingoCard'
import DrawnList from './components/display/DrawnList'
import BingoProvider from './providers/BingoProvider'

const App = () => {
  return (
    <BingoProvider>
      <Flex flexDir="row">
        <DrawnList />
        <Flex flexDir="column" gap="0.5rem">
          <Flex
            flexDir="row"
            flexWrap="wrap"
            gap="0.5rem"
            justifyContent="center"
            alignItems="flex-start"
          >
            <BingoCard flex="49% 0 0" index={0} />
            <BingoCard flex="49% 0 0" index={1} />
          </Flex>
          <Flex
            flexDir="row"
            flexWrap="wrap"
            gap="0.5rem"
            justifyContent="center"
            alignItems="flex-start"
          >
            <BingoCard flex="49% 0 0" index={2} />
            <BingoCard flex="49% 0 0" index={3} />
          </Flex>
        </Flex>
      </Flex>
    </BingoProvider>
  )
}

export default App
