import React from 'react';
import {createBrowserRouter} from "react-router";
import Root from '../Pages/Root/Root';
import ErrorPage from '../Pages/ErrorPage/ErrorPage';
import Home from '../Pages/Home/Home';
import AboutBook from '../Pages/AboutBook/AboutBook';


export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,// static components like navbar and footer are showing here
    errorElement: <ErrorPage></ErrorPage>,
    children:[
        {
            index: true,
            path : "/",
            loader: () => fetch("booksData.json"),// * 3rd way to load data
            Component: Home
        },
        {
          path: "/about",
          Component: AboutBook
        }
    ]
  },
]);