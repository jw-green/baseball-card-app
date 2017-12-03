import React from 'react';
import Name from './Name.js'
import MBTI from './MBTI.js'
import Portrait from './Portrait.js'
import Team from './Team.js'
import Subteam from './Subteam.js'

const CardFront = ({ name, mbti, portrait, subteam, team }) => {
    return (
        <div className="c-card__side">
            <div className="c-card__front-headline">
                <Name name={name}/>
                <MBTI mbti={mbti} />
            </div>
                <Portrait portrait={portrait}/>
            <div className="c-card__front-team">
                <Subteam subteam={subteam}/>
                <Team team={team}/>
            </div>
        </div>
    )
}

export default CardFront