// middlewares/auth-middleware.js

const jwt = require("jsonwebtoken");
const User = require("../schemas/user");

// 사용자 인증 미들웨어
module.exports = async (req, res, next) => {
    const { Authorization } = req.cookies;
    // authType: Bearer
    // authToken: 실제 jwt 값이 들어옴
    const [authType, authToken] = (Authorization ?? "").split(" ");
    if (!authToken || authType !== "Bearer") {
        res.status(401).send({
            errorMessage: "로그인 후 이용 가능한 기능입니다.",
        });
        return;
    }

    try {
        // 복호화 및 검증
        const { userId } = jwt.verify(authToken, "customized-secret-key");
        const user = await User.findById(userId);
        res.locals.user = user;

        next();
    } catch (err) {
        console.error(err);
        res.status(401).send({
            errorMessage: "로그인 후 이용 가능한 기능입니다.",
        });
    }
};
