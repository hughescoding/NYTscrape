const express = require("express");
const router = express.Router();
const db = require("../models");
const mongoose = require("mongoose");
 
const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost:27017/googlebooks";
mongoose.connect(MONGODB_URI);

router.delete("/api/books/:id", (req,res) => {
    let id = req.params.id;
    console.log(id);
    /*
    db.books.findByIdAndDelete({BookId:id})
    .then(response => {
        res.status(200).json(response);
    });
    */
});

router.post("/api/books", function(req,res) {
    
    db.books.create({ 
        bookId: req.body.id,
        title: req.body.title,
        authors: req.body.authors,
        description: req.body.description,
        image: req.body.image,
        link: req.body.link
     }).then(function(data) { 
      res.send("OK");
    }).catch(function(data){
        res.json(error);
    });

});

router.get("/api/books", (req,res) =>{
    db.books.find({}).then((data)=>{
        res.json(data);
    }).catch((error)=>{
        res.json(error);
    });
});



//todo api/books/:id (delete) from mongo

module.exports = router;;