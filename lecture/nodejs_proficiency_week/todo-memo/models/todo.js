const mongoose = require("mongoose");
const router = require("../routes/todos.router");
const TodoSchema = new mongoose.Schema({
    value: String, // 할일이 어떤 것인지 확인하는 컬럼
    doneAt: Date, // 할일이 언제 완료되었는지,
    order: Number, // 몇번째 할일인지
});

// 프론트엔드를 사용하기 위해 추가해야할 것! -> TodoSchema.virtual()
// 단순히 데이터를 조회했을 때, 자동적으로 생성되는 가상의 컬럼이다.
// todoId라는 가상의 컬럼 생성
// 만약에 todoId이라는 것을 가지고 올려고 했었을 때, 나는 해당하는 값을 어떤 식으로 전달할 것이다.
TodoSchema.virtual("todoId").get(function () {
    // _id : mongodb에서 어떤 특정한 고유한 값
    // _id에 해당하는 값을 todoId 가상의 컬럼으로 만들어서 사용자들에게 보여줄 것이다.
    // 아래와 같이 그냥 return this._id라고 내보냈을때 에러가 발생하는 문제로 이어질 수 있으므로 retrun this._id.toHexString(); 으로 작성
    return this._id.toHexString();
});

// 위에 TodoSchema.virtual을 사용하기 위해서는 TodoSchema.set()을 사용
// 어떤 타입으로 변경했을 때 보여 줄것이냐를 설정해 줄수 있다.
TodoSchema.set("toJSON", {
    virtuals: true,
});

module.exports = mongoose.model("Todo", TodoSchema);
