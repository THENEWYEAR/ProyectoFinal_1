// eslint-disable-next-line no-unused-vars
import React from 'react';
import './Card.css';

// eslint-disable-next-line react/prop-types
function Card({ image, title, description, buttonText }) {
    return (
        <div className="card">
            <img src={image} alt={title} className="card-image" />
            <div className="card-content">
                <h3 className="card-title">{title}</h3>
                <p className="card-description">{description}</p>
                <button className="card-button">{buttonText} </button>
            </div>
        </div>
    );
}

export default Card;
