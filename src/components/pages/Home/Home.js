import React, {Fragment} from 'react';
import Header from "../../layout/Header";
import Banner from "../../elements/ui/Banner"; 
import Brand from "../../elements/widgets/brand/Brand";
import Deal from "../Deal/Deal";
import Blog from "../Blog/Blog";
import Footer from "../../layout/Footer";


export default function Home(){
    return(
      <Fragment>
          <Header/>
          <Banner/>
          <Brand/>
          <Deal/>
          <Blog/>
          <Footer/>
      </Fragment>
      )
}