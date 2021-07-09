import React, { Fragment, useState, useEffect } from 'react';
import Header from "../../layout/Header";
import Footer from "../../layout/Footer";
import Bread from "../../elements/ui/Bread";
import ProductTop from "../../elements/widgets/product/ProductTop/ProductTop";
import ProductMiddle from "../../elements/ui/ProductMiddle";
import { useParams } from 'react-router-dom';

export default function ProductDetail() {

    const { id } = useParams();
    const [ productData , setProductData ] = useState([]);

    const process = require('../../../Process.json');

    useEffect(()=>{
        fetch(`http://${process.IP}:${process.PORT}/product/${id}`)
        .then(res => {
            return res.json();
        })
        .then(data => {
            setProductData(data);
        });
    },[process.IP, process.PORT, id]);

    return (
        <Fragment>
            <Header/>
            <Bread
                productId = {productData.id}
                productName = {productData.name}
                productUrl = {`/productdetail/${productData.id}`}
            />

            <ProductTop
                productData = {productData}
                //productPrice = {productData.price}
                //productRating = {productData.rating}
                //productShortDescription = {productData.shortDescription}
            />

            <ProductMiddle/>

            <Footer/>
        </Fragment>
    );
}


