import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Menu(){

    
    //const process = require("../../../Process.json");

    const [menuData, setMenuData] = useState([]);

    //console.log(menuData)
    useEffect (() => {   //링크를 호출하고 
        fetch("http://localhost:3002/menu")
        .then(res => {   //json으로 변경해
            return res.json(); 
        })
        .then(data =>{   //data를 웹에 출력하는 작업
            setMenuData(data);
        })
        //.catch(error => )
    },[]);
   
    const menuList = menuData.map(item => {
        if (item.children) {
            return(
                <li key={item.id} className="px-4">
                    <Link to={item.url}>{item.name}<i className="fa fa-angle-down"></i></Link>
                    <ul className="mega-menu">
                        <li>
                            <ul>
                                {item.children.map(subitem => (
                                    <li key={subitem.id}><Link to ={subitem.url}>{subitem.name}</Link></li>
                                ))}
                            </ul>
                        </li>
                    </ul>
                </li>
            );
        }
        else {
            return(
                <li key={item.id} className="px-4"><Link to={item.url}>{item.name}</Link></li>
            );
        }
    });
    
    return(
        <div className="col-xl-8 col-lg-8 d-none d-lg-block">
            <div className=" main-menu  ">
                <nav>
                    <ul>
                        {menuList}
                    </ul>
                </nav>
            </div>
        </div>

    );
}