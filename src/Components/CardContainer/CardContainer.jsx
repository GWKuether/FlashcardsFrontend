import CardViewer from "../CardViewer/CardViewer";


const CardContainer = (props) => {
    return ( 
        <div>
            <p>hello?</p>
            <CardViewer cards={props.cards}/>
        </div>
     );
}
 
export default CardContainer;