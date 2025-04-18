import React from 'react';
import {createBrowserRouter} from "react-router";
import Root from '../Pages/Root/Root';
import ErrorPage from '../Pages/ErrorPage/ErrorPage';
import Home from '../Pages/Home/Home';


export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,// static components like navbar and footer are showing here
    errorElement: <ErrorPage></ErrorPage>,
    children:[
        {
            index: true,
            path : "/",
            Component: Home
        }
    ]
  },
]);