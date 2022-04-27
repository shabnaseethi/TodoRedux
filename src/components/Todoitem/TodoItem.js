import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addtodo } from "../Redux/todoslice.js";

function TodoList() {
  const [value, setValue] = useState();
  const taskDispatch = useDispatch();
  const handleSubmit = (event) => {
    event.preventDefault();
    if (value !== "") {
      taskDispatch(
        addtodo({
          title: value,
        })
      );

      setValue("");
    }
  };

  return (
    <div>
      <h3>
        <small className="text-muted">TODO APP</small>
      </h3>
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <input
            className="form-control"
            type="text"
            placeholder="Enter Tasks..."
            aria-label="default input example"
            value={value || ""}
            onChange={(event) => setValue(event.target.value)}
          ></input>
          <button
            type="button"
            id="add-btn"
            onClick={handleSubmit}
            className="btn btn-success"
          >
            ADD
          </button>
        </div>
      </form>
    </div>
  );
}

export default TodoList;
