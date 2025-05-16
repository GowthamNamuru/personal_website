import React from "react";
import './Home.css';
import Description from "./Description/Description";

function Home() {
    return (
        <div className="home_container">
            <div className="home">
                <Description />
            </div>
        </div>
    );
}

export default Home;