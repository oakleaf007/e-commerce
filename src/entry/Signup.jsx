import "./signin.css";

import { Link } from "react-router-dom";
export default function Signup(){
    return(
        <div id="form-parent">
            <div id="form-container">
                <h1>Hello cockroach!</h1>
                <h2>Create your account...</h2>
                <form>
                    <input type="text" placeholder="Email"/>
                      <input type="name" placeholder="Name"/>
                    <input type="password" placeholder="password" />
                      <input type="password" placeholder="Confirm password" />

                    <div id="check"> <input type="checkbox" /><span>Password visibility</span></div>
                    <button>Login</button>
                    <span>Already have an account? <Link to="/signin">Signin</Link></span>
                </form>
            </div>
        </div>
    )
}