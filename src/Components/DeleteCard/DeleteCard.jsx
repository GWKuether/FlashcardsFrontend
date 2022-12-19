const DeleteCard = (props) => {
    
    function handleSubmit(event){
        console.log(props.cardID)
    }
    
    
    return ( 
        <div>
            <button onClick={handleSubmit} key={props.cardID}>Delete</button>
        </div>

     );
}
 
export default DeleteCard;