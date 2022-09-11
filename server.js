const express = require('express');
const connectDB = require('./config/db');
// const res = require('express/lib/response');
const app = express();
//connect Database
connectDB();

// Init Middleware
app.use(express.json({ extended: false }));
app.get('/',(req,res) => res.send('API Running')); //single end point to test-out
//Define Routes 
app.use('/api/users', require('./routes/api/users'));
app.use('/api/auth', require('./routes/api/auth'));
app.use('/api/profile', require('./routes/api/profile'));
app.use('/api/posts', require('./routes/api/posts'));
const PORT = process.env.PORT || 5000 //look for enviornment called port when we use it to heroku
app.listen(PORT, () => console.log(`Server started on port ${PORT}`)); //pass the port