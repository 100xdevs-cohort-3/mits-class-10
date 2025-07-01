import axios from "axios";

// Signup page, Signin page, create a todo

// DONT fetch todos in the dashboard compoennt yet
function Signin() {

    function signin() {
        axios.post("http://localhost:3000/signin", {
            username: document.getElementById("username").value, // refs in react
            password: document.getElementById("password").value,
        }).then(function(res) {
            localStorage.setItem("token", res.data.token)
            window.location = "/dashboard"
        })
    }

    return (
        <div>
            <input id="username" type="text" placeholder="Username" />
            <input id="password" type="text" placeholder="Password" />
            <button onClick={signin}>Sign in</button>
        </div>
    )
}

export default Signin;