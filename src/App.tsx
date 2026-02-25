import './App.css'
import RemoteButton from "./components/RemoteButton.tsx";

function App() {
  return (
    <>
      <h1>You will se the same button on the second app</h1>
      <div className="card">
        <RemoteButton/>
      </div>
    </>
  )
}

export default App
