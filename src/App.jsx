import React from 'react'
import FrontPage from '../Components/FrontPage'
import { Outlet } from 'react-router-dom';

const App = () => {
  return (
    <>
      
      <FrontPage />
      <Outlet />
    
    </>
  )
}

export default App
