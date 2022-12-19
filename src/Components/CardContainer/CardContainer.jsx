import React, { useState } from 'react';
import CardViewer from "../CardViewer/CardViewer";
import AddCard from "../AddCard/AddCard";
import DeleteCard from '../DeleteCard/DeleteCard';


const CardContainer = (props) => {

    const [displayAddToggle, setDisplayAddToggle] = useState(true)
    const [displayDeleteToggle, setDisplayDeleteToggle] = useState(true)
    const [cardID, setCardID] = useState('')

    function getCardID(cardID){
        setCardID(cardID)
        console.log(cardID)
    }

    function handleDelete(){
        alert('Do you want to delete this card? If yes, click red Delete Button')
        setDisplayDeleteToggle(!displayDeleteToggle)
    }

    return (
        <div className="container-fluid border">
            <div className="row align-items-start">
                <div className="col">
                    <div>
                        <button onClick={() => handleDelete()}>Delete</button>
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
                    {displayDeleteToggle ? <CardViewer cards={props.cards} getCardID={getCardID} /> : <DeleteCard collectionID={props.collectionID} cards={props.cards} cardID={cardID} />} 

                </div>
                <div className="col">
                3 of 3
                </div>
            </div>
        </div>
    )
}
 
export default CardContainer;



