import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import CardContainer from '../CardContainer/CardContainer';





const Main = (props) => {


    const  [collections, setCollections] = useState([])
    const [cards, setCards] = useState([])
    const [collectionID, setCollectionID] = useState('')
  
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
  

    
    function retrieveID(collectionID){
      console.log(collectionID)
      setCollectionID(collectionID)
    }



    async function getCards(){
      let response = await axios.get(`http://127.0.0.1:8000/api/collections/${collectionID}/cards/`)
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
            <CardContainer cards={cards} collectionID={collectionID} />
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
