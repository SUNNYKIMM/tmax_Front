import React, {useState} from 'react';

export default function Subject(props){

    const[good, setGood] = useState(0);
    const handleClick=()=>{
        setGood(good+1);
    }
    
    return(
        <header>
            <h1>React App</h1>
            <h2> {props.name} <span onClick={handleClick}>좋아요 </span>{good}</h2>
            <h2>Tmax {props.address}</h2>
            <p>Phone Number : {props.children}</p>
        </header>
    );
}