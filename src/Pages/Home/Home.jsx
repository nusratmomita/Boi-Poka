import { useLoaderData } from 'react-router';
import Banner from '../../Components/Banner/Banner';
import Books from '../BooksDetails/Books';
import { Helmet } from 'react-helmet-async';

const Home = () => {
   // * 3rd way to load data
    const bookData = useLoaderData();
    // console.log(bookData)
    
    return (
        <div>
            <Helmet>
                <title>Boi Poka | Home</title>
            </Helmet>
            <Banner></Banner>
            <Books bookData={bookData} ></Books>
        </div>
    );
};

export default Home;