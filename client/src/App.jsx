import { ChakraProvider } from '@chakra-ui/react'
import { Button, ButtonGroup } from '@chakra-ui/react'



export default function App() {
  return (
    <ChakraProvider>

      <h1 className="text-3xl font-bold underline bg-slate-600">Hola</h1>
      <Button colorScheme='blue' className='underline'>Button</Button>

    </ChakraProvider>
  )
}