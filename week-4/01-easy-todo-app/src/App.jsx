/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useState } from 'react'
import './App.css'
import { useEffect } from 'react'
import axios from "axios"

function App() {
  
  return (
      <div>
        <h1>Easy Todo App</h1>
        <input type="text" />
        <ListTodos/>
      </div>
    
  )
}

function ListTodos() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetchTodos();
  }, []);

  const fetchTodos = async () => {
    try {
      const response = await axios.get('http://localhost:3000/todos');
      setTodos(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <h3>Todos List</h3>
      {console.log(todos)}
      <ul>
        {todos.map((todo) =>{
          return <div>
            <li>{todo.title}</li>
            <li>{todo.messgae}</li>
          </div>
        })}
      </ul>
    </div>
  );
}


function Todo(props) {
    // Add a delete button here so user can delete a TODO.
    return <div>
        {props.title}
    </div>
}

export default App
