import DropdownMenu from "./DropdownMenu"
import reactLogo from "./assets/react.svg"
import DaisyPreview from "./DaisyPreview"

function App() {
  return (
    <div className="mt-2">
      <div className="mx-6 flex">
        <button>
          <img src="/vite.svg" alt="Vite logo" />
        </button>
        <button>
          <img src={reactLogo} alt="React logo" />
        </button>
      </div>
      <h1 className="mx-6 mb-2">Vite + React + TailwindCSS + DaisyUI</h1>
      <hr />
      <div className="mx-6 my-2">
        <h1>Radix + DaisyUI Example</h1>
        <DropdownMenu />
      </div>
      <hr />
      <DaisyPreview />
    </div>
  )
}

export default App
