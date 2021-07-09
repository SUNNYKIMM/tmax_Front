import ProductDetailRightTop from "./ProductDetailRightTop";
import ProductDetailRightMiddle from "./ProductDetailRightMiddle";
import ProductDetailRightBottom from "./ProductDetailRightBottom";

export default function ProductDetailRight({ productData }) {
    return(
                <div className="col-lg-6 col-md-6">
                    <div className="product-details-content ml-70">
                        <ProductDetailRightTop
                            data = {productData}
                        />
                        <ProductDetailRightMiddle/>
                        <ProductDetailRightBottom/>
                    </div>
                </div>
    );
}