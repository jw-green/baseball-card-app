import React, { Component } from 'react';
import Name from './Name.js'
import MBTI from './MBTI.js'
import Portrait from './Portrait.js'
import Team from './Team.js'

class Card extends Component {
    render() {
        return (
            <div className="c-User_Info">
                <Name/>
                <MBTI/>
                <Portrait/>
                <Team/>
            </div>
        )
    }
}

export default Card