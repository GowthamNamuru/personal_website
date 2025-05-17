import React from "react";
import './Home.css';
import Photo from "../Common/Photo";
import Description from "./Description/Description";
import HomeShortDescription from "./Description/HomeShortDescription";
import PortfolioSection from "./Portfolio/PortfolioSection";

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
                    <HomeShortDescription />
                </div>
            </section>
            <section>
                <PortfolioSection />
            </section>
        </div>
    );
}

export default Home;