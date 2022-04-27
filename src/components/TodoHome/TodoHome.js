import React,{useState,useEffect} from "react";
import TodoItem from "../Todoitem/TodoItem.js";
import TodoList from "../TodoList/TodoList.js";
import "../Todoitem/TodoItem.css";
import { useSelector } from "react-redux";
import { db } from "../firebase/config.ts";
import { collection, addDoc,getDocs} from "firebase/firestore";
import Firebasedb from "../firebasedb/FirebaseDb.js";


function TodoHome () {
  const tasks = useSelector((state) => state.tasks);
 const todoCollectionRef = collection(db, "todolist");


 const [todos,setTodos]=useState([]);


 const fetchTodos=async() => {
  getDocs(collection(db, "todolist")).then((snapshot) => {
    snapshot.forEach((item) => {
      setTodos(todos=>[...todos,item.data()])    
    });
  });
  
}
 useEffect(() => {
   fetchTodos();
   
  
 },[])

  const handleSave = () => {
   tasks.map((task) => {
     return addDoc(todoCollectionRef, {
        id: task.id,
        task: task.title,
        completed: task.completed,
      });
    });
    alert("Your Data is Saved");
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
      <ul>
        {todos.map((task) => (
          
          <Firebasedb
            key={task.id}
            id={task.id}
            title={task.task}
            completed={task.completed}
          />
        ))}
        
        
      </ul>
    </div>
  );
}

export default TodoHome;
