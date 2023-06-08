import React, { useState, useEffect } from 'react';
import '../App.css';
import apiClient from '../apiClient';
import { useNavigate } from 'react-router-dom';


function TodoList() {
  const [todo, setTodo] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [editTodo, setEditTodo] = useState(null);
  const baseURL = apiClient('https://todo.stage.dudaji.com');
//   const baseURL = apiClient('http://localhost:8080');
  const navigate = useNavigate();

  useEffect(() => {
    fetchTodo();
  }, []);

  const fetchTodo = async () => {
    try {
      const response = await baseURL.get('/api/v1/todo');
      setTodo(response.data);
    } catch (error) {
      console.log(error);
    }
  };


  const handleInputChange = (e) => {
    
  };

  const handleAddTodo = () => {
    
  };

  const handleEditTodo = () => {
  };

  const handleCancelEdit = () => {
  };

  const handleUpdateTodo = () => {
    
  };

  const handleItemClick = () => {
    
  };

  const handleDeleteTodo = () => {
    
  };

  return (
    <div className="App">
      <div className="App-header">
        <h1>Todo List</h1>
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Enter a todo..."
        />
        {editTodo !== null ? (
          <>
            <button onClick={handleUpdateTodo}>Update</button>
            <button onClick={handleCancelEdit}>Cancel</button>
          </>
        ) : (
          <button onClick={handleAddTodo}>Add</button>
        )}
        <ul>
        {todo.map((item) => (
            <li key={item.id} onClick={() => handleItemClick(item)}>
                {item.name}
                <div>
                <button onClick={(event) => {
                    event.stopPropagation();
                    handleEditTodo(item);
                }}>Edit</button>
                <button onClick={(event) => {
                    event.stopPropagation();
                    handleDeleteTodo(item.id);
                }}>Delete</button>
                </div>
            </li>
            ))}
        </ul>
      </div>
    </div>
  );
}

export default TodoList;