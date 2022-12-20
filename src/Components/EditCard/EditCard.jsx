import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form'

const EditCard = (props) => {
    
    const [id, setID] = useState('')
    const [word, setWord] = useState('')
    const [definition, setDefinition] = useState('')
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    function handleSubmit(){
        axios.put(`http://127.0.0.1:8000/api/collections/${props.collectionID}/cards/${id}/`)
    }

    

    useEffect(() => {
        setID(props.card?.id)
        setWord(props.card?.word)
        setDefinition(props.card?.definition)
    }, [props.card])


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
                  defaultValue={word}
                  autoFocus
                />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Label>Definition</Form.Label>
                <Form.Control as="textarea" defaultValue={definition} rows={3} />
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="light" onClick={handleClose}>
              Close
            </Button>
            <Button variant="dark" onClick={handleSubmit}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    )
}
 
export default EditCard;

