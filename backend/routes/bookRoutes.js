const express = require('express');
const router = express.Router();
const {getBooks} = require("../controller/bookController.js");

router.get('/' , getBooks);

module.exports = router;