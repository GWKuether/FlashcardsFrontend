import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import CardContainer from '../CardContainer/CardContainer';





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
  

    
    function retrieveID(cardID){
      console.log(cardID)
      setCardID(cardID)
    }



    async function getCards(){
      let response = await axios.get(`http://127.0.0.1:8000/api/collections/${cardID}/cards/`)
      setCards(response.data)
    }


  





    return (
      <div className="container">
        <div className="row">
          <div className="col">
            <Sidebar collections={collections} retrieveID={retrieveID} />
          </div>
        </div>
        <div className='row'>
          <div className='col-3'></div>
          <div className="col-6">
            <CardContainer cards={cards} cardID={cardID} />
          </div>
          <div className="col-3"></div>
        </div>
      </div>


     );
}
 
export default Main;





        // <Container fluid>
        //     <Row>
        //         <Col>
        //           <Sidebar collections={collections} retrieveID={retrieveID}/>
        //         </Col>
        //     </Row>
        //     <Row>
        //         <Col>
        //           <CardContainer cards={cards} />
        //         </Col>
        //     </Row>
        // </Container>
