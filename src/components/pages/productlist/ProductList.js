import React, {useState} from 'react';
import Header from "../../layout/Header";
import Footer from "../../layout/Footer";
import Middle from '../../elements/widgets/middle/Middle';
import SideBar from '../../elements/widgets/productlist/SideBar';
import Shop from '../../elements/widgets/productlist/Shop';


export default function ProductList(){

    const[categoryName, setCategoryName] = useState("");
    return(
        <>
        <Header/>
        <Middle
            Name = "SHOP"
        />
        <div className="shop-area pt-95 pb-100">
            <div className="container">
                <div className="row">
                <SideBar
                    setCategoryName = {setCategoryName}
                />
                <Shop
                    categoryName = {categoryName}
                />
                </div>
            </div>
        </div>

        <Footer/>
        </>
    );
}