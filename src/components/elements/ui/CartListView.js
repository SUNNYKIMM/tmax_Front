import {Link} from 'react-router-dom';
import React, {useState} from 'react';

export default function CartListView({data, setCartData}){

    const process = require('../../../Process.json');
    const [count, setCount]=useState(data.qty);

    const handleCountAdd = () => {
        setCount(count+1);
    }

    const handleCountDec = () => {
        count > 0 ? setCount(count-1) : alert("상품의 개수가 없습니다.");
    }

    const handleDelete = (id) => {
        fetch(`http://${process.IP}:${process.PORT}/cart/${id}`,{
            method: "DELETE"
        }).then(
            alert("삭제되었습니다."),
            fetch(`http://${process.IP}:${process.PORT}/cart`)
            .then(res => {
                return res.json();
            })
            .then(data => {
                setCartData(data);
            })
        )
    }

    return(
        <tr>
            <td className="product-name" style={{textAlign:"center"}}>
                <p>{data.name}</p>
            </td>

            <td className="product-quantity">
                <div className="cart-plus-minus">
                    <button className="dec qtybutton" onClick={()=> handleCountDec()}>-</button>
                    <input className="cart-plus-minus-box" type="text" readonly="" value={count}/>
                    <button className="inc qtybutton" onClick={()=> handleCountAdd()}>+</button>
                </div>
            </td>

            <td className="product-price-cart">
                <span className="amount old">{(data.price * count).toFixed(2)}</span>
                <span className="amount">{(data.price * ((100-data.discount)/100)*count).toFixed(2)}</span>
            </td>
            
            <td className="product-wishlist-cart"><Link to={`/productdetail/${data.id}`}>Select option</Link></td>  
                 
            <td className="product-remove">
                <button onClick={()=>handleDelete(data.id)}><i className="fa fa-times"></i></button>
            </td>
            
        </tr>
    );
}