const mongoose = require('mongoose');

const bookSchema = mongoose.Schema({
    name: String ,
    price : Number,
    title : String ,
    category : String ,
    image : String ,
    free : Boolean,
})

const Book = new mongoose.model('Book' , bookSchema);

module.exports = Book;