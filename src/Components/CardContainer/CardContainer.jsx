import React, { useState } from 'react';
import CardViewer from "../CardViewer/CardViewer";
import AddCard from "../AddCard/AddCard";

const CardContainer = (props) => {

    const [displayToggle, setDisplayToggle] = useState(true)



    return ( 
        <div className="border">
            <button onClick={() => setDisplayToggle(!displayToggle)}>Add</button>
            {displayToggle ? <CardViewer cards={props.cards}/> : <AddCard cardID={props.cardID}/>}
            
        </div>
     );
}
 
export default CardContainer;