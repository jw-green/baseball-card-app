import React from 'react';
import Name from './Name.js'
import MBTI from './MBTI.js'
import Portrait from './Portrait.js'
import Team from './Team.js'
import Subteam from './Subteam.js'

const Card = ({ name, mbti, portrait, subteam, team }) => {
    return (
        <div className="c-card">
            <Name name={name}/>
            <MBTI mbti={mbti} />
            <Portrait portrait={portrait}/>
            <Subteam subteam={subteam}/>
            <Team team={team}/>
        </div>
    )
}

export default Card