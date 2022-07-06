const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const courseSchema = new Schema({
  _id: {
    type: Number,
  },
 image:{
     type:String,
 },
 name:{
     type:String,
 },
 details:{
     type:String,
 },
 structure:{
     type:Array,
 },
 scholar:{
     type:Array,
 },
 work:{
     type:Array,
 }

    },
    
    {collection : 'Course'}
    
    );

const Course = mongoose.model('Course', courseSchema);

module.exports = Course;
