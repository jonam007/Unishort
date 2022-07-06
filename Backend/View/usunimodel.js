const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UniSchema = new Schema({
  _id: {
    type: Number,
  },
  id: {
    type: Number,
  },

  country: {
    type: String,
  },
  name: {
    type: String,
  },

  Location: {
    type: String,
  },

  About: {
    type: String,
  },

  Cost: {
    type: String,
  },
  averagecost: {
    type: String,
  },
  ApllicationFee: {
    type: String,
  },
  LocationDetails: {
    type: String,
  },
  Facebook: {
    type: String,
  },
  Insta: {
    type: String,
  },
  logo: {
    type: String,
  },
  top: {
    type: String,
  },

    },
    
    {collection : 'Universites'}
    
    );

const Universities = mongoose.model('Universites', UniSchema);

module.exports = Universities;
