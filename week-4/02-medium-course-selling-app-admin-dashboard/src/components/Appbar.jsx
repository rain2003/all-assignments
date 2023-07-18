/* eslint-disable no-unused-vars */
import React from "react";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Card from '@mui/material/Card';

function Appbar(){
return <div style={{
    display : 'flex',
    justifyContent : 'space-between'
}}>
    <h2>Coursera</h2>
    <div style={{
        display : 'flex'
    }}>
        <div style={{
            marginRight : '20px'
        }}>
        <Button variant="contained"
        onClick={()=>{
            window.location = '/register'
        }}
        >Sign Up</Button>
        </div>
        <div>
        <Button variant="contained"
        onClick={()=>{
            window.location = '/login'
        }}
        >Sign In</Button>
        </div>
    </div>
</div>

}

export default Appbar;