import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { ChakraProvider } from '@chakra-ui/react'

import { Button, ButtonGroup } from '@chakra-ui/react'


function App() {
  const [count, setCount] = useState(0)

  return (
    <ChakraProvider>
      <div className="App bg-red-600">
        <div>
          <a href="https://vitejs.dev" target="_blank">
            <img src={viteLogo} className="logo" alt="Vite logo" />
          </a>
          <a href="https://reactjs.org" target="_blank">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
        </div>
        <h1>Vite + React</h1>
        <div className="bg-slate-700">
          <h1 class="bg-red-800">
            Tailwind test
          </h1>
          <button onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </button>
          <p>
            Edit <code>src/App.jsx</code> and save to test HMR
          </p>
        </div>
        <p className="read-the-docs">
          Click on the Vite and React logos to learn more
        </p>
      </div>
      <Button colorScheme='blue'>ChakraUI Test button</Button>
    </ChakraProvider>
  )
}

export default App
