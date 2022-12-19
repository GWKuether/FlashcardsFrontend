import axios from "axios";

const DeleteCard = (props) => {
    
    function handleSubmit(event){
        console.log(props.cardID)
        console.log(props.collectionID)
        axios.delete(`http://127.0.0.1:8000/api/collections/${props.collectionID}/cards/${props.cardID}/`)
    }
    
    
    return ( 
        <div>
            <button onClick={handleSubmit} >Delete</button>
        </div>

     );
}
 
export default DeleteCard;