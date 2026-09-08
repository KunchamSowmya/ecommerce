import React from 'react'
import { useState } from 'react'
import './Signup.css'

function Signup() {
    let [name,setName]=useState("")
    let [rollNo,setRollNo]=useState("")
    let [email,setEmail]=useState("")
    let [password,setPassword]=useState("")

    function submitForm(e){
        e.preventDefault()
        alert(`${name} ${rollNo} ${email} ${password}`)

    }
  return (
    <div>
        <h1>Signup</h1>
        <form onSubmit={(e)=>submitForm(e)}>
            
            <div>
                <span>Name:</span>
                <input 
                type="name" 
                name="name"
                 placeholder=" Enter your Name"
                 onChange={(e)=>setName(e.target.value)}
                 
                />
            </div>
            <br/>
            <div>
                <span>Roll No:</span>
                <input 
                type="rollNo" 
                name="rollNo"
                 placeholder=" Enter your Roll No"
                 onChange={(e)=>setRollNo(e.target.value)}
                 
                />
            </div>
            <br/>
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

export default Signup