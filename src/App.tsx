import reactLogo from "./assets/react.svg"
import DaisyPreview from "./DaisyPreview"

function App() {
  return (
    <div className="mt-2">
      <div className="flex mx-6">
        <button>
          <img src="/vite.svg" alt="Vite logo" />
        </button>
        <button>
          <img src={reactLogo} alt="React logo" />
        </button>
      </div>
      <h1 className="mx-6">Vite + React + TailwindCSS + DaisyUI</h1>
      <DaisyPreview />
    </div>
  )
}

export default App
