import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Roots from './components/Roots/Roots.jsx'
import Home from './components/Home/Home.jsx'
import Mobiles from './components/Mobiles/Mobiles.jsx'
import Laptops from './components/Laptops/Laptops.jsx'

const router=createBrowserRouter([
     {
       path:'/',
       Component:Roots,
       children:[
         {index:true,Component:Home},
         {path:'/mobiles',Component:Mobiles},
         {path:'laptops',Component:Laptops}
       ]
     }

]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
