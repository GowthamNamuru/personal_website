import React from "react";
import './Description.css';

function Description() {
    return (
        <section>
            <div className="description_content">
                <h1>
                    I'm a Senior iOS Engineer with a passion for creating innovative solutions
                    based in <span className="city">Banglore</span>, India.
                </h1>
                <div className="social_icons">
                    {/* linkedIn */}
                    <a href="https://www.linkedin.com/in/gowtham-namuru-3a236b275" target="_blank" rel="noopener noreferrer"> 
                    <i className="fab fa-linkedin"></i>
                    </a>

                    {/* github */}
                    <a href="https://github.com/GowthamNamuru" target="_blank" rel="noopener noreferrer"> 
                    <i className="fa-brands fa-github"></i>
                    </a>

                    {/* medium */}
                    <a href="https://medium.com/@gowtham551" target="_blank" rel="noopener noreferrer"> 
                    <i className="fa-brands fa-medium"></i>
                    </a>
                    
                </div>
            </div>
        </section>
    )
}

export default Description;