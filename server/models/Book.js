const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const bookSchema = new Schema({
    title: {
        type: String,
        trim: true,
        required: "Book must have a title"
    },
    authors: {
        type: [String],
        required: "Book must have an author"
    },
    description: {
        type: String,
        required: "Book must have a description"
    },
    image: {
        type: String,
        required: "Book must have an image"
    },
    link: {
        type: String,
        required: "Book must have a link"
    }
})

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;