// routes/users.js
const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");

const User = require("../schemas/user");
const authMiddleware = require("../middlewares/auth-middleware.js");
// 회원가입 API
router.post("/users", async (req, res) => {
    // 1. 패스워드, 패스워드 검증 값이 일치하는가
    const { email, nickname, password, confirmPassword } = req.body;

    if (password !== confirmPassword) {
        res.status(400).json({
            errorMessage: "패스워드가 패스워드 확인란과 다릅니다.",
        });
        return;
    }

    // email 또는 nickname이 동일한 데이터가 있는지 확인하기 위해 가져온다.
    const existsUsers = await User.findOne({
        // $or : 이안에 있는 값 중에 하나라도 일치했을 때 보여준다는 의미
        $or: [{ email }, { nickname }],
    });
    if (existsUsers) {
        // NOTE: 보안을 위해 인증 메세지는 자세히 설명하지 않습니다.
        res.status(400).json({
            errorMessage: "이메일 또는 닉네임이 이미 사용중입니다.",
        });
        return;
    }

    const user = new User({ email, nickname, password });
    await user.save();
    // res.status(201) : 뭔가 데이터를 생성했다
    res.status(201).json({});
});

// 로그인
router.post("/auth", async (req, res) => {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    // 1. 사용자가 존재하지 않거나,
    // 2. 입력받은 password와 사용자의 password가 다를때 에러메세지가 발생해야한다.
    if (!user || password !== user.password) {
        res.status(400).json({
            errorMessage: "사용자가 존재하지 않거나, 사용자의 password와 입력받은 password가 일치하지 않습니다.",
        });
        return;
    }

    const token = jwt.sign({ userId: user.userId }, "sparta-secret-key");

    res.status(200).json({
        token: token,
    });
});

router.get("/users/me", authMiddleware, async (req, res) => {});

module.exports = router;
