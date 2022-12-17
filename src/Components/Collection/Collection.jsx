const Collection = (props) => {
    
    function handleClick(collectionId){
        props.retrieveID(collectionId)
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