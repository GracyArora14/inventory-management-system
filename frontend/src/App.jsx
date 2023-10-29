import { useState } from 'react'
import reactLogo from './assets/react.svg'
<<<<<<< HEAD




function App() {
 
=======
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
>>>>>>> 32759f1162ef5857a3b36f404d7584ac25a63d75

  return (
    <>
      <div>
<<<<<<< HEAD
        Inventory management system 
      </div>
      <div>
        Add whatever u want psoks osnhjd osjnsj 
      </div>
      <div>
        hoja yaar ndjjnd
      </div>
       
    </>   
=======
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
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
    </>
>>>>>>> 32759f1162ef5857a3b36f404d7584ac25a63d75
  )
}

export default App
