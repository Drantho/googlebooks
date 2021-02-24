const express = require("express");
const axios = require('axios')
const router = express.Router();

const booksController = require("./booksController");

router.use("/api/books", booksController);

require('dotenv').config()

router.get("/", (req, res) => {
    res.json({msg: "This is the home page"})
});

module.exports = router;
