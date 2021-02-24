const express = require("express");
const router = express();

router.get("/", (req,res) => {    
    res.json({book: "book goes here.", id: req.query.id})
})

module.exports = router;