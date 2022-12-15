const Collection = (props) => {
    
    function handleClick(cardId){
        props.retrieveID(cardId)
    }
    return ( 
        <div>
        {props.collections.map((collection) =>{
            return (
                <h4 onClick={()=>handleClick(collection.id)}>{collection.title}</h4>
            )
        })}
    </div>
    );
}
 
export default Collection;