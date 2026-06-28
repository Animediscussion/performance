import React from "react";

const taskReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TASK":
      const newTask = { ...action.payload, id: uuid(), isDone: false };
      return [...state, newTask];
    case "REMOVE_TASK":
    case "DONE_TASK":
    default:
      return state;
  }
  const ToDoListReducer = () => {
    const [taskList, taskListDispatch] = useReducer(taskReducer, []);
    return <div>ToDoListReducer</div>;
  };
};

export default TodoListReducer;
