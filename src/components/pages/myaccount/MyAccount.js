import { Fragment } from "react";
import Header from '../../layout/Header';
import Footer from '../../layout/Footer';
import Middle from '../../elements/widgets/middle/Middle';
import MyAccountForm from "./MyAccountForm";


export default function MyAccount() {

    return(
        <Fragment>
            <Header />
            <Middle
                Name = "MY ACCOUNT"
            />
            <MyAccountForm/>
            
            <Footer />
        </Fragment>
    );
}