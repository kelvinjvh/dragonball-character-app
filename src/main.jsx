import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ContextDataProvider } from './Context/DataContext.jsx'

createRoot(document.getElementById('root')).render(
 <ContextDataProvider>
   <StrictMode>
    <App />
  </StrictMode>
 </ContextDataProvider>,
)
