const express = require('express');
// const connectDB = require('./db');
// const res = require('express/lib/response');
const app = express();
//connect Database
// connectDB();
app.get('/',(req,res) => res.send('API Running')); //single end point to test-out
const PORT = process.env.PORT || 5000 //look for enviornment called port when we use it to heroku
app.listen(PORT, () => console.log(`Server started on port ${PORT}`)); //pass the port