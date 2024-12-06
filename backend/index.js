const express = require("express");
const dotenv = require("dotenv").config();
const app = express();
const port = process.env.PORT || 3000;
const db = require("./config/db.js");
const connectDb = require("./config/db.js");
const bookRoutes = require("./routes/bookRoutes.js");
const userRoutes = require("./routes/userRoutes.js");
const cors = require('cors'); 

app.use(cors());
app.use(express.json());

connectDb();

app.use('/book' , bookRoutes);
app.use('/user' , userRoutes);

app.listen(port ,() => {
    console.log(`server running on port ${port}`);
})