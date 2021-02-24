const express = require("express");
const cors = require("cors");
const compression = require("compression");
const morgan = require("morgan");
const mongoose = require("mongoose");

require('dotenv').config()

const app = express();

app.use(compression());
app.use(cors())
app.use(express.urlencoded({ limit: '50mb', extended: true }));
app.use(express.json({ limit: '50mb', extended: true, parameterLimit: 50000 }));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/books", {
    useNewUrlParser: true,
    useFindAndModify: false
});

const routes = require("./controllers/routes.js");

app.use(routes);

if (process.env.NODE_ENV === "production") {
    app.use(express.static("../client/build"))
} else {
    app.use(morgan());
}

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => console.log(`App now listening on port: ${PORT} view at: http://localhost:${PORT}`) );