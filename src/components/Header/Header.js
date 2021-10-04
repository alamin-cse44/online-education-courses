import React from 'react';
import './Header.css';
import { NavLink } from 'react-router-dom';
import logo from '../../images/online.jpg';

const Header = () => {
    const activeStyle = {
        fontWeight: "bold",
        color: "green"
    }
    return (
        <div>
            <div>
              <img className="online-img" src={logo} alt="" />
            </div>
            <nav className="nave-header">
            <NavLink className="a" activeStyle={activeStyle} to="/home">Home</NavLink>
            
            <NavLink className="a" activeStyle={activeStyle} to="/about">About</NavLink> 
            
            <NavLink className="a" activeStyle={activeStyle} to="/services">Services</NavLink> 
           
            <NavLink className="a" activeStyle={activeStyle} to="/upcoming">Upcoimg Fixture</NavLink> 
            </nav>
        </div>
    );
};

export default Header;