const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost', {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: true
});

const db = mongoose.connection;

db.on('connected', ()=>{
    console.log(`MongoDB connected on ${db.host}:${db.port}`);
});