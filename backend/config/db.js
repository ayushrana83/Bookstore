const mongoose = require("mongoose");
const dotenv = require("dotenv").config();

const connectDb = async () =>{
    try {
        console.log(process.env.CONNECTION_STRING);
        mongoose.connect(process.env.CONNECTION_STRING);
        console.log('db connected' , mongoose.connection.host);
    } catch (error) {
        console.log('error in db connection ', error)
    }
}


module.exports = connectDb;