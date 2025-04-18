import React from 'react';
import bookImage from "../../assets/books.jpg";
const Banner = () => {
    return (
        <div>
            <div className='mt-5 p-5 flex justify-between gap-6'>
                <div className='space-y-5 mt-12'>
                    <h1 className='text-5xl font-serif'>Books to freshen up your bookshelf</h1>
                    <button className='btn btn-primary bg-green-600'>View the list</button>
                </div>
                <div>
                    <img className="w-full rounded-2xl"src={bookImage} alt="books" />
                </div>
            </div>
        </div>
    );
};

export default Banner;