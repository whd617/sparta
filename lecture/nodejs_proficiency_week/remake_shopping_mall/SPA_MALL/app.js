const express = require("express");
const app = express();
const port = 3002;

const cookieParser = require("cookie-parser");
const goodsRouter = require("./routes/goods.js");
const cartsRouter = require("./routes/carts.js");
const usersRouter = require("./routes/users.js");
const authRouter = require("./routes/auth.js");
const connect = require("./schemas");
connect();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static("assets"));
app.use("/api", [goodsRouter, cartsRouter, usersRouter, authRouter]);

app.get("/", (req, res) => {
    res.send("Hello World!");
});

app.listen(port, () => {
    console.log(port, "포트로 서버가 열렸어요!");
});
