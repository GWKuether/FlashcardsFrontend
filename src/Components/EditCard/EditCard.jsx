import React, { useState, useEffect } from 'react';
// import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form'

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
        <Button variant="dark" onClick={handleShow}>
          Edit
        </Button>
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Edit Current Card</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Word</Form.Label>
                <Form.Control
                  type="textarea"
                  placeholder='does this work at all?'
                  autoFocus
                />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Label>Definition</Form.Label>
                <Form.Control as="textarea" rows={3} />
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="light" onClick={handleClose}>
              Close
            </Button>
            <Button variant="dark" onClick={handleClose}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    )
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