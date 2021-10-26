const express = require('express');
const app = express();
const bodyParser = require('body-parser')
require('dotenv');

app.use(bodyParser.json())

const myFirstController = require('./controllers/myFirstController');

app.use('/api/v1/user', require('./routes/userRoutes'))
app.use('/api/v1/ex1', require('./routes/exercici1Routes'))
app.use('/api/v1/ex2', require('./routes/exercici2Routes'))
app.use('/api/v1/ex3', require('./routes/exercici3Routes'))
app.use('/api/v1/ex4', require('./routes/exercici4Routes'))

app.get('/', myFirstController.helloWorld);

app.listen(process.env.PORT || 3000, () => {
    console.log('My First API Running!')
});