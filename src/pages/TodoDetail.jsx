import React from 'react';
import { useLocation } from 'react-router-dom';

function TodoDetail() {
  const location = useLocation();
  const todo = location.state;

  return (
    <div>
      <h2>Todo Detail</h2>
      <p>Name: {todo.name}</p>
      <p>Status: {todo.status}</p>
      <p>Description: {todo.description}</p>
    </div>
  );
}

export default TodoDetail;
