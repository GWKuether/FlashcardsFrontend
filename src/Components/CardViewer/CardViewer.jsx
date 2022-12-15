import Card from "../Card/Card";


const CardViewer = (props) => {
    return ( 
        <div>
            <Card cards={props.cards} />
        </div>
     );
}
 
export default CardViewer;