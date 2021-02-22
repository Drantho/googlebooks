import { React, useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import API from "../utils/API";

export default function Browse() {

    const [allQuestions, setAllQuestions] = useState([{
        title: "",
        text: "",
        Tags: []
    }]);

    const [searchQuestions, setSearchQuestions] = useState([{
        title: "",
        text: "",
        Tags: []
    }]);
    
    const [allTags, setAllTags] = useState([
        {
            id: "",
            name: "",
            text: ""
        }
    ])

    const [searchTags, setSearchTags] = useState([
        {
            id: "",
            name: "",
            text: ""
        }
    ])

    const [questionSearchString, setQuestionSearchString] = useState("");

    const [tagSearchString, setTagSearchString] = useState("");

    const handleQuestionInputChange = event => {
        setQuestionSearchString(event.target.value);

        API.getQuestionsBySearch(event.target.value).then(response => {
            setSearchQuestions(response.data);
        })
    }

    useEffect(() => {
        API.getAllQuestions().then(response => {
            setAllQuestions(response.data);
        });

        API.getAllTags().then(response => {
            console.log(`all tags: `, response);
            setAllTags(response.data);
        })
    }, [])

    return (
        <div>
            <h1>Browse Page</h1>
            <h2>All Tags</h2>
            <ul>
                {allTags.map(tag => {<li key={tag.id}>{tag.name}</li>})}
            </ul>
            <h2>Search Questions</h2>
            <label htmlFor="searchQuestion">Search</label>
            <input name="searchQuestion" value={questionSearchString} onChange={handleQuestionInputChange} />
            <button type="submit">Search</button>
            <ul>
                {searchQuestions.map(question =>
                    <li key={question.id}>
                        <Link to={"/question/" + question.id}>
                            <strong>{question.title}</strong>
                        </Link><br />
                        {question.Tags.map(tag => <span key={tag.id}>{tag.name} </span>)}
                    </li>)}
            </ul>
            <hr />
            <h2>All Questions</h2>
            <p>TODO: get paginated questions</p>
            <ul>
                {allQuestions.map(question =>
                    <li key={question.id}>
                        <Link to={"/question/" + question.id}>
                            <strong>{question.id}. {question.title}</strong>
                        </Link>
                        <br />
                        {question.Tags.map(tag => <span key={tag.id}>{tag.name} </span>)}
                    </li>)}
            </ul>
        </div>
    )
}
