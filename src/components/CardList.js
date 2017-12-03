import React from 'react';
import Card from './Card.js';
import '../styles/cardList.css';

const CardList = ({ list, filter }) => {
    const cardList = Object.keys(list)
                    .map(key => 
                        <Card 
                            key={list[key].name} 
                            name={list[key].name}
                            mbti={list[key].mbti}
                            portrait={list[key].portrait}
                            team={list[key].team}
                            subteam={list[key].subteam}
                        />
                    )
                    .filter(item => {
                        if (filter) {
                            return (
                                item.props.name.toLowerCase()
                                .includes(filter.toLowerCase())
                            )
                        }
                        return item
                    })
    return <div className="c-cardList">{cardList}</div>
}

export default CardList