import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import GifGeneratorApp from './GifGeneratorApp'
import './styles.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GifGeneratorApp />
  </StrictMode>,
)
