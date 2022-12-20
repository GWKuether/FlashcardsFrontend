import Card from "../Card/Card";

const CardViewer = (props) => {  
    
    return (
        <div>
            <div>
                <Card  cards={props.cards} getCardID={props.getCardID} displayDeleteToggle={props.displayDeleteToggle}/>
            </div>
        </div>
     );
}
 
export default CardViewer;