import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import CardContainer from '../CardContainer/CardContainer';
import { Container,  Row, Col } from 'react-bootstrap';




const Main = (props) => {


    const  [collections, setCollections] = useState([])
    const [cards, setCards] = useState([])
    const [cardID, setCardID] = useState('')
  
    useEffect(() => {
      getAllCollections();
    }, [])
  
    useEffect(() => {
      getCards();
    })
  
    async function getAllCollections(){
      let response = await axios.get("http://127.0.0.1:8000/api/collections/")
      setCollections(response.data)
    }
  

    async function getCards(){
      let response = await axios.get(`http://127.0.0.1:8000/api/collections/${cardID}/cards/`)
      setCards(response.data)
    }

    function retrieveID(cardID){
      console.log(cardID)
      setCardID(cardID)
    }


  





    return (
        <Container fluid>
            <Row>
                <Col>
                  <Sidebar collections={collections} retrieveID={retrieveID}/>
                </Col>
            </Row>
            <Row>
                <Col>
                  <CardContainer cards={cards} />
                </Col>
            </Row>
        </Container>

     );
}
 
export default Main;