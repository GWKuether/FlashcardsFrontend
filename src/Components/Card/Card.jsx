import React, { useState } from 'react';


const Card = (props) => {
    
    const [displayToggle, setDisplayToggle] = useState(true)
    const [index, setIndex] = useState(0)

    


    function handlePrevious(){
        if (index < 0){
            setIndex(props.cards[-1].id)
            console.log(props.cards[index]?.word)
        }
        else{
            setIndex(index - 1)
            setDisplayToggle(true)
        }

    }
    
    
    function handleNext(){
        if (props.cards[index] === undefined){
            setIndex(0)
            setDisplayToggle(true)
        }
        else{
            setIndex(index + 1)
            console.log(props.cards[index]?.word)
            setDisplayToggle(true)
        }

    }
    
 
    return (
        <div>
            <div>
                <div onClick={() => setDisplayToggle(!displayToggle)}>
                {displayToggle ? <h2>{props.cards[index]?.word}</h2> : <h4>{props.cards[index]?.definition}</h4>}
                </div>
                <button onClick={() => handlePrevious()}>PREVIOUS</button>
                <button onClick={() => handleNext()}>NEXT</button>
            </div>
        </div>
        )
}
 
export default Card;