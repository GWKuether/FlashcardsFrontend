import CollectionContainer from "../CollectionContainer/CollectionContainer";



const Sidebar = (props) => {
    return (
        <div>
            <h3>Collections</h3>
            <CollectionContainer collections={props.collections} />
        </div>

     );
}
 
export default Sidebar;