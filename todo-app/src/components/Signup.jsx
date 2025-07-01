import axios from "axios";

function Signup() {

    function signup() {
            axios.post("http://localhost:3000/signup", {
                username: document.getElementById("username").value,
                password: document.getElementById("password").value,
            }).then(function() {
                window.location = "/signin"
            })
        }
    
        return (
            <div>
                <input id="username" type="text" placeholder="Username" />
                <input id="password" type="text" placeholder="Password" />
                <button onClick={signup}>Sign up</button>
            </div>
        )
    }
    
    export default Signup;