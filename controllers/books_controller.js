const express = require(`express`)
const booksApp = express.Router()
const Book = require(`../models/bookSchema`)

// Index: shows a list of the books
booksApp.get(`/`,  (req, res)=>{
    Book.find()
    .then(foundBooks=>{
        res.json(foundBooks)
    })
})

module.exports = booksApp