const mongoose = require("mongoose");

const connect = () => {
    mongoose
        .set("strictQuery", true)
        .connect(
            "mongodb+srv://user:8myK2JvctvVnHGvW@cluster0.ace49sq.mongodb.net/project_spa?retryWrites=true&w=majority"
        )
        .catch((err) => console.log(err));
};

mongoose.connection.on("error", (err) => {
    console.error("몽고디비 연결 에러", err);
});

module.exports = connect;
