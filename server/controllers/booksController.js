const express = require("express");
const router = express();
const axios = require("axios");
const Book = require("../models/Book");

const url = `https://www.googleapis.com/books/v1/volumes?maxResults=40&key=${process.env.BOOKS_API_KEY}&q=`;

router.get("/search", (req,res) => {    
    axios.get(url + req.query.search).then(response => {
        res.json(response.data);
    }).catch(err => {
        console.log(err);
        res.json(err)
    })
});

router.post("/", (req, res) => {
    Book.create(req.body).then(response => {
        res.json(response);
    }).catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

router.get("/myBooks", (req, res) => {
    Book.find({}).then(response => {
        res.json(response);
    }).catch(err => {
        console.log(err);
        res.status(500).json(err);
    })
});

router.get("/getBook/:id", (req, res) => {
    Book.findById(id).then(response => {
        res.json(response);
    }).catch(err => {
        console.log((err));
        res.status(500).json(err);
    });
});

router.delete("/:id", (req, res) => {
    Book.findByIdAndDelete(id).then(response => {
        res.json(response);
    }).catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

module.exports = router;