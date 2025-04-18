import React from 'react';
import {createBrowserRouter} from "react-router";
import Root from '../Pages/Root/Root';
import ErrorPage from '../Pages/ErrorPage/ErrorPage';
import Home from '../Pages/Home/Home';
import AboutBook from '../Pages/WishList/WishList';
import PagesToRead from '../Pages/PagesToRead/PagesToRead';
import BookDetail from '../Pages/BookDetail/BookDetail';
import EachBookDetail from '../Pages/BooksDetails/EachBookDetail';
import ReadList from '../Pages/Read List/ReadList';


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
          path: "/WishList",
          Component: AboutBook
        },
        {
          path:'/bookDetails/:id',
          Component: EachBookDetail,
          loader: () => fetch("booksData.json")
        },
        {
          path: "/ReadList",
          Component:ReadList,
          loader: () => fetch("booksData.json")
        },
    ]
  },
]);