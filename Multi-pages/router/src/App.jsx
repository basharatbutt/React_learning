import './App.css'
import Navbar from './components/Navbar'
import Login from './components/Login';
import Home from './components/Home';
import About from './components/About';
import { createBrowserRouter,RouterProvider  } from "react-router-dom";

function App() {
      const router = createBrowserRouter([
        {path: "/home",
          element:<><Navbar/><Home/></>
        },
        {
          path: "/login",
          element:<><Navbar/><Login/></>
        },
        {
          path: "/about",
          element:<><Navbar/><About/></>
        },
    ])

  return (
    <>
     
      <RouterProvider router={router} />
    </>
  )
}

export default App
