const express = require('express');
const app = express();
// port 3000번은 강의내용 실습시 사용하고 있으므로 3001번 포트로 적용하여 진행
const port = 3001;
// 프로젝트 내에 생성된 routes 폴더에 있는 products.router.js에 router를 사용하기 위해 변수 선언
const productsRouter = require('./routes/products.router.js');
const connect = require('./schemas');
connect();
app.use(express.json());

// 웹 페이지에 localhost:3001/api 라는 해당하는 router 생성
app.use('/api', [productsRouter]);

// 첫 main page가 될 root인 "/"를 통해 page 생성하고 page에 "Welcome to this page" 문구 생성
app.get('/', (req, res) => {
  res.send('Welcome to this page');
});
// app을 실행을 통하여 받은 Node.js를 위한 웹 프레임워크로 express를 통해 웹서버를 구현  port 3001번 연결
app.listen(port, () => {
  console.log(`🏃 ${port}: open the server at the port.`);
});
