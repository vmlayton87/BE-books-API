const express = require(`express`)
const booksApp = express.Router()
const Book = require(`../models/bookSchema`)

//seeder
booksApp.get('/seed', (req, res) => {
    Book.insertMany([{
        "title": "The Shinobi Initiative",
        "description": "The reality-bending adventures of a clandestine service agency in the year 2166",
        "year": 2014,
        "quantity": 10,
        "imageURL": "https://imgur.com/LEqsHy5.jpeg"
      },
      {
        "title": "Tess the Wonder Dog",
        "description": "The tale of a dog who gets super powers",
        "year": 2007,
        "quantity": 3,
        "imageURL": "https://imgur.com/cEJmGKV.jpg"
      },
      {
        "title": "The Annals of Arathrae",
        "description": "This anthology tells the intertwined narratives of six fairy tales.",
        "year": 2016,
        "quantity": 8,
        "imageURL": "https://imgur.com/VGyUtrr.jpeg"
      },
      {
        "title": "Wâˆ€RP",
        "description": "A time-space anomaly folds matter from different points in earth's history in on itself, sending six unlikely heroes on a race against time as worlds literally collide.",
        "year": 2010,
        "quantity": 4,
        "imageURL": "https://imgur.com/qYLKtPH.jpeg"
      }])
        .then(res.status(200).json({
            message: 'Seed successful'
        }))
        .catch(res.status(400).json({
            message: 'Seed unsuccessful'
        }))
})

// Index: shows a list of the books
booksApp.get(`/`,  (req, res)=>{
    Book.find()
    .then(foundBooks=>{
        res.status(200).json(foundBooks)
    })
    .catch((err)=>{
        console.log(err)
        res.status(400).json({error: `finding books was unsucessful`})
    })
})

// get an individual book
booksApp.get(`/:id`, (req,res)=>{
    Book.findById(req.params.id)
    .then(book=>{
        res.status(200).json(book)
    })
    .catch(err=>{
        res.status(400).json({error: `that book ID can't be found.`})
    })
})

// update an individual book
booksApp.put(`/:id`, (req,res)=>{
    Book.findByIdAndUpdate(req.params.id, req.body, {new:true} ) // new:true tells the response to show the information after the update, not the information before the update
    .then(updatedBook=>{
        console.log(updatedBook)
        res.status(200).json(updatedBook)
    })
    .catch((err)=>{
        res.status(400).json({"message": `update failed`})
    })
})

// add a book
booksApp.post(`/`, (req,res)=>{
    Book.create(req.body)
    .then((newBook)=>{res.status(200).json(newBook)})
    .catch(err=>{res.status(400).json({error: `adding a new book failed`})})
})

// delete a book
booksApp.delete(`/:id`, (req,res)=>{
    Book.findByIdAndDelete(req.params.id)
    .then(()=>{res.status(200).json({delete: `deleted book successful`})})
    .catch(err=>{res.status(400).json({delete: `delete book failed`})})
})

module.exports = booksApp

