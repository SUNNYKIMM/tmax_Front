import React, { Fragment, useState, useEffect } from 'react';
import Header from "../../layout/Header";
import Footer from "../../layout/Footer";
import Middle from '../../elements/widgets/middle/Middle';
import CompareTable from '../../elements//widgets/comparetable/CompareTable';

export default function Compare() {

    return (
        <Fragment>
            <Header/>
            <Middle
                Name = "COMPARE"
            />
            <CompareTable/>

            <Footer/>
        </Fragment>
    );
}


