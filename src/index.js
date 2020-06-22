const express = require('express');

const app = express();

// settings
app.set('json spaces', 2);

// middlewares
app.use(express.json());
app.use(express.urlencoded({extended: false}));

// Routes
app.use(require('./routes/calls'));
app.use(require('./routes/agenda'));
app.use(require('./routes/reporte'));
//app.use(require('./routes/resultado'));

app.listen(3000);
console.log('Server on port', 3000);