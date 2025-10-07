import { StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Roots from './components/Roots/Roots.jsx'
import Home from './components/Home/Home.jsx'
import Mobiles from './components/Mobiles/Mobiles.jsx'
import Laptops from './components/Laptops/Laptops.jsx'
import Users from './components/Users/Users.jsx'
import Users2 from './components/Users2/Users2.jsx'
import ShowDetails from './components/ShowDetails/ShowDetails.jsx'
import Posts from './components/Posts/Posts.jsx'
import PostDetails from './components/PostDetails/PostDetails.jsx'

const userPromise=fetch('https://jsonplaceholder.typicode.com/users')
             .then(res=>res.json());

const router=createBrowserRouter([
     {
       path:'/',
       Component:Roots,
       children:[
         {index:true,Component:Home},
         {path:'/mobiles',Component:Mobiles},
         {path:'laptops',Component:Laptops},
         {
          path:'users',
          loader:()=>fetch('https://jsonplaceholder.typicode.com/users'),
          Component:Users
          },
          {
            path:'users2',
            element:<Suspense fallback={<span>Loading.....</span>}>
                <Users2 userPromise={userPromise}></Users2>
            </Suspense>
          },
          {
               path:'users/:userId',
               loader: ({ params }) => fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`),
               Component:ShowDetails
          },
          {
            path:'posts',
            loader:()=>fetch('https://jsonplaceholder.typicode.com/posts'),
            Component:Posts
          },
          {
            path:'posts/:postId',
            //loader: ({ params }) => fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`),
             loader: ({ params }) => fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`),
            Component:PostDetails
          }
       ]
     }

]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
