import { Fragment,useState } from "react";
import Rating from '../../../ui/Rating';

export default function ProductDetailRightTop({data}) {
    
    //console.log(data.rating);
    return (
        <Fragment>
            <h2>{data.name}</h2>
            <div className="product-details-price">
                <span>{data.price}$</span>
            </div>
            <div className="pro-details-rating-wrap">
                <Rating 
                    ratingValue = {data.rating}
                />
            </div>
            <div className="pro-details-list">
                <p>{data.shortDescription}</p>
            </div>
        </Fragment>
    );
}