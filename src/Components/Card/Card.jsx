import React, { useEffect, useState } from "react";

const Card = (props) => {
  const [displayToggle, setDisplayToggle] = useState(true);
  const [index, setIndex] = useState(0);

  function handlePrevious() {
    if (index < 0) {
      setIndex(props.cards[-1].id);
      console.log(props.cards[index]?.word);
    } else {
      setIndex(index - 1);
      setDisplayToggle(true);
    }
  }

  function handleNext() {
    if (props.cards[index] === undefined) {
      setIndex(0);
      setDisplayToggle(true);
    } else {
      setIndex(index + 1);
      console.log(props.cards[index]?.word);
      setDisplayToggle(true);
    }
  }

  function RetrieveCardID(cardID) {
    console.log(cardID)
    props.getCardID(cardID)
  }

  useEffect(() => {
    RetrieveCardID(props.cards[index]?.id);
  },[props.cards[index]?.id])


  return (
    <div>
      <div>
        <div onClick={() => setDisplayToggle(!displayToggle)}>
          {displayToggle ? (
            <h2>{props.cards[index]?.word}</h2>
          ) : (
            <h4>{props.cards[index]?.definition}</h4>
          )}
        </div>
     
          <div>
            <button onClick={() => handlePrevious()}>PREVIOUS</button>
            <button onClick={() => handleNext()}>NEXT</button>
          </div>
    
      </div>
    </div>
  );
};

export default Card;
