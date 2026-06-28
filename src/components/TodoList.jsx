import React from "react";
import { useState } from "react";
import { v4 as uuid } from "uuid";
import { TiTrash, TiTick } from "react-icons/ti";

function TodoList() {
  const [task, setTask] = useState("");
  const [todos, setTodos] = useState([]);

  // Add Task
  const addTask = () => {
    if (task.trim() === "") return;

    const newTodo = {
      id: uuid(),
      text: task,
      completed: false,
    };

    setTodos([...todos, newTodo]);
    setTask("");
  };

  // Delete Task
  const deleteTask = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  // Toggle Complete
  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo,
      ),
    );
  };

  return (
    <div style={{ padding: "20px", maxWidth: "400px", margin: "auto" }}>
      <h2>Todo List</h2>

      <input
        type="text"
        placeholder="Enter a task"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />

      <button onClick={addTask}>Add</button>

      <ul style={{ listStyle: "none", padding: 0 }}>
        {todos.map((todo) => (
          <li
            key={todo.id}
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginTop: "10px",
              border: "1px solid #ccc",
              padding: "8px",
            }}
          >
            <span
              style={{
                textDecoration: todo.completed ? "line-through" : "none",
              }}
            >
              {todo.text}
            </span>

            <div>
              <button onClick={() => toggleComplete(todo.id)}>
                <TiTick />
              </button>

              <button onClick={() => deleteTask(todo.id)}>
                <TiTrash />
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
