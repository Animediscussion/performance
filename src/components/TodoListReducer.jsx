import React, { useReducer, useState } from "react";
import { v4 as uuid } from "uuid";
import { TiTrash, TiTick } from "react-icons/ti";

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
      return state.filter((task) => task.id !== action.payload);

    case "DONE_TASK":
      return state.map((task) =>
        task.id === action.payload
          ? { ...task, completed: !task.completed }
          : task,
      );

    default:
      return state;
  }
};

const TodoListReducer = () => {
  const [task, setTask] = useState("");
  const [taskList, taskListDispatch] = useReducer(taskReducer, []);

  const addTask = () => {
    if (task.trim() === "") return;

    taskListDispatch({
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
        {taskList.map((todo) => (
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
                  taskListDispatch({
                    type: "DONE_TASK",
                    payload: todo.id,
                  })
                }
              >
                <TiTick />
              </button>

              <button
                onClick={() =>
                  taskListDispatch({
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
};

export default TodoListReducer;
