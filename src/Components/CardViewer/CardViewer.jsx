import { Card } from "react-bootstrap";


const CardViewer = (props) => {
    return ( 
        <div>
            <Card cards={props.cards} />
        </div>
     );
}
 
export default CardViewer;