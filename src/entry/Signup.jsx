import "./signin.css";
import { useState } from "react";


import { Link } from "react-router-dom";




export default function Signup(){
const [form, setForm]= useState({
    name: "",
    email:"",
    password: ""
});

const [message, setMessage] = useState({
    text:"",
    type:""
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
        const res = await fetch("http://localhost:3000/api/signup",{
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(form)
        });

        const data = await res.json();
        if(res.ok){ setMessage({text: data.message, type: "success"});


        }else{
            setMessage({text: data.error || data.message || "Signup failed", type:"error"});
        }
    }catch(err){
        setMessage("server error");
    }
}








    return(
        <div id="form-parent">
            <div id="form-container">
                <h1>Hello cockroach!</h1>
                <h2>Create your account...</h2>
                <form onSubmit={handleSubmit}>
                    
                      <input type="text" placeholder="Name"name="name" value={form.name} onChange={handleChange}/>
                      <input type="text" placeholder="Email" name="email" value={form.email} onChange={handleChange}/>
                    <input type="password" placeholder="password" name="password" value={form.password} onChange={handleChange}/>
                      <input type="password" placeholder="Confirm password" />

                    <div id="check"> <input type="checkbox" /><span>Password visibility</span></div>
                    <div id="message" className={message.type}>{message.text}</div>
                    <button>Login</button>
                    <span>Already have an account? <Link to="/signin">Signin</Link></span>
                </form>
            </div>
        </div>
    )
}