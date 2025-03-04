import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from './Context/ThemeContext.tsx'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'



// Create a client for the query
const queryclient = new QueryClient()

createRoot(document.getElementById('root')!).render(

  <StrictMode>

    <QueryClientProvider client={queryclient}>

      <ThemeProvider>

        <BrowserRouter>

          <App />

        </BrowserRouter>

      </ThemeProvider>

    </QueryClientProvider>



  </StrictMode >,
)
