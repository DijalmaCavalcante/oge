import './index.css'
import './root.css'
import { createRoot } from 'react-dom/client'
import { StrictMode } from 'react'
import Header from './header/header.jsx'
import Gamecard from './gamecard/component.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header />
    <div className="main__container">
      <Gamecard />
    </div>
  </StrictMode>,
)
