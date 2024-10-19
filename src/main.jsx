import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { TareasProvider } from './context/TareasContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <TareasProvider>
      <App />
    </TareasProvider>
  </StrictMode>,
)
