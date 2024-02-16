const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

//import routes
const postRoutes = require('./routes/posts');
const authRoutes = require('./routes/auth');

//app middleware
app.use(bodyParser.json());
app.use(cors());

//route middleware
app.use(postRoutes);

const PORT = 8000;
const DB_URL='mongodb+srv://eshanweerasinghe55:ojSccP8vmbpLuQkU@cluster0.ykxnlfl.mongodb.net/';

mongoose.connect(DB_URL)
.then(() =>{
    console.log('DB connected');
})
.catch((err) => console.log('DB connection error',err));

app.listen(PORT, ()=>{
    console.log('App is running on $(PORT)');
});