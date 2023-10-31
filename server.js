const express = require('express');
const mongoose = require('mongoose');
const app = express();
require("dotenv").config();
const port =process.env.PORT ||  3000;

//database connected
const conn=require('./db/conn');

//middleware 
app.use(express.json());


//routes
const bookRoutes = require('./routes/bookRoutes');
app.use('/books', bookRoutes);


//listning port
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
