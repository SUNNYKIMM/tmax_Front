import React, {useState} from 'react';

export default function SideCategoryList({data, setCategoryName}) {

    const[check, setCheck] = useState(false)

    const handleCheck = (name) =>{
        setCheck(!check)
        setCategoryName(name)
    }

    return(
        <li>
            <div className="sidebar-widget-list-left">
                <button onClick={()=>handleCheck(data.name)}><span className={check ? "mark" : "checkmark"}></span>{data.name}</button>
            </div>
        </li>
    );
}