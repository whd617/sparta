const express = require("express");

const cookieParser = require("cookie-parser");
const goodsRouter = require("./routes/goods.js");
const cartsRouter = require("./routes/carts.js");
const usersRouter = require("./routes/users.js");
const authRouter = require("./routes/auth.js");
const connect = require("./schemas");

const app = express();
const port = 3000;

connect();

app.use(express.json()); // post, put 전달된 body 데이터를 req.body로 사용할 수 있도록 만든 bodyparser
// localhost:3000/api -> goodsRouter
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static("assets"));

app.use((req, res, next) => {
    console.log("Request URL:", req.originalUrl, " - ", new Date());
    next();
});

app.use("/api", [goodsRouter, cartsRouter, usersRouter, authRouter]); // API가 사용되기 위한 라우터를 등록

app.get("/", (req, res) => {
    res.send("Hello World!");
});

app.listen(port, () => {
    console.log(`❗${port}: 포트로 서버가 열렸어요!`);
});
