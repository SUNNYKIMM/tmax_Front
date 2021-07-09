import React, { Fragment, useState, useEffect } from 'react';
import Header from "../../layout/Header";
import Footer from "../../layout/Footer";
import Middle from '../../elements/widgets/middle/Middle';
import CartTable from '../../elements/widgets/carttable/CartTable';
export default function Compare() {

    
    return (
        <Fragment>
            <Header/>
            <Middle
                Name = "CART"
            />
            <CartTable/>
            <Footer/>
        </Fragment>
    );
}


