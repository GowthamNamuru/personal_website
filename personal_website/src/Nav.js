import React, { useState } from 'react';
import './Nav.css';
import Projects from './Projects';

function Nav() {
    const [menuOpen, setMenuOpen] = useState(false);
    return (
        <nav className='navBar'>
          <a href="#home" className='logo'>Gowtham</a>

          <div className= {`menu ${menuOpen ? 'open' : ''}`}>
            <a href="#about">About</a>
            <Projects />
            <a href="#contact">Contact</a>
          </div>

        <div className="hamburger"
         onClick={() => setMenuOpen(!menuOpen)}>
            ☰
        </div>
        </nav>
    )
}

export default Nav;