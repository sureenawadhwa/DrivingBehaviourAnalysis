const mongoose = require('mongoose');

const schema = mongoose.Schema;

//create schema and model

const mariochars = new schema({
  name: String,
  wt: Number
});

const marioModel = mongoose.model('marioModel',mariochars);

module.exports = marioModel
//connect to mongoDB
/*
mongoose.connect('mongodb://localhost/ntt');
mongoose.connection.once('open',function(){
  console.log('connected');
}).on('error',function(){
  console.log('error',error);
})
*/
