import React from "react";
import './Home.css';
import Photo from "../Common/Photo";
import Description from "./Description/Description";

function Home() {
    return (
        <div className="home_container">
            <div className="home">
                <Description />
            </div>
            <section>   
                <div className="short_description">
                    <div className="photo">
                    <Photo />
                    </div>
                    <div className="content">
                        <h1>
                            Hey there,
                        </h1>
                        <p>
                            I am Gowtham Namuru - Senior iOS Engineer.
                            I always look for projects that challenge me and take me out of my comfort zone.
                        </p>
                        <a href="#" className="resume_button">See my resume</a>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Home;