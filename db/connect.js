const mongoose = require('mongoose');

const connectDB = (url) => {
  return mongoose.connect(url)
  .then((db)=>{
    console.log('db is waiting for date')
  })
};

module.exports = connectDB;
