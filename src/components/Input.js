import React, {useState} from 'react';

export default function Input(){
    const[name, setName] = useState(['SJ']);

    function handleClick(){
        const newName = name ==='SJ' ? 'JS': 'SJ';
        setName(newName);
    };

    function showText(event){
        console.log(event.target.value);
    }

    return(
        <div>
            <h2>Hello</h2>
            <div>
                <h2>{name}</h2>
                <button onClick={handleClick}>Change Name</button>
            </div>
            <div>
                <input type="text" onChange={showText}/>
            </div>
        </div>
    );
}