import React, { useState, useEffect } from "react";
import '../App.css';

function TodoList() {
  const [todoList, setTodoList] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [editTodo, setEditTodo] = useState(null);

  const fetchTodoList = () => {}

  const handleInputChange = () => {}

  const handleAddTodo = () => {}

  const handleEditTodo = () => {};

  const handleCancelEdit = () => {}

  const handleUpdateTodo = () => {};

  const handleClickTodo = () => {};  

  const handleDeleteTodo = () => {};

  useEffect(() => {
    fetchTodoList();
  }, [todoList]);

  useEffect(() => {
    fetchTodo();
  }, []);

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
        <ul>{todoList.map((item) => (<li key={item.id} onClick={() => handleClickTodo(item)}>
                {item.name}<div>
                <button onClick={(event) => {
                    event.stopPropagation();
                    handleEditTodo(item);
                  }}
                >
                  Edit
                </button>
                <button
                  type="button"
                  onClick={event => {
                    event.stopPropagation();
                    handleDeleteTodo(item.id);
                  }}
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default TodoList;
