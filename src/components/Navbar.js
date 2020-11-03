import React, { Component, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { Button } from './Button'
import Login  from '../components/login';
import Logout  from '../components/logout';
import  LoginHooks from '../components/loginhooks';
import LogoutHooks from '../components/logouthooks';

const responseGoogle =response => {
    console.log(response);
    };

function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);
    
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    
    return (
        <>
            <nav className= "navbar">
                <div className="navbar-container">
                   <Link to='/'className='navbar-logo' onClick=
                   {closeMobileMenu}>
                      <img 
                       src={process.env.PUBLIC_URL + "images/daslogo.png"}>

                      </img>
                   </Link>
                   <div className= 'menu-icon' onClick={handleClick}>
                    <i className = {click ? 'fas fa-times' : 'fas fa-bars'}  /> 
                   </div>
    

                   <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                       <li className='nav-item'>
                           <Link to='/UserForms' className='nav-links' onClick={closeMobileMenu}>
                              Add Hours 
                           </Link>
                       </li>
                       <li className='nav-item'>
                           <Link to='/studentProfile ' className='nav-links' onClick={closeMobileMenu}>
                              Student Profile
                           </Link>
                       </li>
                       <Login />
                       <Logout />

                   </ul>
                   
                   
                </div>
            </nav>

        </>
    )
}

export default Navbar




