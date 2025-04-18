import React, {  useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { getItemFromLS } from '../../Utilities/AddToLS';
import BookDetail from '../BookDetail/BookDetail';

const ReadList = () => {
    const [myList , setMyList] = useState([]);
    const [sortType , setSortType] = useState('');

    const data = useLoaderData();
    // console.log(data)

    // since we need each book's whole detail we need to call the whole individual info using useEffect unlike EachBookDetail.jsx
    
    useEffect(()=>{
        const storedData = getItemFromLS();
        const convertedStoredData = storedData.map((id) => parseInt(id));
        // console.log(convertedStoredData)
        const myList = data.filter(list => convertedStoredData.includes(list.bookId));
        // console.log(myList)
        setMyList(myList);
    },[])

    const handleSorting = (type) => {
        setSortType(type);

        if(type === "Year"){
            const yearData = [...myList].sort((a,b) => a.yearOfPublishing - b.yearOfPublishing);
            setMyList(yearData);
        }
        if(type === "Ratings"){
            const ratingData = [...myList].sort((a,b) => a.rating - b.rating);
            setMyList(ratingData);
        }
    }

    return (
        <div>
            
            <Tabs>
                <TabList>
                <Tab>Read List</Tab>
                <Tab>Wish List</Tab>
                </TabList>

                <TabPanel>
                <h2>Current Read : {myList.length}</h2>
                <div className="dropdown dropdown-hover">
                    <div tabIndex={0} role="button" className="btn m-1">Sort By: {sortType}</div>
                    <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                        <li><a onClick={() => handleSorting("Year")}>Year</a></li>
                        <li><a onClick={() => handleSorting("Ratings")}>Ratings</a></li>
                    </ul>
                </div>
                <div className='my-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                    {
                        myList.map(list => <BookDetail key={list.bookId} book={list} ></BookDetail>)
                    }
                </div>
                </TabPanel>
                <TabPanel>
                <h2>Wish List</h2>
                </TabPanel>
            </Tabs>
        </div>   
    );
};

export default ReadList;