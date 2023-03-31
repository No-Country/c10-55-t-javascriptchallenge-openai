//import { ChakraProvider } from '@chakra-ui/react'
import { Button, ButtonGroup } from '@chakra-ui/react'




import Nav from "../src/Components/Nav"
import Home from "../src/Components/Home"


export default function App() {
  return (
    <div >
      <Nav />
      <Home />
      <div className='h-[900px]'></div>
    </div>
  )
}