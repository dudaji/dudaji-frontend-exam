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
    setInputValue(e.target.value);
  };

  const handleAddTodo = async () => {
    if (inputValue.trim() !== '') {
      try {
        const newTodo = {
          name: inputValue,
          status: 'proceeding',
          description: inputValue,
        };
        await baseURL.post('/api/v1/todo', newTodo);
        setInputValue('');
        fetchTodo();
      } catch (error) {
        console.log(error);
      }
    }
  };

  const handleEditTodo = (todo) => {
    setEditTodo(todo);
    setInputValue(todo.name);
  };

  const handleCancelEdit = () => {
    setEditTodo(null);
    setInputValue('');
  };

  const handleUpdateTodo = async () => {
    if (inputValue.trim() !== '' && editTodo !== null) {
      try {
        const updatedTodo = { ...editTodo, name: inputValue };
        await baseURL.put(`/api/v1/todo`, updatedTodo);
        setInputValue('');
        setEditTodo(null);
        fetchTodo();
      } catch (error) {
        console.log(error);
      }
    };
  };

  const handleItemClick = (item) => {
    navigate(`/TodoDetail/${item.id}`, {state : item});
  };

  const handleDeleteTodo = async (id) => {
    try {
      await baseURL.delete(`/api/v1/todo/${id}`);
      fetchTodo();
      setInputValue('');
      setEditTodo(null);
    } catch (error) {
      console.log(error);
    }
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