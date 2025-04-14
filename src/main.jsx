import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Main from './layout/Main.jsx'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { RouterProvider } from 'react-router-dom'
import router from './router/Router.jsx'
const queryClient = new QueryClient()

createRoot(document.getElementById('root')).render(
  <StrictMode>

     <QueryClientProvider client={queryClient}>
      <RouterProvider router={router}>
    <Main></Main>
    </RouterProvider>
    </QueryClientProvider>
  </StrictMode>,
)
