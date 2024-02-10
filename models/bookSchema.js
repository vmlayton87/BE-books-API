const mongoose = require(`mongoose`)
const {Schema} = mongoose

// schema
const bookSchema = new Schema ({
    title: {type:String, required:true},
    description: String,
    year: Number,
    quantity: Number,
    imageURL: String
})

const Book =mongoose.model(`Book`, bookSchema)
module.exports = Book