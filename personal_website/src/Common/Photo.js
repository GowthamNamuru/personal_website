import React from "react";
import './Photo.css';

function Photo() {
    return (
        <div className="photo_container">
            <img src={require('../assets/images/gowtham_photo.jpg')} alt="Gowtham Namuru" />
        </div>
    );
}

export default Photo;