console.log('E-Commerce API');
require('dotenv').config();
require('express-async-errors');

const morgan = require('morgan');
const cookieparser = require('cookie-parser');

const connectDB = require('./db/connect')
const express = require('express');
const app = express();

const authroutes = require('./rouster/authrouster')
const jobsroutes= require('./rouster/jobsrouter')

const notFoundMiddleware = require('./middleware/not-found');
const errorHandlerMiddleware = require('./middleware/error-handler');

app.use(morgan('tiny'));
app.use(cookieparser(process.env.JWT_SECRECT));

app.use(express.json());
app.use(express.static('./public'));



app.get('/',(req,res)=>{
    console.log(req.signedCookies)
    res.json("hello")
})

app.use('/regster',authroutes)
app.use('/thejobs',jobsroutes)

app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

const PORT = process.env.PORT || 4000


const start = async () => {
    try {
        await connectDB(process.env.MONGODB_LINK);
        app.listen(PORT,console.log('watching server'))
        
    } catch (error) {
        console.log('404 failed: ' + error )
    }
}

start();