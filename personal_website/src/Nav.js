import React, { useState } from 'react';
import './Nav.css';

function Nav() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [projectOpen, setProjectOpen] = useState(false);
    return (
        <nav className='navBar'>
          <a href="#home" className='logo'>Gowtham</a>

          <div className= {`menu ${menuOpen ? 'open' : ''}`}>
            <a href="#about">About</a>

            <div 
            className="projects_dropdown"
            onClick={() => setProjectOpen(!projectOpen)}
                onMouseEnter={() => setProjectOpen(true)}
                onMouseLeave={() => setProjectOpen(false)}
            >

              <a href="#projects">Projects</a>
              <span className={`dropdown_icon ${projectOpen ? 'rotate' : ''}`}> ▾</span>
              <div className={`projects_dropdown_content ${projectOpen ? 'show' : ''}`}>
                <a href="#project1">American Express</a>
                <a href="#project2">PayPal</a>
                <a href="#project3">Kaiser Permanente</a>
                <a href="#project3">SportsMe</a>
                <a href="#project3">AppLogz(Private SDK)</a>
                <a href="#project3">View All</a>
              </div>
            </div>
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