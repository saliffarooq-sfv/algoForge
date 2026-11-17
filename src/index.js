const express = require('express');
const bodyparser = require('body-parser');
const { PORT } = require('./config/server.config');
const apiRouter = require('./routes');
const errorHandler = require('./utils/errorHandeler');
const connectionToDB = require('./config/db.config');
const mongoose = require('mongoose');

const app = express();


app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true}));
app.use(bodyparser.text());

app.use('/api', apiRouter);


app.get('/ping', (req,res) =>{
    return res.json({ message: 'Problem service is alive'});
});


app.use(errorHandler);

app.listen(PORT, async() =>{
    console.log(`server started at port: ${PORT}`)
    await connectionToDB();
    console.log("Sucessfully connected to DB")

});


