const Sequelize = require('sequelize');
const { Todo } = require('./todo');

const sequelize = new Sequelize(
    "todo",
    "root",
    "suho4029",
    {
        port : 3306,
        dialect : "mysql"
    }

)


const db = {
    Todo : Todo.init(sequelize)
}

module.exports = db;

sequelize.sync({force : false}).then(() => {
    console.log("db 연결 성공");
})