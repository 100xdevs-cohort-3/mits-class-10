import { useTodos } from "../hooks/useTodos";
import { CreateTodo } from "./CreateTodo";
import { Todos } from "./Todos";

function Dashboard() {
    const [todos, setTodos] = useTodos();
    
    return <div>
        <CreateTodo todos={todos} setTodos={setTodos} />
        <Todos todos={todos} />
    </div>
}


export default Dashboard;
