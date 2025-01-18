import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../Component/Home/Home";

import Error from "../Component/Error";
import About from "../Component/About";
import VewRestuarent from "../Component/vewRestuarent/VewRestuarent";
import ViewTratoria from "../Component/ViewTratoria/ViewTratoria";
import ViewCart from "../Component/ViewCart/ViewCart";
import TshirtCtagory from "../Component/TshirtCtagory/TshirtCtagory";
import Login from "../Component/Login/Login";
import CheckoutFrom from "../Component/CheckoutFrom/CheckoutFrom";
import ViewTopRestaurant from "../Component/ViewTopRestaurant/ViewTopRestaurant";
import ViewTshirt from "../Component/ViewTshirt/ViewTshirt";
import ViewLongTshirt from "../Component/ViewLongTshirt/ViewLongTshirt";
import Showimg from "../Component/Showimg/Showimg";
import Cart from "../Component/Cart/Cart";
import Dashboard from "../pages/Dashboard/Dashboard";
import Order from "../pages/Dashboard/Order";
import ShoopingCart from "../pages/Dashboard/ShoopingCart";
import Setting from "../pages/Dashboard/Setting";
import Logout from "../pages/Dashboard/Logout";
import Filter from "../Component/Filter/Filter";



export const router =createBrowserRouter([
    {
        path:'/',
        element:<Main/>,
        children:[
            {
                path:'/',
                element:<Home/>
            },
            {
                path:'/view-top-restaurant/:title',
                element:<ViewTopRestaurant/>
            },
            {
                path:'/about',
                element:<About/>
            },
            {
                path:'/error',
                element:<Error/>
            },
            {
                path:'/vewresturent',
                element:<VewRestuarent></VewRestuarent>
            },
            {
                path:'/viewTshirt/:title',
                element:<ViewTshirt/>
            },
            {
                path:'/viewLongTshirt/:title',
                element:<ViewLongTshirt/>
            },
            {
                path:'/viewtarial',
                element:<ViewTratoria/>
            },
            {
                path:'/viewCart',
                element:<ViewCart/>
            },
            {
                path:'/tshirtcatagory',
                element:<TshirtCtagory/>
            },
            {
                path:'/login',
                element:<Login/>
            },
            {
                path:'/cheakout',
                element:<CheckoutFrom/>
            },
            {
                path:'/imgView/:id',
                element:<Showimg/>
            },
            {
                path : "/cart",
                element : <Cart/>
            },
            {
                path : "/dashboard",
                element : <Dashboard/>
            },
            {
                path : "/order",
                element : <Order/>
            },
            {
                path : "/shoppingCart",
                element : <ShoopingCart/>
            },
            {
                path : "/setting",
                element : <Setting/>
            },
            {
                path : "/logout",
                element : <Logout/>
            },
            {
                path : "/filter/:title",
                element : <Filter/>
            },
          
           
          
        ]
    }
])