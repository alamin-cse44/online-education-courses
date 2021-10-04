import React from 'react';
import { NavLink } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
    const activeStyle = {
        fontWeight: "bold",
        color: "green"
    }
    return (
        <div className="footer-main">
            <div className="footer-first">
               <h1>Do You Need Help With <br /> Anything?</h1>
               <input type="text" placeholder="Email-us" />
               <button className="subscribe">Subcribe us</button>
            </div>

            <div className="footer-second">
                <h1>Layouts</h1>
            <nav className="nav">
            <NavLink className="af" activeStyle={activeStyle} to="/home">Home</NavLink>
            
            <NavLink className="af" activeStyle={activeStyle} to="/about">About</NavLink> 
            
            <NavLink className="af" activeStyle={activeStyle} to="/services">Services</NavLink> 
           
            <NavLink className="af" activeStyle={activeStyle} to="/upcoming">Upcoimg Fixture</NavLink> 
            </nav>
            </div>
        </div>
    );
};

export default Footer;