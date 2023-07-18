/* eslint-disable no-unused-vars */
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from "react";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Card from '@mui/material/Card';

/// This is the landing page. You need to add a link to the login page here.
/// Maybe also check from the backend if the user is already logged in and then show them a logout button
/// Logging a user out is as simple as deleting the token from the local storage.
function Landing() {
    return <center>
    <h1 style={{ marginTop: "200px"}} >Welcome to course selling website!</h1>
    <Card variant="outlined" style={{
        width : '40%',
        display : 'flex',
        flexDirection: 'column-reverse',
        
    }}>
        <Button variant="contained" style={{
            marginTop : '30px',
        }}onClick={()=>{
            window.location = '/login'
        }}
        >Sign In</Button>
        <Button variant="contained" style={{
            marginTop : '30px',
        }} onClick={()=>{
            window.location = '/register'
        }}
        >Sign Up</Button>
    </Card>
    </center>
    
}

export default Landing;