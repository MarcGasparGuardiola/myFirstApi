const express = require('express');
const app = express();
const cors = require('cors');
require('dotenv').config();

app.use(cors());
app.use(express.json())
app.use(express.urlencoded({extended: true}))

const myFirstController = require('./controllers/myFirstController');

app.use('/api/v1/user', require('./routes/userRoutes'))
app.use('/api/v1/ex1', require('./routes/exercici1Routes'))
app.use('/api/v1/ex2', require('./routes/exercici2Routes'))
app.use('/api/v1/ex3', require('./routes/exercici3Routes'))
app.use('/api/v1/ex4', require('./routes/exercici4Routes'))
app.use('/api/v1/s06Ex1', require('./routes/s06Ex1Routes'))
app.use('/api/v1/s06Ex2', require('./routes/s06Ex2Routes'))
app.use('/api/v1/s07Ex1', require('./routes/s07Ex1Routes'))

app.get('/', myFirstController.helloWorld);

app.listen(process.env.PORT || 3000, () => {
    console.log(`My First API Running on port ${process.env.PORT}!`)
});