import React, {useState, useEffect} from 'react';
import CartListView from '../../ui/CartListView';

export default function CartTable() {

    const[cartData, setCartData] = useState([]);

    const process = require('../../../../Process.json');

    useEffect(()=>{
        fetch(`http://${process.IP}:${process.PORT}/cart`)
        .then(res => {
            return res.json();
        })
        .then(data => {
            setCartData(data);
        });
    },[process.IP, process.PORT]);

    return(

        <div className="cart-main-area pt-90 pb-100">
            <div className="container">
                <h3 className="cart-page-title">Your cart items</h3>
                <div className="row">
                    <div className="col-12">
                        <div className="table-content table-responsive cart-table-content">
                            <table>
                                <thead>
                                    <tr>
                                        <th>PRODUCT NAME</th>
                                        <th>QTY</th>
                                        <th>UNIT PRICE</th>
                                        <th>ADD TO CART</th>
                                        <th>ACTION</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        cartData.map((item) => (
                                        <CartListView
                                            data = {item}
                                            setCartData = {setCartData}
                                        />
                                        )).slice(0,15)
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12">
                        <div className="cart-shiping-update-wrapper">
                            <div className="cart-shiping-update">
                                <a href="/shop-grid-standard">Continue Shopping</a>
                            </div>
                            <div className="cart-clear">
                                <button>Clear Shopping Cart</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}