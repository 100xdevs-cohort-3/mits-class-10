import axios from "axios";
import { useEffect, useState } from "react";


function Dashboard() {
    const [todos, setTodos] = useState([]);

    useEffect(function() {
        axios.get("http://localhost:3000/todos", {
            headers: {
                token: localStorage.getItem("token")
            }
        }).then(function(res) {
            setTodos(res.data.todos);
        })
    
    }, [])

    function addTodo() {
        let todo = document.getElementById("todo").value;
        setTodos([...todos, todo]);
        axios.post("http://localhost:3000/todos", {
            todo
        }, {
            headers: {
                token: localStorage.getItem("token")
            }
        })
    }

    return (
        <div>
            <input id="todo" type="text" placeholder="todo" />
            <button onClick={addTodo}>Submit todo</button>

            <div>
                {todos.map(todo => <div>
                    {todo}    
                </div>)}
            </div>

        </div>
    )
}

export default Dashboard;