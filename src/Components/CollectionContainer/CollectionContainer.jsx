import Collection from "../Collection/Collection";

const CollectionContainer = (props) => {

    function handleClick(cardId){
        console.log(cardId)
    }

    return (
        <div>
            {props.collections.map((collection) =>{
                return (
                   
                    <h4 onClick={()=>handleClick(collection.id)}>{collection.title}</h4>
                    
           
                )
            })}
        </div>

        
        // <Collection />
     );
}
 
export default CollectionContainer;