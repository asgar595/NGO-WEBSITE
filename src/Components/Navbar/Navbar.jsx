import React, { useState,useEffect } from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom';


const Navbar = () => {
  const[sticky,usesticky]=useState(false);
  useEffect(()=>{
    window.addEventListener('scroll',()=>{
      window.scrollY>600?usesticky(true):usesticky(false);
    })
  })

  return (
   <nav className={`container ${sticky?'dark-nav':""}`}>
    <img src="https://thumbs.dreamstime.com/b/ngo-organization-black-glyph-icon-non-profit-community-pictogram-web-page-mobile-app-promo-vector-illustration-193374989.jpg"className='logo'/>
    
    <ul>
        <li>home</li>
        <li>About us</li>
        <li>Programm</li>
        <li><button className='btn'>Contact us</button></li>
    </ul>
   </nav>
  )
}

export default Navbar
