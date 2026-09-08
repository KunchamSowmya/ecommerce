import React from 'react'
import { useState } from 'react'
import './Login.css'
function Login() {

    let [email,setEmail]=useState("")
    let [password,setPassword]=useState("")

    function submitForm(e){
        e.preventDefault()
        alert(`${email} ${password}`)

    }
  return (
    <div>
        <h1>Login</h1>
        <form onSubmit={(e)=>submitForm(e)}>
            
            <div>
                <span>Email:</span>
                <input 
                type="email" 
                name="email"
                 placeholder=" Enter your Email"
                 onChange={(e)=>setEmail(e.target.value)}
                 
                />
            </div>
            <br/>
            <div>
                <span>Password:</span>
                <input 
                type="password" 
                name="password" 
                placeholder=" Enter your Password"
                onChange={(e)=>setPassword(e.target.value)}
                />
            </div>
            <button>submit</button>
        </form>
    </div>
  )
}

export default Login