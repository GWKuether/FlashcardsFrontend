import CollectionContainer from "../CollectionContainer/CollectionContainer";
import './Sidebar.css'



const Sidebar = (props) => {
    return (
        <div>
            <h3 className="italics">Collections</h3>
            <CollectionContainer collections={props.collections} retrieveID={props.retrieveID} />
        </div>

     );
}
 
export default Sidebar;