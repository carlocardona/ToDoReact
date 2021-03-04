import './App.css';
import Form from './components/Form'
import TodoList from './components/TodoList'
import React, { useState } from 'react'

function App() {

  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);

  return (
    <div className="App">
      <header>
        <h1>To Do List</h1>
      </header>
      <Form inputText = {inputText}/>
      <TodoList />
    </div>
  );
}

export default App;
