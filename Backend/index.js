const express = require('express');
const app  = express();
const mongoose = require('mongoose')

app.use(express.json())

require('dotenv').config()

const port=process.env.PORT

mongoose.connect(process.env.MONGODB_URI).then(()=>{
    console.log("DB Connected")
}).catch((err)=>{
    console.log("DB Not Connected")
})


app.listen(port,()=>{
    console.log(`app is running on port ${port}`);
})