import React from "react";


const Login = () => {
    return (
        <div className="authentication">
            <h1>Login</h1>
            <form>
                <input type="text" placeholder="username" />
                <input type="password" placeholder="password" />
                <button>Login</button>
                {/* <p> This is an error!</p> */}
                <span>Don't have an account?  <a href="/register"> Click here to register. </a> </span>
            </form>
        </div>
    )
}

export default Login;