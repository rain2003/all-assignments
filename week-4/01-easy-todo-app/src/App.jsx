/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useState } from 'react'
import './App.css'
import { useEffect } from 'react'

function App() {
  //state variables
  const [title , setTitle] = useState("");
  const [description , setDesc] = useState("");

  return (
      <div style={{fontSize : "20px"}}>
        <h1>Easy Todo App</h1>
        <div style={{
          display : 'flex' , 
          flexDirection : 'column' , 
          width : 400,
        }}>

        <input style={{
          marginBottom : "15px",
          fontSize : "20px"}} 
          type="text" placeholder='title' 
          //using onchange to change the title as the user changes it
          onChange={(e)=>{
            setTitle(e.target.value);
          }} />
        
        <input style={{fontSize : "20px"}}
        type="text" placeholder='message' 
        // using onchang to change the message as the user changes it 
        onChange={(e)=>{
          setDesc(e.target.value);
        }} />
        </div>
        <button style={{fontSize : 14 , marginTop : 15}} 
        //sending request to backend for adding a new todo
        onClick={()=>{
          fetch("http://localhost:3000/todos" , {
            method : "POST",
            body : JSON.stringify({
              title : title ,
              description : description
            }),
            headers : {
              "Content-type" : "application/json"
            }
          })  
        }}
        >Send</button>
          <ListTodos/>
          
        {/* <ListTodos/> */}
      </div>
    
  )
}

// code for getting all the stored todos
function ListTodos() {
  const [todos, setTodos] = useState([]);

  useEffect(()=>{
    fetch("http://localhost:3000/todos" , {
      method : "GET"
    }).then((res)=>{
      res.json().then((data)=>{
        setTodos(data);
      })
    })  
  })

  return (
    <div>
      <h3>Your Todos List</h3>
      <ul>
        {todos.map((todo,index) =>(
          <div key = {todo.id} 
          style={{
            marginTop : "10px"
          }}>
          <li>
            Id :-  {todo.id}
            <br />
            Title :-  {todo.title}
            <br />
            Message :- {todo.description} 
            <button 
            style={{marginLeft:"9px" , 
            fontSize : "15px"
            }}
            //calling the deleteTodo function which in turn sends the request to the backend
            onClick={() => deleteTodo(todo.id)}
            >Delete</button>
          </li>
          </div>
        ))}
      </ul>
    </div>
  );
}

//code for deleting the todos
function deleteTodo(props){
  fetch("http://localhost:3000/todos/" + props ,{
    method : "DELETE",
  })
}


export default App
