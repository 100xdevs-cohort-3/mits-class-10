const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    username: String,
    password: String,
    todos: [{ title: String }],
})

module.exports = {
    UserModel : mongoose.model('users', UserSchema)
}
