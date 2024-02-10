// DEPENDENCIES
const express = require(`express`)
const mongoose = require(`mongoose`)
const cors = require(`cors`)


// CONFIGURATION
require('dotenv').config()
const PORT = process.env.PORT
const app = express()
mongoose.connect(process.env.MONGO_URI)
.then(console.log('connected to mongo: ', process.env.MONGO_URI)) 


// MIDDLEWARE
app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(cors())

// ROUTES

// books controller
const booksController = require(`./controllers/books_controller`)
app.use(`/books`, booksController)

// landing page
app.get(`/`, (req,res)=>{res.json({greeting:`Welcome to a books API landing page.`})})

// error page
app.get(`*`, (req, res)=>{res.status(404).json({error_message: `Sorry, but the page you are looking for can't be found.`})})

// LISTEN
app.listen(PORT, () => {
    console.log('Greetings! From port: ', PORT);
  })
