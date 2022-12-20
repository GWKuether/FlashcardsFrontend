import './Collection.css'

const Collection = (props) => {
    
    function handleClick(collectionId){
        props.retrieveID(collectionId)
    }
    return ( 
        <div>
        {props.collections.map((collection) =>{
            return (
                <h4 className='collection-border background' onClick={()=>handleClick(collection.id)}>{collection.title}</h4>
            )
        })}
    </div>
    );
}
 
export default Collection;