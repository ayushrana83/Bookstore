const express = require('express');
const Book = require('../model/bookModel');


const getBooks = async (req , res) =>{
    try {
        const books = await Book.find({});
        res.status(201).json(books);
    } catch (error) {
        console.log('error in fetching books');
        res.status(404).json(error);
    }
}

module.exports = {getBooks};