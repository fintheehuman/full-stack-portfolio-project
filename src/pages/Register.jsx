import React from "react";

const Register = () => {
    return (
        <div className="registration">
        <h1>Login</h1>
        <form>
            <input required type="text" placeholder="username" />
            <input required type="email" placeholder="email" />
            <input  required type="password" placeholder="password" />
            <button>Register</button>
            <p> This is an error!</p>
            <span>Already have an account?  <a href="/login"> Login here. </a> </span>
        </form>
    </div>
    )
}

export default Register;