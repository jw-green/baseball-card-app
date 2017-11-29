import React, { Component } from 'react';
import Name from './Name.js'
import MBTI from './MBTI.js'
import Portrait from './Portrait.js'
import Team from './Team.js'
import Subteam from './Subteam.js'

class Card extends Component {
    render() {
        return (
            <div className="c-User_Info">
                <Name name="Name"/>
                <MBTI mbti="MBTI" />
                <Portrait portrait="Portrait"/>
                <Subteam subteam="Subteam"/>
                <Team team="Team"/>
            </div>
        )
    }
}

export default Card