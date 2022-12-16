import React, { useState } from 'react';
import Card from "../Card/Card";

const CardViewer = (props) => {
    
    // const [cardCount, setCardCount] = useState(3)
    
    return (
        <div>
            <div>
                <h6>Cards: {props.cards.length}</h6>
            </div> 
            <div>
                <Card cards={props.cards} />
            </div>
        </div>
     );
}
 
export default CardViewer;