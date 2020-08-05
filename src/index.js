const express = require('express');

const app = express();

// settings
app.set('json spaces', 2);

// middlewares
app.use(express.json());
app.use(express.urlencoded({extended: false}));

// Routes
app.use(require('./routes/calls'));


app.listen(3000);
console.log('Server on port', 3000);