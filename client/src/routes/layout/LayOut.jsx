import React from 'react'
import './Layout.css'
import Navbar from '../../components/navbar/Navbar'
import Footer from '../../components/footer/Footer'
import { Outlet } from 'react-router-dom'

function LayOut() {
  return (
    <div className="layout">
        <div className="navbar">
            <Navbar/>
        </div>
        <div className="content">
            <Outlet/>
        </div>
    </div>
  )
}

export default LayOut