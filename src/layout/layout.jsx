import React from 'react'
import NavbarContainer from '../Components/NavbarBlock/NavbarContainer'
import { Outlet } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'

const layout = () => {
  return (
    <div>
      <Toaster/>
      <NavbarContainer />   
      <Outlet />
    </div>
  )
}

export default layout
