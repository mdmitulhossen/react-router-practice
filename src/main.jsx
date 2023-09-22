import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Root from './Layout/Root.jsx'
import ErrorPage from './Pages/ErrorPage.jsx'
import Contact from './Pages/Contact.jsx'
import { newAction, rootLoader } from './JS/loader.js'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root/>,
    errorElement:<ErrorPage/>,
    loader: rootLoader,
    action:newAction,
    children: [
      {
        path: '/contacts/:id',
        element: <Contact/>
      }
    ]
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
