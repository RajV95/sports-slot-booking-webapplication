import React from 'react'
import './Hero.css'
import png1 from '../Assets/1.png'
import png2 from '../Assets/2.png'
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <div className="hero">
        <div className="hero-text">
            <h1>Sports Slot <br/>&#160;&#160;Booking</h1>
            <p className="bys">Book your slots now!!</p>
            <Link to='/slotbooking'>Book now</Link>
            <p className="text1">IIITDM Kancheepuram wins the trophy <br/>&#160;&#160;for this year's Inter IIIT Sports Meet</p>
        </div>
        <div className="hero-img">
            <div className="image-container">
                <img src={png1}/>
            </div>
            {/* <div className="image-container">
                <img src={png2}/>
            </div> */}
        </div>
    </div>
  )
}

export default Hero
