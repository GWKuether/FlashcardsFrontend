import React, { useState } from 'react';
import CardViewer from "../CardViewer/CardViewer";
import AddCard from "../AddCard/AddCard";

const CardContainer = (props) => {

    const [displayToggle, setDisplayToggle] = useState(true)



    return (
        <div className="container border">
            <div className="row">
                <div className="col">
                1 of 3
                </div>
                <div className="col">
                    <h6>Cards: {props.cards.length}</h6>
                </div>
                <div className="col">
                    <button onClick={() => setDisplayToggle(!displayToggle)}>Add</button>
                </div>
            </div>
            <div className="row">
                <div className="col">
                1 of 3
                </div>
                <div className="col">
                    {displayToggle ? <CardViewer cards={props.cards}/> : <AddCard cardID={props.cardID}/>}
                </div>
                <div className="col">
                3 of 3
                </div>
            </div>
        </div>
    )
}
 
export default CardContainer;



        // <div className="border">

        // </div>