/* eslint-disable */
const express = require('express');
const app = express();
const port = 3000;

const mongoose = require('mongoose');
mongoose
  .connect(
    'mongodb+srv://rokaf340:rokaf340`@front.f5nk6u6.mongodb.net/?retryWrites=true&w=majority',
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,

      // 에러방지
    }
  )
  .then(() => {
    console.log('mongodb connected...');
  })
  .catch((err) => {
    console.log(err);
  });

app.get('/', (req, res) => res.send('hello world!'));
app.listen(port, () => console.log(`example app listening on ${port}`));
