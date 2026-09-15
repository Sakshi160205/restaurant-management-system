
import React, { useState } from 'react';
import './Navbar.css'; 

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header>
      <nav className="navbar">
       
        <div className="logo">
          <a href="#">Royal Rasoi</a>
        </div>

        
          <li><a href="#home">Home</a></li>
          
          <li><a href="#about">About</a></li>
        
         
        
        
      </nav>
    </header>
  );
};

export default Navbar;
