import Card from "../Card/Card";

const CardViewer = (props) => {  
    
    return (
        <div>
            <div>
                <Card collectionID={props.collectionID} setCardIndex={props.setCardIndex} cards={props.cards} getCardID={props.getCardID} displayDeleteToggle={props.displayDeleteToggle}/>
            </div>
        </div>
     );
}
 
export default CardViewer;