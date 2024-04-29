import React, { useContext } from 'react';
import { useState } from 'react';
import { assets } from '../../assets/assets';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';
import { StoreContext } from '../../context/StoreContext';

const Navbar = ({ setShowLogin }) => {
  const location = useLocation();
  const [menu, setMenu] = useState('home');
  const { getTotalCartAmount } = useContext(StoreContext);

  return (
    <div className='navbar'>
      <Link to='/'>
        <img src={assets.logo} alt="" className='logo'/>
      </Link>
      <ul className="navbar-menu">
        <Link to='/' onClick={()=>setMenu("home")} className={menu === "home"?"active":""}>home</Link>
        {location.pathname !== '/Cart'&& location.pathname !== '/order' && (
          <a href='#explore-menu' onClick={()=>setMenu("inventory")} className={menu === "inventory"?"active":""}>inventory</a>
        )}
        <a href='#footer' onClick={()=>setMenu("contact-us")} className={menu === "contact-us"?"active":""}>contact us</a>
      </ul>
      <div className="navbar-right">
        <div className="navbar-search-icon">
          <Link to='/Cart'>
            <img src={assets.basket_icon} alt=""/>
          </Link>
          <div className={getTotalCartAmount()===0?"":"dot"}></div>
        </div>
        <button onClick={()=>setShowLogin(true)}>sign in</button>
      </div>
    </div>
  );
};

export default Navbar;

