import React from 'react';
import Menu from './Menu';
import './Header.css' 

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
      <img src="logo.jpg" alt="logo"  style={{width:"50%",height:"50%"}}/> 
      <h1>Royal Rasoi</h1>
      <div style={{ textAlign: 'left' }}></div>
       
      </div>
      <nav>
        <ul>
          
         
          
          <li><a href="#about">About</a></li>
          <li><a href="#contact">Contact</a></li>
          <li><a href="#order">order</a></li>
           <Menu />
          
        </ul>
      </nav>
    </header>
  );
}

export default Header;
