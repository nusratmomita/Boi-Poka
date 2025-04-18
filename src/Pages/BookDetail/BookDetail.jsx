// import React, { use } from 'react';
import { CiStar } from "react-icons/ci";

const BookDetail = (/**{bookPromise}*/ { book}) => {
    // const bookData = use(bookPromise);
    // console.log(bookData)

    console.log(book)
    const {bookName , author , image , rating , category , tags , yearOfPublishing} = book;

    return (
        <div className="card bg-base-100 w-96 shadow-sm border border-gray-400 p-6">
            <figure className="p-5 bg-gray-200">
                <img className="h-50 w-40"
                src={image}
                alt="Shoes" />
            </figure>
            <div className="card-body">
                <div className="m-2 flex justify-center gap-10">
                    {
                        tags.map((tag) => <button className="border-1 border-blue-400 rounded-xl p-2">{tag}</button>)
                    }
                </div>
                <h2 className="card-title text-xl font-bold">
                    {bookName}
                    <div className="badge badge-secondary">{yearOfPublishing}</div>
                </h2>
                
                <p className="text-xl font-base">By : {author}</p>
                <div className="mt-4 border-t-2 border-dashed"></div>
                <div className="card-actions justify-start mt-5">
                <div className="badge badge-outline border-2 p-4">{category}</div>
                <div className="badge badge-outline  border-2 p-3 ml-30">{rating}<CiStar size={25}></CiStar></div>
                </div>
            </div>
        </div>
    );
};

export default BookDetail;