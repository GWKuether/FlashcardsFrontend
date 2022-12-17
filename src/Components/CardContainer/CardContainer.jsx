import React, { useState } from 'react';
import CardViewer from "../CardViewer/CardViewer";
import AddCard from "../AddCard/AddCard";
import EditCard from '../EditCard/EditCard';

const CardContainer = (props) => {

    const [displayAddToggle, setDisplayAddToggle] = useState(true)
    const [displayEditToggle, setDisplayEditToggle] = useState(true)



    return (
        <div className="container-fluid border">
            <div className="row align-items-start">
                <div className="col">
                    <div>
                        <button onClick={() => setDisplayEditToggle(!displayEditToggle)}>Edit</button>
                    </div>
                </div>
                <div className="col">
                    <h6>Cards: {props.cards.length}</h6>
                </div>
                <div className="col">
                    <div>
                        <button onClick={() => setDisplayAddToggle(!displayAddToggle)}>Add</button>
                    </div>

                </div>
            </div>
            <div className="row align-items-end">
                <div className="col">
                1 of 3
                </div>
                <div className="col">
                    {displayAddToggle ? <CardViewer cards={props.cards}/> : <AddCard collectionID={props.collectionID}/>}
                    {displayEditToggle ? <CardViewer cards={props.cards}/> : <EditCard collectionID={props.collectionID} cards={props.cards}/>}
                </div>
                <div className="col">
                3 of 3
                </div>
            </div>
        </div>
    )
}
 
export default CardContainer;



