import React from "react";
import './PortfolioSection.css';
import PortfolioItem from "./PortfolioItem";
import paypal from '../../assets/images/paypal.jpeg';

function PortfolioSection() {

    const portfolioData = [
        {
          image: paypal,
          title: 'Lounge OS (American Express)',
          description: 'Senior iOS Developer<br />EPAM Systems, 2024-2025',
        },
        {
          image: paypal,
          title: 'PayPal',
          description: 'Worked on Login module<br />Altimetrik, 2023-2024',
        },
        {
          image: paypal,
          title: 'Kaiser Permanente',
          description: 'Senior iOS Developer<br />Y Media Labs, 2020-2023',
        },
      ];

    return (
        <section className="portfolio_section">
            <div className="portfolio_text">
                <h1>Check out <br />my work</h1>
                <p>
                    From new applications to updates, 
                    I have worked on a variety of projects from across the globe.
                </p>
            </div>
            <div className="portfolio_items">
                {portfolioData.map((item, index) => (
                <PortfolioItem
                    key={index}
                    image={item.image}
                    title={item.title}
                    description={item.description}
                />
        ))}
      </div>
        </section>
    )
}

export default PortfolioSection;