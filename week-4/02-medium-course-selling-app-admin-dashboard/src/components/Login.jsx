/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Card from '@mui/material/Card';
/// File is incomplete. You need to add input boxes to take input for users to login.
function Login() {
    const [email , setEmail] = useState("");
    const [password, setPassword] = useState("");

    return <div>
        <div style={{
            marginTop : 150 ,
            display : 'flex',
            justifyContent : 'center',
        }}>
        
        <h1 >Welcome to course selling website!</h1>
        </div>
        <div style={{
            display : 'flex',
            justifyContent : 'center',
            padding : 20,
            height : "250px",
        }}>
        <Card variant="outlined" style={{
            width : '30%',
            padding: 20,
            display : 'flex',
            flexDirection : 'column'
            }}>
                <TextField id="outlined-basic" label="Email" variant="outlined" 
                onChange={(e)=>{
                    setEmail(e.target.value);
                }}
                />
                <br />
                <TextField id="outlined-basic" label="Password" variant="outlined"
                onChange={(e)=>{
                    setPassword(e.target.value);
                }}
                />
            <br />
            
            <Button variant="contained" style={{
                marginTop : '30px',
                width : 'fit-content'
            }}
            onClick={()=>{
                fetch("http://localhost:3000/admin/login" ,{
                    method : "POST",
                    headers : {
                        "Content-type" : "application/json",
                        username : email,
                        password : password
                    }
                }).then((res)=>{
                    res.json().then((data)=>{
                        localStorage.setItem("token" ,data.token)
                    })
                })
            }}
            >Sign In</Button>
        </Card>
        </div>
    </div>
    
}

export default Login;