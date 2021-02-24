import React from 'react'

export default function BookResult(props) {

    return (
        <div>
            <h2>{props.book.volumeInfo.title}</h2>
            <h3>{props.book.volumeInfo.subtitle}</h3>
            {
                props.book.volumeInfo.imageLinks ?
                <img src={props.book.volumeInfo.imageLinks.thumbnail} />
                :
                <img src="https://via.placeholder.com/250x250.png?text=No image available" />
            }
            <h3>Authors</h3>
            <ul>
                {props.book.volumeInfo.authors.map(author => <li>{author}</li>)}
            </ul>
            <h3>Description</h3>
            <p>
                {props.book.volumeInfo.description}
            </p>
            <strong>Learn more: </strong><a href={props.book.volumeInfo.infoLink}>{props.book.volumeInfo.infoLink}</a>

            <hr />
        </div>
    )
}
