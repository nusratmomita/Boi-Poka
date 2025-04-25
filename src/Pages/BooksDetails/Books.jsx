import React, { Suspense } from 'react';
import BookDetail from '../BookDetail/BookDetail';

const Books = ({bookData}) => {
     // const [allBooks , setAllBooks] = useState([]);

    // * 1st way to load data
    // useEffect(()=>{
    //     fetch("booksData.json")
    //     .then(res => res.json())
    //     .then(data => setAllBooks(data))
    // },[])

    // * 2nd way to load data
    // const bookPromise = fetch("booksData.json")
    // .then(res => res.json());

    // * 3rd way see Routes.jsx and Home.jsx
    return (
        <div>
            <h1 className='text-4xl text-center font-extrabold m-25'>Books</h1>
            {/* <Suspense fallback={<span>Books Loading...</span>}>
                <BookDetail bookPromise={bookPromise}></BookDetail>
            </Suspense> */}
            <Suspense fallback={<span>Books Loading...</span>}>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    bookData.map((book) => <BookDetail key={book.bookId} book={book}></BookDetail>)
                }
                </div>
            </Suspense>
        </div>
    );
};

export default Books;