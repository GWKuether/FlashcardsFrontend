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
      setCollectionID(collectionID)
    }



    async function getCards(){
      let response = await axios.get(`http://127.0.0.1:8000/api/collections/${collectionID}/cards/`)
      setCards(response.data)
    }


  





    return (
      <div style={{"marginLeft":"2rem","width":"100%"}} className="container main-border">
        <div className="row">
          <div className="col"  style={{position:"absolute", "width":"10%"}}>
            <Sidebar collections={collections} retrieveID={retrieveID} />
          </div>
        </div>
        <div className='row main-background main-border'>
          <div className='col-2'></div>
          <div className="col-8">
            <CardContainer cards={cards} collectionID={collectionID} />
          </div>
          <div className="col-2"></div>
        </div>
      </div>


     );
}
 
export default Main;
