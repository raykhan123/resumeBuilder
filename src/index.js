const express = require('express');
const route = require('./routers/route.js');
const mongoose = require('mongoose');
const app = express();

app.use(express.json());

mongoose.connect("mongodb+srv://danish123:Faizan123450@cluster0.sk9syp9.mongodb.net/ResumeBuilderDB", {
    useNewUrlParser: true
})
.then( () => console.log("MongoDb is connected"))
.catch ( err => console.log(err) )


app.use('/', route)


app.listen(process.env.PORT || 3000, function () {
    console.log('Express app running on port ' + (process.env.PORT || 3000))
});