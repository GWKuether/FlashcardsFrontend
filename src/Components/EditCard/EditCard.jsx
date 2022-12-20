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
    <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Edit Card</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                ...
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary">Save changes</button>
                </div>
            </div>
        </div>
    </div>



    //     <form onSubmit={handleSubmit}>
    //     <div>
    //         <label>Word</label>
    //         <input type='text' value={word} onChange= {(event) => setWord(event.target.value)}></input>
    //         <label>Definition</label>
    //         <input type='text' value={definition} onChange= {(event) => setDefinition(event.target.value)}></input>
    //     </div>
    //     <div>
    //         <button type='submit' className='btn btn-dark'>Change</button>
    //     </div>
    // </form>
     );
}
 
export default EditCard;