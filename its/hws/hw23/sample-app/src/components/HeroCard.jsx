import React from 'react';

const HeroCard = ({ hero }) => {
    return (
        <div className="hero-card">
            <img src={hero.url} alt={hero.name} className="hero-image" />
            <h2>{hero.name}</h2>
            <p><strong>Альтер-эго:</strong> {hero.stats.alterego}</p>
            <p><strong>Суперсилы:</strong> {hero.stats.superpowers}</p>
            <p><strong>Друзья:</strong> {hero.stats.friends}</p>
            <p><strong>Описание:</strong> {hero.info}</p>
        </div>
    );
};

export default HeroCard;