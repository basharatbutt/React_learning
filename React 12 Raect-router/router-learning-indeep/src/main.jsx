import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './components/Home/Home.jsx'
import Header from './components/Header/Header.jsx'
import About from './components/About/About.jsx'
import Contact from './components/Contact/Contact.jsx'
import Github from './Github/Github.jsx'

const router = createBrowserRouter([
  {
    path:'/',
    element:<App />,
    children: [
      {path:"",
        element:<Home />
      },
      {
        path:"about",
        element:<About />
      },
      {
        path:"contact",
        element:<Contact />
      },
      {
        path:"github",
        element:<Github />
      }

    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
