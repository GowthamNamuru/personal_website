import React from "react";
import './PortfolioItem.css';

function PortfolioItem({image, title, description}) {
    return (<div className="portfolio_item">
        <img src={image} alt={title} className="portfolio_image" />

        {title && (
            <div className="portfolio_caption">
                <h2>{title}</h2>
                <span dangerouslySetInnerHTML={{__html: description}}></span>
            </div>   
        )}
    </div>
    );
}

export default PortfolioItem;