import './App.css'
import All from './components/All'
import { Outlet } from 'react-router-dom'
function App() {

  return (
    <>
      <All.Header/>
      <Outlet/>
      <All.Footer/>
    </>
  )
}

export default App
