const express = require('express');
const cors = require('cors');
const app = express(); 
const bodyParser = require('body-parser');

//Middleware
app.use(bodyParser.json()); 
app.use(cors()); 

const items = require ('./routes/api/item');

app.use('/api/item', items);

const port = process.env.PORT || 5000; 
app.listen(port, () => console.log(`Server Started on port ${port}`));
