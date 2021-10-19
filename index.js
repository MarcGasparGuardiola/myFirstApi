const express = require('express');
const app = express();
require('dotenv');


const myFirstController = require('./controllers/myFirstController');

app.use('/api/v1/user', require('./routes/userRoutes'))

app.get('/', myFirstController.helloWorld);

app.listen(process.env.PORT || 3000, () => {
    console.log('My First API Running!')
});