import { Fragment, useState, useEffect } from "react";
import {useParams} from 'react-router-dom';
import ColorAndSize from "./ColorAndSize";
import AddBuyAndCart from "./AddBuyAndCart";

export default function ProductDetailRightMiddle(){

    const { id } = useParams();

    const [ varData, setVarData ] = useState([]);
    const [ color, setColor ] = useState("");
    const [ size, setSize ] = useState("");
    var process = require('../../../../../Process.json');

    useEffect(()=>{
        fetch(`http://${process.IP}:${process.PORT}/product/${id}`)
        .then(res => {
            return res.json();
        })
        .then(data => {
            setVarData(data);
            console.log(data.variation);
        });
    },[process.IP, process.PORT, id]);

    return( 
        <Fragment>
            <ColorAndSize
                vData = {varData.variation}
                setColor = {setColor}
                setSize = {setSize}
            />
            <AddBuyAndCart
                data = {varData}
                color = {color}
                size = {size}
            />
        </Fragment>
    );
}