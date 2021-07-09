import React from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom"; //페이지 나누기
import Home from "./components/pages/Home/Home";
import Features from "./components/pages/Features/Features";
import ProductDetail from './components/pages/ProductDetail/ProductDetail';
import ToTop from './utilities/ToTop';
import Compare from './components/pages/Compare/Compare';
import Cart from './components/pages/Cart/Cart';
import Wishlist from './components/pages/Wishlist/Wishlist';
import ProductList from './components/pages/productlist/ProductList';
import MyAccount from './components/pages/myaccount/MyAccount';
import ReduxSample from './components/pages/reduxsample/ReduxSample';
import { Provider } from 'react-redux';
import store from './redux/store'

import "./assets/css/website.css";
import "./assets/css/style.css";
import "./assets/css/animate.css"; 
import "./assets/css/bootstrap.css";
import "./assets/css/googlefont.css";
import "./assets/icons8/css/line-awesome.min.css";


function App() {
  return (
    <BrowserRouter>
      <ToTop>
      <Switch>
        
        <Route exact path="/"><Home/></Route>
        <Route exact path="/compare"><Compare/></Route>
        <Route exact path="/cart"><Cart/></Route>
        <Route exact path="/wishlist"><Wishlist/></Route>
        <Route exact path="/features"><Features/></Route>
        <Route exact path="/productdetail/:id"><ProductDetail/></Route>
        <Route exact path="/productlist"><ProductList/></Route>
        <Route exact path="/myaccount"><MyAccount/></Route>
        
        <Provider store={store}>
          <Route exact path="/reduxsample"><ReduxSample/></Route>
        </Provider>
        
      </Switch>
      </ToTop>
    </BrowserRouter>
  );
}

export default App;