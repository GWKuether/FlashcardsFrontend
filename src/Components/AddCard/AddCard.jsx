import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AddCard = (props) => {

    const [word, setWord] = useState('')
    const [definition, setDefinition] = useState('')

    function handleSubmit(event) {
        event.preventDefault()
        let newCard = {
            word: word,
            definition: definition
        }
        console.log(newCard)
        console.log(props.collectionID)
        addNewCard(newCard)
    }

    useEffect(() => {
        addNewCard();
      }, [])

    async function addNewCard(newCard){
        await axios.post(`http://127.0.0.1:8000/api/collections/${props.collectionID}/cards/`, newCard)
    }


    return ( 
        <form onSubmit={handleSubmit}>
            <div>
                <label>Word</label>
                <input type='text' value={word} onChange= {(event) => setWord(event.target.value)}></input>
                <label>Definition</label>
                <input type='text' value={definition} onChange= {(event) => setDefinition(event.target.value)}></input>
            </div>
            <div>
                <button type='submit' className='btn btn-dark'>Add</button>
            </div>
        </form>
     );
}
 
export default AddCard;