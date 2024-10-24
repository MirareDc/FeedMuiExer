import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

import { ThemeProvider } from '@emotion/react'
import { theme } from './theme.js'

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <App />
  </StrictMode>,
)
