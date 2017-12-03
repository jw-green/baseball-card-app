import React from 'react';
import CardFront from './CardFront.js';
import CardBack from './CardBack.js';
import '../styles/card.css';

const Card = ({ name, mbti, portrait, subteam, team }) => {
    return (
        <div className="c-card__container">
            <div className="c-card">
                <CardFront 
                    name={name} 
                    mbti={mbti}
                    portrait={portrait}
                    team={team}
                    subteam={subteam}
                />
                <CardBack/>
            </div>
        </div>
    )
}

export default Card