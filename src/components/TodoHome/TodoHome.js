import React from "react";
import TodoItem from "../Todoitem/TodoItem.js";
import TodoList from "../TodoList/TodoList.js";
import "../Todoitem/TodoItem.css";
import { useSelector } from "react-redux";
import { db } from "../firebase/config.ts";
import { collection, addDoc} from "firebase/firestore";


function TodoHome () {
  const tasks = useSelector((state) => state.tasks);
 const todoCollectionRef = collection(db, "todolist");
  const handleSave = () => {
   tasks.map((task) => {
     return addDoc(todoCollectionRef, {
        id: task.id,
        task: task.title,
        completed: task.completed,
      });
    });
  };

  return (
    <div className="List-container">
      <TodoItem />
      <ul>
        {tasks.map((task) => (
          <TodoList
            key={task.id}
            id={task.id}
            title={task.title}
            completed={task.completed}
          />
        ))}
        
      </ul>
      <button type="button" className="btn btn-success" onClick={handleSave}>
        Save
      </button>
    </div>
  );
}

export default TodoHome;
