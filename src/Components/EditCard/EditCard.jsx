import React, { useState, useEffect } from 'react';
import axios from 'axios';

const EditCard = (props) => {
    
    const [word, setWord] = useState(`${props.collectionID.word}`)
    const [definition, setDefinition] = useState(`${props.collectionID.definition}`)

    function handleSubmit(event) {
        event.preventDefault()
        let editedCard = {
            word: word,
            definition: definition
        }
        console.log(editedCard)
        console.log(props.collectionID)
        console.log(cardID)
    }



    let cardID = props.cards.id
    

    return ( 
        <form onSubmit={handleSubmit}>
        <div>
            <label>Word</label>
            <input type='text' value={word} onChange= {(event) => setWord(event.target.value)}></input>
            <label>Definition</label>
            <input type='text' value={definition} onChange= {(event) => setDefinition(event.target.value)}></input>
        </div>
        <div>
            <button type='submit' className='btn btn-dark'>Change</button>
        </div>
    </form>
     );
}
 
export default EditCard;