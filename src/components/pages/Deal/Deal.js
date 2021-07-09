import React, {useState} from 'react';
import Title from "../../elements/ui/Title";
import ProductView from '../../elements/widgets/product/ProductView';
import TabMenu from "../../elements/ui/TabMenu";
import { Collapse } from '@material-ui/core';

export default function Deal(){

    const [ categoryName , setCategoryName ] = useState("fashion");
    console.log(categoryName);

    const sliceNumber = 12;
    const columnNumber = 3;


    return(
        <section id="deal">
            <div className="container">
                <Title title = "The official store of the French team"/>
                <TabMenu
                    setCategoryName = {setCategoryName}
                    categoryName = {categoryName}
                />
                <ProductView
                    categoryName = {categoryName}
                    sliceNumber = {sliceNumber}
                    columnNumber = {columnNumber}    
                />
            </div> 
        </section>
    );
}