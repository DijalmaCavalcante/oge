import { BrowserRouter, Routes, Route } from 'react-router-dom'
import CidadeDorme from '@games/cidadedorme'
import Home from './home'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cidade-dorme" element={<CidadeDorme />} />
      </Routes>
    </BrowserRouter>
  )
}
