import { useState } from 'react'
import reactLogo from './assets/react.svg'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='p-6 bg-amber-50'>
      <div className='flex'>
        <button>
          <img src="/vite.svg" alt="Vite logo" />
        </button>
        <button>
          <img src={reactLogo} alt="React logo" />
        </button>
      </div>
      <h1>Vite + React + TailwindCSS</h1>
      <div className="text-emerald-800">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
    </div>
  )
}

export default App
