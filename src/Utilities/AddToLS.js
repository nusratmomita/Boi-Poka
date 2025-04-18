const getItemFromLS = () => {
    const bookData = localStorage.getItem("readList");

    if(bookData){
        const storedBookData = JSON.parse(bookData);
        return storedBookData;
    }
    else{
        return [];
    }
}

const addToLS = (id) => {
    const StoredData = getItemFromLS();// an array

    if(StoredData.includes(id)){
        alert("Item is already added");
    }
    else{
        StoredData.push(id);
        const addingToLS = JSON.stringify(StoredData);
        localStorage.setItem("readList" , addingToLS);
        // console.log(StoredData);
    }
}
export {getItemFromLS , addToLS}