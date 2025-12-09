import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
import App from './App.jsx'
import Display2 from './Display2.jsx'
import Display from './useeffect.jsx'
import Display5 from './display5.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Display2 />
    <Display5 />
        {/* <Display/> */}

  </StrictMode>,
)
