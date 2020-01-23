const express = require("express");
const mongoose = require("mongoose");
const bodyparser = require("body-parser");

const items = require('./routes/api/items');

const app = express();

//bodyparser Middleware 
app.use(bodyparser.json());

//DB config
const db = require('./config/keys').mongoURI;

// connect to mongo
mongoose
    .connect(db)
    .then(() => console.log('MongoDB connected.... '))
    .catch(err => console.log(err));

// use routes 
app.use('/api/items', items);

const port = process.env.port || 5000;

app.listen(port, () => console.log('server started on port ${port}'));