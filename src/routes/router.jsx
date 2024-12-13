import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../Component/Home/Home";

import Error from "../Component/Error";
import About from "../Component/About";
import VewRestuarent from "../Component/vewRestuarent/VewRestuarent";
import ViewTratoria from "../Component/ViewTratoria/ViewTratoria";

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
        ]
    }
])