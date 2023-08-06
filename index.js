/* eslint-disable */
const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');
const { User } = require('./models/User');
const config = require('./config/key');
// application/-www-form-urlencoded
// application/json 형태의 데이터를 가져오게하는 설정
app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());

const mongoose = require('mongoose');
mongoose
  .connect(config.mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,

    // 에러방지
  })
  .then(() => {
    console.log('mongodb connected...');
  })
  .catch((err) => {
    console.log(err);
  });

app.get('/', (req, res) => res.send('hello world! 125321'));
app.post('/register', async (req, res) => {
  // 회원가입 할 때 필요한 정보들을 client에서 가져오면
  // 그것들을 데이터 베이스에 넣어준다.

  //body parser를 통해 body에 담긴 정보를 가져온다
  const user = new User(req.body);

  //mongoDB 메서드, user모델에 저장
  const result = await user
    .save()
    .then(() => {
      res.status(200).json({
        success: true,
      });
    })
    .catch((err) => {
      res.json({ success: false, err });
    });
});
app.listen(port, () => console.log(`example app listening on ${port}`));
