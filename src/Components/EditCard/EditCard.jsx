import React, { useState, useEffect } from 'react';
// import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const EditCard = (props) => {
    
    // const [word, setWord] = useState(`${props.collectionID.word}`)
    // const [definition, setDefinition] = useState(`${props.collectionID.definition}`)
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    // function handleSubmit(event) {
    //     event.preventDefault()
    //     let editedCard = {
    //         word: word,
    //         definition: definition
    //     }
    //     console.log(editedCard)
    //     console.log(props.collectionID)
    //     console.log(cardID)
    // }

    

    // let cardID = props.cards.id
    

    return (
        <>
        <Button variant="primary" onClick={handleShow}>
          Launch demo modal
        </Button>
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleClose}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
}
 
export default EditCard;






// <form onSubmit={handleSubmit}>
// <div>
//     <label>Word</label>
//     <input type='text' value={word} onChange= {(event) => setWord(event.target.value)}></input>
//     <label>Definition</label>
//     <input type='text' value={definition} onChange= {(event) => setDefinition(event.target.value)}></input>
// </div>
// <div>
//     <button type='submit' className='btn btn-dark'>Change</button>
// </div>
// </form>