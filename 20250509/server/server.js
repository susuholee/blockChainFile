const express = require("express");
const cors = require('cors');
const { Todo } = require('./Models/config');
const { where } = require("sequelize");
const app = express();

app.use(express.json()); 
app.use(express.urlencoded({extended : false}));
app.use(cors({origin : "*"})) // * : 모든 경로 허용

// todo-List 추가
app.post('/create', async (req, res) => {
    try {
        const { name } = req.body;
        await Todo.create({ name });
        res.json({state : 200, message: "글 등록 성공"})
    } catch (error) {
        res.json({error});
    }
})


// todo-List 조회
app.get('/read', async (req, res) => {
    try {
        const data = await Todo.findAll();
        setTimeout(() => {
            res.json({data, state: 200});
        }, 2000);
    } catch (error) {
        res.json({error})
    }
})

// todo-List 수정
app.put('/update', async (req, res) => {
    try {
        const { id, name} = req.body;
            await Todo.update(
            {name},
            {where : {id}}
        );
          res.json({state : 200, message: "글 수정 성공"})
    } catch (error) {
        res.json({error})
    }
})

app.delete('/delete', async (req, res) => {
    try {
        const { id } = req.body;
        await Todo.destroy({
            where : {id}
        })
        res.json({state : 200, message: "글 삭제 성공"})
    } catch (error) {
        res.json({error})
    }
})


app.listen(4000, () => {
    console.log("서버 동작중..")
})