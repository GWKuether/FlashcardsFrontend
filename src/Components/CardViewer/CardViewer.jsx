import Card from "../Card/Card";

const CardViewer = (props) => {  
    
    return (
        <div>
            <div>
                <Card cards={props.cards} getCardID={props.getCardID} />
            </div>
        </div>
     );
}
 
export default CardViewer;