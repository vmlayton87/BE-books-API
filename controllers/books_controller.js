const express = require(`express`)
const booksApp = express.Router()
const Book = require(`../models/bookSchema`)

// Index: shows a list of the books
booksApp.get(`/`,  (req, res)=>{
    Book.find()
    .then(foundBooks=>{
        res.json(foundBooks)
    })
    .catch((err)=>{
        console.log(err)
        res.status(404).json({error: err})
    })
})

module.exports = booksApp