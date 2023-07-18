/* eslint-disable no-unused-vars */
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React, { useState } from "react";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Card from '@mui/material/Card';
/// You need to add input boxes to take input for users to create a course.
/// I've added one input so you understand the api to do it.
function CreateCourse() {
    const [title , setTitle] = useState('');
    const [description , setDescription] = useState('');

    return <div>
    <div style={{
        marginTop : 90 ,
        display : 'flex',
        justifyContent : 'center',
    }}>
    
    <h2>Hello there, please enter the title and description of the course</h2>
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
            
            <TextField id="outlined-basic" label="Title" variant="outlined" onChange={(e)=>{
               setTitle(e.target.value);
            }}/>
            <br />
            <TextField id="outlined-basic" label="Description" variant="outlined" onChange={(e)=>{
                setDescription(e.target.value);
            }}/>
        <br />
        
        <Button variant="contained" style={{
            marginTop : '30px',
            width : 'fit-content'
        }}
        onClick={()=>{
            fetch("http://localhost:3000/admin/courses" ,{
                method : "POST",
                body : JSON.stringify({
                    title : title,
                    description : description,
                    imageLink : "",
                    published : true
                }),
                headers : {
                    "Content-type" : "application/json",
                    "Authorization" : "Bearer " + localStorage.getItem("token")
                }
            })
        }}
        >ADD</Button>
    </Card>
    </div>
</div>
}
export default CreateCourse;