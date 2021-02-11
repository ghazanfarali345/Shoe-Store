import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import Home from '../Components/Home/Home'
import Product from '../Components/Product/Product'
import Navbar from '../Components/Navbar/Navbar'
// import Topbar from '../Components/Topbar/Topbar'
import ProductDetails from '../Components/ProductDetails/ProductDetails'


export default function App() {
    return (
        <Router>
            <div>
                {/* <Topbar /> */}
                <Navbar />
                <Switch>
                    <Route path="/" exact>
                        <Home />
                    </Route>
                    <Route path="/products" exact>
                        <Product />
                    </Route>
                    <Route path="/products/:id">
                        <ProductDetails />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}