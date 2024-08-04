import React from 'react';
import './OptionsCard.css';

const OptionsCard = () => {
    const options = [
        { name: 'Goals', icon: 'aim.png', arrow: 'arrow-button.png' },
        { name: 'Popular Dishes', icon: 'serving-dish.png', arrow: 'arrow-button.png' },
        { name: 'Menus', icon: 'junk-food.png', arrow: 'arrow-button.png' }
    ];

    return (
        <div className="options-card">
            <h2>Options</h2>
            {options.map((option, index) => (
                <div className="option" key={index}>
                    <div className="icon-container">
                        <img src={option.icon} alt={`${option.name} icon`} className="option-icon" />
                    </div>
                    <span>{option.name}</span>
                    <img src={option.arrow} alt="arrow" className="option-arrow" />
                </div>
            ))}
        </div> 
    );
};

export default OptionsCard;
