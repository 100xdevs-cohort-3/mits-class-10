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
            <div style={{
                display: "flex", justifyContent: "center"
            }}>
                <input style={{
                    margin: 20,
                    padding: 10
                }} id="todo" type="text" placeholder="todo" />
                <div style={{display: "flex", flexDirection: "column", justifyContent: "center"}}>
                    <button onClick={addTodo}>Submit todo</button>
                </div>
            </div>

            <div style={{
                display: "flex",
                justifyContent: "center"
            }}>
                <input style={{
                    margin: 20,
                    padding: 10
                }} placeholder="Search" />
            </div>


            <div style={{
                display: "flex",
                justifyContent: "center"
            }}>
                <div>
                    {todos.map(todo => <div> <div>
                        {todo}
                    </div>
                    <br/>
                    </div>)}
                </div>
            </div>

        </div>
    )
}

export default Dashboard;