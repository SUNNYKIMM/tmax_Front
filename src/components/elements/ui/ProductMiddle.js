import React, {useState} from 'react';
import {Link} from 'react-router-dom';


export default function ProductMiddle(){
    return(
        <div className="container">
            <div className="section-title text-center mb-50 ">
                <h2>Related Products</h2>
                <p className=""></p>
            </div>
            <div className="product-tab-list pt-30 pb-55 text-center nav nav-pills" role="tablist">
                <div className="nav-item">
                    <a href="#" role="tab" data-rb-event-key="newArrival" tabindex="-1" aria-selected="false" className="nav-link">
                        <h4>New Arrivals</h4>
                    </a>
                </div>
                <div className="nav-item">
                    <a href="#" role="tab" data-rb-event-key="bestSeller" aria-selected="true" className="nav-link active">
                        <h4>Best Sellers</h4>
                    </a>
                </div>
                <div className="nav-item">
                    <a href="#" role="tab" data-rb-event-key="saleItems" tabindex="-1" aria-selected="false" className="nav-link">
                        <h4>Sale Items</h4>
                    </a>
                </div>
            </div>
        </div>
    );
}