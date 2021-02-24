import {React, useState, useEffect} from 'react'
import BookResult from '../components/BookResult';
import API from "../utils/API";

export default function Home() {
    const [search, setSearch] = useState("");

    const [book, setBook] = useState([{
        book: "",
        id: "",
        volumeInfo: {
            title: "",
            description: "",
            image: "",
            link: "",
            authors: [""],
            imageLinks: {
                thumbnail: ""
            }
        }            
    }]);

    const [books, setBooks] = useState([{
        book: "",
        id: "1",
        description: "",
        image: "",
        link: "",
        author: [""]
    }]);

    const handleInputChanged = event => {
        setSearch(event.target.value);
    }

    const handleSubmit = event => {
        event.preventDefault();
        API.searchBook(search).then(response => {
            setBook(response.data.items);
            console.log(`book search: `, response.data.items);
        }).catch(err => {
            console.log(err);
        })
    }

    const addBook = data => {
        API.createBook(data).then(response => {
            console.log(response);
            API.getMyBooks().then(getResponse => {
                setBooks(getResponse.data);
            })
        })
    }

    useEffect(()=>{

        API.getMyBooks().then(response => {
            setBooks(response.data.items);
            console.log(response.data.items);
        });

    },[])

    return (
        <div>
                <label htmlFor="search">Search</label>
                <input name="search" value={search} onChange={handleInputChanged}/><br/>
                <button onClick={handleSubmit}>Search</button>
                <h2>Results</h2>
                {book.map(item => <BookResult book={item} addBook={addBook}/>)}

            {/* <pre>
                {JSON.stringify(book, null, 4)}
            </pre> */}
        </div>
    )
}