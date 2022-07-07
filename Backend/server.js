const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
let Universities = require('./View/usunimodel');
const universityRouter = require('./routes/University');
const courseRouter = require('./routes/Course');
const scholarRouter = require('./routes/Scholar');
require('dotenv').config();

const app = express();
const port = //Port name,
const hostname = //Hostname,

app.use(cors());

app.use(express.json());

const uri =
  //MONGODB URI
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
