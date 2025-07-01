const express = require("express")
const cors = require("cors")
const jwt = require("jsonwebtoken");
// routing in express
// in memory DB (MYSQL< POSTGRE, MOngoDB)
let users = [];

const app = express();
app.use(cors());
app.use(express.json());

app.post("/signup", function(req, res) {
    const {username, password} = req.body;
    users.push({
        username,
        password,
        todos: []
    })    
    res.json({
        message: "Signed up"
    })
})

app.post("/signin", function(req, res) {
    const {username, password} = req.body;
    let user = users.find(u => u.username == username && u.password == password);
    if (!user) {
        return res.status(403).json({
            message: "Incorrect creds"
        })
    } else {
        let token = jwt.sign(username, "123random");
        res.json({
            token
        })
    }
})

app.post("/todos", function(req, res) {
    const token = req.headers.token;
    let todo = req.body.todo;
    let username = jwt.verify(token, "123random");
    let user = users.find(u => u.username == username);
    if (!user) {
        return res.status(403).json({
            message: "Unauthenticated"
        })
    } else {
        user.todos.push(todo);
        res.json({
            message: "Todo added"
        })
    }
})

app.get("/todos", function(req, res) {
    const token = req.headers.token;
    let username = jwt.verify(token, "123random");
    let user = users.find(u => u.username == username);
    
    if (!user) {
        return res.status(403).json({
            message: "todos not found"
        })
    } else {
        res.json({
            todos: user.todos
        })
    }
})

app.listen(3000);