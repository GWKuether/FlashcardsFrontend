import React, { useEffect, useState } from 'react';
import CardViewer from "../CardViewer/CardViewer";
import AddCard from "../AddCard/AddCard";
import DeleteCard from '../DeleteCard/DeleteCard';
import EditCard from '../EditCard/EditCard'
import './CardContainer.css'


const CardContainer = (props) => {

    const [displayAddToggle, setDisplayAddToggle] = useState(true)
    const [displayDeleteToggle, setDisplayDeleteToggle] = useState(true)
    const [cardID, setCardID] = useState('')
    const [cardIndex, setCardIndex] = useState('1')

    function getCardID(cardID){
        setCardID(cardID)
    }

    function getCardIndex(cardIndex){{
        setCardIndex(cardIndex)
    }}


    function handleDelete(){
        alert('Do you want to delete this card? If yes, click red Delete Button')
        setDisplayDeleteToggle(!displayDeleteToggle)
        
    }

    return (
        <div className="box-shadow card-border container-fluid background d-flex flex-column text-center justify-content-between">
            <div className="row ">
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
                    
                </div>
                <div className="col">
                    {displayAddToggle  ? <CardViewer displayButtons={true} getCardID={getCardID} getCardIndex={getCardIndex} cards={props.cards} displayDeleteToggle = {displayDeleteToggle}/> : <AddCard collectionID={props.collectionID}/>}
                    {displayDeleteToggle  ? null : <DeleteCard collectionID={props.collectionID} cards={props.cards} cardID={cardID} />} 
                </div>
                <div className="col">
                    
            </div>
        </div>
    </div>

    )
}
 
export default CardContainer;




