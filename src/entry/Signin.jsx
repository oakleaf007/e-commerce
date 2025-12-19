import "./signin.css";

export default function Signin(){
    return(
        <div id="form-parent">
            <div id="form-container">
                <h1>Welcome Back</h1>
                <h2>Please login to your account</h2>
                <form>
                    <input type="text" placeholder="email"/>
                    <input type="password" placeholder="password" />
                   

                    <div id="check"> <input type="checkbox" /><span>Password visibility</span></div>
                    <button>Login</button>
                    <span>Don't have an account? <a href="">Signup</a></span>
                </form>
            </div>
        </div>
    )
}