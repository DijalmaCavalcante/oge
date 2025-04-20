import { Routes, Route } from 'react-router-dom'
import GameList from './gamelist/component.jsx'
import CidadeDormePage from './gamepages/cidade-dorme/component.jsx'

function App() {
  return (
    <>
      <div className="main__container">
        <Routes>
          <Route path="/" element={<GameList />} />
          <Route path="/gamepages/cidade-dorme" element={<CidadeDormePage />} />
        </Routes>
      </div>
    </>
  )
}

export default App
