const express = require('express')
const app = express()
const mongoose = require('mongoose')
const morgan = require('morgan')
const helmet = require('helmet')
const dotenv = require('dotenv')
const userRoute=require('./routes/user')

dotenv.config()

// ***MONGODB CONNECTION***
mongoose.connect(process.env.MONGO_URI,{useNewUrlParser:true,useUnifiedTopology:true},()=>{
    console.log('Connected to Database...')
});

//***MIDDLEWARES***
app.use(express.json());
app.use(helmet());
app.use(morgan("common"));


app.use('/api/users',userRoute);

app.listen(5000,() =>{
    console.log("Backend server is running...")
})