import {React, useState, useEffect} from 'react'
import API from "../utils/API";

export default function Home() {
    const [book, setBook] = useState({
        book: "",
        id: ""
    });

    useEffect(()=>{
        API.getBook(7).then(response => {
            setBook(response.data)
        });
    },[])

    return (
        <div>
            <pre>
                {JSON.stringify(book, null, 4)}
            </pre>
        </div>
    )
}