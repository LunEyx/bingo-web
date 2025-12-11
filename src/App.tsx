import { Center } from 'styled-system/jsx'
import BingoCard from './components/bingo/BingoCard'

const App = () => {
  const numbers = Array.from({ length: 25 }, (_, i) => i + 1)

  return (
    <Center height="100vh" w="100vw">
      <BingoCard numbers={numbers} />
    </Center>
  )
}

export default App
