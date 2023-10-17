import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import All from './components/All'
import { Route,RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import App from './App'
import { githubInfoLoader } from './components/Github/Github'
const router= createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App/>}>
        <Route path='' element={<All.Home/>}/>
        <Route path='about' element={<All.About/>}/>
        <Route path='contact' element={<All.Contact/>}/>
        <Route path='user/:userId' element={<All.User/>} />
        <Route 
        loader={githubInfoLoader}
        path='GitHub' 
        element={<All.Github/>} 
        />
    </Route>
  )
)
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
