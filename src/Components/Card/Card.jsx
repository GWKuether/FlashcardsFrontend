const Card = (props) => {
    return (
        <div>
            {props.cards.map((card) =>{
                return (
                    <h4>{card.definition}</h4>
                )
            })}
        </div>
    )
}
 
export default Card;