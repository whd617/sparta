async function main() {
    const jwt = require("jsonwebtoken");

    // jwt.sign을 하게 되면은 jwt 토큰을 만들 수 있다.
    const token = jwt.sign(
        { myPayloadData: 1234 }, // jwt를 이용해서 payload 설정하는 부분
        "mysecretkey", // jwt를 이용해서 암호화를 하기 위한 비밀키
        { expiresIn: "1s" }
    );
    // console.log(token); // eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJteVBheWxvYWREYXRhIjoxMjM0LCJpYXQiOjE2Njc1NjE0NDB9.nvYSsLsT8jp7IfkbB2seCNeuLqRBgrrzDjKRFXjvoUE

    setTimeout(() => {
        const decodeToken = jwt.decode(token); // jwt의 Payload를 확인하기 위해 사용한다.
        // console.log(decodeToken);

        // 1. 암호화 할 때 사용한 비밀키가 일치하는 검증
        // 2. 해당하는 jwt가 만료되었는지 검증
        const verifyToken = jwt.verify(token, "mysecretkey");
        console.log(verifyToken);
    }, 1500);
}

main();
