const zod = require("zod");

const CreateUserInput = zod.object({
    username: zod.string().max(20).min(3),
    password: zod.string().max(20).min(4)
})

const SigninInput = zod.object({
    username: zod.string().max(20).min(3),
    password: zod.string().max(20).min(4)
})

const TodoInput = zod.object({
    todo: zod.string()
})

module.exports = {
    TodoInput,
    CreateUserInput,
    SigninInput
}