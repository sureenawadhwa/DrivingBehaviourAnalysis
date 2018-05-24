const mongoose = require('mongoose');

//connect to mongoDB

mongoose.connect('mongodb://localhost/ntt');
mongoose.connection.once('open',function(){
  console.log('connected');
}).on('error',function(){
  console.log('error',error);
})
