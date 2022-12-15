import CardViewer from "../CardViewer/CardViewer";


const CardContainer = (props) => {
    return ( 
        <div>
            <CardViewer cards={props.cards}/>
        </div>
     );
}
 
export default CardContainer;