import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './home'
import Cidadedorme from './games/cidadedorme'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cidade-dorme" element={<Cidadedorme />} />
      </Routes>
    </BrowserRouter>
  )
}
