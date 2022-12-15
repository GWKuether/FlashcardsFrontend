import Collection from "../Collection/Collection";

const CollectionContainer = (props) => {


    return (
        <Collection collections={props.collections} retrieveID={props.retrieveID}/>
     );
}
export default CollectionContainer;