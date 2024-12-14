import React from 'react'
import Navbar from '../shared/Navbar'
import Footer from '../shared/Footer'
import { Outlet } from 'react-router-dom'

const Main = () => {
  return (
    <div>
     <Navbar/>
     <Outlet></Outlet>
     <Footer/>
    </div>
  )
}

export default Main
