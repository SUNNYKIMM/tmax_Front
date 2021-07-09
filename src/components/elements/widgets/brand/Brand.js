import React, {useState, useEffect} from 'react';

export default function Brand(){

    const [newBrand, setNewBrand] = useState([]);
    
    useEffect (() => {   //링크를 호출하고 
        fetch("http://localhost:3002/brand")
        .then(res => {   //json으로 변경해
            return res.json(); 
        })
        .then(data =>{   //data를 웹에 출력하는 작업
            setNewBrand(data);
        })
        //.catch(error => )
    },[]);

    const brandList = newBrand.map(item => (
        <div className="col-12 col-md-3" key={item.id}>
            <div className="row">
                <div className="col-12 col-sm-4 brandImg"><i className={item.img}></i></div>
                <div className="col-12 col-sm-auto">
                    <p className="brandTitle">{item.name}</p>
                    <p className="brandTxt">{item.content}</p>
                </div>
            </div>
        </div> 
    )).slice(0,4)

    return(
        <section id="brand">
            <div className="container">
                <div className="row">
                    {brandList}
                </div> 
            </div> 
        </section> 
    );
}