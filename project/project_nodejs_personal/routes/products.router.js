const express = require("express");
const router = express.Router();

const goods =
    // 해당 goods.js를 module화(modularize) 하고 해당 javascript파일을 router로써 사용하기 위함(app.js와 같은 여러 곳에서 사용 가능)
    (module.exports = router);
