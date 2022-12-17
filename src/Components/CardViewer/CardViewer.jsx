import React, { useState } from 'react';
import Card from "../Card/Card";

const CardViewer = (props) => {  
    
    return (
        <div>
            <div>
                <Card cards={props.cards} />
            </div>
        </div>
     );
}
 
export default CardViewer;