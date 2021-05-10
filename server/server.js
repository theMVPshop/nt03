// Import environment variables
require('dotenv').config();
const db = require('./database/dbConnection');

// express imports
const express = require('express');
const app = express();

// routers import
const usersRoute = require('./Routes/users');

// set port for api server
let port = process.env.PORT || 3000;

// json bodyparser
app.use(express.json());

// Routers endpoints
app.use(usersRoute);

app.get('/test', (req, res) => {
  console.log('basic server up running');
  res.json({ response: 'basic server up' });
});

app.listen(port, () => console.log(`API Server running on port ${port}`));
