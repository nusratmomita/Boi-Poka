import React from 'react';
import { useLoaderData, useParams } from 'react-router';
import { addToLS } from '../../Utilities/AddToLS';

const EachBookDetail = () => {
    const {id} = useParams();// since we are trying to show each book separately we are using params to catch that specific ID that we passed in Routes.jsx
    // will fetch the whole API then use array.find() to access a specific Book using the ID
    // console.log(id);
    const convertedId = parseInt(id);

    const bookData = useLoaderData();

    const book = bookData.find(bk => bk.bookId === convertedId);
    // console.log(book)
    const {bookName , image} = book;

    // adding book to Local storage 
    const handleReadBtn = id => {
        addToLS(id);
    }

    return (
        <div className='w-3/5 mx-auto m-50'>
            <img className="w-50 h-50" src={image} alt="book" />
            <h1>{bookName}</h1>
            
            <button onClick={() => handleReadBtn(id)} className="btn btn-neutral m-3">Read</button>
            <button className="btn btn-info">WishList</button>
        </div>

    );
};

export default EachBookDetail;