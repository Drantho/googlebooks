import React from 'react'

export default function BookResult(props) {

    const formattedData ={
        title: props.book.volumeInfo.title || "",
        authors: props.book.volumeInfo.authors || [],
        description: props.book.volumeInfo.description || "",
        link: props.book.volumeInfo.infoLink,
        image: props.book.volumeInfo.imageLinks ? props.book.volumeInfo.imageLinks.thumbnail : "https://via.placeholder.com/250x250.png?text=No image available",
        
    }

    return (
        
        <div>
            <h2>{formattedData.title}</h2>
            <h3>{props.book.volumeInfo.subtitle}</h3>
            <button onClick={()=>{props.addBook(formattedData)}}>Save Book</button>
            <img src={formattedData.image} />
            <h3>Authors</h3>
            <ul>
                {formattedData.authors.map(author => <li>{author}</li>)}
            </ul>
            <h3>Description</h3>
            <p>
                {formattedData.description}
            </p>
            <strong>Learn more: </strong><a href={formattedData.link}>{formattedData.link}</a>

            {/* <pre>
                {JSON.stringify(props, null, 4)}
            </pre> */}

            <hr />
        </div>
    )
}
