import React, { useState } from 'react';
import './Projects.css';

function Projects() {
    const [projectOpen, setProjectOpen] = useState(false);

    return (
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
    )
}

export default Projects;