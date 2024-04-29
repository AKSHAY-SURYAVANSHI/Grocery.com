import React from 'react'
import { assets } from '../../assets/assets'
import './Footer.css'

const Footer = () => {
  return (
    <div className="footer" id='footer'>
        <div className="footer-content">
            <div className="footer-content-left">
                <img className='logo' src={assets.logo} alt=""/>
                <p>
                Welcome to Grocery.com, your one-stop destination for all your grocery needs! With a commitment to 
                quality, convenience, and affordability, we strive to provide the freshest produce, pantry staples, 
                and specialty items. Shop with confidence knowing that your satisfaction is our top priority. Happy 
                shopping and thank you for choosing Grocery.com!
                </p>
                <div className="footer-social-icons">
                <img src={assets.facebook_icon} alt=""/>
                <img src={assets.twitter_icon} alt=""/>
                <img src={assets.linkedin_icon} alt=""/>
                </div>
            </div>
            <div className="footer-content-center">
                <h2>COMPANY</h2>
                <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Delivery</li>
                    <li>Privacy Policy</li>
                </ul>
            </div>
            <div className="footer-content-right">
            <h2>GET IN TOUCH</h2>
                <ul>
                    <li>+91 0123456789</li>
                    <li>abc@gmail.com</li>
                    
                </ul>
            </div>
        </div>
        <hr />
        <p className="footer-copyright">
            Copyright 2024  &copy;  Grocery.com - All Rights Reserved.
            <br />
            Website Owned & operated by AKSHAY SURYAVANSHI.
        </p>
    </div>
  )
}

export default Footer
