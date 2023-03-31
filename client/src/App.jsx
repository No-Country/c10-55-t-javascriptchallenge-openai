//import { ChakraProvider } from '@chakra-ui/react'
import { Button, ButtonGroup } from '@chakra-ui/react'

import Nav from "../src/Components/Nav"
import Home from "../src/Components/Home"
import Footer from "../src/Components/Footer"

export default function App() {
  return (
    <div>
      <Nav />
      <Home />
      <Footer />
    </div>
  )
}