const express = require('express');
const path = require('path');
const logger = require('morgan');

require('dotenv').config()
require('./config/database');

const userRouter = require('./routes/users');
const businessRouter = require('./routes/businesses');
const productRouter = require('./routes/products');

const app = express();

app.use(logger('dev'));
app.use(express.json());

app.use(express.static(path.join(__dirname, 'build')));

app.use('/users', userRouter);
app.use('/businesses', businessRouter);
app.use('/products', productRouter);


app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

const port = process.env.PORT || 3001;

app.listen(port, () => {
    console.log(`Express app running on port ${port}`);
})