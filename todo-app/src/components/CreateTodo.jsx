
export function CreateTodo({todos, setTodos}) {

    function addTodo() {
        axios.post("http://localhost:3000/todos", {
            todo: document.getElementById("todo").value
        }, {
            headers: {
                token: localStorage.getItem("token")
            }
        })
        setTodos([...todos, document.getElementById("todo").value])


    }

    return <div>
        <input id="todo" type="text" placeholder="todo" />
        <button onClick={addTodo}>Add todo</button>
    </div>
}
