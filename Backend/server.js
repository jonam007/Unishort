const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
let Universities = require('./View/usunimodel');
const universityRouter = require('./routes/University');
const courseRouter = require('./routes/Course');
const scholarRouter = require('./routes/Scholar');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;
const hostname = '192.168.150.115';

app.use(cors());

app.use(express.json());

const uri =
  'mongodb+srv://Manoj:Manoj123@cluster0.5u3tz.mongodb.net/Universities?retryWrites=true&w=majority';
mongoose.connect(uri, {useNewUrlParser: true}).then(console.log('connected'));

app.listen(port, hostname, () => {
  console.log(`Server Running at http://${hostname}:${port}/`);
});

app.get('/alldata', (req, res) => {
  Universities.find()
    .then(result => {
      res.send(result);
    })
    .catch(err => {
      console.log(err);
    });
});



app.use('/University', universityRouter);
app.use('/Courses', courseRouter);
app.use('/Scholarship', scholarRouter);
