import React, { useState } from 'react';


const Card = (props) => {
    
    const [displayToggle, setDisplayToggle] = useState(false)
 
    return (
        <div>
            {props.cards.map((card) =>{
                return (
                    <div>
                        <h2 onClick={() => setDisplayToggle(!displayToggle)}>{card.word}</h2>
                        {displayToggle ? <h2>{card.word}</h2> : <h4>{card.definition}</h4>}
                    </div>
                )
            })}
        </div>
    )
}
 
export default Card;