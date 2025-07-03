import axios from "axios";

export function useTodos() {
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:3000/todos", {
            headers: {
                token: localStorage.getItem("token")
            }
        }).then(res => {
            setTodos(res.data.todos);
        })
    }, [])

    return [todos, setTodos];

}
