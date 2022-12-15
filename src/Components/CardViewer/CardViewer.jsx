import Card from "../Card/Card";


const CardViewer = (props) => {
    return ( 
        <div>
            <p>hello?</p>
            <Card cards={props.cards} />
        </div>
     );
}
 
export default CardViewer;