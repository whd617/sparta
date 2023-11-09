const express = require("express");
const app = express();
const port = 3000;

const goodsRouter = require("./routes/goods.js");
const cartsRouter = require("./routes/carts.js");
const connect = require("./schemas");
connect();

app.use(express.json()); // post, put 전달된 body 데이터를 req.body로 사용할 수 있도록 만든 bodyparser
// localhost:3000/api -> goodsRouter

app.use((req, res, next) => {
    console.log("Request URL:", req.originalUrl, " - ", new Date());
    next();
});

app.use((req, res, next) => {
    console.log("첫번째 미들웨어");
    next();
});

app.use((req, res, next) => {
    console.log("두번째 미들웨어");
    next();
});

app.use((req, res, next) => {
    console.log("세번째 미들웨어");
    next();
});

// print: 첫번째 미들웨어
// print: 두번째 미들웨어
// print: 세번째 미들웨어

app.use(
    "/api",
    (req, res, next) => {
        console.log("네번째 미들웨어");
        next();
    },
    [goodsRouter, cartsRouter]
); // API가 사용되기 위한 라우터를 등록

app.get("/", (req, res) => {
    res.send("Hello World!");
});

app.listen(port, () => {
    console.log(`❗${port}: 포트로 서버가 열렸어요!`);
});
