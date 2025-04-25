// import React, { use } from 'react';
import { Helmet } from "react-helmet-async";
import { CiStar } from "react-icons/ci";
import { Link } from "react-router";

const BookDetail = (/**{bookPromise}*/ {book}) => {
    // const bookData = use(bookPromise);
    // console.log(bookData)

    // console.log(book)
    
    const {bookId , bookName , author , image , rating , category , tags , yearOfPublishing} = book;

    return (
        <>
            <Link to={`/bookDetails/${bookId}`}>
                <div className="card bg-base-100 mb-15 w-96 h-[550px] shadow-sm border border-gray-400 p-6">
                    <figure className="p-5 bg-gray-200">
                        <img className="h-50 w-40"
                        src={image}
                        alt="Shoes" />
                    </figure>
                    <div className="card-body">
                        <div className="m-2 flex justify-center gap-10">
                            {
                                tags.map((tag , index) => <button key={index} className="border-1 border-blue-400 rounded-xl p-2">{tag}</button>)
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
            </Link>
        </>
    );
};

export default BookDetail;