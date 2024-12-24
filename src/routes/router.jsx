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
            }
        ]
    }
])