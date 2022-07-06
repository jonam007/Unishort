const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const scholarshipSchema = new Schema({
  _id: {
    type: Number,
  },
 image:{
     type:String,
 },
 title:{
     type:String,
 },
 amt:{
     type:String,
 },
 type:{
     type:String,
 },
 time:{
     type:String,
 },
 coursetype:{
     type:String,
 },
 more:{
    type:String,
},

    },
    
    {collection : 'Scholarship'}
    
    );

const Scholarship = mongoose.model('Scholarship', scholarshipSchema);

module.exports = Scholarship;
