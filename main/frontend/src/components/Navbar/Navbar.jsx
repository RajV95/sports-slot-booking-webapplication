import React from 'react'
import './Navbar.css'
import logo from '../Assets/logo.png'
import { Link } from 'react-router-dom'


const Navbar = () => {
  return (
    <div className='Navbar'>
        <div className="logoImg">
            <img src={logo}/>
        </div>
        <a href="#" className="logoText">IIITDM<br/>Kancheepuram</a>
        <ul className="navList">
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/aboutUs' >About Us</Link></li>
            <li><Link to='/slotbooking'>Slot Booking</Link></li>
            <li><Link to='./profile'>Profile</Link></li>
            <li><a href="#" className="signIn">Sign In</a></li>
        </ul>
    </div>
  )
}

export default Navbar
