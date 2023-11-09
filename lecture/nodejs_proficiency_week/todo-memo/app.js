const express = require("express");

const db = require("./models/index.js");
const todosRouter = require("./routes/todos.router.js");

const app = express();

// router.get()은 앞에 /api의 주소가 붙었을 때 get method를 호출하게 되면은 해당하는 api가 실행된다.
app.use("/api", express.json(), todosRouter);
// app.use()를 사용해 middleware 생성하고 /api의 이름으로 들어왔을 때에는 그다음으로 express.json()을 거치게 되고 해당하는 router로 찾아가게 한다.
// express.json() : middle ware, body로 들어오는 data, post, put, delete 와 같이 body로 들어오는 data에 대해서 사용할 수 있도록 해준다.

// express.static : 정적인 파일들을 연결해주는 middleware
// 이 미들웨어가 특정 주소로 들어왔을 때에는  만약에 해당하는 주소가 assets라는 폴더안에 있다면은 그 파일을 전송해줘라는 의미
app.use(express.static("./assets"));

app.listen(8080, () => {
    console.log("서버가 켜졌어요!");
});
