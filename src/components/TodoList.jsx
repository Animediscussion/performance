import React, { useReducer, useState } from "react";
import { v4 as uuid } from "uuid";
import { TiTrash, TiTick } from "react-icons/ti";

// Reducer
const taskReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TASK":
      return [
        ...state,
        {
          id: uuid(),
          text: action.payload,
          completed: false,
        },
      ];

    case "REMOVE_TASK":
      return state.filter((todo) => todo.id !== action.payload);

    case "DONE_TASK":
      return state.map((todo) =>
        todo.id === action.payload
          ? { ...todo, completed: !todo.completed }
          : todo,
      );

    default:
      return state;
  }
};

function TodoList() {
  const [task, setTask] = useState("");
  const [todos, dispatch] = useReducer(taskReducer, []);

  // Add Task
  const addTask = () => {
    if (task.trim() === "") return;

    dispatch({
      type: "ADD_TASK",
      payload: task,
    });

    setTask("");
  };

  return (
    <div style={{ padding: "20px", maxWidth: "400px", margin: "auto" }}>
      <h2>Todo List (useReducer)</h2>

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
              <button
                onClick={() =>
                  dispatch({
                    type: "DONE_TASK",
                    payload: todo.id,
                  })
                }
              >
                <TiTick />
              </button>

              <button
                onClick={() =>
                  dispatch({
                    type: "REMOVE_TASK",
                    payload: todo.id,
                  })
                }
              >
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
