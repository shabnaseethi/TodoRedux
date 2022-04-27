import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { deletetodo, updatetodo, toggletodo } from "../Redux/todoslice.js";
import { db } from "../firebase/config.ts";
import { collection, deleteDoc, doc,getDoc } from "firebase/firestore";

function TodoList(props) {
  const [value, setValue] = useState(props.title);
  const completed = props.completed;
  const dispatch = useDispatch();

  const todoCollectionRef = collection(db, "todolist");

  const handleDelete = (id) => {
 dispatch(deletetodo({ id: id }));
        
  };
  const handleUpdate = (id) => {
    dispatch(updatetodo({ id: id, title: value }));
  };
  const handleCheckbox = (id) => {
    dispatch(toggletodo({ id: id, completed: !completed }));
  };
  return (
    <div className="list-items">
      <div className="input-group mb-3">
        <div className="input-group-text">
          <input
            className="form-check-input mt-0"
            type="checkbox"
            value=""
            checked={completed}
            aria-label="Checkbox for following text input"
            onChange={() => handleCheckbox(props.id)}
          ></input>
        </div>
        <input
          type="text"
          className="form-control"
          aria-label="Text input with checkbox"
          value={value}
          onChange={(event) => setValue(event.target.value)}
        ></input>
      </div>
      <button
        type="button"
        id="delete-btn"
        onClick={() => handleDelete(props.id)}
        className="btn btn-danger"
      >
        Delete
      </button>
      <button
        type="button"
        id="update-btn"
        className="btn btn-warning"
        onClick={() => handleUpdate(props.id)}
      >
        Update
      </button>
    </div>
  );
}

export default TodoList;
