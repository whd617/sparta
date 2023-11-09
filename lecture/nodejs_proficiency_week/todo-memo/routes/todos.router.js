const express = require("express");
const Todo = require("../models/todo.js");

const router = express.Router();

router.get("/", (req, res) => {
    res.send("Hi!");
});

router.post("/todos", async (req, res) => {
    const { value } = req.body;

    // 이미 data에 order값이 있는지 확인하는 작업
    // 현재 존재하는 data들 중에 한개를 조회
    // 어떤 순서로 조회를 할 것이냐? : .sort("-order") -> order값을 역순으로 조회를 할 것이다.
    // .exec로 데이터를 조회
    const maxOrderByUserId = await Todo.findOne().sort("-order").exec();
    const order = maxOrderByUserId
        ? maxOrderByUserId.order + 1 // maxOrderByUserId 있을 때,
        : 1; // maxOrderByUserId 가 없을 때

    // 실제로 order값을 기반으로 data를 생성할 때
    const todo = new Todo({ value: value, order: order });
    await todo.save();

    res.send({ todo });
});

router.get("/todos", async (req, res) => {
    // mongoDB에 있는 데이터를 조회
    // 해당 데이터는 const Todo = require("../models/todo.js"); 에 존재하므로 Todo를 사용하여 find()로 조회할 것임
    // 불러오는 방식이 오름차순 sort("조회를 할 컬럼"), sort("-조회를 할 컬럼") 조회를 할 컬럼을 기준으로 내림차순
    const todos = await Todo.find().sort("-order").exec();

    res.send({ todos: todos });
});

router.patch("/todos/:todoId", async (req, res) => {
    const { todoId } = req.params;
    const { order } = req.body; // targetTodo: 345

    // 1. todoId에 해당하는 할 일이 있는가?
    // 1-1. todoId에 해당하는 할 일이 없으면, 저희는 에러를 출력해야합니다.
    // .findById는 MongoDB에서 즉 studio 3T에서 _id를 확인했을 때 해당하는 값을 찾을 때 사용
    const currentTodo = await Todo.findById(todoId); //currentTodo: 123
    if (!currentTodo) {
        return res.status(400).json({ errorMessage: "존재하지 않는 할 일 입니다." });
    }

    if (order) {
        const targetTodo = await Todo.findOne({ order: order }).exec(); // targetTodo: 345
        // 두 가지를 바꾸려 할 때에는 만약 내가 바꾸려는 대상이 존재한다면은 그 대상부터 변경하고
        if (targetTodo) {
            // 2 -> 1
            targetTodo.order /* targetTodo.order: 123 */ = currentTodo.order; //currentTodo:123;
            await targetTodo.save(); // targetTodo: 123 으로 저장된다.
        }
        // 1 -> 2
        // 그 다음 대상을 수정을 한다
        currentTodo.order /* targetTodo: 345 */ = order; // targetTodo: 345
        await currentTodo.save(); //targetTodo: 345
    }
    res.send();
});

module.exports = router;
