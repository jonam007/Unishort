const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BlogSchema = new Schema({
  _id: {
    type: Number,
  },
 image:{
     type:String
 },
 title:{
     type:String
 },
 content:{
     type:String
 },
 genre:{
     type:String    
 },
 date:{
     type:String
 }

    },
    
    {collection : 'Blogs'}
    
    );

const Blogs = mongoose.model('Blogs', BlogSchema);

module.exports = Blogs;
