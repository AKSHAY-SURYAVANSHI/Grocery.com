import React from 'react'
import './Header.css'

const Header = () => {
  return (
    <div className="header">
        <div className="header-contents">
            <h2>Indulge in premium grocery shopping !!!</h2>
            <p>
            Explore our diverse menu featuring a tantalizing selection of culinary delights sourced from 
            the finest ingredients.<br></br>Satisfy your appetite and elevate your dining experience with every mouthwatering order.
            </p>
            <a href="#explore-menu"><button>View Inventory</button></a>
        </div>
    </div>
  )
}

export default Header
