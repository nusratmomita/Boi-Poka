import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { getItemFromLS } from '../../Utilities/AddToLS';
import BookDetail from '../BookDetail/BookDetail';

const ReadList = () => {
    const [myList , setMyList] = useState([]);

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

    return (
        <div>
            <Tabs>
                <TabList>
                <Tab>Read List</Tab>
                <Tab>Wish List</Tab>
                </TabList>

                <TabPanel>
                <h2>Current Read : {myList.length}</h2>
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