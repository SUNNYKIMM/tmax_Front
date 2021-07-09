import Header from '../../layout/Header';
import Footer from '../../layout/Footer';
import Middle from '../../elements/widgets/middle/Middle';
import WishTable from '../../elements/widgets/wishtable/WishTable';
import { Fragment } from 'react';

export default function Wishlist(){

    return(
        <Fragment>
            <Header/>
            <Middle
                Name = "CART"
            />
            <WishTable />
            <Footer/>
        </Fragment>
    );
}