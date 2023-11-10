const express = require("express");
const app = express();
const port = 3000;

const goodsRouter = require("./routes/goods");
const cartsRouter = require("./routes/carts.js");

const connect = require("./schemas");
const router = require("./routes/goods");
const User = require("./models/user.js");
connect();

router.post("/users", async (req, res) => {
    const { nickname, email, password, confirmpassword } = req.body;

    // 1. 패스워드, 패스워드 검증 값이 일치하는가
    // 2. email에 해당하는 사용자가 있는가
    // 3. nicname에 해당하는 사용자가 있는가
    // 4. DB에 데이터를 삽입

    if (password !== confirmpassword) {
        res.status(400).json({
            errorMessage: "password와 confirmPassword가 일치하지 않습니다.",
        });
        return;
    }
    res.json({});
});

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static("assets"));
app.use("/api", [goodsRouter, cartsRouter]);

app.get("/", (req, res) => {
    res.send("Hello World!");
});

app.listen(port, () => {
    console.log(port, "포트로 서버가 열렸어요!");
});
