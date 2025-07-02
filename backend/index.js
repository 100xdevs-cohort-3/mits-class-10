const express = require("express")
const cors = require("cors")
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const { CreateUserInput, SigninInput, TodoInput } = require("./types");
const { UserModel } = require("./models");
// Input sanitation

mongoose.connect("mongodb+srv://kirags123:scrPUH1eX1Prc0gn@todo-app.aatocrp.mongodb.net/todo-app-hkirat")

const app = express();
app.use(cors());
app.use(express.json());


app.post("/signup", function(req, res) {
    const response = CreateUserInput.safeParse(req.body);

    if (!response.success) {
        return res.json({
            message: "Incorrect inputs"
        })
    }

    const {username, password} = req.body;

    UserModel.create({
        username: username,
        password: password,
        todos: []
    }).then(function() {
        res.json({
            message: "Signed up"
        })
    })
})

app.post("/signin", function(req, res) {
    const {username, password} = req.body;
    // let user = users.find(u => u.username == username && u.password == password);
    UserModel.findOne({
        username: username,
        password: password
    }).then(function(user) {
        console.log(user);
        
        if (!user) {
            return res.status(403).json({
                message: "Incorrect creds"
            })
        } else {
            let token = jwt.sign(user.username, "123random");
            res.json({
                token
            })
        }
    })
    
})

app.post("/todos", function(req, res) {
    const token = req.headers.token;
    let todo = req.body.todo;
    let username = jwt.verify(token, "123random");

    UserModel.findOne({
        username: username,
    }).then(function(user) {
        console.log(user);
        user.todos.push({
            title: todo
        })
        user.save()

        res.json({
            message: "Todo added"
        })
    })
})

app.get("/todos", function(req, res) {
    const token = req.headers.token;
    let username = jwt.verify(token, "123random");
    
    UserModel.findOne({
        username: username,
    }).then(function(user) {
        res.json({
            todos: user.todos.map(t => t.title)
        })
    })
})

app.listen(3000);