const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

//configuring our environment variable in a file (.env)
require('dotenv').config();

//creating our express server at port 5000
const app = express();
const port = process.env.PORT || 5000;

//setting up middleware
app.use(cors());
app.use(express.json());

//setting and connecting database
const uri = process.env.ATLAS_URI;
mongoose.connect(uri, {useNewUrlParser: true, useCreateIndex: true});

const connection = mongoose.connection;
connection.once('open', () => {
  console.log('MongoDB database connection established');
});

//loading and connecting routes
const expenseRouter = require('./routes/expenses');
const userRouter = require('./routes/users')

app.use('/expenses', expenseRouter);
app.use('/users', userRouter);


app.listen(port, () => {
  console.log('server is running on port: 5000');
});