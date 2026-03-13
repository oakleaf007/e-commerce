import "./signin.css";
import { Link,useNavigate } from "react-router-dom";

import { AuthContext } from "../context/AuthContext";
import { useContext, useState } from "react";


export default function Signin(){

    const { login} = useContext(AuthContext);
    const navigate = useNavigate();
    const [form, setForm] = useState({
        email:"",
        password: ""
    });
    const [message, setMessage] = useState({
        text: "",
        type: ""
    });

    function handleChange(e){
        setForm({
            ...form,
           [e.target.name]: e.target.value
        });
    }

 async function handleSubmit(e){
        e.preventDefault();

        try{
            const res = await fetch("http://localhost:3000/api/v1/signin",{
                method: "POST",
                headers:{"Content-Type": "application/json"},
                body: JSON.stringify(form)

            });

            const data = await res.json();
            if(res.ok){
                setMessage({text: data.message, type: "success"});
                login(data.token);
            }
            else{
                setMessage({text: data.message, type: "error"});
            }

        }catch(err){
            console.error(err);
        }
    }


    return(
        <div id="form-parent">
            <div id="form-container">
                <h1>Welcome Back</h1>
                <h2>Please login to your account</h2>
                <form onSubmit={handleSubmit}>
                    <input type="email" placeholder="email" name="email" value={form.email} onChange={handleChange}/>
                  
                    <input type="password" placeholder="password" name="password" value={form.password} onChange={handleChange}/>
                  
                   

                    <div id="check"> <input type="checkbox" /><span>Password visibility</span></div>
                    <div id="message" className={message.type}>{message.text}</div>
                    <button>Login</button>
                    <span>Don't have an account? <Link to="/signup">Signup</Link></span>
                </form>
            </div>
        </div>
    )
}