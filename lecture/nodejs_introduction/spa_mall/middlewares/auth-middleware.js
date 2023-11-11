// middlewares/auth-middleware.js

const jwt = require("jsonwebtoken");
const User = require("../schemas/user");

// 사용자 인증 미들웨어
module.exports = async (req, res, next) => {
    const { Authorization } = req.cookies;
    console.log(Authorization);
    const [authType, authToken] = (Authorization ?? "").split(" ");

    if (!authToken || authType !== "Bearer") {
        res.status(401).send({
            errorMessage: "로그인 후 이용 가능한 기능입니다.",
        });
        return;
    }

    try {
        console.log(userId);
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
